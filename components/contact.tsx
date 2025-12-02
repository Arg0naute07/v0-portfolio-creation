export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-card">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-balance text-4xl md:text-5xl font-bold text-card-foreground mb-6 text-center">
          Me Contacter
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Des questions ? Un projet à discuter ? N&apos;hésitez pas à me contacter. Je serai ravi d&apos;échanger avec
          vous.
        </p>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Votre email"
              className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <input
            type="text"
            placeholder="Sujet"
            className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            placeholder="Votre message"
            rows={6}
            className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          ></textarea>

          <button
            type="submit"
            className="w-full h-12 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Envoyer le message
          </button>
        </form>

        <div className="mt-16 pt-16 border-t border-border text-center">
          <p className="text-muted-foreground mb-6">Vous pouvez aussi me trouver sur</p>
          <div className="flex justify-center gap-8">
            <a href="#" className="text-card-foreground hover:text-primary transition-colors font-medium">
              GitHub
            </a>
            <a href="#" className="text-card-foreground hover:text-primary transition-colors font-medium">
              LinkedIn
            </a>
            <a
              href="mailto:cristiano@example.com"
              className="text-card-foreground hover:text-primary transition-colors font-medium"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
