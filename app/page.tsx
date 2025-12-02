"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />

      <section className="py-20 px-4 md:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Explorer mon portfolio
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Projects Card */}
            <Link href="/projects">
              <div className="group h-full p-6 bg-card border border-cyan-500/30 rounded-lg hover:border-cyan-500/80 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all cursor-pointer">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Projets</h3>
                <p className="text-muted-foreground">Découvrez mes projets scolaires et professionnels</p>
              </div>
            </Link>

            {/* Internship Card - CHANGE: Added alternance ADISTA card */}
            <Link href="/about">
              <div className="group h-full p-6 bg-card border border-cyan-500/30 rounded-lg hover:border-cyan-500/80 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all cursor-pointer">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Alternance</h3>
                <p className="text-muted-foreground">Configuration de routeurs en alternance chez ADISTA</p>
              </div>
            </Link>

            {/* Skills Card */}
            <Link href="/skills">
              <div className="group h-full p-6 bg-card border border-cyan-500/30 rounded-lg hover:border-cyan-500/80 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all cursor-pointer">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Compétences</h3>
                <p className="text-muted-foreground">Mes compétences techniques en systèmes et réseaux</p>
              </div>
            </Link>

            {/* Tech Watch Card */}
            <Link href="/tech-watch">
              <div className="group h-full p-6 bg-card border border-cyan-500/30 rounded-lg hover:border-cyan-500/80 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all cursor-pointer">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Veille Tech</h3>
                <p className="text-muted-foreground">Découvrez mon article sur les cartes graphiques RTX 5000</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
