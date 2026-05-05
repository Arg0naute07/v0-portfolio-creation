"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ExternalLink, ArrowLeft } from "lucide-react"

export default function SynthesisTablePage() {
  const pdfUrl =
    "https://blobs.vusercontent.net/blob/Tableau%20de%20Synth%C3%A8se%20-%20E5%20-%20Cristiano%20DA%20CONCEICAO%20ALVES-GKN8Rcnw99HJEWZUkvkQwj4gzoEu0r.pdf"

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Back button */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 mb-8 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour aux projets
          </Link>

          {/* Title */}
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Tableau de Synthèse - BTS SIO
          </h1>
          <p className="text-muted-foreground mb-12 text-lg">Compétences, réalisations et technologies maîtrisées</p>

          {/* Main content */}
          <div className="flex flex-col gap-8">
            {/* Description */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg border border-slate-700/50 p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-cyan-400 rounded-full"></span>À propos de ce tableau
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ce tableau officiel récapitule mes compétences en tant que développeur SISR (Solutions
                d'Infrastructures, Systèmes et Réseaux), mes réalisations académiques et professionnelles, ainsi que les
                technologies que j'ai acquises lors de ma formation en BTS SIO.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold mt-0.5">✓</span>
                  <span>Compétences SISR (Infrastructure, Maintenance, Sécurité)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold mt-0.5">✓</span>
                  <span>Réalisations académiques et professionnelles détaillées</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold mt-0.5">✓</span>
                  <span>Technologies : Windows Server, VMware, Cisco, N8N, VLAN, DHCP</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold mt-0.5">✓</span>
                  <span>Dates et contextes de réalisation de chaque projet</span>
                </li>
              </ul>
            </div>

            {/* Open in new tab button */}
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-200 border border-cyan-400/50 hover:border-cyan-400 shadow-lg hover:shadow-cyan-500/50"
            >
              <ExternalLink className="w-5 h-5" />
              Ouvrir le tableau dans un nouvel onglet
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
