import { motion } from "motion/react";
import { InstagramGlyph as InstagramIcon } from "../ui/InstagramGlyph";
import { instagram } from "../../data/siteContent";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

export function InstagramSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-pad flex flex-col items-center gap-10">
        <SectionHeading title={instagram.title} subtitle={instagram.text} />

        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3">
          {instagram.posts.map((post, index) => (
            <motion.a
              key={post.src}
              href={instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group relative aspect-square overflow-hidden rounded-2xl"
              aria-label={`Ver publicação no Instagram: ${post.alt}`}
            >
              <img
                src={post.src}
                alt={post.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-charcoal/0 transition-colors duration-300 group-hover:bg-deep-green/40">
                <InstagramIcon
                  className="h-7 w-7 text-ivory opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </span>
            </motion.a>
          ))}
        </div>

        <Button href={instagram.url} target="_blank" rel="noopener noreferrer" variant="secondary">
          <InstagramIcon className="h-4 w-4" aria-hidden="true" />
          {instagram.cta}
        </Button>
      </div>
    </section>
  );
}
