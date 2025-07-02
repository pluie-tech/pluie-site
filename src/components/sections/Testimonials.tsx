import Image from 'next/image';
import SectionTitle from '../SectionTitle';

export interface Testimonial {
  quote: string;
  author: string;
}

export interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  quotes?: Testimonial[];
}

export default function Testimonials({
  title,
  subtitle,
  quotes
}: TestimonialsProps) {
  return (
    <section id="depoimentos" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={title}
          subtitle={subtitle}
        />

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3">
          {quotes && quotes.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-4xl p-8 bg-gradient-to-b from-[#E1EFF899]/60 to-[#E0F8ED99]/60"
            >
              <div className="">
                <Image
                  className="size-16 rounded-2xl mb-6"
                  src={`/images/testimonials/testimonial${index + 1}.png`}
                  width={64}
                  height={64}
                  alt="User avatar"
                />
                <blockquote className="leading-7 text-lg font-medium font-heading mb-4">
                  {testimonial.quote}
                </blockquote>
                <cite className="not-italic">
                  — {testimonial.author}
                </cite>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
