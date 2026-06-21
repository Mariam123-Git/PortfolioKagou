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
               Ingénieur QHSE &
              <span className="font-serif italic font-normal text-white">
                {" "}
                Sécurité Alimentaire.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p> 
                Au cours de mes expériences chez KÄES RACHEL'S , LESAFFRE Maroc et dans mes missions actuelles en QHSE, j’ai participé à la mise en œuvre et au suivi des référentiels ISO 22000 et IFS Food V8, à l’animation du système HACCP, à la réalisation d’audits internes, à la gestion des non-conformités ainsi qu’au déploiement d’actions d’amélioration continue sur le terrain.
              </p>
              <p> Aujourd’hui, je suis à la recherche d’un CDD ou CDI en tant que Chargé QHSE, Coordinateur QHSE, Assistant Qualité ou Responsable Qualité . Rigoureux, organisé et orienté résultats, je souhaite contribuer à la performance, à la conformité réglementaire et à la sécurité des produits au sein d’une entreprise ambitieuse. </p>
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