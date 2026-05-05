"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";

type Step = 1 | 2 | 3 | 4;
type ErrorState = Record<string, string>;

const countryCodes = [
  { code: "+216", name: "Tunisia", flagCode: "tn" },
  { code: "+39", name: "Italy", flagCode: "it" },
  { code: "+33", name: "France", flagCode: "fr" },
  { code: "+44", name: "United Kingdom", flagCode: "gb" },
  { code: "+1", name: "United States", flagCode: "us" },
  { code: "+49", name: "Germany", flagCode: "de" },
  { code: "+34", name: "Spain", flagCode: "es" },
  { code: "+41", name: "Switzerland", flagCode: "ch" },
  { code: "+971", name: "United Arab Emirates", flagCode: "ae" },
  { code: "+213", name: "Algeria", flagCode: "dz" },
  { code: "+212", name: "Morocco", flagCode: "ma" },
];

export default function RequestPage() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const phoneHiddenRef = useRef<HTMLInputElement | null>(null);

  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [slot, setSlot] = useState<"Daytime" | "Night" | "">("");
  const [errors, setErrors] = useState<ErrorState>({});
  const [selectedCountryCode, setSelectedCountryCode] = useState("+216");
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  // "Other" text values and selection states
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
      { name: "who", label: "Who are you?" },
      { name: "role", label: "Applicant's role" },
      { name: "name", label: "Name and surname" },
      { name: "phoneCountryCode", label: "Country code" },
      { name: "phoneNumber", label: "Phone number" },
      { name: "email", label: "Email" },
      { name: "lang", label: "Preferred language" },
      { name: "municipality", label: "Municipality of residence" },
      { name: "zip", label: "ZIP Code" },
    ];

    let ok = true;

    for (const item of requiredFields) {
      if (item.name === "role") {
        if (!selectedRole) {
          setFieldError("role", "Please complete this field.");
          ok = false;
        } else if (selectedRole === "Other" && !roleOther.trim()) {
          setFieldError("role", "Please specify your role.");
          ok = false;
        }
      } else if (!fieldValue(item.name)) {
        setFieldError(item.name, "Please complete this field.");
        ok = false;
      }
    }

    const emailInput = form.elements.namedItem("email") as HTMLInputElement | null;
    if (emailInput && emailInput.value && !emailInput.checkValidity()) {
      setFieldError("email", "Please enter a valid email address.");
      ok = false;
    }

    const phoneInput = form.elements.namedItem("phoneNumber") as HTMLInputElement | null;
    if (phoneInput && phoneInput.value && !phoneInput.checkValidity()) {
      setFieldError("phoneNumber", "Please enter a valid phone number.");
      ok = false;
    }

    return ok;
  };

  const validateStep2 = () => {
    let ok = true;

    if (!selectedType) {
      setFieldError("type", "Please complete this field.");
      ok = false;
    } else if (selectedType === "Other" && !typeOther.trim()) {
      setFieldError("type", "Please specify the type of person assisted.");
      ok = false;
    }

    const requiredFields = [
      { name: "age", label: "Age range" },
      { name: "autonomy", label: "Level of autonomy" },
      { name: "description", label: "Description of activities and expectations" },
    ];

    for (const item of requiredFields) {
      if (!fieldValue(item.name)) {
        setFieldError(item.name, "Please complete this field.");
        ok = false;
      }
    }

    if (checkboxCount("activities") === 0) {
      setFieldError("activities", "Please select at least one requested activity.");
      ok = false;
    }

    return ok;
  };

  const validateStep3 = () => {
    const requiredFields = [
      { name: "days", label: "Days per week" },
      { name: "hours", label: "Hours per support session" },
      { name: "slot", label: "Time slot" },
      { name: "start-date", label: "Requested start date" },
    ];

    let ok = true;

    for (const item of requiredFields) {
      if (!fieldValue(item.name)) {
        setFieldError(item.name, "Please complete this field.");
        ok = false;
      }
    }

    if (fieldValue("slot") === "Night" && !fieldValue("night-type")) {
      setFieldError("night-type", "Please select a night shift type.");
      ok = false;
    }

    return ok;
  };

  const validateStep4 = () => {
    let ok = true;

    if (!selectedSource) {
      setFieldError("source", "Please complete this field.");
      ok = false;
    } else if (selectedSource === "Other" && !sourceOther.trim()) {
      setFieldError("source", "Please specify how you found this site.");
      ok = false;
    }

    const requiredFields = [
      { name: "duration", label: "Expected support duration" },
      { name: "previous", label: "Have you already evaluated other professionals?" },
      { name: "urgency", label: "Urgency level" },
    ];

    for (const item of requiredFields) {
      if (!fieldValue(item.name)) {
        setFieldError(item.name, "Please complete this field.");
        ok = false;
      }
    }

    if (!fieldValue("gdpr-consent")) {
      setFieldError("gdpr-consent", "You need to accept the GDPR consent.");
      ok = false;
    }

    if (!fieldValue("terms-consent")) {
      setFieldError("terms-consent", "You need to accept the terms of collaboration.");
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

  const submitForm = () => {
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

    // All data is valid – you can send the actual values
    setShowSuccess(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
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

  const selectedCountry = countryCodes.find((c) => c.code === selectedCountryCode);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showCountryDropdown && !(event.target as Element).closest(".country-selector")) {
        setShowCountryDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [showCountryDropdown]);

  // Hidden inputs to store the selected values for form submission
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
        <div className="page-eyebrow">Evaluation Request</div>
        <h1 className="page-title">Lead qualification form</h1>
        <p className="page-subtitle">
          4 sections · Please complete carefully. I evaluate each request individually.
          <br />
          Not all requests are accepted.
        </p>

        {!showSuccess ? (
          <form ref={formRef} onSubmit={(e) => e.preventDefault()} noValidate>
            <div className="progress-bar-wrap">
              <span className="progress-step-label">
                Section {currentStep} of {totalSteps}
              </span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%` }} />
              </div>
              <span className="progress-pct">{progress}%</span>
            </div>

            <section className={`form-section ${currentStep === 1 ? "active" : ""}`} id="section-1">
              <div className="form-section-header">
                <div className="form-section-num">Section 1 of 4</div>
                <div className="form-section-title">Applicant&apos;s data</div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Who are you? <span className="req">*</span>
                </label>
                <div className="input-error-row">
                  <div className="radio-group">
                    <RadioButton
                      name="who"
                      id="who-it"
                      value="Italian"
                      label="Italian"
                      required
                      onChange={clearAndHandle("who")}
                    />
                    <RadioButton
                      name="who"
                      id="who-ex"
                      value="Expat"
                      label="Expat / International"
                      onChange={clearAndHandle("who")}
                    />
                  </div>
                  <FieldError message={errors.who} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Applicant&apos;s role <span className="req">*</span>
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
                      Interested party directly
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
                      Family
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
                      Son / Daughter
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
                      Relative
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
                      Other
                    </label>
                  </div>
                  <div className="other-input-container">
                    {selectedRole === "Other" && (
                      <input
                        type="text"
                        className="other-text-input"
                        placeholder="Please specify your role"
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
                <input type="hidden" name="role" value={selectedRole === "Other" ? roleOther : selectedRole} />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    Name and surname <span className="req">*</span>
                  </label>
                  <div className="input-error-row">
                    <input
                      type="text"
                      className={`form-input ${errors.name ? "error" : ""}`}
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      required
                      onChange={clearAndHandle("name")}
                    />
                    <FieldError message={errors.name} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Phone <span className="req">*</span>
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
                                alt={selectedCountry.name}
                                className="country-flag"
                                width={20}
                                height={15}
                              />
                              <span className="country-name">{selectedCountry.name}</span>
                              <span className="country-code">{selectedCountry.code}</span>
                            </>
                          )}
                          <span className="dropdown-arrow">▼</span>
                        </button>
                        {showCountryDropdown && (
                          <div className="country-dropdown">
                            {countryCodes.map((country) => (
                              <button
                                key={country.code}
                                type="button"
                                className="country-option"
                                onClick={() => handleCountrySelect(country.code)}
                              >
                                <img
                                  src={`https://flagcdn.com/${country.flagCode}.svg`}
                                  alt={country.name}
                                  className="country-flag"
                                  width={20}
                                  height={15}
                                />
                                <span className="country-name">{country.name}</span>
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
                        placeholder="Phone number"
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
                    Email <span className="req">*</span>
                  </label>
                  <div className="input-error-row">
                    <input
                      type="email"
                      className={`form-input ${errors.email ? "error" : ""}`}
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                      required
                      onChange={clearAndHandle("email")}
                    />
                    <FieldError message={errors.email} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">
                    Preferred language <span className="req">*</span>
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
                      <option value="">Select language…</option>
                      <option>Italian</option>
                      <option>English</option>
                      <option>French</option>
                      <option>Arabic</option>
                      <option>German</option>
                    </select>
                    <FieldError message={errors.lang} />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    Municipality of residence <span className="req">*</span>
                  </label>
                  <div className="input-error-row">
                    <input
                      type="text"
                      className={`form-input ${errors.municipality ? "error" : ""}`}
                      id="municipality"
                      name="municipality"
                      placeholder="e.g. Lecco, Como, Milan…"
                      required
                      onChange={clearAndHandle("municipality")}
                    />
                    <FieldError message={errors.municipality} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">
                    ZIP Code <span className="req">*</span>
                  </label>
                  <div className="input-error-row">
                    <input
                      type="text"
                      className={`form-input ${errors.zip ? "error" : ""}`}
                      id="zip"
                      name="zip"
                      placeholder="e.g. 23900"
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
                  Next → Profile of the person assisted
                </button>
              </div>
            </section>

            <section className={`form-section ${currentStep === 2 ? "active" : ""}`} id="section-2">
              <div className="form-section-header">
                <div className="form-section-num">Section 2 of 4</div>
                <div className="form-section-title">Profile of the person assisted</div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Type of person assisted <span className="req">*</span>
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
                      Elderly
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
                      Disabled person
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
                      Minor
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
                      Other
                    </label>
                  </div>
                  <div className="other-input-container">
                    {selectedType === "Other" && (
                      <input
                        type="text"
                        className="other-text-input"
                        placeholder="Please specify type"
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
                <input type="hidden" name="type" value={selectedType === "Other" ? typeOther : selectedType} />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Age range <span className="req">*</span>
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
                    <option value="">Select age range…</option>
                    <option>6–17 years</option>
                    <option>18–35 years</option>
                    <option>36–55 years</option>
                    <option>56–70 years</option>
                    <option>71–85 years</option>
                    <option>86+ years</option>
                  </select>
                  <FieldError message={errors.age} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Level of autonomy <span className="req">*</span>
                </label>
                <div className="input-error-row">
                  <div className="radio-group">
                    <RadioButton
                      name="autonomy"
                      id="aut-auto"
                      value="Autonomous"
                      label="Autonomous"
                      required
                      onChange={clearAndHandle("autonomy")}
                    />
                    <RadioButton
                      name="autonomy"
                      id="aut-semi"
                      value="Semi-autonomous"
                      label="Semi-autonomous"
                      onChange={clearAndHandle("autonomy")}
                    />
                    <RadioButton
                      name="autonomy"
                      id="aut-not"
                      value="Not autonomous"
                      label="Not autonomous"
                      onChange={clearAndHandle("autonomy")}
                    />
                  </div>
                  <FieldError message={errors.autonomy} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Requested activities <span className="req">*</span>
                </label>
                <div className="input-error-row">
                  <div className={`checkbox-group ${errors.activities ? "error" : ""}`}>
                    <CheckBox
                      label="Personal hygiene and personal care"
                      name="activities"
                      value="Personal hygiene and personal care"
                      onChange={clearAndHandle("activities")}
                    />
                    <CheckBox
                      label="Mobilization and transfers"
                      name="activities"
                      value="Mobilization and transfers"
                      onChange={clearAndHandle("activities")}
                    />
                    <CheckBox
                      label="Meal preparation and feeding assistance"
                      name="activities"
                      value="Meal preparation and feeding assistance"
                      onChange={clearAndHandle("activities")}
                    />
                    <CheckBox
                      label="Company and cognitive stimulation"
                      name="activities"
                      value="Company and cognitive stimulation"
                      onChange={clearAndHandle("activities")}
                    />
                    <CheckBox
                      label="Home supervision and security"
                      name="activities"
                      value="Home supervision and security"
                      onChange={clearAndHandle("activities")}
                    />
                    <CheckBox
                      label="External accompaniment"
                      name="activities"
                      value="External accompaniment"
                      onChange={clearAndHandle("activities")}
                    />
                    <CheckBox
                      label="Family communication / reporting"
                      name="activities"
                      value="Family communication / reporting"
                      onChange={clearAndHandle("activities")}
                    />
                    <CheckBox
                      label="Cultural/linguistic mediation"
                      name="activities"
                      value="Cultural/linguistic mediation"
                      onChange={clearAndHandle("activities")}
                    />
                  </div>
                  <FieldError message={errors.activities} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Description of activities and expectations <span className="req">*</span>
                </label>
                <div className="input-error-row">
                  <textarea
                    className={`form-textarea ${errors.description ? "error" : ""}`}
                    id="description"
                    name="description"
                    placeholder="Describe the situation, any specific needs, routines, expectations…"
                    rows={4}
                    required
                    onChange={clearAndHandle("description")}
                  />
                  <FieldError message={errors.description} />
                </div>
              </div>

              <div className="form-nav">
                <button type="button" className="btn-back" onClick={() => goStep(1)}>
                  ← Back
                </button>
                <button type="button" className="btn-next" onClick={() => goStep(3)}>
                  Next → Logistics and planning
                </button>
              </div>
            </section>

            <section className={`form-section ${currentStep === 3 ? "active" : ""}`} id="section-3">
              <div className="form-section-header">
                <div className="form-section-num">Section 3 of 4</div>
                <div className="form-section-title">Logistics and planning</div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Days per week <span className="req">*</span>
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
                    <option value="">Select number of days…</option>
                    <option>1 day</option>
                    <option>2 days</option>
                    <option>3 days</option>
                    <option>4 days</option>
                    <option>5 days (Mon–Fri)</option>
                    <option>6 days</option>
                    <option>7 days</option>
                  </select>
                  <FieldError message={errors.days} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Hours per support session <span className="req">*</span>
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
                    <option value="">Select duration…</option>
                    <option>5 hours (minimum)</option>
                    <option>6–10 hours</option>
                    <option>10+ hours</option>
                  </select>
                  <FieldError message={errors.hours} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Time slot <span className="req">*</span>
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
                        Daytime (07:00–22:00)
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
                        Night (22:00–07:00)
                      </label>
                    </div>
                    <div className={`night-sub ${slot === "Night" ? "visible" : ""}`} id="night-sub">
                      <div className="night-sub-label">
                        Night shift type <span className="req">*</span>
                      </div>
                      <div className="radio-group">
                        <RadioButton
                          name="night-type"
                          id="nt-passive"
                          value="Passive night"
                          label="Passive — person sleeps autonomously, presence for sudden needs"
                          required={slot === "Night"}
                          onChange={clearAndHandle("night-type")}
                        />
                        <RadioButton
                          name="night-type"
                          id="nt-active"
                          value="Active night"
                          label="Active — interventions required during the night session"
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
                  Requested start date <span className="req">*</span>
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
                Night support sessions have specific pricing conditions (passive: €35/h · active: €40/h).
                These will be confirmed during the evaluation call.
              </div>

              <div className="form-nav">
                <button type="button" className="btn-back" onClick={() => goStep(2)}>
                  ← Back
                </button>
                <button type="button" className="btn-next" onClick={() => goStep(4)}>
                  Next → Duration and qualification
                </button>
              </div>
            </section>

            <section className={`form-section ${currentStep === 4 ? "active" : ""}`} id="section-4">
              <div className="form-section-header">
                <div className="form-section-num">Section 4 of 4</div>
                <div className="form-section-title">Duration and qualification</div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Expected support duration <span className="req">*</span>
                </label>
                <div className="input-error-row">
                  <div className="radio-group">
                    <RadioButton
                      name="duration"
                      id="dur-short"
                      value="Short"
                      label="Short (less than 1 month)"
                      required
                      onChange={clearAndHandle("duration")}
                    />
                    <RadioButton
                      name="duration"
                      id="dur-mid"
                      value="Medium"
                      label="Medium term (1–3 months)"
                      onChange={clearAndHandle("duration")}
                    />
                    <RadioButton
                      name="duration"
                      id="dur-long"
                      value="Long"
                      label="Long term (3+ months)"
                      onChange={clearAndHandle("duration")}
                    />
                    <RadioButton
                      name="duration"
                      id="dur-undef"
                      value="Not defined"
                      label="Not defined"
                      onChange={clearAndHandle("duration")}
                    />
                  </div>
                  <FieldError message={errors.duration} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Have you already evaluated other professionals? <span className="req">*</span>
                </label>
                <div className="input-error-row">
                  <div className="radio-group">
                    <RadioButton
                      name="previous"
                      id="prev-yes"
                      value="Yes"
                      label="Yes"
                      required
                      onChange={clearAndHandle("previous")}
                    />
                    <RadioButton
                      name="previous"
                      id="prev-no"
                      value="No, first assessment"
                      label="No, first assessment"
                      onChange={clearAndHandle("previous")}
                    />
                  </div>
                  <FieldError message={errors.previous} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  How did you find this site? <span className="req">*</span>
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
                      Google Search
                    </label>

                    <input
                      type="radio"
                      name="sourceRadio"
                      id="source-insta"
                      value="Instagram"
                      className="radio-option"
                      checked={selectedSource === "Instagram"}
                      onChange={() => {
                        setSelectedSource("Instagram");
                        clearFieldError("source");
                        setSourceOther("");
                      }}
                    />
                    <label htmlFor="source-insta" className="radio-label">
                      Instagram
                    </label>

                    <input
                      type="radio"
                      name="sourceRadio"
                      id="source-fb"
                      value="Facebook"
                      className="radio-option"
                      checked={selectedSource === "Facebook"}
                      onChange={() => {
                        setSelectedSource("Facebook");
                        clearFieldError("source");
                        setSourceOther("");
                      }}
                    />
                    <label htmlFor="source-fb" className="radio-label">
                      Facebook
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
                      WhatsApp
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
                      Referral
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
                      Other
                    </label>
                  </div>
                  <div className="other-input-container">
                    {selectedSource === "Other" && (
                      <input
                        type="text"
                        className="other-text-input"
                        placeholder="Please specify source"
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
                <input type="hidden" name="source" value={selectedSource === "Other" ? sourceOther : selectedSource} />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Urgency level <span className="req">*</span>
                </label>
                <div className="input-error-row">
                  <div className="radio-group">
                    <RadioButton
                      name="urgency"
                      id="urg-normal"
                      value="Normal"
                      label="Normal"
                      required
                      onChange={clearAndHandle("urgency")}
                    />
                    <RadioButton
                      name="urgency"
                      id="urg-priority"
                      value="Priority"
                      label="Priority"
                      onChange={clearAndHandle("urgency")}
                    />
                    <RadioButton
                      name="urgency"
                      id="urg-urgent"
                      value="Urgent"
                      label="Urgent"
                      onChange={clearAndHandle("urgency")}
                    />
                  </div>
                  <FieldError message={errors.urgency} />
                </div>
              </div>

              <div className="privacy-block">
                <div className="privacy-title">Privacy and conditions</div>

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
                        I consent to the processing of personal data pursuant to the GDPR (EU Regulation
                        2016/679).
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
                        I declare that I have read and understood the{" "}
                        <Link href="/contract">terms of collaboration</Link>.
                      </span>
                    </label>
                    <FieldError message={errors["terms-consent"]} />
                  </div>
                </div>
              </div>

              <div className="form-nav submit-nav">
                <button type="button" className="btn-back" onClick={() => goStep(3)}>
                  ← Back
                </button>
                <button type="button" className="btn-submit" onClick={submitForm}>
                  Submit my evaluation request →
                </button>
              </div>

              <p className="submit-note">
                You will receive a response within 48 business hours.
                <br />
                Not all requests are accepted.
              </p>
            </section>
          </form>
        ) : (
          <div className="success-box visible">
            <div className="success-icon">✓</div>
            <div className="success-title">Request received.</div>
            <p className="success-sub">
              Thank you for submitting your evaluation request.
              <br />
              I will review it personally and contact you within 48 business hours — in your preferred
              language.
              <br />
              <br />
              Not all requests lead to a collaboration. If there is a fit, you will hear from me
              directly.
            </p>
          </div>
        )}

        <div className="wa-alt">
          <div className="wa-alt-text">
            <strong>Prefer WhatsApp? </strong> Write to me directly and I&apos;ll get back to you
            personally.
          </div>
          <a
            href="https://wa.me/393792306809"
            className="btn-wa"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp →
          </a>
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

        /* Error pill – slides in to the right */
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