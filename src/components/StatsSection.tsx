import { Shield, Clock, ThumbsUp, Wrench } from "lucide-react";

const stats = [
  { icon: Clock, valueEn: "Fast", valueAr: "سريع", labelEn: "Same Day Service", labelAr: "خدمة في نفس اليوم" },
  { icon: Wrench, valueEn: "Expert", valueAr: "خبير", labelEn: "Professional Engineer", labelAr: "مهندس محترف" },
  { icon: Shield, valueEn: "100%", valueAr: "١٠٠٪", labelEn: "Quality Guaranteed", labelAr: "جودة مضمونة" },
  { icon: ThumbsUp, valueEn: "Trusted", valueAr: "موثوق", labelEn: "Reliable Service", labelAr: "خدمة موثوقة" },
];

const StatsSection = () => (
  <section className="bg-primary py-14">
    <div className="container">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.labelEn} className="text-center">
            <s.icon className="h-10 w-10 text-accent mx-auto mb-3" />
            <div className="text-2xl md:text-3xl font-heading font-extrabold text-primary-foreground">{s.valueAr}</div>
            <div className="text-sm text-primary-foreground/90 mt-1 font-heading">{s.valueEn}</div>
            <div className="text-xs text-primary-foreground/60 mt-0.5">{s.labelAr}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
