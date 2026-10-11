import {
  Stethoscope,
  Salad,
  Sparkles,
  Zap,
  FileSearch,
  Leaf,
  type LucideIcon,
} from "lucide-react";
import { services } from "../../data/siteContent";
import { SectionHeading } from "../ui/SectionHeading";
import { ServiceCard } from "../ui/ServiceCard";

const icons: Record<string, LucideIcon> = {
  Stethoscope,
  Salad,
  Sparkles,
  Zap,
  FileSearch,
  Leaf,
};

export function Services() {
  return (
    <section id="servicos" className="bg-ivory py-20 sm:py-28">
      <div className="container-pad flex flex-col items-center gap-14">
        <SectionHeading title={services.title} subtitle={services.subtitle} />

        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              Icon={icons[service.icon] ?? Leaf}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
