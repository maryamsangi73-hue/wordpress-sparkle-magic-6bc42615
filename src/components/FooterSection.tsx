import { Phone, Mail, MapPin, Wrench } from "lucide-react";

const FooterSection = () => (
  <footer id="contact-us" className="bg-footer text-footer-foreground">
    <div className="container py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Wrench className="h-6 w-6 text-accent" />
            <span className="font-heading font-bold text-lg text-primary-foreground">مرکز <span className="text-accent">الدعاء</span></span>
          </div>
          <p className="text-sm leading-relaxed">
            Professional appliance repair services you can trust. We fix all major brands with same-day service availability.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-bold text-primary-foreground mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> +(048) 880 440 110</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> info@appliancerepair.com</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> 124BP, Lacasa Ave, New York</li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-primary-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["Home", "Services", "About Us", "Blog", "Contact Us"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase().replace(/\s/g, "-")}`} className="hover:text-accent transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-primary-foreground mb-4">Working Hours</h4>
          <ul className="space-y-2 text-sm">
            <li>Mon – Fri: 8:00 AM – 6:00 PM</li>
            <li>Saturday: 9:00 AM – 4:00 PM</li>
            <li>Sunday: Emergency Only</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t border-primary/30">
      <div className="container py-4 text-center text-xs">
        © 2026 مرکز الدعاء. All rights reserved.
      </div>
    </div>
  </footer>
);

export default FooterSection;
