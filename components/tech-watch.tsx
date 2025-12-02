"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"

export function TechWatch() {
  return (
    <section id="tech-watch" className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Veille Informatique</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-accent via-primary to-accent rounded-full"></div>
        </div>

        {/* Intro - La nouvelle gamme RTX 5000 */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">
                La nouvelle gamme de cartes graphiques NVIDIA GeForce RTX Série 5000
              </h3>
              <p className="text-lg text-foreground/70 leading-relaxed mb-4">
                Bien qu'annoncée avec suspense il y a plusieurs mois, la série RTX 5000 de NVIDIA est désormais
                disponible. Les premières informations officielles nous permettent maintenant de comprendre ce que cette
                nouvelle génération apporte : des performances significativement accrues, une meilleure efficacité
                énergétique, et surtout, une intégration encore plus poussée de l'intelligence artificielle dans le
                traitement graphique.
              </p>
            </div>
            <div className="relative h-72 rounded-lg overflow-hidden shadow-lg border border-accent/30">
              <Image
                src="/nvidia-rtx-5000-graphics-card-professional-3d-rend.jpg"
                alt="NVIDIA GeForce RTX 5000 Series"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Des performances en hausse */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-72 rounded-lg overflow-hidden shadow-lg order-2 md:order-1 border border-accent/30">
              <Image
                src="/images/5090-benchmarks-tabulated-blender-opendata-scores-with-5090-v0-u05yoobm87ee1.png"
                alt="Blender OpenData GPU Benchmark Scores RTX 5090"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-4 text-accent">Des performances en hausse</h3>
              <p className="text-base text-foreground/70 leading-relaxed mb-4">
                Les premières estimations montrent que les cartes les plus puissantes, comme la RTX 5090 ou la RTX 5080,
                pourraient offrir jusqu'à 60% de gain de performance par rapport à leurs prédécesseurs directs (la RTX
                4090 et la RTX 4080). Cela s'explique notamment par un nombre accru de cœurs de calcul, une fréquence
                plus élevée, ainsi qu'une nouvelle génération de mémoire vidéo très rapide : la GDDR7.
              </p>
            </div>
          </div>
        </div>

        {/* Mémoire, stockage et fluidité */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Mémoire, stockage et fluidité</h3>
              <div className="space-y-4 text-foreground/70">
                <div className="bg-card border border-border/50 p-4 rounded-lg">
                  <p className="font-semibold text-foreground mb-2">Mémoire GDDR7</p>
                  <p className="text-base leading-relaxed">
                    Un autre point important concerne la gestion de la mémoire. La GDDR7, nouvelle génération de mémoire
                    vidéo, sera beaucoup plus rapide que la GDDR6X actuelle. Cela réduira les temps de chargement et
                    améliorera la fluidité des images affichées.
                  </p>
                </div>
                <div className="bg-card border border-border/50 p-4 rounded-lg">
                  <p className="font-semibold text-foreground mb-2">PCIe 5.0 & DLSS 4</p>
                  <p className="text-base leading-relaxed">
                    En parallèle, la prise en charge du PCIe 5.0 doublera la bande passante entre la carte graphique et
                    le reste de l'ordinateur. Enfin, les technologies d'intelligence artificielle comme DLSS 4 devraient
                    connaître une grande évolution, permettant d'améliorer la qualité d'image sans augmenter la charge
                    sur la carte.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Une architecture repensée */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-72 rounded-lg overflow-hidden shadow-lg order-2 md:order-1 border border-primary/30">
              <Image
                src="/images/blackwell-architecture-generale.jpg"
                alt="NVIDIA GeForce Blackwell Neural Rendering Architecture"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-4 text-primary">Une architecture repensée</h3>
              <p className="text-base text-foreground/70 leading-relaxed mb-4">
                Les nouvelles cartes devraient être basées sur une architecture appelée Blackwell, qui succède à celle
                utilisée dans la série actuelle, nommée Ada Lovelace. Cette évolution profitera d'une gravure en 3 nm,
                ce qui signifie que les composants internes seront encore plus petits, plus rapides et moins
                énergivores.
              </p>
              <p className="text-base text-foreground/70 leading-relaxed">
                Cette nouvelle génération va aussi continuer à améliorer les technologies déjà présentes dans les
                modèles actuels, comme les RT Cores pour le ray tracing (le réalisme visuel) et les Tensor Cores pour
                l'intelligence artificielle.
              </p>
            </div>
          </div>
        </div>

        {/* Des bénéfices concrets pour tous */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-foreground">Des bénéfices concrets pour tous</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 border-accent/30 hover:border-accent/60 bg-card transition-all hover:shadow-lg hover:shadow-accent/10">
              <div className="relative h-40 mb-4 rounded-lg overflow-hidden border border-accent/30">
                <Image
                  src="/software-developer-coding-3d-graphics-workstation-.jpg"
                  alt="Developers"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-accent">Pour les développeurs</h4>
              <p className="text-sm text-foreground/70">
                Les développeurs et administrateurs système auront accès à des outils graphiques plus performants et
                mieux optimisés.
              </p>
            </Card>

            <Card className="p-6 border-primary/30 hover:border-primary/60 bg-card transition-all hover:shadow-lg hover:shadow-primary/10">
              <div className="relative h-40 mb-4 rounded-lg overflow-hidden border border-primary/30">
                <Image
                  src="/business-office-3d-modeling-cad-design-professiona.jpg"
                  alt="Enterprises"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-primary">Pour les entreprises</h4>
              <p className="text-sm text-foreground/70">
                Les entreprises pourront équiper leurs employés avec des postes de travail capables de gérer facilement
                la modélisation 3D, la réalité virtuelle ou les simulations complexes.
              </p>
            </Card>

            <Card className="p-6 border-accent/30 hover:border-accent/60 bg-card transition-all hover:shadow-lg hover:shadow-accent/10">
              <div className="relative h-40 mb-4 rounded-lg overflow-hidden border border-accent/30">
                <Image
                  src="/server-data-center-infrastructure-gpu-computing-pe.jpg"
                  alt="Systems"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-accent">Pour les systèmes</h4>
              <p className="text-sm text-foreground/70">
                Les systèmes informatiques gagneront en sécurité matérielle, en stabilité thermique et en longévité
                grâce à une gestion plus fine de la chaleur et de l'énergie.
              </p>
            </Card>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-card border border-border/50 rounded-lg p-8 hover:border-accent/30 transition-colors">
          <h3 className="text-2xl font-bold mb-4 text-accent">Conclusion</h3>
          <p className="text-base text-foreground/70 leading-relaxed mb-4">
            En somme, la série RTX 5000 de NVIDIA représente une étape importante dans l'évolution des cartes
            graphiques. Grâce à une architecture plus moderne, une utilisation poussée de l'intelligence artificielle,
            et une montée en puissance impressionnante, elle répondra aux besoins croissants des utilisateurs
            professionnels et amateurs.
          </p>
          <p className="text-base text-foreground/70 leading-relaxed">
            Comprendre ces évolutions est essentiel pour un futur professionnel en informatique, qu'il travaille dans le
            développement, la maintenance ou la gestion de parc informatique. Cela permet de choisir le bon matériel,
            d'accompagner les utilisateurs dans leur quotidien, et de rester à jour face à un marché en constante
            évolution.
          </p>
        </div>
      </div>
    </section>
  )
}
