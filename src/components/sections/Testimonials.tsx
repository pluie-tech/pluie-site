import Image from 'next/image';
import SectionTitle from '../SectionTitle';

export interface Testimonial {
  quote: string;
  author: string;
  authorImage: string;
}

export interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
}

export default function Testimonials({
  title = "Tecnologia que faz sentido pra todo mundo",
  subtitle = "Não importa se é dono do negócio ou se é quem está usando: o que a gente faz resolve e funciona de verdade.",
  testimonials = [
    {
      quote: "Eu não entendo nada de tecnologia, mas eles explicaram tudo com clareza e foram super parceiros do começo ao fim.",
      author: "Irene, dona de clínica",
      authorImage: "/images/testimonials/testimonial1.png"
    },
    {
      quote: "Usei o DESAFIADO e consegui alcançar meus objetivos de vida.",
      author: "Pi, dono de zoológico",
      authorImage: "/images/testimonials/testimonial2.png"
    },
    {
      quote: "Graças ao GASTADO eu consegui comprar minha coleção de bonecos de Jojo Parte 3.",
      author: "Cleia, otaku safada",
      authorImage: "/images/testimonials/testimonial3.png"
    }
  ]
}: TestimonialsProps) {
  return (
    <section id="depoimentos" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={title}
          subtitle={subtitle}
        />

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-4xl p-8 bg-gradient-to-b from-[#E1EFF899]/60 to-[#E0F8ED99]/60"
            >
              <div className="">
                <Image
                  className="size-16 rounded-2xl mb-6"
                  src={testimonial.authorImage}
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
