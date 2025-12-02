"use client"

import { Header } from "@/components/header"
import { Projects } from "@/components/projects"
import { SynthesisTable } from "@/components/synthesis-table"
import { Footer } from "@/components/footer"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Mes Projets
          </h1>
          <p className="text-muted-foreground mb-12 text-lg">
            Découvrez mes réalisations académiques et professionnelles
          </p>
        </div>
      </section>
      <Projects />
      <SynthesisTable />
      <Footer />
    </main>
  )
}
