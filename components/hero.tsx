export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="space-y-6">
          <h1 className="text-balance text-5xl md:text-7xl lg:text-8xl font-bold">
            <span className="bg-gradient-to-r from-foreground via-accent to-primary bg-clip-text text-transparent">
              Cristiano
            </span>
            <span className="text-accent">.</span>
          </h1>
          <p className="text-balance text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            Étudiant en BTS SIO, option SISR. Spécialisé dans les infrastructures réseaux, l&apos;automatisation et la
            cybersécurité. Passionné par les technologies de pointe et les systèmes d&apos;information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          </div>
        </div>
      </div>
    </section>
  )
}
