"use client"

import Link from "next/link"
import Image from "next/image"
import { Download } from "lucide-react"

export function SynthesisTable() {
  return (
    <section className="py-16 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Tableau de Synthèse</h2>
          <p className="text-muted-foreground">Aperçu de mon tableau de compétences et réalisations</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* PDF Preview Image */}
          <Link
            href="/projects/synthesis-table"
            className="flex-1 block group relative overflow-hidden rounded-lg border-2 border-cyan-500/40 hover:border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30"
          >
            <Image
              src="/images/tableau-synthese.png"
              alt="Tableau de Synthèse BTS SIO - Cristiano Da Conceicao"
              width={500}
              height={700}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center text-white">
                <Download className="w-12 h-12 mx-auto mb-2" />
                <p className="font-semibold">Cliquez pour télécharger</p>
              </div>
            </div>
          </Link>

          {/* Info Section */}
          <div className="flex-1">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg border border-slate-700/50 p-8 space-y-6">
              <div>
                <h3 className="text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  Ce que contient ce tableau
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold mt-0.5">•</span>
                    <span>AP1 - Proposition hardware/software pour visiteurs médicaux</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold mt-0.5">•</span>
                    <span>AP2 - Préconisation technique infrastructure réseaux</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold mt-0.5">•</span>
                    <span>Stages: Supervision serveurs, API, automatisation (N8N)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold mt-0.5">•</span>
                    <span>Alternance: Config routeurs, FTTH/FTTO, intégration réseaux</span>
                  </li>
                </ul>
              </div>

              {/* Link to dedicated page */}
              <Link
                href="/projects/synthesis-table"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-200 border border-cyan-400/50 hover:border-cyan-400 shadow-lg hover:shadow-cyan-500/50 w-full"
              >
                Voir le tableau complet
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
