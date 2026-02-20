import { useState } from "react";
import { Menu, X, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = ["Home", "Services", "About Us", "Blog", "Contact Us"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-background sticky top-0 z-50 shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2">
          <Wrench className="h-8 w-8 text-accent" />
          <span className="font-heading font-bold text-xl text-primary">Appliance<span className="text-accent">Repair</span></span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground hover:text-accent transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <Button className="hidden lg:inline-flex bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold uppercase text-sm px-6">
          Request a Quote
        </Button>

        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border px-4 pb-4">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
              className="block py-2 font-heading text-sm font-semibold uppercase text-foreground hover:text-accent"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button className="mt-2 w-full bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold uppercase text-sm">
            Request a Quote
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
