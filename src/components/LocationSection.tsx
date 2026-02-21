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
          src="https://maps.google.com/maps?q=21.268389,40.423333&z=17&output=embed"
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
