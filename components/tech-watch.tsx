"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { NvidiaNewsFeed } from "@/components/nvidia-news-feed"

export function TechWatch() {
  return (
    <section id="tech-watch" className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Veille Informatique</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-accent via-primary to-accent rounded-full"></div>
          <p className="text-muted-foreground mt-4">Derniere mise a jour : Mars 2026</p>
        </div>

        {/* Actualites NVIDIA en direct */}
        <NvidiaNewsFeed />

        {/* Intro - La nouvelle gamme RTX 5000 */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">
                NVIDIA GeForce RTX Serie 5000 et DLSS 4.5
              </h3>
              <p className="text-lg text-foreground/70 leading-relaxed mb-4">
                La serie RTX 5000 de NVIDIA, basee sur l&apos;architecture Blackwell, est desormais disponible depuis janvier 2026. 
                La RTX 5080 affiche en moyenne 98 FPS en 4K natif avec les reglages maximaux. Plus recemment, NVIDIA a annonce 
                DLSS 4.5 au CES 2026, avec un modele transformer de 2e generation pour le Super Resolution, supportant desormais 
                plus de 400 jeux et applications.
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

        {/* DLSS 4.5 - Nouvelle section */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-72 rounded-lg overflow-hidden shadow-lg order-2 md:order-1 border border-accent/30">
              <Image
                src="/images/5090-benchmarks-tabulated-blender-opendata-scores-with-5090-v0-u05yoobm87ee1.png"
                alt="RTX 5090 Benchmark Scores"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-4 text-accent">DLSS 4.5 : La revolution du Multi Frame Generation</h3>
              <p className="text-base text-foreground/70 leading-relaxed mb-4">
                Annonce au CES 2026, DLSS 4.5 introduit le <strong className="text-foreground">Dynamic Multi Frame Generation</strong> et 
                un nouveau mode <strong className="text-foreground">6X</strong>. Cette technologie peut generer jusqu&apos;a 5 frames 
                supplementaires par frame rendue, permettant d&apos;atteindre plus de 240 FPS en ray tracing sur les GPU RTX 50 Series.
              </p>
              <p className="text-base text-foreground/70 leading-relaxed">
                Le modele transformer de 2e generation utilise <strong className="text-foreground">5 fois plus de puissance de calcul</strong> que 
                le modele original, avec un meilleur eclairage, des bords plus fins et une clarte de mouvement amelioree.
              </p>
            </div>
          </div>
        </div>

        {/* Super Resolution amelioree */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Super Resolution de 2e generation</h3>
              <div className="space-y-4 text-foreground/70">
                <div className="bg-card border border-border/50 p-4 rounded-lg">
                  <p className="font-semibold text-foreground mb-2">Meilleure qualite d&apos;image</p>
                  <p className="text-base leading-relaxed">
                    DLSS 4.5 Super Resolution opere directement en espace lineaire (contrairement aux anciennes techniques en 
                    espace logarithmique), preservant ainsi toute la gamme de couleurs et les details dans les scenes a fort contraste.
                  </p>
                </div>
                <div className="bg-card border border-border/50 p-4 rounded-lg">
                  <p className="font-semibold text-foreground mb-2">Mode Performance ameliore</p>
                  <p className="text-base leading-relaxed">
                    Le mode Performance est desormais comparable, voire superieur, a la qualite native. Le mode Ultra Performance 
                    devient enfin viable pour le gaming en 4K grace a la puissance du nouveau transformer.
                  </p>
                </div>
                <div className="bg-card border border-border/50 p-4 rounded-lg">
                  <p className="font-semibold text-foreground mb-2">Disponible maintenant</p>
                  <p className="text-base leading-relaxed">
                    Tous les utilisateurs GeForce RTX peuvent profiter du nouveau modele DLSS 4.5 Super Resolution dans plus 
                    de 400 titres via l&apos;application NVIDIA.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg border border-primary/30">
              <Image
                src="/images/blackwell-architecture-generale.jpg"
                alt="NVIDIA Blackwell Architecture"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Dynamic Multi Frame Generation */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-72 rounded-lg overflow-hidden shadow-lg order-2 md:order-1 border border-primary/30">
              <Image
                src="/software-developer-coding-3d-graphics-workstation-.jpg"
                alt="Gaming Performance"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-4 text-primary">Dynamic Multi Frame Generation</h3>
              <p className="text-base text-foreground/70 leading-relaxed mb-4">
                Le Dynamic MFG fonctionne comme une boite de vitesses automatique pour votre GPU. Au lieu d&apos;utiliser 
                un multiplicateur fixe, il ajuste automatiquement entre differents multiplicateurs pour atteindre 
                l&apos;equilibre parfait entre framerate, qualite d&apos;image et reactivite.
              </p>
              <p className="text-base text-foreground/70 leading-relaxed">
                Le systeme surveille en permanence l&apos;ecart entre les performances du GPU et le taux de rafraichissement 
                de l&apos;ecran, s&apos;adaptant en temps reel : il monte en multiplicateur dans les scenes intenses et 
                redescend quand la charge diminue.
              </p>
            </div>
          </div>
        </div>

        {/* Des bénéfices concrets pour tous */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-foreground">Benefices pour les professionnels IT</h3>
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
              <h4 className="text-lg font-semibold mb-2 text-accent">Pour les developpeurs</h4>
              <p className="text-sm text-foreground/70">
                Acces a des outils graphiques plus performants avec le support FP8 sur les RTX 40/50 Series, 
                doublant le debit d&apos;inference pour les applications IA.
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
                Postes de travail capables de gerer la modelisation 3D, la realite virtuelle et les simulations 
                complexes avec une efficacite energetique amelioree grace a la gravure 3nm.
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
              <h4 className="text-lg font-semibold mb-2 text-accent">Pour les systemes</h4>
              <p className="text-sm text-foreground/70">
                Meilleure securite materielle, stabilite thermique et longevite grace a l&apos;architecture Blackwell 
                et au support PCIe 5.0 pour une bande passante doublee.
              </p>
            </Card>
          </div>
        </div>

        {/* Spécifications techniques */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-foreground">Specifications techniques cles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border/50 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4 text-accent">RTX 5080</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex justify-between"><span>Performance moyenne 4K</span><span className="text-foreground">98 FPS</span></li>
                <li className="flex justify-between"><span>Architecture</span><span className="text-foreground">Blackwell</span></li>
                <li className="flex justify-between"><span>Memoire</span><span className="text-foreground">GDDR7</span></li>
                <li className="flex justify-between"><span>Gravure</span><span className="text-foreground">3nm</span></li>
              </ul>
            </div>
            <div className="bg-card border border-border/50 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4 text-primary">DLSS 4.5</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex justify-between"><span>Jeux supportes</span><span className="text-foreground">400+</span></li>
                <li className="flex justify-between"><span>Mode max</span><span className="text-foreground">6X MFG</span></li>
                <li className="flex justify-between"><span>Gain perf 4K</span><span className="text-foreground">+35%</span></li>
                <li className="flex justify-between"><span>Statut</span><span className="text-foreground">Beta (Mars 2026)</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-card border border-border/50 rounded-lg p-8 hover:border-accent/30 transition-colors">
          <h3 className="text-2xl font-bold mb-4 text-accent">Conclusion</h3>
          <p className="text-base text-foreground/70 leading-relaxed mb-4">
            La serie RTX 5000 combinee a DLSS 4.5 represente une avancee majeure dans l&apos;evolution des cartes graphiques. 
            Le Dynamic Multi Frame Generation 6X permet desormais d&apos;atteindre 240+ FPS en path tracing, tandis que le 
            modele transformer de 2e generation offre une qualite d&apos;image sans precedent, meme en mode Ultra Performance.
          </p>
          <p className="text-base text-foreground/70 leading-relaxed">
            Pour un professionnel en informatique, comprendre ces evolutions est essentiel : que ce soit pour conseiller 
            les utilisateurs sur le materiel adapte, optimiser les postes de travail graphiques, ou anticiper les besoins 
            en infrastructure pour supporter ces nouvelles technologies. La retrocompatibilite de DLSS 4.5 avec les 
            integrations existantes facilite egalement la transition pour les entreprises.
          </p>
        </div>
      </div>
    </section>
  )
}
