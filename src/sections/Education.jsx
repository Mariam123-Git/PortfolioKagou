import { GraduationCap, MapPin, Calendar } from "lucide-react";

const formations = [
  {
    period: "2025 — 2026",
    diploma: "M2 Nutrition et Sciences des Aliments",
    speciality: "Parcours Qualité, Sécurité, Environnement de l'Alimentation",
    school: "Université de Lorraine",
    location: "Nancy, France",
    description:
      "Formation approfondie en management de la qualité et sécurité alimentaire, maîtrise des référentiels normatifs, audits qualité, gestion des risques et environnement réglementaire du secteur agroalimentaire.",
    current: true,
  },
  {
    period: "2024 — 2025",
    diploma: "Master 1 Nutrition et Sciences des Aliments (NSA)",
    speciality: null,
    school: "Université de Lorraine",
    location: "Vandœuvre-lès-Nancy, France",
    description:
      "Formation axée sur la qualité et la sécurité alimentaire, incluant les outils de l'assurance qualité (HACCP…), la réglementation et l'étiquetage des aliments, ainsi que la communication en nutrition.",
    current: false,
  },
  {
    period: "2021 — 2024",
    diploma: "Diplôme d'Ingénieur d'État en Industrie Agroalimentaire",
    speciality: null,
    school: "Faculté des Sciences et Techniques de Fès",
    location: "Fès, Maroc",
    description:
      "Formation d'ingénieur couvrant les procédés de transformation alimentaire, le contrôle qualité, la gestion de production, le Lean Manufacturing et les normes de sécurité alimentaire internationales.",
    current: false,
  },
  {
    period: "2019 — 2021",
    diploma: "Diplôme d'Étude Universitaire en Sciences et Techniques",
    speciality: "Biologie – Chimie – Géologie",
    school: "FST d'Errachidia",
    location: "Errachidia, Maroc",
    description:
      "Cycle préparatoire en sciences fondamentales avec une base solide en biologie, chimie et géologie, préparant à l'intégration en cycle ingénieur.",
    current: false,
  },
  {
    period: "2019",
    diploma: "Baccalauréat en Sciences Expérimentales",
    speciality: null,
    school: null,
    location: "Mali",
    description:
      "Obtention du baccalauréat scientifique, première étape vers un parcours universitaire en sciences et industrie agroalimentaire.",
    current: false,
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div
        className="absolute bottom-1/3 right-1/4 w-80
       h-80 bg-primary/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Formations
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Un parcours académique{" "}
            <span className="font-serif italic font-normal text-white">
              solide et spécialisé.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            Du baccalauréat scientifique au Mali jusqu'au Master 2 en France,
            un cheminement progressif vers l'expertise en qualité et sécurité
            alimentaire.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          <div className="space-y-12">
            {formations.map((formation, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {formation.current && (
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
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                    {/* Period */}
                    <div
                      className={`flex items-center gap-2 text-sm text-primary font-medium ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{formation.period}</span>
                      {formation.current && (
                        <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs rounded-full">
                          En cours
                        </span>
                      )}
                    </div>

                    {/* Diploma */}
                    <div className="mt-3">
                      <div
                        className={`flex items-start gap-2 ${
                          idx % 2 === 0 ? "md:justify-end" : ""
                        }`}
                      >
                        <GraduationCap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <h3 className="text-xl font-semibold">
                          {formation.diploma}
                        </h3>
                      </div>
                      {formation.speciality && (
                        <p className="text-sm text-primary/80 mt-1 font-medium">
                          {formation.speciality}
                        </p>
                      )}
                    </div>

                    {/* School & Location */}
                    <div
                      className={`flex items-center gap-2 mt-2 text-muted-foreground ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm">
                        {formation.school
                          ? `${formation.school} — ${formation.location}`
                          : formation.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mt-4">
                      {formation.description}
                    </p>
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