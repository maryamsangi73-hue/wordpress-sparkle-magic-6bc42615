import heroImage from "@/assets/hero-repairman.jpg";
import serviceFridge from "@/assets/service-fridge.jpg";
import serviceWasher from "@/assets/service-washer.jpg";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const HeroSection = () => (
  <section id="home" className="relative overflow-hidden bg-hero min-h-[520px] lg:min-h-[560px]">
    <div className="absolute inset-0 bg-gradient-to-r from-hero-overlay/90 via-hero-overlay/60 to-transparent z-10" />
    <img
      src={heroImage}
      alt="مهندس كاشف - فني صيانة أجهزة منزلية محترف"
      className="absolute inset-0 w-full h-full object-cover object-right-top"
    />
    <div className="container relative z-20 flex flex-col lg:flex-row items-center min-h-[520px] lg:min-h-[560px]">
      <div className="max-w-xl py-10 lg:py-24 flex-1">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground leading-tight">
          <span className="block text-accent text-2xl md:text-3xl mb-2">مركز الدعاء</span>
          <span className="block" dir="rtl">صيانة وإصلاح الأجهزة المنزلية</span>
          <span className="block text-xl md:text-2xl mt-2 font-bold opacity-90">Appliance Repair Services</span>
        </h1>
        <div className="w-16 h-1 bg-accent mt-4 mb-6" />
        <p className="text-base md:text-lg text-primary-foreground/90 mb-2" dir="rtl">
          مهندس كاشف (باكستاني)
        </p>
        <p className="text-base md:text-lg text-primary-foreground/80 mb-2">
          Engineer Kashif (Pakistani)
        </p>
        <p className="text-sm md:text-base text-primary-foreground/80 mb-6" dir="rtl">
          التكييف · التبريد · صيانة مكيفات · ثلاجات · غسالات اتوماتيك · مكنسة كهربائي · فرن · تمديد مواسير
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-bold px-8 py-6 text-base gap-2">
            <Phone className="h-5 w-5" />
            <span dir="ltr">0594795932</span>
          </Button>
          <Button variant="outline" className="border-accent text-accent-foreground bg-primary/80 hover:bg-primary font-heading font-bold px-8 py-6 text-base gap-2">
            <Phone className="h-5 w-5" />
            <span dir="ltr">0582448501</span>
          </Button>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center gap-4 pb-8 lg:pb-0 w-full max-w-xs sm:max-w-md lg:max-w-none">
        <img
          src={serviceFridge}
          alt="صيانة ثلاجات - Refrigerator Repair"
          className="w-[45%] max-w-[180px] h-auto rounded-xl shadow-lg border-2 border-accent/30 object-cover aspect-[3/4]"
        />
        <img
          src={serviceWasher}
          alt="غسالات اتوماتيك - Washing Machine Repair"
          className="w-[45%] max-w-[180px] h-auto rounded-xl shadow-lg border-2 border-accent/30 object-cover aspect-[3/4]"
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
