import { Phone, Mail, MapPin, Wrench } from "lucide-react";

const FooterSection = () => (
  <footer id="contact-us" className="bg-footer text-footer-foreground">
    <div className="container py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Wrench className="h-6 w-6 text-accent" />
            <span className="font-heading font-bold text-lg text-primary-foreground">مركز <span className="text-accent">الدعاء</span></span>
          </div>
          <p className="text-sm leading-relaxed mb-2" dir="rtl">
            صيانة وإصلاح الأجهزة المنزلية — مهندس كاشف (باكستاني)
          </p>
          <p className="text-sm leading-relaxed">
            Professional appliance repair services — Engineer Kashif (Pakistani)
          </p>
        </div>

        <div>
          <h4 className="font-heading font-bold text-primary-foreground mb-4">اتصل بنا / Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> <span dir="ltr"><li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> <span dir="ltr">0594795932</span></li></span></li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> <span dir="ltr">0582448501</span></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-primary-foreground mb-4">العنوان / Address</h4>
          <div className="space-y-2 text-sm">
            <p className="flex items-start gap-2" dir="rtl">
              <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
              شارع 25 الشهداء، شمالية، محطة سمران، طائف
            </p>
            <p className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
              25 Al Shuhada St, North, Samran Station, Taif
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-bold text-primary-foreground mb-4">خدماتنا / Services</h4>
          <ul className="space-y-1 text-sm" dir="rtl">
            <li>غسالات اتوماتيك / Washing Machines</li>
            <li>ثلاجات / Refrigerators</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="container pb-10">
      <h4 className="font-heading font-bold text-primary-foreground mb-4 text-center">موقعنا / Our Location</h4>
      <div className="rounded-xl overflow-hidden border border-primary/20 shadow-lg">
        <iframe
          title="Markaz Al-Duaa Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.123!2d40.4168!3d21.2703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s25+Al+Shuhada+St%2C+Taif!5e0!3m2!1sen!2ssa!4v1700000000000"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
    <div className="border-t border-primary/30">
      <div className="container py-4 text-center text-xs">
        © 2026 مركز الدعاء — Markaz Al-Duaa. All rights reserved.
      </div>
    </div>
  </footer>
);

export default FooterSection;
