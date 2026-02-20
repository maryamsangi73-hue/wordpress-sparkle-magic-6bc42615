import serviceAc from "@/assets/service-ac.jpg";
import serviceFridge from "@/assets/service-fridge.jpg";
import serviceWasher from "@/assets/service-washer.jpg";
import serviceVacuum from "@/assets/service-vacuum.jpg";
import serviceOven from "@/assets/service-oven.jpg";
import servicePipes from "@/assets/service-pipes.jpg";

const services = [
  { image: serviceAc, titleAr: "صيانة مكيفات", titleEn: "AC Maintenance", descAr: "صيانة وإصلاح جميع أنواع المكيفات", descEn: "Maintenance and repair of all types of air conditioners" },
  { image: serviceFridge, titleAr: "صيانة ثلاجات", titleEn: "Refrigerator Repair", descAr: "إصلاح جميع أنواع الثلاجات والفريزرات", descEn: "Repair of all types of refrigerators and freezers" },
  { image: serviceWasher, titleAr: "غسالات اتوماتيك", titleEn: "Washing Machine Repair", descAr: "صيانة وإصلاح الغسالات الأوتوماتيكية", descEn: "Maintenance and repair of automatic washing machines" },
  { image: serviceVacuum, titleAr: "مكنسة كهربائي", titleEn: "Vacuum Cleaner Repair", descAr: "إصلاح جميع أنواع المكانس الكهربائية", descEn: "Repair of all types of vacuum cleaners" },
  { image: serviceOven, titleAr: "صيانة أفران", titleEn: "Oven Repair", descAr: "إصلاح وصيانة الأفران الكهربائية والغاز", descEn: "Repair and maintenance of electric and gas ovens" },
  { image: servicePipes, titleAr: "تمديد مواسير", titleEn: "Pipe Installation", descAr: "تمديد وإصلاح المواسير والسباكة", descEn: "Pipe installation and plumbing services" },
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
          <div key={s.titleEn} className="group rounded-lg border border-border bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img
                src={s.image}
                alt={`${s.titleAr} - ${s.titleEn}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="font-heading font-bold text-lg text-foreground mb-1" dir="rtl">{s.titleAr}</h3>
              <h4 className="font-heading font-semibold text-sm text-accent mb-3">{s.titleEn}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-1" dir="rtl">{s.descAr}</p>
              <p className="text-muted-foreground text-xs leading-relaxed">{s.descEn}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
