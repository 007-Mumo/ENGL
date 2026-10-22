import { Download, Mail } from "lucide-react";
import { contactInfo, navLinks, profile } from "@/data/cv";

export function Footer() {
  return (
    <footer className="bg-espresso text-cream/75">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-semibold text-cream">
              {profile.wordmark}
            </p>
            <p className="mt-3 font-display text-lg italic text-cream/90">
              &ldquo;{profile.footerStatement}&rdquo;
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="eyebrow text-[0.65rem] text-mustard">Quick Links</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-mustard"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow text-[0.65rem] text-mustard">Get in Touch</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-mustard"
                >
                  <Mail className="h-4 w-4" aria-hidden />
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={profile.cvPath}
                  download
                  className="inline-flex items-center gap-2 transition-colors hover:text-mustard"
                >
                  <Download className="h-4 w-4" aria-hidden />
                  Download My CV
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-cream/15 pt-6 text-center text-xs text-cream/60">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
