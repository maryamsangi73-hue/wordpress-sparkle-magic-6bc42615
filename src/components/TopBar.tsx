import { Phone, Facebook, Twitter, Linkedin } from "lucide-react";

const TopBar = () => (
  <div className="bg-topbar text-topbar-foreground">
    <div className="container flex items-center justify-between py-2 text-sm">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          <span className="font-heading font-semibold" dir="ltr"><span className="font-heading font-semibold" dir="ltr">0594795932</span></span>
        </div>
        <span className="hidden sm:inline font-heading font-semibold" dir="ltr">0582448501</span>
        <span className="hidden md:inline font-heading font-semibold">info@fixac.io</span>
      </div>
      <div className="hidden sm:flex items-center gap-3">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Facebook className="h-4 w-4" /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Twitter className="h-4 w-4" /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Linkedin className="h-4 w-4" /></a>
      </div>
    </div>
  </div>
);

export default TopBar;
