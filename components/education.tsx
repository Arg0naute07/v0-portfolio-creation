"use client"

import Image from "next/image"

export function Education() {
  return (
    <section id="education" className="py-24 px-4 bg-card">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-balance text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
          Mon Parcours Académique & Professionnel
        </h2>

        <div className="space-y-8">
          {/* Formation */}
          <div className="border-l-4 border-primary pl-6">
            <h3 className="text-2xl font-bold text-foreground mb-2">Formation BTS SIO</h3>
            <p className="text-primary font-semibold mb-3">École IPSSIL</p>
            <p className="text-muted-foreground mb-4">
              Je suis actuellement en <strong>BTS SIO (Services Informatiques aux Organisations)</strong>, option{" "}
              <strong>SISR</strong> (Solutions d&apos;Infrastructure, Systèmes et Réseaux).
            </p>
            <p className="text-muted-foreground mb-4">
              Cette formation se déroule sur deux ans et propose deux spécialités au choix:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  <strong>Option SLAM</strong> (Solutions Logicielles et Applications Métiers): axée sur le
                  développement d&apos;applications, la gestion de bases de données et la sécurité informatique.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  <strong>Option SISR</strong> (Solutions d&apos;Infrastructure, Systèmes et Réseaux): orientée vers
                  l&apos;installation, la configuration et la maintenance des équipements informatiques, ainsi que la
                  gestion et la sécurité des réseaux.
                </span>
              </li>
            </ul>
            <p className="text-muted-foreground mt-4">
              J&apos;ai choisi l&apos;option SISR car elle correspond parfaitement à mon intérêt pour les
              infrastructures, la maintenance informatique et les environnements techniques complexes.
            </p>
          </div>

          {/* Stage */}
          <div className="border-l-4 border-primary pl-6">
            <div className="flex items-start gap-6 mb-4">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">Stage Professionnel</h3>
                <p className="text-primary font-semibold mb-3">Angel App - Entreprise innovante</p>
              </div>
              <div className="flex-shrink-0 bg-white rounded-lg p-3 h-fit">
                <Image
                  src="/images/unnamed.webp"
                  alt="Angel App logo"
                  width={100}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>

            <p className="text-muted-foreground mb-4">
              Durant mon stage de deux mois chez Angel App, une entreprise innovante spécialisée dans le développement
              d&apos;applications de géofencing et de suivi en temps réel, j&apos;ai participé à plusieurs projets
              techniques.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <h4 className="font-bold text-foreground mb-2">Surveillance Automatisée du Serveur</h4>
                <p className="text-muted-foreground text-sm mb-2">
                  Mise en place d&apos;un système de vérification automatique de l&apos;état d&apos;un serveur avec n8n,
                  permettant l&apos;exécution de requêtes API toutes les 30 minutes et l&apos;envoi d&apos;alertes
                  e-mail en cas d&apos;anomalie.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Mise en place d&apos;un système de vérification automatique avec n8n</li>
                  <li>• Exécution de requêtes API toutes les 30 minutes</li>
                  <li>• Envoi d&apos;alertes e-mail en cas d&apos;anomalie</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-foreground mb-2">Intégration Continue avec CRM Externe</h4>
                <p className="text-muted-foreground text-sm mb-2">
                  Solution automatisée permettant l&apos;intégration continue des données issues d&apos;une application
                  métier vers un CRM externe.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Automatisation de la synchronisation des données entre systèmes</li>
                  <li>• Récupération et transformation des données via n8n</li>
                  <li>• Transmission automatique des informations clients vers le CRM</li>
                  <li>• Mise en place de logs et notifications d&apos;erreurs pour la maintenance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Alternance */}
          <div className="border-l-4 border-accent pl-6">
            <div className="flex items-start gap-6 mb-4">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">Alternance en Cours</h3>
                <p className="text-accent font-semibold mb-3">ADISTA - Technicien Configuration Routeurs</p>
              </div>
              <div className="flex-shrink-0 bg-white rounded-lg p-3 h-fit">
                <Image
                  src="/images/filters-no-upscale-28-29.webp"
                  alt="ADISTA logo"
                  width={120}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>

            <p className="text-muted-foreground mb-4">
              Je suis actuellement en <strong>alternance chez ADISTA</strong> en tant qu'
              <strong>Apprenti Technicien Intégration</strong>.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <h4 className="font-bold text-foreground mb-2">Configuration de Routeurs - Fibre & 4G</h4>
                <p className="text-muted-foreground text-sm mb-2">
                  Configuration des routeurs via un outil spécialisé avant envoi à l'équipe run qui intègre les
                  paramètres directement dans les équipements. Configuration de solutions de connectivité fibre et 4G.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Configuration des routeurs fibre optique via outil dédié</li>
                  <li>• Paramétrage des modules 4G et technologies de connectivité</li>
                  <li>• Préparation des équipements pour intégration par l'équipe run</li>
                  <li>• Documentation des configurations appliquées</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-foreground mb-2">Mise en Service Télécom</h4>
                <p className="text-muted-foreground text-sm mb-2">
                  Production et mise en service des cartes SIM pour intégration dans les solutions télécom.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Production de cartes SIM</li>
                  <li>• Activation des services télécom</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
