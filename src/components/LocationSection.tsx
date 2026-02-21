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
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3103.2392846494063!2d40.42075837431312!3d21.26839387950672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDE2JzA2LjIiTiA0MMKwMjUnMjQuMCJF!5e1!3m2!1sen!2s!4v1771657174379!5m2!1sen!2s"
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
