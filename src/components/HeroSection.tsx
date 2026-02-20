import heroImage from "@/assets/hero-repairman.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section id="home" className="relative overflow-hidden bg-hero min-h-[520px] lg:min-h-[560px]">
    <div className="absolute inset-0 bg-gradient-to-r from-hero-overlay/90 via-hero-overlay/60 to-transparent z-10" />
    <img
      src={heroImage}
      alt="Professional appliance repair technician"
      className="absolute inset-0 w-full h-full object-cover object-right-top"
    />
    <div className="container relative z-20 flex items-center min-h-[520px] lg:min-h-[560px]">
      <div className="max-w-xl py-16 lg:py-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground leading-tight uppercase">
          We Offer Same<br />Day Service.
        </h1>
        <div className="w-16 h-1 bg-accent mt-4 mb-6" />
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-md">
          We make it a priority to offer flexible services to accommodate your needs
        </p>
        <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-bold uppercase px-8 py-6 text-base tracking-wide">
          Get a Quote Now
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
