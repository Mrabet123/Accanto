import Link from "next/link";
import Image from "next/image";

const WHATSAPP_NUMBER = "39XXXXXXXXXX"; // replace with your real WhatsApp number
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const badges = [
  { label: "Personal Care professional/OSS", className: "bg-[#e3f5f0] text-[#0b5d50]" },
  { label: "5 languages", className: "bg-[#eaf0fb] text-[#1f4f9c]" },
  { label: "Over 18 years experience", className: "bg-[#f7e9cf] text-[#8a5a14]" },
  { label: "Individual care", className: "bg-[#f2ede4] text-[#4b4b4b]" },
];

export default function Hero() {
  return (
    <section className="bg-[#f7f3ee] px-4 py-6 md:px-8 md:py-10">
      <div className="p-4 md:p-6">
        <div className="rounded-[24px] border border-[#d9d3c8] bg-white px-6 py-7 md:px-12 md:py-12">
          <div className="flex flex-col gap-12 md:flex-row md:items-start md:gap-12">
            <div className="max-w-[680px] flex-1">
              <p className="text-[13px] uppercase tracking-[0.24em] text-[#8d8176]">
                CAREGIVER COMO LAKE / VALTELLINA / MILANO
              </p>

              <h1 className="mt-5 max-w-[720px] font-serif text-[34px] leading-[1.1] text-[#141414] md:text-[48px]">
                You&apos;re looking for a reliable healthcare professional support you can trust?
                <br />
                Not someone who&apos;s just available.
              </h1>

              <p className="mt-5 max-w-[690px] text-[17px] leading-8 text-[#3f3a35]">
                Structured home care for the elderly, disabled, and minors. A human
                approach, professional methods, and multilingual communication.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {badges.map((badge) => (
                  <span
                    key={badge.label}
                    className={`rounded-full px-4 py-2 text-[15px] leading-none shadow-[0_1px_0_rgba(0,0,0,0.04)] ring-1 ring-black/5 ${badge.className}`}
                  >
                    {badge.label}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/request"
                  
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-[14px] border border-[#2a2a2a] bg-white px-7 py-4 text-[18px] font-medium text-[#111] transition-colors hover:bg-[#f6f1ea]"
                >
                  Send me a request
                </Link>
              </div>
            </div>

            <div className="ml-auto flex w-full justify-center md:justify-end md:w-[360px]">
              <div className="relative h-[400px] w-full max-w-[340px] rounded-[24px] border border-[#d9d3c8] bg-[#f4efe7] overflow-hidden shadow-md">
                <Image
                  src="/Images/4.jpg"
                  alt="Professional caregiver portrait"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 340px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}