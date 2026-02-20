import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const CTASection = () => (
  <section className="bg-accent py-16">
    <div className="container text-center">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent-foreground mb-2" dir="rtl">
        هل تحتاج إلى إصلاح عاجل؟
      </h2>
      <p className="text-xl font-heading font-semibold text-accent-foreground/90 mb-4">
        Need Emergency Repair?
      </p>
      <p className="text-accent-foreground/80 mb-8 max-w-lg mx-auto" dir="rtl">
        فنيونا متاحون لإصلاح الأجهزة المنزلية. لا تنتظر — اتصل بنا الآن!
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-bold px-8 py-6 text-base gap-2">
          <Phone className="h-5 w-5" />
          <span dir="ltr"><span dir="ltr">0594795932</span></span>
        </Button>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-bold px-8 py-6 text-base gap-2">
          <Phone className="h-5 w-5" />
          <span dir="ltr">0582448501</span>
        </Button>
      </div>
    </div>
  </section>
);

export default CTASection;
