import { AirVent, WashingMachine, Refrigerator, Fan, CookingPot, Wrench } from "lucide-react";

const services = [
  { icon: AirVent, titleAr: "صيانة مكيفات", titleEn: "AC Maintenance", descAr: "صيانة وإصلاح جميع أنواع المكيفات", descEn: "Maintenance and repair of all types of air conditioners" },
  { icon: Refrigerator, titleAr: "صيانة ثلاجات", titleEn: "Refrigerator Repair", descAr: "إصلاح جميع أنواع الثلاجات والفريزرات", descEn: "Repair of all types of refrigerators and freezers" },
  { icon: WashingMachine, titleAr: "غسالات اتوماتيك", titleEn: "Washing Machine Repair", descAr: "صيانة وإصلاح الغسالات الأوتوماتيكية", descEn: "Maintenance and repair of automatic washing machines" },
  { icon: Fan, titleAr: "مكنسة كهربائي", titleEn: "Vacuum Cleaner Repair", descAr: "إصلاح جميع أنواع المكانس الكهربائية", descEn: "Repair of all types of vacuum cleaners" },
  { icon: CookingPot, titleAr: "صيانة أفران", titleEn: "Oven Repair", descAr: "إصلاح وصيانة الأفران الكهربائية والغاز", descEn: "Repair and maintenance of electric and gas ovens" },
  { icon: Wrench, titleAr: "تمديد مواسير", titleEn: "Pipe Installation", descAr: "تمديد وإصلاح المواسير والسباكة", descEn: "Pipe installation and plumbing services" },
];

const ServicesSection = () => (
  <section id="services" className="py-20 bg-background">
    <div className="container">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
          <span dir="rtl">خدماتنا</span> / Our Services
        </h2>
        <div className="w-12 h-1 bg-accent mx-auto mt-4" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s) => (
          <div key={s.titleEn} className="group p-8 rounded-lg border border-border bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent transition-colors">
              <s.icon className="h-8 w-8 text-accent group-hover:text-accent-foreground transition-colors" />
            </div>
            <h3 className="font-heading font-bold text-lg text-foreground mb-1" dir="rtl">{s.titleAr}</h3>
            <h4 className="font-heading font-semibold text-sm text-accent mb-3">{s.titleEn}</h4>
            <p className="text-muted-foreground text-sm leading-relaxed mb-1" dir="rtl">{s.descAr}</p>
            <p className="text-muted-foreground text-xs leading-relaxed">{s.descEn}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
