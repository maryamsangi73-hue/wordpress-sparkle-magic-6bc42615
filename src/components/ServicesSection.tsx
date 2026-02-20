import { WashingMachine, Tv, Refrigerator, Coffee, CookingPot, Settings } from "lucide-react";

const services = [
  { icon: WashingMachine, title: "Washing Machine Repair", desc: "Expert washing machine diagnostics and repair for all major brands. Same-day service available." },
  { icon: Tv, title: "TV Repair", desc: "Professional TV repair including LED, LCD, OLED and plasma screens. Quick turnaround guaranteed." },
  { icon: Refrigerator, title: "Refrigerator Repair", desc: "Complete refrigerator and freezer repair services. We fix cooling issues, leaks and more." },
  { icon: Coffee, title: "Coffee Maker Repair", desc: "Specialized coffee machine repair for espresso, drip and single-serve models." },
  { icon: CookingPot, title: "Cooker Electrical Repair", desc: "Electric and gas cooker repair including ovens, stovetops and range hoods." },
  { icon: Settings, title: "Other Appliances Repair", desc: "We repair dishwashers, dryers, microwaves and all other household appliances." },
];

const ServicesSection = () => (
  <section id="services" className="py-20 bg-background">
    <div className="container">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Our Services</h2>
        <div className="w-12 h-1 bg-accent mx-auto mt-4" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s) => (
          <div key={s.title} className="group p-8 rounded-lg border border-border bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent transition-colors">
              <s.icon className="h-8 w-8 text-accent group-hover:text-accent-foreground transition-colors" />
            </div>
            <h3 className="font-heading font-bold text-lg text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
