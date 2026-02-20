import { Star } from "lucide-react";

const testimonials = [
  { name: "Valtteri Erkin", text: "Excellent service! They fixed my washing machine the same day I called. Very professional and affordable. Highly recommend to anyone needing appliance repairs." },
  { name: "Anar Norwood", text: "The technician was punctual, knowledgeable, and had my refrigerator working perfectly again. Great communication throughout the entire process." },
  { name: "Kory Junior", text: "I've used their services multiple times now. Always reliable, always fair pricing. They're my go-to for any appliance issues at home." },
];

const TestimonialsSection = () => (
  <section className="py-20 bg-secondary">
    <div className="container">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">What Our Clients Say</h2>
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
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
            <p className="font-heading font-bold text-foreground">{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
