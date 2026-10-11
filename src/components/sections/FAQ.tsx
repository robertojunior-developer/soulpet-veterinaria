import { faq } from "../../data/siteContent";
import { SectionHeading } from "../ui/SectionHeading";
import { Accordion } from "../ui/Accordion";

export function FAQ() {
  return (
    <section className="bg-ivory py-20 sm:py-28">
      <div className="container-pad flex flex-col items-center gap-12">
        <SectionHeading title={faq.title} />
        <div className="w-full max-w-3xl">
          <Accordion items={faq.items} />
        </div>
      </div>
    </section>
  );
}
