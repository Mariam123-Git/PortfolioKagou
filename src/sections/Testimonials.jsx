import { Quote, Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Sophie Martin",
    role: "Responsable Qualité",
    company: "KÄES RACHEL'S",
    content:
      "Kagou a fait preuve d'une grande rigueur lors de son stage. Sa contribution à la mise en place de l'IFS Food V8 a été remarquable, notamment sur la mise à jour du plan HACCP et la gestion de la traçabilité. Un profil sérieux et autonome.",
    rating: 5,
    initials: "SM",
  },
  {
    name: "Ahmed Bennani",
    role: "Directeur Qualité & Sécurité Alimentaire",
    company: "LESAFFRE Maroc",
    content:
      "Durant son stage de fin d'études, Kagou a démontré une excellente compréhension des exigences de la norme ISO 22000. Son travail sur les révisions PRP et HACCP était méthodique et bien documenté. Je le recommande vivement.",
    rating: 5,
    initials: "AB",
  },
  {
    name: "Dr. Claire Dupont",
    role: "Enseignante-Chercheure en Sciences des Aliments",
    company: "Université de Lorraine",
    content:
      "Kagou est un étudiant impliqué et curieux, toujours à la recherche de l'excellence. Sa capacité à lier théorie et pratique, notamment en matière de sécurité alimentaire et de réglementation, en fait un futur professionnel très prometteur.",
    rating: 5,
    initials: "CD",
  },
  {
    name: "Moussa Traoré",
    role: "Président du Club IAA Knowledge",
    company: "FST de Fès",
    content:
      "Kagou était un membre actif et engagé du club. Son aisance relationnelle et son sens de l'organisation ont été précieux pour l'intégration des nouveaux étudiants et le développement du réseau avec les lauréats de la filière.",
    rating: 5,
    initials: "MT",
  },
  {
    name: "Rachid El Amrani",
    role: "Ingénieur Production",
    company: "LESAFFRE Maroc",
    content:
      "Lors de son stage en Lean Manufacturing, Kagou a su analyser les micro-arrêts de production avec méthode. Son utilisation de la démarche DMAIC a permis d'identifier des causes concrètes et de proposer des solutions pertinentes.",
    rating: 5,
    initials: "RA",
  },
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Témoignages
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Ce qu'ils disent{" "}
            <span className="font-serif italic font-normal text-white">
              de moi.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Retours de superviseurs, enseignants et collaborateurs qui ont
            accompagné mon parcours professionnel et académique.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="glass rounded-3xl p-8 md:p-12 border border-primary/30 animate-fade-in animation-delay-300 relative">
            {/* Quote Icon */}
            <div className="absolute -top-5 left-8">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-5 h-5 text-background" />
              </div>
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6 mt-2">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-500 fill-yellow-500"
                />
              ))}
            </div>

            {/* Content */}
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
              « {testimonials[activeIndex].content} »
            </p>

            {/* Author */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonials[activeIndex].initials}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[activeIndex].role}
                  </p>
                  <p className="text-sm text-primary">
                    {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all cursor-pointer"
                  aria-label="Témoignage précédent"
                >
                  ←
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all cursor-pointer"
                  aria-label="Témoignage suivant"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Témoignage ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};