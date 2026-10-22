import { useState, type ChangeEvent, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { contactSchema, type ContactInput } from "@/lib/contact";
import { contactInfo } from "@/data/cv";

type Status = "idle" | "sending" | "success" | "error";

type FieldErrors = Partial<Record<keyof ContactInput, string>>;

const initialForm: ContactInput = { name: "", email: "", subject: "", message: "" };

export function Contact() {
  const [form, setForm] = useState<ContactInput>(initialForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  const update =
    (field: keyof ContactInput) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
      if (status === "success" || status === "error") setStatus("idle");
    };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as keyof ContactInput;
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setStatus("sending");
    const { error } = await supabase.from("contact_messages").insert(parsed.data);
    if (error) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setForm(initialForm);
    setErrors({});
  }

  const inputClass =
    "w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-ring focus:outline-none";

  const details = [
    { icon: Mail, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
    { icon: Phone, label: "Phone", value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: "Location", value: contactInfo.location },
  ];

  return (
    <section id="contact" className="scroll-mt-24 bg-forest-deep">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
        <div>
          <p className="eyebrow text-mustard">Contact</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-cream sm:text-5xl">
            Let&apos;s Connect.
          </h2>
          <div aria-hidden className="mt-4 h-0.5 w-16 bg-mustard" />
          <p className="mt-6 max-w-md leading-relaxed text-cream/75">
            Whether it is an opportunity, a collaboration, or simply a hello —
            my inbox is always open. I would love to hear from you.
          </p>
          <ul className="mt-8 space-y-4">
            {details.map((detail) => (
              <li key={detail.label} className="flex items-center gap-4">
                <span
                  aria-hidden
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream/10"
                >
                  <detail.icon className="h-4.5 w-4.5 text-mustard" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-cream/60">
                    {detail.label}
                  </p>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="text-sm font-medium text-cream transition-colors hover:text-mustard"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-cream">{detail.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-card p-6 shadow-xl shadow-black/20 sm:p-8">
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={form.name}
                  onChange={update("name")}
                  maxLength={100}
                  placeholder="Your name"
                  aria-invalid={Boolean(errors.name)}
                  className={inputClass}
                />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  maxLength={255}
                  placeholder="you@example.com"
                  aria-invalid={Boolean(errors.email)}
                  className={inputClass}
                />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-medium text-foreground">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                value={form.subject}
                onChange={update("subject")}
                maxLength={150}
                placeholder="What is this about?"
                aria-invalid={Boolean(errors.subject)}
                className={inputClass}
              />
              {errors.subject && <p className="mt-1 text-xs text-destructive">{errors.subject}</p>}
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="contact-message"
                value={form.message}
                onChange={update("message")}
                maxLength={1000}
                rows={5}
                placeholder="Write your message here…"
                aria-invalid={Boolean(errors.message)}
                className={`${inputClass} resize-none`}
              />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>

            {status === "success" && (
              <p
                role="status"
                className="flex items-center gap-2 rounded-lg bg-accent/30 px-4 py-3 text-sm font-medium text-forest-deep"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-forest" aria-hidden />
                Thank you! Your message has been sent — I will get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p
                role="alert"
                className="flex items-center gap-2 rounded-lg bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive"
              >
                <AlertCircle className="h-4 w-4 shrink-0" aria-hidden />
                Something went wrong. Please try again, or email me directly at{" "}
                <a href={`mailto:${contactInfo.email}`} className="underline">
                  {contactInfo.email}
                </a>
                .
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-mustard hover:text-espresso disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                  Sending…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" aria-hidden />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
