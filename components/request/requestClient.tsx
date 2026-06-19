"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { getRequestCopy } from "@/lib/i18n/request";
import type { Locale } from "@/lib/i18n/config";

type Step = 1 | 2 | 3 | 4;
type ErrorState = Record<string, string>;

const countryCodes = [
  { code: "+216", flagCode: "tn" },
  { code: "+39", flagCode: "it" },
  { code: "+33", flagCode: "fr" },
  { code: "+44", flagCode: "gb" },
  { code: "+1", flagCode: "us" },
  { code: "+49", flagCode: "de" },
  { code: "+34", flagCode: "es" },
  { code: "+41", flagCode: "ch" },
  { code: "+971", flagCode: "ae" },
  { code: "+213", flagCode: "dz" },
  { code: "+212", flagCode: "ma" },
];

type Props = {
  lang: Locale;
};

export default function RequestPage({ lang }: Props) {
  const copy = getRequestCopy(lang);
  const formRef = useRef<HTMLFormElement | null>(null);
  const phoneHiddenRef = useRef<HTMLInputElement | null>(null);
  const modalBodyRef = useRef<HTMLDivElement | null>(null);
  const progressFillRef = useRef<HTMLDivElement | null>(null);
  const scrollHintRef = useRef<HTMLDivElement | null>(null);

  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [slot, setSlot] = useState<"Daytime" | "Night" | "">("");
  const [errors, setErrors] = useState<ErrorState>({});
  const [selectedCountryCode, setSelectedCountryCode] = useState("+216");
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Valori "Altro" e stati di selezione
  const [roleOther, setRoleOther] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [typeOther, setTypeOther] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [sourceOther, setSourceOther] = useState("");
  const [selectedSource, setSelectedSource] = useState("");

  const totalSteps = 4;
  const progress = Math.round((currentStep / totalSteps) * 100);

  const getForm = () => formRef.current;

  const fieldValue = (name: string) => {
    const form = getForm();
    if (!form) return "";
    const value = new FormData(form).get(name);
    return typeof value === "string" ? value.trim() : "";
  };

  // Helper to get the actual value for fields with "Other" option
  const getActualValue = (fieldName: string, otherValue: string, selected: string) => {
    if (selected === "Other" && otherValue.trim()) {
      return otherValue.trim();
    }
    return selected;
  };

  const checkboxCount = (name: string) => {
    const form = getForm();
    if (!form) return 0;
    return new FormData(form)
      .getAll(name)
      .filter((value) => String(value).trim().length > 0).length;
  };

  const setFieldError = (field: string, message: string) => {
    setErrors((prev) => ({ ...prev, [field]: message }));
  };

  const clearFieldError = (field: string) => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const validateStep1 = () => {
    const form = getForm();
    if (!form) return false;

    const requiredFields = [
      { name: "who", label: copy.requester.who },
      { name: "role", label: copy.requester.role },
      { name: "name", label: copy.requester.name },
      { name: "phoneCountryCode", label: copy.requester.phonePlaceholder },
      { name: "phoneNumber", label: copy.requester.phone },
      { name: "email", label: copy.requester.email },
      { name: "lang", label: copy.requester.preferredLanguage },
      { name: "municipality", label: copy.requester.municipality },
      { name: "zip", label: copy.requester.zip },
    ];

    let ok = true;

    for (const item of requiredFields) {
      if (item.name === "role") {
        if (!selectedRole) {
          setFieldError("role", copy.validation.required);
          ok = false;
        } else if (selectedRole === "Other" && !roleOther.trim()) {
          setFieldError("role", copy.validation.roleOtherRequired);
          ok = false;
        }
      } else if (!fieldValue(item.name)) {
        setFieldError(item.name, copy.validation.required);
        ok = false;
      }
    }

    const emailInput = form.elements.namedItem("email") as HTMLInputElement | null;
    if (emailInput && emailInput.value && !emailInput.checkValidity()) {
      setFieldError("email", copy.validation.emailInvalid);
      ok = false;
    }

    const phoneInput = form.elements.namedItem("phoneNumber") as HTMLInputElement | null;
    if (phoneInput && phoneInput.value && !phoneInput.checkValidity()) {
      setFieldError("phoneNumber", copy.validation.phoneInvalid);
      ok = false;
    }

    return ok;
  };

  const validateStep2 = () => {
    let ok = true;

    if (!selectedType) {
      setFieldError("type", copy.validation.required);
      ok = false;
    } else if (selectedType === "Other" && !typeOther.trim()) {
      setFieldError("type", copy.validation.typeOtherRequired);
      ok = false;
    }

    const requiredFields = [
      { name: "age", label: copy.assistedProfile.age },
      { name: "autonomy", label: copy.assistedProfile.autonomy },
      { name: "description", label: copy.assistedProfile.description },
    ];

    for (const item of requiredFields) {
      if (!fieldValue(item.name)) {
        setFieldError(item.name, copy.validation.required);
        ok = false;
      }
    }

    if (checkboxCount("activities") === 0) {
      setFieldError("activities", copy.validation.required);
      ok = false;
    }

    return ok;
  };

  const validateStep3 = () => {
    const requiredFields = [
      { name: "days", label: copy.logistics.days },
      { name: "hours", label: copy.logistics.hours },
      { name: "slot", label: copy.logistics.slot },
      { name: "start-date", label: copy.logistics.startDate },
    ];

    let ok = true;

    for (const item of requiredFields) {
      if (!fieldValue(item.name)) {
        setFieldError(item.name, copy.validation.required);
        ok = false;
      }
    }

    if (fieldValue("slot") === "Night" && !fieldValue("night-type")) {
      setFieldError("night-type", copy.validation.nightTypeRequired);
      ok = false;
    }

    return ok;
  };

  const validateStep4 = () => {
    let ok = true;

    if (!selectedSource) {
      setFieldError("source", copy.validation.required);
      ok = false;
    } else if (selectedSource === "Other" && !sourceOther.trim()) {
      setFieldError("source", copy.validation.sourceOtherRequired);
      ok = false;
    }

    const requiredFields = [
      { name: "duration", label: copy.duration.duration },
      { name: "previous", label: copy.duration.previous },
      { name: "urgency", label: copy.duration.urgency },
    ];

    for (const item of requiredFields) {
      if (!fieldValue(item.name)) {
        setFieldError(item.name, copy.validation.required);
        ok = false;
      }
    }

    if (!fieldValue("gdpr-consent")) {
      setFieldError("gdpr-consent", copy.validation.gdprRequired);
      ok = false;
    }

    if (!fieldValue("terms-consent")) {
      setFieldError("terms-consent", copy.validation.termsRequired);
      ok = false;
    }

    return ok;
  };

  const validateCurrentStep = () => {
    if (currentStep === 1) return validateStep1();
    if (currentStep === 2) return validateStep2();
    if (currentStep === 3) return validateStep3();
    return validateStep4();
  };

  const goStep = (step: Step) => {
    if (step > currentStep && !validateCurrentStep()) return;
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submitForm = async () => {
    setSubmitError("");

    const ok1 = validateStep1();
    const ok2 = validateStep2();
    const ok3 = validateStep3();
    const ok4 = validateStep4();

    if (!(ok1 && ok2 && ok3 && ok4)) {
      const firstInvalidStep: Step = !ok1 ? 1 : !ok2 ? 2 : !ok3 ? 3 : 4;
      setCurrentStep(firstInvalidStep);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    try {
      const form = getForm();
      if (!form) return;

      setIsSubmitting(true);

      const formData = new FormData(form);
      formData.set("selectedCountryCode", selectedCountryCode);
      formData.set("selectedCountryName", selectedCountryName);
      formData.set("selectedRole", getActualValue("role", roleOther, selectedRole));
      formData.set("selectedType", getActualValue("type", typeOther, selectedType));
      formData.set("selectedSource", getActualValue("source", sourceOther, selectedSource));
      formData.set("slotLabel", slot === "Night" ? copy.logistics.slotOptions[1] : copy.logistics.slotOptions[0]);

      const response = await fetch("/api/request", {
        method: "POST",
        body: formData,
      });

      const result = (await response.json().catch(() => ({}))) as { ok?: boolean; error?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Failed to send email");
      }

      setShowSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Request submit failed:", error);
      setSubmitError("Errore nell’invio della richiesta. Riprova tra poco.");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearAndHandle = (field: string) => () => clearFieldError(field);

  const handleSlotChange = (value: "Daytime" | "Night") => {
    setSlot(value);
    clearFieldError("slot");
    clearFieldError("night-type");

    if (value === "Daytime") {
      const form = getForm();
      const nightRadios = form?.querySelectorAll<HTMLInputElement>('input[name="night-type"]');
      nightRadios?.forEach((radio) => {
        radio.checked = false;
      });
    }
  };

  const handleCountrySelect = (code: string) => {
    setSelectedCountryCode(code);
    setShowCountryDropdown(false);
    if (phoneHiddenRef.current) {
      phoneHiddenRef.current.value = code;
      const event = new Event("change", { bubbles: true });
      phoneHiddenRef.current.dispatchEvent(event);
    }
    clearFieldError("phoneCountryCode");
  };

  const selectedCountryIndex = countryCodes.findIndex((c) => c.code === selectedCountryCode);
  const selectedCountry = countryCodes.find((c) => c.code === selectedCountryCode);
  const selectedCountryName = selectedCountryIndex >= 0 ? copy.requester.countryOptions[selectedCountryIndex] : "";

  // --- Logica modale termini ---
  const openTermsModal = () => {
    setIsTermsModalOpen(true);
    document.body.style.overflow = "hidden";
    // Reimposta la posizione di scroll e la barra di avanzamento all'apertura
    setTimeout(() => {
      if (modalBodyRef.current) {
        modalBodyRef.current.scrollTop = 0;
        updateProgressBar(modalBodyRef.current);
      }
    }, 0);
  };

  const closeTermsModal = () => {
    setIsTermsModalOpen(false);
    document.body.style.overflow = "";
  };

  const updateProgressBar = (scrollable: HTMLElement) => {
    const scrollHeight = scrollable.scrollHeight - scrollable.clientHeight;
    const scrollTop = scrollable.scrollTop;
    const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 100;
    if (progressFillRef.current) {
      progressFillRef.current.style.width = `${pct}%`;
    }
    // Nasconde il suggerimento di scroll dopo un po'
    if (scrollHintRef.current) {
      if (scrollTop > scrollable.scrollHeight * 0.1) {
        scrollHintRef.current.classList.add("hidden");
      } else {
        scrollHintRef.current.classList.remove("hidden");
      }
    }
  };

  const handleModalScroll = () => {
    if (modalBodyRef.current) {
      updateProgressBar(modalBodyRef.current);
    }
  };

  // Gestione tasto Escape e clic fuori
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isTermsModalOpen) {
        closeTermsModal();
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      const overlay = document.querySelector(".terms-overlay");
      if (overlay && e.target === overlay && isTermsModalOpen) {
        closeTermsModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isTermsModalOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showCountryDropdown && !(event.target as Element).closest(".country-selector")) {
        setShowCountryDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [showCountryDropdown]);

  // Campi nascosti per salvare i valori selezionati nel form
  useEffect(() => {
    const roleInput = document.querySelector('input[name="role"]') as HTMLInputElement;
    if (roleInput) roleInput.value = selectedRole === "Other" ? roleOther : selectedRole;
  }, [selectedRole, roleOther]);

  useEffect(() => {
    const typeInput = document.querySelector('input[name="type"]') as HTMLInputElement;
    if (typeInput) typeInput.value = selectedType === "Other" ? typeOther : selectedType;
  }, [selectedType, typeOther]);

  useEffect(() => {
    const sourceInput = document.querySelector('input[name="source"]') as HTMLInputElement;
    if (sourceInput) sourceInput.value = selectedSource === "Other" ? sourceOther : selectedSource;
  }, [selectedSource, sourceOther]);

  return (
    <main className="request-page">
      <div className="page-wrap">
        <div className="page-eyebrow">{copy.page.eyebrow}</div>
        <h1 className="page-title">{copy.page.title}</h1>
        <p className="page-subtitle">
          {copy.page.subtitle[0]}
          <br />
          {copy.page.subtitle[1]}
        </p>

        {!showSuccess ? (
          <form ref={formRef} onSubmit={(e) => e.preventDefault()} noValidate>
            <div className="progress-bar-wrap">
              <span className="progress-step-label">
                {copy.progress.stepLabel} {currentStep} di {totalSteps}
              </span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%` }} />
              </div>
              <span className="progress-pct">{progress}%</span>
            </div>

            <section className={`form-section ${currentStep === 1 ? "active" : ""}`} id="section-1">
              <div className="form-section-header">
                <div className="form-section-num">{copy.progress.section[0]}</div>
                <div className="form-section-title">{copy.sections.requester}</div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  {copy.requester.who} <span className="req">*</span>
                </label>
                <div className="input-error-row">
                  <div className="radio-group">
                    <RadioButton
                      name="who"
                      id="who-it"
                      value="Italian"
                      label={copy.requester.whoOptions[0]}
                      required
                      onChange={clearAndHandle("who")}
                    />
                    <RadioButton
                      name="who"
                      id="who-ex"
                      value="Expat"
                      label={copy.requester.whoOptions[1]}
                      onChange={clearAndHandle("who")}
                    />
                  </div>
                  <FieldError message={errors.who} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  {copy.requester.role} <span className="req">*</span>
                </label>
                <div className="input-error-row">
                  <div className="radio-group">
                    <input
                      type="radio"
                      name="roleRadio"
                      id="role-direct"
                      value="Interested party directly"
                      className="radio-option"
                      checked={selectedRole === "Interested party directly"}
                      onChange={() => {
                        setSelectedRole("Interested party directly");
                        clearFieldError("role");
                        setRoleOther("");
                      }}
                    />
                    <label htmlFor="role-direct" className="radio-label">
                      {copy.requester.roleOptions[0]}
                    </label>

                    <input
                      type="radio"
                      name="roleRadio"
                      id="role-family"
                      value="Family"
                      className="radio-option"
                      checked={selectedRole === "Family"}
                      onChange={() => {
                        setSelectedRole("Family");
                        clearFieldError("role");
                        setRoleOther("");
                      }}
                    />
                    <label htmlFor="role-family" className="radio-label">
                      {copy.requester.roleOptions[1]}
                    </label>

                    <input
                      type="radio"
                      name="roleRadio"
                      id="role-son"
                      value="Son / Daughter"
                      className="radio-option"
                      checked={selectedRole === "Son / Daughter"}
                      onChange={() => {
                        setSelectedRole("Son / Daughter");
                        clearFieldError("role");
                        setRoleOther("");
                      }}
                    />
                    <label htmlFor="role-son" className="radio-label">
                      {copy.requester.roleOptions[2]}
                    </label>

                    <input
                      type="radio"
                      name="roleRadio"
                      id="role-relative"
                      value="Relative"
                      className="radio-option"
                      checked={selectedRole === "Relative"}
                      onChange={() => {
                        setSelectedRole("Relative");
                        clearFieldError("role");
                        setRoleOther("");
                      }}
                    />
                    <label htmlFor="role-relative" className="radio-label">
                      {copy.requester.roleOptions[3]}
                    </label>

                    <input
                      type="radio"
                      name="roleRadio"
                      id="role-other"
                      value="Other"
                      className="radio-option"
                      checked={selectedRole === "Other"}
                      onChange={() => {
                        setSelectedRole("Other");
                        clearFieldError("role");
                      }}
                    />
                    <label htmlFor="role-other" className="radio-label">
                      {copy.requester.roleOptions[4]}
                    </label>
                  </div>
                  <div className="other-input-container">
                    {selectedRole === "Other" && (
                      <input
                        type="text"
                        className="other-text-input"
                        placeholder={copy.requester.roleOtherPlaceholder}
                        value={roleOther}
                        onChange={(e) => {
                          setRoleOther(e.target.value);
                          clearFieldError("role");
                        }}
                      />
                    )}
                  </div>
                  <FieldError message={errors.role} />
                </div>
                <input
                  type="hidden"
                  name="role"
                  value={selectedRole === "Other" ? roleOther : selectedRole}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    {copy.requester.name} <span className="req">*</span>
                  </label>
                  <div className="input-error-row">
                    <input
                      type="text"
                      className={`form-input ${errors.name ? "error" : ""}`}
                      id="name"
                      name="name"
                      placeholder={copy.requester.namePlaceholder}
                      required
                      onChange={clearAndHandle("name")}
                    />
                    <FieldError message={errors.name} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    {copy.requester.phone} <span className="req">*</span>
                  </label>
                  <div className="input-error-row">
                    <div className="phone-group">
                      <div className="country-selector">
                        <button
                          type="button"
                          className={`country-select-btn ${errors.phoneCountryCode ? "error" : ""}`}
                          onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                        >
                          {selectedCountry && (
                            <>
                              <img
                                src={`https://flagcdn.com/${selectedCountry.flagCode}.svg`}
                                alt={selectedCountryName}
                                className="country-flag"
                                width={20}
                                height={15}
                              />
                              <span className="country-name">{selectedCountryName}</span>
                              <span className="country-code">{selectedCountry.code}</span>
                            </>
                          )}
                          <span className="dropdown-arrow">▼</span>
                        </button>
                        {showCountryDropdown && (
                          <div className="country-dropdown">
                            {countryCodes.map((country, index) => (
                              <button
                                key={country.code}
                                type="button"
                                className="country-option"
                                onClick={() => handleCountrySelect(country.code)}
                              >
                                <img
                                  src={`https://flagcdn.com/${country.flagCode}.svg`}
                                  alt={copy.requester.countryOptions[index]}
                                  className="country-flag"
                                  width={20}
                                  height={15}
                                />
                                <span className="country-name">{copy.requester.countryOptions[index]}</span>
                                <span className="country-code">{country.code}</span>
                              </button>
                            ))}
                          </div>
                        )}
                        <input
                          type="hidden"
                          name="phoneCountryCode"
                          ref={phoneHiddenRef}
                          value={selectedCountryCode}
                        />
                      </div>
                      <input
                        type="tel"
                        className={`form-input phone-number ${errors.phoneNumber ? "error" : ""}`}
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder={copy.requester.phonePlaceholder}
                        inputMode="tel"
                        pattern="^[0-9()+\\-\\s]{6,}$"
                        required
                        onChange={clearAndHandle("phoneNumber")}
                      />
                    </div>
                    <FieldError message={errors.phoneCountryCode || errors.phoneNumber} />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    {copy.requester.email} <span className="req">*</span>
                  </label>
                  <div className="input-error-row">
                    <input
                      type="email"
                      className={`form-input ${errors.email ? "error" : ""}`}
                      id="email"
                      name="email"
                      placeholder={copy.requester.emailPlaceholder}
                      required
                      onChange={clearAndHandle("email")}
                    />
                    <FieldError message={errors.email} />
                  </div>
                </div>
                <div className="form-group">
  <label className="form-label">
    {copy.requester.preferredLanguage} <span className="req">*</span>
  </label>
  <div className="input-error-row">
    <select
      className={`form-select ${errors.lang ? "error" : ""}`}
      id="lang"
      name="lang"
      defaultValue=""
      required
      onChange={clearAndHandle("lang")}
    >
      <option value="">{copy.requester.languagePlaceholder}</option>
      {copy.requester.languageOptions.map((option) => (
  <option key={option}>{option}</option>
))}
    </select>
    <FieldError message={errors.lang} />
  </div>
</div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    {copy.requester.municipality} <span className="req">*</span>
                  </label>
                  <div className="input-error-row">
                    <input
                      type="text"
                      className={`form-input ${errors.municipality ? "error" : ""}`}
                      id="municipality"
                      name="municipality"
                      placeholder={copy.requester.municipalityPlaceholder}
                      required
                      onChange={clearAndHandle("municipality")}
                    />
                    <FieldError message={errors.municipality} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">
                    {copy.requester.zip} <span className="req">*</span>
                  </label>
                  <div className="input-error-row">
                    <input
                      type="text"
                      className={`form-input ${errors.zip ? "error" : ""}`}
                      id="zip"
                      name="zip"
                      placeholder={copy.requester.zipPlaceholder}
                      required
                      onChange={clearAndHandle("zip")}
                    />
                    <FieldError message={errors.zip} />
                  </div>
                </div>
              </div>

              <div className="form-nav">
                <div />
                <button type="button" className="btn-next" onClick={() => goStep(2)}>
                  {copy.buttons.next1}
                </button>
              </div>
            </section>

            <section className={`form-section ${currentStep === 2 ? "active" : ""}`} id="section-2">
              <div className="form-section-header">
                <div className="form-section-num">{copy.progress.section[1]}</div>
                <div className="form-section-title">{copy.sections.assistedProfile}</div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  {copy.assistedProfile.type} <span className="req">*</span>
                </label>
                <div className="input-error-row">
                  <div className="radio-group">
                    <input
                      type="radio"
                      name="typeRadio"
                      id="type-elderly"
                      value="Elderly"
                      className="radio-option"
                      checked={selectedType === "Elderly"}
                      onChange={() => {
                        setSelectedType("Elderly");
                        clearFieldError("type");
                        setTypeOther("");
                      }}
                    />
                    <label htmlFor="type-elderly" className="radio-label">
                      {copy.assistedProfile.typeOptions[0]}
                    </label>

                    <input
                      type="radio"
                      name="typeRadio"
                      id="type-disabled"
                      value="Disabled person"
                      className="radio-option"
                      checked={selectedType === "Disabled person"}
                      onChange={() => {
                        setSelectedType("Disabled person");
                        clearFieldError("type");
                        setTypeOther("");
                      }}
                    />
                    <label htmlFor="type-disabled" className="radio-label">
                      {copy.assistedProfile.typeOptions[1]}
                    </label>

                    <input
                      type="radio"
                      name="typeRadio"
                      id="type-minor"
                      value="Minor"
                      className="radio-option"
                      checked={selectedType === "Minor"}
                      onChange={() => {
                        setSelectedType("Minor");
                        clearFieldError("type");
                        setTypeOther("");
                      }}
                    />
                    <label htmlFor="type-minor" className="radio-label">
                      {copy.assistedProfile.typeOptions[2]}
                    </label>

                    <input
                      type="radio"
                      name="typeRadio"
                      id="type-other"
                      value="Other"
                      className="radio-option"
                      checked={selectedType === "Other"}
                      onChange={() => {
                        setSelectedType("Other");
                        clearFieldError("type");
                      }}
                    />
                    <label htmlFor="type-other" className="radio-label">
                      {copy.assistedProfile.typeOptions[3]}
                    </label>
                  </div>
                  <div className="other-input-container">
                    {selectedType === "Other" && (
                      <input
                        type="text"
                        className="other-text-input"
                        placeholder={copy.assistedProfile.typeOtherPlaceholder}
                        value={typeOther}
                        onChange={(e) => {
                          setTypeOther(e.target.value);
                          clearFieldError("type");
                        }}
                      />
                    )}
                  </div>
                  <FieldError message={errors.type} />
                </div>
                <input
                  type="hidden"
                  name="type"
                  value={selectedType === "Other" ? typeOther : selectedType}
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  {copy.assistedProfile.age} <span className="req">*</span>
                </label>
                <div className="input-error-row">
                  <select
                    className={`form-select ${errors.age ? "error" : ""}`}
                    id="age"
                    name="age"
                    defaultValue=""
                    required
                    onChange={clearAndHandle("age")}
                  >
                    <option value="">{copy.assistedProfile.agePlaceholder}</option>
                    {copy.assistedProfile.ageOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  <FieldError message={errors.age} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  {copy.assistedProfile.autonomy} <span className="req">*</span>
                </label>
                <div className="input-error-row">
                  <div className="radio-group">
                    <RadioButton
                      name="autonomy"
                      id="aut-auto"
                      value="Autonomous"
                      label={copy.assistedProfile.autonomyOptions[0]}
                      required
                      onChange={clearAndHandle("autonomy")}
                    />
                    <RadioButton
                      name="autonomy"
                      id="aut-semi"
                      value="Semi-autonomous"
                      label={copy.assistedProfile.autonomyOptions[1]}
                      onChange={clearAndHandle("autonomy")}
                    />
                    <RadioButton
                      name="autonomy"
                      id="aut-not"
                      value="Not autonomous"
                      label={copy.assistedProfile.autonomyOptions[2]}
                      onChange={clearAndHandle("autonomy")}
                    />
                  </div>
                  <FieldError message={errors.autonomy} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  {copy.assistedProfile.activities} <span className="req">*</span>
                </label>
                <div className="input-error-row">
                  <div className={`checkbox-group ${errors.activities ? "error" : ""}`}>
                    <CheckBox
                      label={copy.assistedProfile.activityOptions[0]}
                      name="activities"
                      value={copy.assistedProfile.activityOptions[0]}
                      onChange={clearAndHandle("activities")}
                    />
                    <CheckBox
                      label={copy.assistedProfile.activityOptions[1]}
                      name="activities"
                      value={copy.assistedProfile.activityOptions[1]}
                      onChange={clearAndHandle("activities")}
                    />
                    <CheckBox
                      label={copy.assistedProfile.activityOptions[2]}
                      name="activities"
                      value={copy.assistedProfile.activityOptions[2]}
                      onChange={clearAndHandle("activities")}
                    />
                    <CheckBox
                      label={copy.assistedProfile.activityOptions[3]}
                      name="activities"
                      value={copy.assistedProfile.activityOptions[3]}
                      onChange={clearAndHandle("activities")}
                    />
                    <CheckBox
                      label={copy.assistedProfile.activityOptions[4]}
                      name="activities"
                      value={copy.assistedProfile.activityOptions[4]}
                      onChange={clearAndHandle("activities")}
                    />
                    <CheckBox
                      label={copy.assistedProfile.activityOptions[5]}
                      name="activities"
                      value={copy.assistedProfile.activityOptions[5]}
                      onChange={clearAndHandle("activities")}
                    />
                    <CheckBox
                      label={copy.assistedProfile.activityOptions[6]}
                      name="activities"
                      value={copy.assistedProfile.activityOptions[6]}
                      onChange={clearAndHandle("activities")}
                    />
                    <CheckBox
                      label={copy.assistedProfile.activityOptions[7]}
                      name="activities"
                      value={copy.assistedProfile.activityOptions[7]}
                      onChange={clearAndHandle("activities")}
                    />
                  </div>
                  <FieldError message={errors.activities} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  {copy.assistedProfile.description} <span className="req">*</span>
                </label>
                <div className="input-error-row">
                  <textarea
                    className={`form-textarea ${errors.description ? "error" : ""}`}
                    id="description"
                    name="description"
                    placeholder={copy.assistedProfile.descriptionPlaceholder}
                    rows={4}
                    required
                    onChange={clearAndHandle("description")}
                  />
                  <FieldError message={errors.description} />
                </div>
              </div>

              <div className="form-nav">
                <button type="button" className="btn-back" onClick={() => goStep(1)}>
                  {copy.buttons.back}
                </button>
                <button type="button" className="btn-next" onClick={() => goStep(3)}>
                  {copy.buttons.next2}
                </button>
              </div>
            </section>

            <section className={`form-section ${currentStep === 3 ? "active" : ""}`} id="section-3">
              <div className="form-section-header">
                <div className="form-section-num">{copy.progress.section[2]}</div>
                <div className="form-section-title">{copy.sections.logistics}</div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  {copy.logistics.days} <span className="req">*</span>
                </label>
                <div className="input-error-row">
                  <select
                    className={`form-select ${errors.days ? "error" : ""}`}
                    id="days"
                    name="days"
                    defaultValue=""
                    required
                    onChange={clearAndHandle("days")}
                  >
                    <option value="">{copy.logistics.daysOptions[0]}</option>
                    {copy.logistics.daysOptions.slice(1).map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                  <FieldError message={errors.days} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  {copy.logistics.hours} <span className="req">*</span>
                </label>
                <div className="input-error-row">
                  <select
                    className={`form-select ${errors.hours ? "error" : ""}`}
                    id="hours"
                    name="hours"
                    defaultValue=""
                    required
                    onChange={clearAndHandle("hours")}
                  >
                    <option value="">{copy.logistics.hoursOptions[0]}</option>
                    {copy.logistics.hoursOptions.slice(1).map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                  <FieldError message={errors.hours} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  {copy.logistics.slot} <span className="req">*</span>
                </label>
                <div className="input-error-row">
                  <div>
                    <div className="radio-group">
                      <input
                        type="radio"
                        name="slot"
                        id="slot-day"
                        value="Daytime"
                        className="radio-option"
                        required
                        onChange={() => handleSlotChange("Daytime")}
                      />
                      <label htmlFor="slot-day" className="radio-label">
                        {copy.logistics.slotOptions[0]}
                      </label>

                      <input
                        type="radio"
                        name="slot"
                        id="slot-night"
                        value="Night"
                        className="radio-option"
                        onChange={() => handleSlotChange("Night")}
                      />
                      <label htmlFor="slot-night" className="radio-label">
                        {copy.logistics.slotOptions[1]}
                      </label>
                    </div>
                    <div className={`night-sub ${slot === "Night" ? "visible" : ""}`} id="night-sub">
                      <div className="night-sub-label">
                        {copy.logistics.nightType} <span className="req">*</span>
                      </div>
                      <div className="radio-group">
                        <RadioButton
                          name="night-type"
                          id="nt-passive"
                          value="Passive night"
                          label={copy.logistics.nightTypeOptions[0]}
                          required={slot === "Night"}
                          onChange={clearAndHandle("night-type")}
                        />
                        <RadioButton
                          name="night-type"
                          id="nt-active"
                          value="Active night"
                          label={copy.logistics.nightTypeOptions[1]}
                          onChange={clearAndHandle("night-type")}
                        />
                      </div>
                    </div>
                  </div>
                  <FieldError message={errors.slot || errors["night-type"]} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  {copy.logistics.startDate} <span className="req">*</span>
                </label>
                <div className="input-error-row">
                  <input
                    type="date"
                    className={`form-input ${errors["start-date"] ? "error" : ""}`}
                    id="start-date"
                    name="start-date"
                    required
                    onChange={clearAndHandle("start-date")}
                  />
                  <FieldError message={errors["start-date"]} />
                </div>
              </div>

              <div className="info-box">
                {copy.logistics.infoBox}
              </div>

              <div className="form-nav">
                <button type="button" className="btn-back" onClick={() => goStep(2)}>
                  {copy.buttons.back}
                </button>
                <button type="button" className="btn-next" onClick={() => goStep(4)}>
                  {copy.buttons.next3}
                </button>
              </div>
            </section>

            <section className={`form-section ${currentStep === 4 ? "active" : ""}`} id="section-4">
              <div className="form-section-header">
                <div className="form-section-num">{copy.progress.section[3]}</div>
                <div className="form-section-title">{copy.sections.duration}</div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  {copy.duration.duration} <span className="req">*</span>
                </label>
                <div className="input-error-row">
                  <div className="radio-group">
                    <RadioButton
                      name="duration"
                      id="dur-short"
                      value="Short"
                      label={copy.duration.durationOptions[0]}
                      required
                      onChange={clearAndHandle("duration")}
                    />
                    <RadioButton
                      name="duration"
                      id="dur-mid"
                      value="Medium"
                      label={copy.duration.durationOptions[1]}
                      onChange={clearAndHandle("duration")}
                    />
                    <RadioButton
                      name="duration"
                      id="dur-long"
                      value="Long"
                      label={copy.duration.durationOptions[2]}
                      onChange={clearAndHandle("duration")}
                    />
                    <RadioButton
                      name="duration"
                      id="dur-undef"
                      value="Not defined"
                      label={copy.duration.durationOptions[3]}
                      onChange={clearAndHandle("duration")}
                    />
                  </div>
                  <FieldError message={errors.duration} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  {copy.duration.previous} <span className="req">*</span>
                </label>
                <div className="input-error-row">
                  <div className="radio-group">
                    <RadioButton
                      name="previous"
                      id="prev-yes"
                      value="Yes"
                      label={copy.duration.previousOptions[0]}
                      required
                      onChange={clearAndHandle("previous")}
                    />
                    <RadioButton
                      name="previous"
                      id="prev-no"
                      value="No, first assessment"
                      label={copy.duration.previousOptions[1]}
                      onChange={clearAndHandle("previous")}
                    />
                  </div>
                  <FieldError message={errors.previous} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  {copy.duration.source} <span className="req">*</span>
                </label>
                <div className="input-error-row">
                  <div className="radio-group">
                    <input
                      type="radio"
                      name="sourceRadio"
                      id="source-google"
                      value="Google Search"
                      className="radio-option"
                      checked={selectedSource === "Google Search"}
                      onChange={() => {
                        setSelectedSource("Google Search");
                        clearFieldError("source");
                        setSourceOther("");
                      }}
                    />
                    <label htmlFor="source-google" className="radio-label">
                      {copy.duration.sourceOptions[0]}
                    </label>
                    <input
  type="radio"
  name="sourceRadio"
  id="source-sm"
  value="Social Media"
  className="radio-option"
  checked={selectedSource === "Social Media"}
  onChange={() => {
    setSelectedSource("Social Media");
    clearFieldError("source");
    setSourceOther("");
  }}
/>
<label htmlFor="source-sm" className="radio-label">
  {copy.duration.sourceOptions[1]}
</label>

                    <input
                      type="radio"
                      name="sourceRadio"
                      id="source-wa"
                      value="WhatsApp"
                      className="radio-option"
                      checked={selectedSource === "WhatsApp"}
                      onChange={() => {
                        setSelectedSource("WhatsApp");
                        clearFieldError("source");
                        setSourceOther("");
                      }}
                    />
                    <label htmlFor="source-wa" className="radio-label">
                      {copy.duration.sourceOptions[2]}
                    </label>

                    <input
                      type="radio"
                      name="sourceRadio"
                      id="source-referral"
                      value="Referral"
                      className="radio-option"
                      checked={selectedSource === "Referral"}
                      onChange={() => {
                        setSelectedSource("Referral");
                        clearFieldError("source");
                        setSourceOther("");
                      }}
                    />
                    <label htmlFor="source-referral" className="radio-label">
                      {copy.duration.sourceOptions[3]}
                    </label>

                    <input
                      type="radio"
                      name="sourceRadio"
                      id="source-other"
                      value="Other"
                      className="radio-option"
                      checked={selectedSource === "Other"}
                      onChange={() => {
                        setSelectedSource("Other");
                        clearFieldError("source");
                      }}
                    />
                    <label htmlFor="source-other" className="radio-label">
                      {copy.duration.sourceOptions[4]}
                    </label>
                  </div>
                  <div className="other-input-container">
                    {selectedSource === "Other" && (
                      <input
                        type="text"
                        className="other-text-input"
                        placeholder={copy.duration.sourceOtherPlaceholder}
                        value={sourceOther}
                        onChange={(e) => {
                          setSourceOther(e.target.value);
                          clearFieldError("source");
                        }}
                      />
                    )}
                  </div>
                  <FieldError message={errors.source} />
                </div>
                <input
                  type="hidden"
                  name="source"
                  value={selectedSource === "Other" ? sourceOther : selectedSource}
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  {copy.duration.urgency} <span className="req">*</span>
                </label>
                <div className="input-error-row">
                  <div className="radio-group">
                    <RadioButton
                      name="urgency"
                      id="urg-normal"
                      value="Normal"
                      label={copy.duration.urgencyOptions[0]}
                      required
                      onChange={clearAndHandle("urgency")}
                    />
                    <RadioButton
                      name="urgency"
                      id="urg-priority"
                      value="Priority"
                      label={copy.duration.urgencyOptions[1]}
                      onChange={clearAndHandle("urgency")}
                    />
                    <RadioButton
                      name="urgency"
                      id="urg-urgent"
                      value="Urgent"
                      label={copy.duration.urgencyOptions[2]}
                      onChange={clearAndHandle("urgency")}
                    />
                  </div>
                  <FieldError message={errors.urgency} />
                </div>
              </div>

              <div className="privacy-block">
                <div className="privacy-title">{copy.privacy.title}</div>

                <div className="form-group">
                  <div className="input-error-row">
                    <label className="checkbox-item">
                      <input
                        type="checkbox"
                        id="gdpr-consent"
                        name="gdpr-consent"
                        required
                        onChange={clearAndHandle("gdpr-consent")}
                      />
                      <span>
                        {copy.privacy.gdpr}
                      </span>
                    </label>
                    <FieldError message={errors["gdpr-consent"]} />
                  </div>
                </div>

                <div className="form-group">
                  <div className="input-error-row">
                    <label className="checkbox-item">
                      <input
                        type="checkbox"
                        id="terms-consent"
                        name="terms-consent"
                        required
                        onChange={clearAndHandle("terms-consent")}
                      />
                      <span>
                        {copy.privacy.terms}{" "}
                        <span
                          className="terms-trigger-link"
                          onClick={openTermsModal}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") openTermsModal();
                          }}
                        >
                          {copy.privacy.termsTrigger}
                        </span>
                        .
                      </span>
                    </label>
                    <FieldError message={errors["terms-consent"]} />
                  </div>
                </div>
              </div>

              <div className="form-nav submit-nav">
                <button type="button" className="btn-back" onClick={() => goStep(3)}>
                  {copy.buttons.back}
                </button>
                <button type="button" className="btn-submit" onClick={() => void submitForm()} disabled={isSubmitting}>
                  {isSubmitting ? "Invio..." : copy.buttons.submit}
                </button>
              </div>

              <FieldError message={submitError} />

              <p className="submit-note">
                {copy.notes.submitNote[0]}
                <br />
                {copy.notes.submitNote[1]}
              </p>
            </section>
          </form>
        ) : (
          <div className="success-box visible">
            <div className="success-icon">✓</div>
            <div className="success-title">{copy.notes.successTitle}</div>
            <p className="success-sub">
              {copy.notes.successSub[0]}
              <br />
              {copy.notes.successSub[1]}
              <br />
              <br />
              {copy.notes.successSub[2]}
            </p>
          </div>
        )}

        <div className="wa-alt">
          <div className="wa-alt-text">
            <strong>{copy.notes.urgentTitle} </strong> {copy.notes.urgentBody}
          </div>
          <a
            href="https://wa.me/393792306809"
            className="btn-wa"
            target="_blank"
            rel="noopener noreferrer"
          >
            {copy.notes.urgentButton}
          </a>
        </div>
      </div>

      {/* MODALE TERMINI DI COLLABORAZIONE */}
      <div
        className={`terms-overlay ${isTermsModalOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="terms-title"
      >
        <div className="terms-modal">
          <div className="terms-header">
            <div className="terms-header-left">
              <div className="terms-header-eyebrow">{copy.terms.eyebrow}</div>
              <h2 className="terms-header-title" id="terms-title">
                {copy.terms.title}
              </h2>
              <div className="terms-header-sub">
                {copy.terms.subtitle}
              </div>
            </div>
            <button className="terms-close" onClick={closeTermsModal} aria-label={copy.terms.closeLabel}>
              ✕
            </button>
          </div>

          <div className="terms-progress-bar">
            <div className="terms-progress-fill" ref={progressFillRef}></div>
          </div>

          <div className="terms-body" ref={modalBodyRef} onScroll={handleModalScroll}>
            <div className="terms-intro">
              <strong>
                Questi sono i {copy.privacy.termsTrigger} tra te (il cliente) e Ghassen Mansouri,
                professionista OSS indipendente (P.IVA 01103920144).
              </strong>
              <br />
              Spuntando la casella nel modulo di richiesta di valutazione, confermi di aver letto e
              compreso tutte le condizioni descritte qui. Il contratto completo firmato viene
              trasmesso separatamente via email in formato PDF, dopo che la tua richiesta è stata
              valutata e approvata.
            </div>

            <div className="terms-section">
              <div className="terms-section-num">Sezione 1</div>
              <h3 className="terms-section-title">Chi sono e come lavoro</h3>
              <div className="terms-section-body">
                <p>
                  Sono <strong>Ghassen Mansouri</strong>, professionista indipendente certificato
                  OSS (Operatore Socio-Sanitario), operante ai sensi della legge italiana con P.IVA
                  01103920144, con base a Dervio (LC). Lavoro come professionista indipendente
                  pienamente autonomo — non come dipendente, non tramite agenzia e non come lavoratore
                  subordinato.
                </p>
                <p>
                  Fornisco assistenza domiciliare strutturata esclusivamente entro il perimetro
                  professionale OSS certificato, come definito dalla Legge 42/1999 e dal D.M. 520/2001.
                  Opero nelle province di Lecco, Como, Sondrio e Milano.
                </p>
                <p>
                  Offro assistenza in tre categorie: <strong>assistenza anziani</strong>,{" "}
                  <strong>supporto alla disabilità</strong> e{" "}
                  <strong>assistenza per minori con bisogni speciali</strong> (disabili o semi-autonomi).
                </p>
                <div className="terms-pill-row">
                  <span className="terms-pill green">OSS certificato</span>
                  <span className="terms-pill green">P.IVA 01103920144</span>
                  <span className="terms-pill">Lecco · Como · Sondrio · Milano</span>
                  <span className="terms-pill">5 lingue</span>
                </div>
              </div>
            </div>

            <div className="terms-section">
              <div className="terms-section-num">Sezione 2</div>
              <h3 className="terms-section-title">Come funziona la collaborazione</h3>
              <div className="terms-section-body">
                <p>
                  Inviare una richiesta di valutazione non costituisce una collaborazione confermata.
                  Ogni richiesta viene esaminata personalmente. Non tutte le richieste vengono
                  accettate.
                </p>
                <p>
                  Il processo è: <strong>1.</strong> invii il modulo di valutazione.{" "}
                  <strong>2.</strong> lo esamino entro 48 ore lavorative. <strong>3.</strong> Se
                  compatibile, ti contatto per fissare un colloquio conoscitivo. <strong>4.</strong>{" "}
                  Se confermato, il contratto viene inviato via email per la firma. <strong>5.</strong>{" "}
                  Le sessioni iniziano dopo la firma del contratto e il ricevimento del pagamento
                  anticipato.
                </p>
                <p>
                  <strong>Nessuna sessione ha luogo prima di un contratto firmato e del pagamento anticipato.</strong>{" "}
                  Questo tutela entrambe le parti.
                </p>
              </div>
            </div>

            <div className="terms-section">
              <div className="terms-section-num">Sezione 3</div>
              <h3 className="terms-section-title">Tariffe e pagamento</h3>
              <div className="terms-section-body">
                <p>
                  Le tariffe vengono concordate per iscritto prima della firma di qualsiasi contratto.
                  La tariffa oraria base parte da <strong>€28/ora</strong> per le sessioni diurne.
                  Sono previsti supplementi per la sera, la notte, il turno notturno attivo, i profili
                  ad alta complessità o le località fuori dalla zona primaria. La tariffa esatta
                  applicabile alla tua situazione viene definita durante la valutazione.
                </p>
                <p>
                  <strong>Il pagamento avviene sempre in anticipo</strong>, prima dell'inizio delle
                  sessioni di ciascun periodo concordato — settimanale (entro il lunedì precedente la
                  settimana) oppure mensile (entro il primo del mese). Senza pagamento anticipato non
                  esiste una collaborazione confermata per quel periodo. In tal caso sono libero di
                  accettare altri clienti.
                </p>
                <p>
                  Accetto il pagamento esclusivamente tramite <strong>bonifico bancario</strong> o{" "}
                  <strong>contanti</strong> (nei limiti di legge). Non sono accettati altri metodi.
                  Tutti i pagamenti sono in Euro. Le eventuali commissioni dei bonifici internazionali
                  sono a carico del cliente.
                </p>
                <p>
                  Emesso <strong>fattura elettronica</strong> tramite sistema SDI italiano (Aruba)
                  entro 12 giorni dal ricevimento del pagamento, in conformità all'art. 6 D.P.R.
                  633/1972. Opero in regime forfettario — non si applica IVA. Non si applica la
                  ritenuta d'acconto per i privati.
                </p>
              </div>
            </div>

            <div className="terms-section">
              <div className="terms-section-num">Sezione 4</div>
              <h3 className="terms-section-title">Durata minima e pianificazione</h3>
              <div className="terms-section-body">
                <p>
                  La durata minima per qualsiasi sessione di assistenza è di{" "}
                  <strong>5 ore consecutive</strong>. Nessuna sessione di durata inferiore può essere
                  concordata, fatturata o erogata. Questo vale per tutti i tipi di sessione — diurna,
                  notturna passiva e notturna attiva — senza eccezioni.
                </p>
                <p>
                  Il calendario delle sessioni (giorni, fasce orarie) è flessibile e viene concordato
                  tra noi. Ciò che è fissato contrattualmente è: la durata in ore per sessione, il numero
                  di sessioni per periodo e il tipo di sessione. Le modifiche della fascia oraria
                  richiedono 48 ore di preavviso e il mio consenso esplicito. Non posso essere obbligato
                  ad accettare una modifica della fascia oraria.
                </p>
              </div>
            </div>

            <div className="terms-section">
              <div className="terms-section-num">Sezione 5</div>
              <h3 className="terms-section-title">Politica di cancellazione</h3>
              <div className="terms-section-body">
                <p>
                  Si applica una sola soglia. Nessuna eccezione — comprese emergenze mediche,
                  ricovero ospedaliero o qualsiasi altra circostanza.
                </p>

                <table className="terms-cancel-table">
                  <thead>
                    <tr>
                      <th>Preavviso dato dal cliente</th>
                      <th>Cosa accade al pagamento anticipato</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Più di 7 giorni<br />prima dell'inizio del periodo</td>
                      <td>
                        Rimborso completo entro 5 giorni lavorativi tramite bonifico bancario.
                        <br />
                        <span className="badge-green">Rimborso completo</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Meno di 7 giorni<br />prima dell'inizio del periodo</td>
                      <td>
                        L'intero pagamento anticipato viene trattenuto. Nessun rimborso.
                        <br />
                        <span className="badge-terra">Nessun rimborso</span>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <p style={{ marginTop: "14px" }}>
                  La cancellazione deve essere comunicata <strong>per iscritto</strong> — via email o
                  WhatsApp — ai miei contatti. La comunicazione verbale non ha validità legale. La data
                  e l'ora della comunicazione scritta determinano il calcolo della soglia.
                </p>
                <p>
                  La stessa soglia si applica alla cancellazione di singole sessioni all'interno di un
                  periodo già pagato.
                </p>
              </div>
            </div>

            <div className="terms-section">
              <div className="terms-section-num">Sezione 6</div>
              <h3 className="terms-section-title">Rinuncia alla collaborazione</h3>
              <div className="terms-section-body">
                <p>
                  <strong>Rinuncia del cliente:</strong> puoi rinunciare alla collaborazione in
                  qualsiasi momento con un preavviso scritto minimo di{" "}
                  <strong>15 giorni di calendario</strong>. Durante il periodo di preavviso, le
                  sessioni coperte dal pagamento anticipato del periodo corrente proseguono
                  normalmente. Le sessioni già pagate ed eseguite vengono trattenute da me. I periodi
                  futuri non pagati non generano alcun obbligo per nessuna delle parti.
                </p>
                <p>
                  <strong>La mia rinuncia:</strong> posso rinunciare solo per giusta causa — inclusi
                  mancato pagamento, richieste persistenti fuori dal mio ambito professionale,
                  comportamenti che mettono a rischio la mia sicurezza o forza maggiore. In tali casi,
                  completo prima tutte le sessioni già pagate (salvo che la causa sia immediata e
                  grave) e rimborsare proporzionalmente le sessioni non erogate.
                </p>
                <p>
                  I periodi futuri non ancora pagati non vengono mai attivati e non richiedono alcun
                  preavviso da parte di nessuna delle due parti.
                </p>
              </div>
            </div>

            <div className="terms-section">
              <div className="terms-section-num">Sezione 7</div>
              <h3 className="terms-section-title">Cosa faccio — perimetro professionale OSS</h3>
              <div className="terms-section-body">
                <p>
                  Opero esclusivamente entro il perimetro professionale OSS certificato (Legge
                  42/1999, D.M. 520/2001). Le attività che fornisco includono:
                </p>
                <p>
                  Igiene personale e cura quotidiana · Mobilizzazione e trasferimenti · Preparazione
                  dei pasti e assistenza all'alimentazione · Stimolazione cognitiva e attività
                  supervisionate · Supervisione domestica · Accompagnamento alle visite mediche ·
                  Aggiornamenti alla famiglia e diario di assistenza · Supporto ADL per persone con
                  disabilità · Supporto educativo e alla routine per minori con bisogni speciali.
                </p>
                <p>
                  Le attività specifiche incluse nella tua collaborazione sono concordate per iscritto
                  e documentate nel Programma delle attività (Allegato A) allegato al contratto
                  firmato.
                </p>
              </div>
            </div>

            <div className="terms-section">
              <div className="terms-section-num">Sezione 8</div>
              <h3 className="terms-section-title">Cosa non faccio mai — esclusioni rigide</h3>
              <div className="terms-section-body">
                <p>
                  Le seguenti attività sono escluse in modo permanente dal mio perimetro professionale.
                  Verranno sempre rifiutate, indipendentemente dalla situazione, dall'urgenza o dalla
                  richiesta — e il rifiuto non costituisce inadempimento contrattuale:
                </p>
                <ul className="terms-exclusion-list">
                  <li>Somministrazione, gestione o supervisione dei farmaci di qualsiasi tipo</li>
                  <li>Procedure mediche o infermieristiche di qualsiasi natura</li>
                  <li>Diagnosi cliniche o valutazioni sanitarie</li>
                  <li>Cura delle ferite, medicazioni o trattamenti post-operatori</li>
                  <li>Sedute psicologiche o terapeutiche</li>
                  <li>Assistenza domiciliare 24 ore su 24 — servizio non offerto in alcun caso</li>
                </ul>
                <p style={{ marginTop: "12px" }}>
                  Se durante una sessione individuo una situazione clinica che richiede un intervento
                  medico, avviserò immediatamente la famiglia e indirizzerò la situazione al
                  professionista appropriato.
                </p>
              </div>
            </div>

            <div className="terms-section">
              <div className="terms-section-num">Sezione 9</div>
              <h3 className="terms-section-title">Riservatezza e dati personali (GDPR)</h3>
              <div className="terms-section-body">
                <p>
                  Mantengo la massima riservatezza professionale su tutte le informazioni relative alla
                  persona assistita, alla famiglia, alle condizioni di salute e a qualsiasi informazione
                  acquisita nel corso del mio lavoro. Queste informazioni non saranno mai condivise con
                  terzi senza consenso scritto esplicito, salvo obblighi di legge.
                </p>
                <p>
                  I tuoi dati personali e i dati sanitari della persona assistita sono trattati da me
                  in qualità di <strong>Titolare del trattamento</strong>, esclusivamente per le finalità
                  di questa collaborazione, nel rispetto del Regolamento UE 2016/679 (GDPR) e del D.Lgs.
                  101/2018. I dati sanitari sono trattati come categoria particolare ai sensi dell'art. 9
                  GDPR e solo con il tuo consenso esplicito.
                </p>
                <p>
                  I dati vengono conservati per la durata della collaborazione, più 10 anni per obblighi
                  fiscali e 3 anni per eventuali controversie contrattuali. Hai il diritto di accedere,
                  rettificare e chiedere la cancellazione dei tuoi dati in qualsiasi momento contattandomi
                  per iscritto.
                </p>
                <div className="terms-pill-row">
                  <span className="terms-pill green">Conforme al GDPR</span>
                  <span className="terms-pill green">Nessuna condivisione con terzi</span>
                  <span className="terms-pill">Reg. UE 2016/679</span>
                  <span className="terms-pill">Obbligo di riservatezza di 3 anni</span>
                </div>
              </div>
            </div>

            <div className="terms-section">
              <div className="terms-section-num">Sezione 10</div>
              <h3 className="terms-section-title">Legge applicabile e controversie</h3>
              <div className="terms-section-body">
                <p>
                  La presente collaborazione è regolata esclusivamente dalla{" "}
                  <strong>legge italiana</strong> ai sensi degli artt. 2222–2237 del Codice Civile
                  (contratto di prestazione d'opera autonoma). In caso di controversia, entrambe le
                  parti si impegnano a tentare una soluzione amichevole entro 15 giorni prima di
                  ricorrere all'azione legale.
                </p>
                <p>
                  Il foro competente per eventuali controversie non risolte è esclusivamente il{" "}
                  <strong>Tribunale di Lecco</strong>.
                </p>
                <div className="terms-law-note">
                  Il contratto completo firmato — contenente tutti i 17 articoli, l'approvazione
                  specifica delle clausole onerose e il Programma delle attività (Allegato A) — viene
                  trasmesso separatamente dopo l'approvazione della tua richiesta di valutazione. Il
                  documento che stai leggendo qui è un riepilogo dei principali {copy.privacy.termsTrigger}
                  ai fini del consenso informato.
                </div>
              </div>
            </div>

            <div className="terms-scroll-hint" id="terms-scroll-hint" ref={scrollHintRef}>
              ↓ Scorri per leggere tutti i termini
            </div>
          </div>

          <div className="terms-footer">
            <div className="terms-footer-note">
              <strong>Ghassen Mansouri</strong> · Professionista OSS indipendente · P.IVA 01103920144
              <br />
              ghassenmansouri@mail.com · +39 379 230 6809 · accanto.care
            </div>
            <button className="terms-btn-close" onClick={closeTermsModal}>
              {copy.terms.readAll}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .request-page {
          min-height: 100vh;
          background: linear-gradient(145deg, #faf7f2 0%, #f2ede6 100%);
          color: #2c2a28;
          font-family: system-ui, -apple-system, 'Inter', sans-serif;
        }

        .page-wrap {
          max-width: 1020px;
          margin: 0 auto;
          padding: 48px 5% 72px;
        }

        .page-eyebrow {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #2a7f6e;
          margin-bottom: 10px;
        }

        .page-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 400;
          line-height: 1.2;
          color: #2c2a28;
          margin-bottom: 12px;
        }

        .page-subtitle {
          font-size: 15px;
          color: #6b6865;
          line-height: 1.6;
          margin-bottom: 36px;
        }

        .progress-bar-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 42px;
          background: rgba(255,255,255,0.5);
          padding: 12px 16px;
          border-radius: 60px;
          backdrop-filter: blur(4px);
        }

        .progress-step-label {
          font-size: 13px;
          font-weight: 500;
          color: #2c2a28;
          white-space: nowrap;
        }

        .progress-bar {
          flex: 1;
          height: 5px;
          background: #e0d8cc;
          border-radius: 99px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: #2a7f6e;
          border-radius: 99px;
          transition: width 0.4s ease;
          box-shadow: 0 0 8px rgba(42,127,110,0.5);
        }

        .progress-pct {
          font-size: 13px;
          font-weight: 600;
          color: #2a7f6e;
          white-space: nowrap;
        }

        .form-section {
          background: rgba(255,255,255,0.96);
          backdrop-filter: blur(2px);
          border: 1px solid rgba(224,216,204,0.8);
          border-radius: 32px;
          padding: 40px 42px;
          margin-bottom: 28px;
          display: none;
          box-shadow: 0 20px 35px -12px rgba(0,0,0,0.08);
          transition: all 0.2s;
        }

        .form-section.active {
          display: block;
          animation: fadeUp 0.4s cubic-bezier(0.2,0.9,0.4,1.1);
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .form-section-header {
          margin-bottom: 32px;
          border-left: 4px solid #2a7f6e;
          padding-left: 22px;
        }

        .form-section-num {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #c47a3a;
          margin-bottom: 6px;
        }

        .form-section-title {
          font-family: 'Playfair Display', serif;
          font-size: 30px;
          font-weight: 400;
          color: #2c2a28;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 20px;
        }

        .form-group {
          margin-bottom: 24px;
          position: relative;
        }

        .form-label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: #2c2a28;
          margin-bottom: 10px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        .form-label .req {
          color: #c47a3a;
        }

        .input-error-row {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          gap: 16px;
        }

        .input-error-row > *:first-child {
          flex: 1;
          min-width: 180px;
        }

        .radio-group {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .radio-option {
          display: none;
        }

        .radio-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          padding: 10px 22px;
          border-radius: 44px;
          border: 1px solid #c8c0b4;
          cursor: pointer;
          transition: all 0.2s;
          color: #6b6865;
          background: #fefcf9;
        }

        /* Removed bold effect on checked */
        .radio-option:checked + .radio-label {
          background: #eef6f3;
          border-color: #2a7f6e;
          color: #2a7f6e;
        }

        .other-input-container {
          margin-top: 12px;
          width: 100%;
        }

        .other-text-input {
          width: 100%;
          font-family: inherit;
          font-size: 14px;
          color: #2c2a28;
          background: #fefcf9;
          border: 1px solid #c8c0b4;
          border-radius: 20px;
          padding: 12px 16px;
          outline: none;
          transition: all 0.2s;
        }

        .other-text-input:focus {
          border-color: #2a7f6e;
          box-shadow: 0 0 0 5px rgba(42,127,110,0.12);
          background: #ffffff;
        }

        .form-input,
        .form-select,
        .form-textarea {
          width: 100%;
          font-family: inherit;
          font-size: 15px;
          color: #2c2a28;
          background: #fefcf9;
          border: 1px solid #c8c0b4;
          border-radius: 20px;
          padding: 14px 18px;
          outline: none;
          transition: all 0.2s;
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          border-color: #2a7f6e;
          box-shadow: 0 0 0 5px rgba(42,127,110,0.12);
          background: #ffffff;
        }

        .form-input.error,
        .form-select.error,
        .form-textarea.error {
          border-color: #d66a5c;
          background: #fff9f8;
          box-shadow: 0 0 0 5px rgba(214,106,92,0.08);
        }

        .form-textarea {
          resize: vertical;
          min-height: 110px;
        }

        .form-select {
          appearance: auto;
          background: #fefcf9;
          cursor: pointer;
          padding-right: 18px;
        }

        .phone-group {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .country-selector {
          position: relative;
          flex: 1.5;
          min-width: 180px;
        }

        .country-select-btn {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          background: #fefcf9;
          border: 1px solid #c8c0b4;
          border-radius: 20px;
          padding: 14px 18px;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s;
          color: #2c2a28;
        }

        .country-select-btn.error {
          border-color: #d66a5c;
          background: #fff9f8;
        }

        .country-select-btn:hover {
          border-color: #2a7f6e;
          background: #ffffff;
        }

        .country-flag {
          width: 24px;
          height: 18px;
          object-fit: cover;
          border-radius: 4px;
          box-shadow: 0 1px 2px rgba(0,0,0,0.1);
        }

        .country-name {
          flex: 1;
          text-align: left;
          font-weight: 500;
        }

        .country-code {
          color: #6b6865;
          font-size: 13px;
        }

        .dropdown-arrow {
          font-size: 11px;
          color: #6b6865;
          margin-left: 6px;
        }

        .country-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          border: 1px solid #c8c0b4;
          border-radius: 24px;
          margin-top: 10px;
          max-height: 300px;
          overflow-y: auto;
          z-index: 50;
          box-shadow: 0 16px 32px rgba(0,0,0,0.12);
          animation: fadeDown 0.2s ease;
        }

        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .country-option {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px 18px;
          background: white;
          border: none;
          cursor: pointer;
          transition: background 0.15s;
          font-size: 14px;
          color: #2c2a28;
        }

        .country-option:hover {
          background: #f5f0eb;
        }

        .phone-number {
          flex: 1;
        }

        .checkbox-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .checkbox-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          cursor: pointer;
          padding: 6px 0;
        }

        .checkbox-item input[type="checkbox"] {
          width: 20px;
          height: 20px;
          accent-color: #2a7f6e;
          cursor: pointer;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .checkbox-item span {
          font-size: 14px;
          color: #3a3836;
          line-height: 1.55;
        }

        .night-sub {
          display: none;
          margin-top: 18px;
          background: #fef7f0;
          border: 1px solid #f0e0d0;
          border-radius: 28px;
          padding: 18px 24px;
        }

        .night-sub.visible {
          display: block;
          animation: fadeUp 0.22s ease;
        }

        .night-sub-label {
          font-size: 13px;
          font-weight: 600;
          color: #c47a3a;
          margin-bottom: 12px;
          text-transform: uppercase;
        }

        .info-box {
          background: #fef7f0;
          border: 1px solid #f0e0d0;
          border-radius: 24px;
          padding: 16px 22px;
          font-size: 13px;
          color: #c47a3a;
          margin-top: 16px;
          line-height: 1.65;
        }

        .form-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 40px;
          gap: 20px;
        }

        .btn-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: #6b6865;
          padding: 14px 28px;
          border-radius: 44px;
          font-size: 14px;
          font-weight: 500;
          border: 1px solid #c8c0b4;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-back:hover {
          background: #f5f0eb;
          color: #2c2a28;
          transform: translateY(-2px);
        }

        .btn-next {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #2a7f6e;
          color: white;
          padding: 14px 32px;
          border-radius: 44px;
          font-size: 14px;
          font-weight: 500;
          border: none;
          cursor: pointer;
          transition: all 0.25s;
        }

        .btn-next:hover {
          background: #1f6255;
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(31,98,85,0.25);
        }

        .btn-submit {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #2a7f6e;
          color: white;
          padding: 14px 32px;
          border-radius: 44px;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.25s;
          border: none;
          cursor: pointer;
        }

        .btn-submit:hover {
          background: #1f6255;
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(31,98,85,0.25);
        }

        .submit-note {
          font-size: 13px;
          color: #6b6865;
          text-align: center;
          margin-top: 24px;
          line-height: 1.6;
        }

        .wa-alt {
          background: white;
          border: 1px solid #c8c0b4;
          border-radius: 32px;
          padding: 24px 32px;
          margin-top: 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          backdrop-filter: blur(4px);
        }

        .wa-alt-text {
          font-size: 14px;
          color: #6b6865;
        }

        .wa-alt-text strong {
          color: #2c2a28;
        }

        .btn-wa {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #25d366;
          color: white;
          padding: 12px 26px;
          border-radius: 44px;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.2s;
          white-space: nowrap;
        }

        .btn-wa:hover {
          background: #1da15a;
          transform: translateY(-2px);
        }

        .success-box {
          display: none;
          background: white;
          border: 1px solid #2a7f6e;
          border-radius: 36px;
          padding: 56px 40px;
          text-align: center;
          margin-bottom: 24px;
        }

        .success-box.visible {
          display: block;
          animation: fadeUp 0.4s ease;
        }

        .success-icon {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: #eef6f3;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 28px;
          font-size: 32px;
          color: #2a7f6e;
        }

        .success-title {
          font-family: 'Playfair Display', serif;
          font-size: 34px;
          font-weight: 400;
          color: #2c2a28;
          margin-bottom: 14px;
        }

        .success-sub {
          font-size: 15px;
          color: #6b6865;
          line-height: 1.7;
          margin: 0;
        }

        .privacy-block {
          border-top: 1px solid #c8c0b4;
          padding-top: 28px;
          margin-top: 20px;
        }

        .privacy-title {
          font-size: 13px;
          font-weight: 600;
          color: #2c2a28;
          margin-bottom: 18px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        .privacy-block .checkbox-item span a {
          color: #2a7f6e;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .field-popup {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          width: auto;
          flex-shrink: 0;
          background: linear-gradient(135deg, #ffffff 0%, #fffaf8 100%);
          box-shadow: 0 8px 20px -8px rgba(180, 70, 50, 0.25), 0 0 0 1px rgba(214, 106, 92, 0.35);
          backdrop-filter: blur(8px);
          border-radius: 40px;
          padding: 8px 18px 8px 14px;
          color: #b55a4e;
          animation: slideInRight 0.25s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          transform-origin: left center;
          border-left: 4px solid #d66a5c;
          margin-left: 8px;
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(12px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        .field-popup-icon {
          width: 22px;
          height: 22px;
          border-radius: 30px;
          background: linear-gradient(145deg, #d66a5c, #c45a4c);
          color: white;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 700;
          flex-shrink: 0;
          box-shadow: 0 2px 6px rgba(170, 70, 50, 0.3);
        }

        .field-popup-text {
          font-size: 13px;
          line-height: 1.4;
          font-weight: 500;
          color: #b14e42;
          white-space: nowrap;
        }

        @media (max-width: 860px) {
          .page-wrap {
            max-width: 100%;
            padding-left: 24px;
            padding-right: 24px;
          }
          .form-section {
            padding: 28px 24px;
          }
          .form-row {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .input-error-row {
            flex-direction: column;
            align-items: stretch;
            gap: 8px;
          }
          .field-popup {
            margin-left: 0;
            width: fit-content;
            white-space: normal;
          }
          .field-popup-text {
            white-space: normal;
          }
          .phone-group {
            flex-direction: column;
          }
          .country-selector {
            width: 100%;
          }
          .form-nav {
            flex-direction: column;
            align-items: stretch;
          }
          .btn-back,
          .btn-next,
          .btn-submit,
          .btn-wa {
            width: 100%;
            justify-content: center;
          }
          .wa-alt {
            flex-direction: column;
            align-items: flex-start;
          }
          .progress-bar-wrap {
            flex-wrap: wrap;
          }
          .other-input-container {
            margin-top: 8px;
          }
        }

        .terms-trigger-link {
          color: #2a7f6e;
          text-decoration: underline;
          text-decoration-color: rgba(42,127,110,0.35);
          text-underline-offset: 2px;
          cursor: pointer;
          font-weight: 500;
          transition: color 0.15s;
        }
        .terms-trigger-link:hover {
          color: #1f6255;
        }

        .terms-overlay {
          position: fixed;
          inset: 0;
          background: rgba(28, 28, 26, 0.72);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          z-index: 9000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.25s ease, visibility 0.25s ease;
        }
        .terms-overlay.open {
          opacity: 1;
          visibility: visible;
        }

        .terms-modal {
          background: #FFFFFF;
          border-radius: 32px;
          width: min(820px, 100%);
          max-height: min(88vh, 820px);
          display: flex;
          flex-direction: column;
          box-shadow: 0 24px 64px rgba(28, 28, 26, 0.28);
          transform: translateY(16px);
          transition: transform 0.25s ease;
          overflow: hidden;
        }
        .terms-overlay.open .terms-modal {
          transform: translateY(0);
        }

        .terms-header {
          flex-shrink: 0;
          padding: 24px 28px 20px;
          border-bottom: 1px solid #E2DDD6;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          background: #F5F2EC;
        }
        .terms-header-left {
          flex: 1;
        }
        .terms-header-eyebrow {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: #c47a3a;
          margin-bottom: 6px;
        }
        .terms-header-title {
          font-family: 'Playfair Display', serif;
          font-size: 26px;
          font-weight: 400;
          color: #1C1C1A;
          line-height: 1.2;
          margin-bottom: 4px;
        }
        .terms-header-sub {
          font-size: 12px;
          color: #9B9895;
          line-height: 1.5;
        }
        .terms-close {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          border: none;
          background: none;
          cursor: pointer;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9B9895;
          font-size: 18px;
          transition: background 0.15s, color 0.15s;
          margin-top: 2px;
        }
        .terms-close:hover {
          background: #E2DDD6;
          color: #1C1C1A;
        }

        .terms-progress-bar {
          flex-shrink: 0;
          height: 3px;
          background: #E2DDD6;
          position: relative;
        }
        .terms-progress-fill {
          height: 100%;
          background: #2a7f6e;
          width: 0%;
          transition: width 0.1s linear;
          border-radius: 0 2px 2px 0;
        }

        .terms-body {
          flex: 1;
          overflow-y: auto;
          padding: 28px 28px 0;
          scroll-behavior: smooth;
        }
        .terms-body::-webkit-scrollbar { width: 5px; }
        .terms-body::-webkit-scrollbar-track { background: transparent; }
        .terms-body::-webkit-scrollbar-thumb { background: #CCC8C0; border-radius: 99px; }

        .terms-intro {
          background: #E8F7F2;
          border: 1px solid #C5E8DF;
          border-radius: 16px;
          padding: 16px 18px;
          margin-bottom: 28px;
          font-size: 13px;
          color: #1C1C1A;
          line-height: 1.7;
        }
        .terms-intro strong {
          color: #2a7f6e;
          font-weight: 500;
        }

        .terms-section {
          margin-bottom: 26px;
          padding-bottom: 26px;
          border-bottom: 1px solid #E2DDD6;
        }
        .terms-section:last-of-type {
          border-bottom: none;
          margin-bottom: 0;
        }
        .terms-section-num {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #c47a3a;
          margin-bottom: 6px;
        }
        .terms-section-title {
          font-family: 'Playfair Display', serif;
          font-size: 19px;
          font-weight: 500;
          color: #1C1C1A;
          margin-bottom: 10px;
          line-height: 1.3;
        }
        .terms-section-body {
          font-size: 13px;
          color: #6B6865;
          line-height: 1.75;
        }
        .terms-section-body p {
          margin-bottom: 10px;
        }
        .terms-section-body p:last-child {
          margin-bottom: 0;
        }
        .terms-section-body strong {
          color: #1C1C1A;
          font-weight: 500;
        }

        .terms-exclusion-list {
          list-style: none;
          margin: 10px 0 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .terms-exclusion-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13px;
          color: #6B6865;
          line-height: 1.55;
        }
        .terms-exclusion-list li::before {
          content: "✕";
          flex-shrink: 0;
          font-size: 11px;
          font-weight: 600;
          color: #c47a3a;
          margin-top: 2px;
        }

        .terms-pill-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 12px;
        }
        .terms-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          padding: 4px 10px;
          border-radius: 99px;
          border: 1px solid #E2DDD6;
          background: #F5F2EC;
          color: #6B6865;
        }
        .terms-pill.green {
          background: #E8F7F2;
          border-color: #C5E8DF;
          color: #2a7f6e;
        }
        .terms-pill.terra {
          background: #F7EDE3;
          border-color: rgba(196, 118, 58, 0.25);
          color: #c47a3a;
        }

        .terms-cancel-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 12px;
          font-size: 13px;
        }
        .terms-cancel-table th {
          text-align: left;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #9B9895;
          padding: 8px 12px;
          border-bottom: 1px solid #E2DDD6;
        }
        .terms-cancel-table td {
          padding: 10px 12px;
          border-bottom: 1px solid #E2DDD6;
          vertical-align: top;
          color: #6B6865;
          line-height: 1.55;
        }
        .terms-cancel-table tr:last-child td {
          border-bottom: none;
        }
        .terms-cancel-table td:first-child {
          font-weight: 500;
          color: #1C1C1A;
          white-space: nowrap;
        }
        .badge-green {
          display: inline-flex;
          font-size: 11px;
          padding: 2px 8px;
          border-radius: 99px;
          background: #E8F7F2;
          color: #2a7f6e;
          border: 1px solid #C5E8DF;
          margin-top: 4px;
        }
        .badge-terra {
          display: inline-flex;
          font-size: 11px;
          padding: 2px 8px;
          border-radius: 99px;
          background: #F7EDE3;
          color: #c47a3a;
          border: 1px solid rgba(196, 118, 58, 0.25);
          margin-top: 4px;
        }

        .terms-law-note {
          background: #F5F2EC;
          border: 1px solid #E2DDD6;
          border-radius: 12px;
          padding: 12px 14px;
          font-size: 12px;
          color: #9B9895;
          line-height: 1.65;
          margin-top: 12px;
        }

        .terms-footer {
          flex-shrink: 0;
          padding: 20px 28px;
          border-top: 1px solid #E2DDD6;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          background: #FAFAF8;
        }
        .terms-footer-note {
          font-size: 12px;
          color: #9B9895;
          line-height: 1.5;
          flex: 1;
        }
        .terms-footer-note strong {
          color: #1C1C1A;
          font-weight: 500;
        }
        .terms-btn-close {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #2a7f6e;
          color: #FFFFFF;
          border: none;
          border-radius: 40px;
          padding: 10px 24px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          font-family: inherit;
          transition: background 0.15s;
        }
        .terms-btn-close:hover {
          background: #1f6255;
        }

        .terms-scroll-hint {
          text-align: center;
          font-size: 11px;
          color: #9B9895;
          padding: 12px 0 20px;
          letter-spacing: 0.04em;
          opacity: 1;
          transition: opacity 0.4s;
        }
        .terms-scroll-hint.hidden {
          opacity: 0;
          pointer-events: none;
        }

        @media (max-width: 600px) {
          .terms-header { padding: 18px 20px 16px; }
          .terms-body { padding: 20px 20px 0; }
          .terms-footer { padding: 16px 20px; flex-direction: column; align-items: stretch; }
          .terms-btn-close { justify-content: center; }
          .terms-cancel-table td:first-child { white-space: normal; }
        }
      `}</style>
    </main>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;

  return (
    <div className="field-popup" aria-live="polite" role="alert">
      <span className="field-popup-icon">!</span>
      <span className="field-popup-text">{message}</span>
    </div>
  );
}

function RadioButton({
  name,
  id,
  value,
  label,
  required = false,
  onChange,
}: {
  name: string;
  id: string;
  value: string;
  label: string;
  required?: boolean;
  onChange?: () => void;
}) {
  return (
    <>
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        className="radio-option"
        required={required}
        onChange={onChange}
      />
      <label htmlFor={id} className="radio-label">
        {label}
      </label>
    </>
  );
}

function CheckBox({
  label,
  name,
  value,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  onChange?: () => void;
}) {
  return (
    <label className="checkbox-item">
      <input type="checkbox" name={name} value={value} onChange={onChange} />
      <span>{label}</span>
    </label>
  );
}