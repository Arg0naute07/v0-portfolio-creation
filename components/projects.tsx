"use client"

import Link from "next/link"

const PROJECTS = [
  {
    id: 1,
    title: "AP1 - Proposition Hardware & Software",
    description:
      "Proposition commerciale professionnelle pour équiper des visiteurs médicaux en solutions matérielles et logicielles adaptées à leurs besoins sur le terrain.",
    category: "Projet Scolaire",
    tags: ["Analyse", "Proposition", "Équipements IT"],
    link: "/projects/ap1",
  },
  {
    id: 2,
    title: "AP2 - Infrastructure Réseaux Entreprise",
    description:
      "Préconisation technique pour une infrastructure réseau fonctionnelle et optimisée, tenant compte des besoins en connectivité, sécurité et performance.",
    category: "Projet Scolaire",
    tags: ["Infrastruture", "Réseaux", "Sécurité"],
    link: "/projects/ap2",
  },
  {
    id: 3,
    title: "Stage - Surveillance Serveur Automatisée",
    description:
      "Mise en place d'un système automatisé chez Angel App permettant de surveiller le bon fonctionnement d'un serveur avec n8n, exécution de requêtes API toutes les 30 minutes et envoi d'alertes e-mail en cas d'anomalie.",
    category: "Stage Professionnel",
    tags: ["N8N", "Automatisation", "APIs", "Monitoring"],
  },
  {
    id: 4,
    title: "Stage - Intégration Continue CRM",
    description:
      "Solution automatisée permettant l'intégration continue des données issues d'une application métier vers un CRM externe. Architecture API-to-API avec synchronisation, transformation de données, journalisation et notifications d'erreurs.",
    category: "Stage Professionnel",
    tags: ["Intégration API", "CRM", "Automatisation", "N8N"],
  },
  {
    id: 5,
    title: "Alternance - Déploiement Téléphonie IP",
    description:
      "Participation au déploiement d'un système de communication unifiée sur réseau IP chez un client. Installation et configuration d'une solution de téléphonie utilisant le protocole VoIP, permettant une communication efficace et moderne au sein de l'entreprise.",
    category: "Alternance",
    tags: ["VoIP", "Téléphonie IP", "Réseaux", "Communication Unifiée"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-balance text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">Mes Projets</h2>
          <div className="flex justify-center">
            <div className="h-1 w-32 bg-gradient-to-r from-accent via-primary to-accent rounded-full"></div>
          </div>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {/* Projets Scolaires */}
          <div>
            <h3 className="text-2xl font-bold text-accent mb-6">Projets Scolaires</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {PROJECTS.filter((p) => p.category === "Projet Scolaire").map((project) => (
                <div
                  key={project.id}
                  className="rounded-lg border border-border hover:border-accent/50 transition-all overflow-hidden group bg-card hover:bg-card/80 hover:shadow-lg hover:shadow-accent/10"
                >
                  <div className="p-6">
                    {project.link ? (
                      <Link href={project.link}>
                        <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors cursor-pointer hover:underline">
                          {project.title}
                        </h4>
                      </Link>
                    ) : (
                      <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h4>
                    )}
                    <p className="text-foreground/70 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-primary/20 text-accent border border-accent/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stage Professionnel */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Stage Professionnel chez Angel App</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {PROJECTS.filter((p) => p.category === "Stage Professionnel").map((project) => (
                <div
                  key={project.id}
                  className="rounded-lg border border-border hover:border-primary/50 transition-all overflow-hidden group bg-card hover:bg-card/80 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-foreground/70 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Alternance */}
          <div>
            <h3 className="text-2xl font-bold text-emerald-500 mb-6">Alternance</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {PROJECTS.filter((p) => p.category === "Alternance").map((project) => (
                <div
                  key={project.id}
                  className="rounded-lg border border-border hover:border-emerald-500/50 transition-all overflow-hidden group bg-card hover:bg-card/80 hover:shadow-lg hover:shadow-emerald-500/10"
                >
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-emerald-500 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-foreground/70 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-500 border border-emerald-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
