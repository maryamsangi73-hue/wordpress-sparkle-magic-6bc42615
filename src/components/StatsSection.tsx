import { Shield, Clock, ThumbsUp, Users } from "lucide-react";

const stats = [
  { icon: Clock, value: "15+", label: "Years Experience" },
  { icon: Users, value: "10K+", label: "Happy Customers" },
  { icon: Shield, value: "100%", label: "Satisfaction Guaranteed" },
  { icon: ThumbsUp, value: "50+", label: "Expert Technicians" },
];

const StatsSection = () => (
  <section className="bg-primary py-14">
    <div className="container">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <s.icon className="h-10 w-10 text-accent mx-auto mb-3" />
            <div className="text-3xl md:text-4xl font-heading font-extrabold text-primary-foreground">{s.value}</div>
            <div className="text-sm text-primary-foreground/70 mt-1 font-heading">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
