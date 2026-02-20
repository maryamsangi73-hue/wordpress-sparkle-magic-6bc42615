import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
    <a
      href="https://wa.me/966594795932"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#25D366] hover:bg-[#1da851] text-white rounded-full p-4 shadow-lg transition-transform hover:scale-110"
      aria-label="WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
    <a
      href="tel:0594795932"
      className="bg-accent text-accent-foreground rounded-full p-4 shadow-lg transition-transform hover:scale-110"
      aria-label="Call us"
    >
      <Phone className="h-6 w-6" />
    </a>
  </div>
);

export default FloatingButtons;
