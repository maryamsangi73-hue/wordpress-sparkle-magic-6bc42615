import { useState } from "react";
import { Menu, X, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { en: "Services", ar: "خدماتنا", href: "#services" },
  { en: "FAQ", ar: "الأسئلة", href: "#faq" },
  { en: "Location", ar: "الموقع", href: "#location" },
  { en: "Contact Us", ar: "اتصل بنا", href: "#contact-us" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-background sticky top-0 z-50 shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2">
          <Wrench className="h-8 w-8 text-accent" />
          <span className="font-heading font-bold text-xl text-primary">مركز <span className="text-accent">الدعاء</span></span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.en}>
              <a
                href={item.href}
                className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground hover:text-accent transition-colors"
              >
                <span>{item.en}</span>
              </a>
            </li>
          ))}
        </ul>

        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border px-4 pb-4">
          {navItems.map((item) => (
            <a
              key={item.en}
              href={item.href}
              className="block py-2 font-heading text-sm font-semibold text-foreground hover:text-accent"
              onClick={() => setOpen(false)}
            >
              {item.ar} / {item.en}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
