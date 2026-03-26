import { ShieldCheck, TrendingUp, Users, FlaskConical } from "lucide-react";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Sécurité Alimentaire",
    description:
      "Garantir la conformité aux normes HACCP, ISO 22000 et IFS Food pour des produits sûrs et de qualité.",
  },
  {
    icon: TrendingUp,
    title: "Amélioration Continue",
    description:
      "Optimiser les processus avec les méthodes Lean, DMAIC et 5S pour une performance durable.",
  },
  {
    icon: Users,
    title: "Travail d'Équipe",
    description:
      "Collaborer avec les équipes production, R&D et qualité pour atteindre les objectifs communs.",
  },
  {
    icon: FlaskConical,
    title: "Rigueur Scientifique",
    description:
      "Appliquer une approche méthodique et rigoureuse à chaque audit, analyse et mise en conformité.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                À propos
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Assurer la qualité,
              <span className="font-serif italic font-normal text-white">
                {" "}
                du laboratoire à l'assiette.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Ingénieur diplômé en Industrie Agroalimentaire et actuellement en
                M2 Nutrition et Sciences des Aliments, parcours Qualité, Sécurité
                et Environnement de l'Alimentation à Nancy, je me consacre à
                garantir la sécurité et la qualité des produits alimentaires.
              </p>
              <p>
                Mon parcours m'a permis d'acquérir une solide expérience en mise
                en place de référentiels qualité (ISO 22000, IFS Food V8), en
                gestion HACCP, en audits internes et en amélioration continue grâce
                aux méthodes Lean Manufacturing et DMAIC, notamment lors de mes
                stages chez LESAFFRE Maroc et KÄES RACHEL'S.
              </p>
              <p>
                En dehors du travail, je suis passionné par la cuisine
                traditionnelle malienne, le sport — football et musculation — ainsi
                que la lecture d'articles scientifiques et de développement personnel.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                « Ma mission est de contribuer à une alimentation sûre et de
                qualité, en alliant rigueur scientifique, conformité
                réglementaire et amélioration continue des processus. »
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};