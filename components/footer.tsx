export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-lg font-bold text-foreground">Cristiano</h3>
            <p className="text-muted-foreground text-sm">BTS SIO - Infrastructure & Réseaux</p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              GitHub
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              LinkedIn
            </a>
            <a
              href="mailto:cristiano@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Email
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>&copy; 2025 Cristiano Portfolio. Tous les droits réservés.</p>
          <p className="mt-2">Merci à Éric Kosmala pour ses conseils et son accompagnement.</p>
        </div>
      </div>
    </footer>
  )
}
