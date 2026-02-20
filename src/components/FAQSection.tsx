import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What areas do you serve?", a: "We provide appliance repair services across the entire metropolitan area including all surrounding suburbs within a 50-mile radius." },
  { q: "Do you offer same-day service?", a: "Yes! We offer same-day service for most repairs. Call us before noon and we'll have a technician at your door the same day." },
  { q: "What brands do you repair?", a: "We repair all major brands including Samsung, LG, Whirlpool, GE, Maytag, Frigidaire, Bosch, KitchenAid, and many more." },
  { q: "Do you provide a warranty on repairs?", a: "Absolutely. All our repairs come with a 90-day labor warranty and we use only manufacturer-approved parts that carry their own warranty." },
];

const FAQSection = () => (
  <section className="py-20 bg-background">
    <div className="container max-w-3xl">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
          You've Got Questions, We've Got Answers
        </h2>
        <div className="w-12 h-1 bg-accent mx-auto mt-4" />
      </div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-lg px-6">
            <AccordionTrigger className="font-heading font-semibold text-foreground hover:text-accent hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
