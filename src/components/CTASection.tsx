import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const CTASection = () => (
  <section className="bg-accent py-16">
    <div className="container text-center">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent-foreground mb-4">
        Need Emergency Repair?
      </h2>
      <p className="text-accent-foreground/90 mb-8 max-w-lg mx-auto">
        Our technicians are available 24/7 for emergency appliance repairs. Don't wait — call us now!
      </p>
      <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-bold uppercase px-8 py-6 text-base gap-2">
        <Phone className="h-5 w-5" />
        Call Now: 240-568-9683
      </Button>
    </div>
  </section>
);

export default CTASection;
