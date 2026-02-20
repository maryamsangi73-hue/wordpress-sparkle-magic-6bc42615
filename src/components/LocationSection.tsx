import { MapPin } from "lucide-react";

const LocationSection = () => (
  <section id="location" className="bg-muted py-16">
    <div className="container">
      <div className="text-center mb-8">
        <h2 className="font-heading text-3xl font-bold text-foreground mb-2">موقعنا / Our Location</h2>
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          <MapPin className="h-5 w-5 text-accent" />
          25 Al Shuhada St, North, Samran Station, Taif
        </p>
      </div>
      <div className="rounded-xl overflow-hidden border border-border shadow-lg">
        <iframe
          title="Markaz Al-Duaa Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.123!2d40.4168!3d21.2703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s25+Al+Shuhada+St%2C+Taif!5e0!3m2!1sen!2ssa!4v1700000000000"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </section>
);

export default LocationSection;
