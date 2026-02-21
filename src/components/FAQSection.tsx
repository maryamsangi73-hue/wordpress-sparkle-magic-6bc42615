import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { qAr: "ما هي المناطق التي تخدمونها؟", qEn: "What areas do you serve?", aAr: "نقدم خدمات صيانة الأجهزة المنزلية في طائف والمناطق المحيطة بها.", aEn: "We provide appliance repair services in Taif and surrounding areas." },
  { qAr: "ما هي الأجهزة التي تصلحونها؟", qEn: "What appliances do you repair?", aAr: "نصلح الثلاجات والغسالات الأوتوماتيكية والمكيفات.", aEn: "We repair refrigerators, automatic washing machines, and air conditioners." },
  { qAr: "هل تقدمون خدمة في نفس اليوم؟", qEn: "Do you offer same-day service?", aAr: "نعم! اتصل بنا وسنرسل فنياً في أقرب وقت ممكن.", aEn: "Yes! Call us and we'll send a technician as soon as possible." },
  { qAr: "كيف يمكنني التواصل معكم؟", qEn: "How can I contact you?", aAr: "يمكنك الاتصال بنا على الأرقام: 0594795932 أو 0582448501", aEn: "You can call us at: 0594795932 or 0582448501" },
];

const FAQSection = () => (
  <section id="faq" className="py-20 bg-background">
    <div className="container max-w-3xl">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
          <span dir="rtl">الأسئلة الشائعة</span> / FAQ
        </h2>
        <div className="w-12 h-1 bg-accent mx-auto mt-4" />
      </div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-lg px-6">
            <AccordionTrigger className="font-heading font-semibold text-foreground hover:text-accent hover:no-underline text-right">
              <div>
                <span dir="rtl" className="block">{faq.qAr}</span>
                <span className="block text-sm text-muted-foreground font-normal">{faq.qEn}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              <p dir="rtl" className="mb-1">{faq.aAr}</p>
              <p className="text-sm">{faq.aEn}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
