import { Phone, Facebook, Twitter, Linkedin } from "lucide-react";

const TopBar = () => (
  <div className="bg-topbar text-topbar-foreground">
    <div className="container flex items-center justify-between py-2 text-sm">
      <div className="flex items-center gap-2">
        <Phone className="h-4 w-4" />
        <span className="font-heading font-semibold">Call us: 240-568-9683</span>
      </div>
      <div className="hidden sm:flex items-center gap-3">
        <a href="#" className="hover:text-accent transition-colors"><Facebook className="h-4 w-4" /></a>
        <a href="#" className="hover:text-accent transition-colors"><Twitter className="h-4 w-4" /></a>
        <a href="#" className="hover:text-accent transition-colors"><Linkedin className="h-4 w-4" /></a>
      </div>
    </div>
  </div>
);

export default TopBar;
