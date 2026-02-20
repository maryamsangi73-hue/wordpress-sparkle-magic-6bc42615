import { Star } from "lucide-react";

const testimonials = [
  { name: "أحمد / Ahmed", textAr: "خدمة ممتازة! أصلحوا المكيف بسرعة وبسعر مناسب. أنصح بهم بشدة.", textEn: "Excellent service! They fixed my AC quickly and at a fair price. Highly recommend." },
  { name: "محمد / Mohammed", textAr: "الفني كان محترف جداً وأصلح الثلاجة بنفس اليوم. شكراً مركز الدعاء.", textEn: "Very professional technician, fixed the refrigerator the same day. Thank you Markaz Al-Duaa." },
  { name: "عبدالله / Abdullah", textAr: "استخدمت خدماتهم عدة مرات. دائماً موثوقين وأسعار عادلة.", textEn: "I've used their services multiple times. Always reliable and fair pricing." },
];

const TestimonialsSection = () => (
  <section className="py-20 bg-secondary">
    <div className="container">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
          <span dir="rtl">آراء عملائنا</span> / Client Reviews
        </h2>
        <div className="w-12 h-1 bg-accent mx-auto mt-4" />
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card rounded-lg p-8 shadow-md">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-2 italic" dir="rtl">"{t.textAr}"</p>
            <p className="text-muted-foreground text-xs leading-relaxed mb-6 italic">"{t.textEn}"</p>
            <p className="font-heading font-bold text-foreground">{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
