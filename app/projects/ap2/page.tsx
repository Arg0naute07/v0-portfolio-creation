"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ChevronLeft, ExternalLink } from "lucide-react"

export default function AP2Page() {
  const pdfUrl =
    "https://blobs.vusercontent.net/blob/AP2%20-%20PR%C3%89CONISATION%20TECHNIQUE%20POUR%20L%E2%80%99INFRASTRUCTURE%20R%C3%89SEAUX%20DE%20L%E2%80%99ENTREPRISE-0FJ7NFPZ9vcu2HKm2TUFEJ8DKg7cPr.pdf"

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-8 px-4 md:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Link href="/projects" className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors">
            <ChevronLeft className="w-5 h-5" />
            Retour aux projets
          </Link>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              AP2 - Infrastructure Réseaux Entreprise
            </h1>
            <p className="text-muted-foreground mb-6 text-lg">
              Préconisation technique pour une infrastructure réseau fonctionnelle et optimisée, tenant compte des
              besoins en connectivité, sécurité et performance.
            </p>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all"
            >
              <ExternalLink className="w-5 h-5" />
              Ouvrir dans un nouvel onglet
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
