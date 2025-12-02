export function About() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-balance text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            Qui suis-je ?
          </h2>
          <div className="flex justify-center">
            <div className="h-1 w-32 bg-gradient-to-r from-accent via-primary to-accent rounded-full"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          <div className="space-y-6 text-foreground/80">
            <p className="text-lg leading-relaxed">
              Je m&apos;appelle <strong className="text-accent">Cristiano</strong>, j&apos;ai 19 ans et je suis
              actuellement en première année de BTS SIO, option SISR, à l&apos;école d&apos;informatique{" "}
              <strong className="text-primary">IPSSIL</strong>.
            </p>
            <p className="text-lg leading-relaxed">
              Passionné par l&apos;informatique et la cybersécurité, je me spécialise dans les systèmes et les réseaux.
              Je suis curieux, rigoureux et toujours motivé pour apprendre et relever des défis techniques.
            </p>
            <p className="text-lg leading-relaxed">
              Mon objectif est de progresser chaque jour et de m&apos;épanouir dans un environnement stimulant, en
              développant mon expertise en infrastructures et sécurité informatique.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-card border border-border/50 p-4 rounded-lg hover:border-accent/50 transition-colors">
                <p className="text-3xl font-bold text-accent">19</p>
                <p className="text-sm text-foreground/60">Ans</p>
              </div>
              <div className="bg-card border border-border/50 p-4 rounded-lg hover:border-accent/50 transition-colors">
                <p className="text-3xl font-bold text-primary">BTS</p>
                <p className="text-sm text-foreground/60">SIO SISR</p>
              </div>
              <div className="bg-card border border-border/50 p-4 rounded-lg hover:border-accent/50 transition-colors">
                <p className="text-3xl font-bold text-accent">2</p>
                <p className="text-sm text-foreground/60">Projets majeurs</p>
              </div>
              <div className="bg-card border border-border/50 p-4 rounded-lg hover:border-accent/50 transition-colors">
                <p className="text-3xl font-bold text-primary">1</p>
                <p className="text-sm text-foreground/60">Stage réalisé</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground mb-6">Compétences</h3>
            {[
              { name: "Windows & Windows Server", level: 85 },
              { name: "Réseaux (VLAN, Cisco)", level: 80 },
              { name: "VMware & Virtualisation", level: 75 },
              { name: "N8N & Automatisation", level: 70 },
              { name: "DHCP & Protocoles réseau", level: 75 },
              { name: "Infrastructure IT", level: 80 },
            ].map((skill) => (
              <div key={skill.name} className="space-y-2">
                <p className="text-sm font-medium text-foreground">{skill.name}</p>
                <div className="w-full bg-card border border-border/50 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-accent to-primary rounded-full h-2 transition-all"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
