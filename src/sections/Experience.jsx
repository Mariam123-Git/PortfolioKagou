const experiences = [
  {
    period: "2025 — 2026",
    role: "Alternance Qualité (recherche en cours)",
    company: "Île-de-France",
    description:
      "En parallèle du M2 Nutrition et Sciences des Aliments, parcours Qualité, Sécurité, Environnement de l'Alimentation à Nancy. Recherche active d'une alternance en qualité agroalimentaire pour mettre en pratique les compétences acquises en HACCP, IFS Food, ISO 22000 et amélioration continue.",
    technologies: ["HACCP", "IFS Food V8", "ISO 22000", "Audits", "PMS"],
    current: true,
  },
  {
  period: "juin 2025 — sept. 2025 (4 mois)",
  role: "Assistant Qualité (CDD)",
  company: "France",
  description:
    "Assistance à la responsable QHSE dans les missions quotidiennes : réalisation d’audits internes, participation à la préparation de la certification IFS Food version 8, mise à jour du système HACCP et contribution à la formation du personnel aux bonnes pratiques d’hygiène et de sécurité alimentaire.",
  technologies: ["IFS Food V8", "HACCP", "Audits Internes", "QHSE", "Formation"],
  current: false,
},
  {
    period: "2024 — 2025 (2 mois)",
    role: "Stage Assistant Qualité",
    company: "KÄES RACHEL'S, France",
    description:
      "Contribution à la mise en place du référentiel IFS Food version 8 au sein d'une entreprise spécialisée dans la fabrication de produits de boulangerie, pâtisserie et traiteur. Mise à jour du plan HACCP, gestion de la traçabilité, révision des PRP et réalisation d'audits internes.",
    technologies: ["IFS Food V8", "HACCP", "Traçabilité", "PRP", "Audits Internes"],
    current: false,
  },
  {
    period: "2023 — 2024 (6 mois)",
    role: "Stage de Fin d'Études Ingénieur — Qualité & Sécurité Alimentaire",
    company: "LESAFFRE Maroc (filiale française)",
    description:
      "Contribution à la mise en place de la norme ISO 22000 version 2018 au sein d'une unité de fabrication de levure et améliorants alimentaires. Révision des programmes prérequis (PRP), mise à jour du système HACCP et études des exigences normatives.",
    technologies: ["ISO 22000", "HACCP", "PRP", "Sécurité Alimentaire", "Normes"],
    current: false,
  },
  {
    period: "2022 — 2023 (2,5 mois)",
    role: "Stage Ingénieur Assistant — Lean Manufacturing",
    company: "LESAFFRE Maroc",
    description:
      "Analyse des micro-arrêts de production avec la méthode DMAIC pour identifier et résoudre les interruptions récurrentes. Identification des causes principales : blocage de la machine d'emballage, problèmes de capteurs et erreurs humaines. Proposition de solutions correctives.",
    technologies: ["Lean Manufacturing", "DMAIC", "Méthode 5S", "Analyse de Causes", "Production"],
    current: false,
  },
  {
    period: "2021 — 2022 (1,5 mois)",
    role: "Stage Découverte — Processus Agroalimentaire",
    company: "LESAFFRE Maroc",
    description:
      "Étude des processus de l'entreprise, réalisation des diagrammes de fabrication de levures et améliorants alimentaires, et rédaction d'un rapport de synthèse.",
    technologies: ["Diagrammes de Fabrication", "Processus", "Agroalimentaire", "Rédaction"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Parcours Professionnel
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Une expérience qui{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              fait la différence.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            De la découverte industrielle à la mise en conformité de
            référentiels qualité internationaux, un parcours construit autour
            de la rigueur, de la sécurité alimentaire et de l'amélioration
            continue.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};