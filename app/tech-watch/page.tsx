"use client"

import { Header } from "@/components/header"
import { TechWatch } from "@/components/tech-watch"
import { Footer } from "@/components/footer"

export default function TechWatchPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <TechWatch />
      <Footer />
    </main>
  )
}
