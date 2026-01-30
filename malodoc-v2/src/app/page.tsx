"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Shield, Heart, Pill, Users, Clock, Award, CheckCircle2, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { AnimatedCounter } from "@/components/animated-counter"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"

export default function LandingPage() {
  const { t } = useLanguage()

  const testimonials = [
    {
      name: "Dr. Amina Koné",
      role: t("landing.testimonial.role_doctor"),
      content: t("landing.testimonial.doctor_quote"),
      rating: 5,
      avatar: "/avatar-1.png",
    },
    {
      name: "Jean-Marc Dubois",
      role: t("landing.testimonial.role_patient"),
      content: t("landing.testimonial.patient_quote"),
      rating: 5,
      avatar: "/avatar-2.png",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden">
      {/* Floating Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-4 flex justify-center">
        <div className="glass px-6 py-3 rounded-full flex items-center gap-4 md:gap-8 border border-border bg-card/80 backdrop-blur-md shadow-2xl">
          <Link href="/" className="font-bold text-xl tracking-tighter text-foreground">Malodoc</Link>
          <div className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
            <Link href="#features" className="hover:text-foreground transition-colors">{t("landing.nav.features")}</Link>
            <Link href="#how" className="hover:text-foreground transition-colors">Comment ça marche</Link>
            <Link href="#testimonials" className="hover:text-foreground transition-colors">Témoignages</Link>
          </div>

          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ModeToggle />
            <Link href="/auth/login">
              <Button size="sm" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-8 px-4 font-semibold ml-2">
                {t("landing.nav.signin")}
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section with Background */}
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-[120px] animate-pulse"></div>
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 brightness-150 contrast-150"></div>
          </div>

          <div className="relative z-10 container px-4 md:px-6 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-4"
            >
              <div className="inline-flex items-center rounded-full border border-border bg-card/50 px-3 py-1 text-sm text-muted-foreground backdrop-blur-md mb-4">
                <span className="flex h-2 w-2 rounded-full bg-secondary mr-2 animate-pulse"></span>
                {t("landing.hero.badge")}
              </div>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/40 pb-4 whitespace-pre-line">
                {t("landing.hero.title")}
              </h1>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                {t("landing.hero.desc")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex gap-4"
            >
              <Button asChild size="lg" className="rounded-full h-12 px-8 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold transition-all hover:scale-105">
                <Link href="/auth/register">
                  {t("landing.cta.start")} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full h-12 px-8 border-border bg-card/50 hover:bg-accent text-foreground backdrop-blur-sm transition-all hover:scale-105">
                <Link href="/auth/login">
                  {t("landing.cta.dashboard")}
                </Link>
              </Button>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute bottom-10"
            >
              <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-2">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1.5 h-1.5 bg-primary rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-24 bg-muted/5 relative">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { icon: Users, value: 10000, suffix: "+", label: "Patients Actifs" },
                { icon: Award, value: 500, suffix: "+", label: "Médecins Vérifiés" },
                { icon: Calendar, value: 50, suffix: "+", label: "Pharmacies Partenaires" },
                { icon: Heart, value: 98, suffix: "%", label: "Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 text-center group hover:scale-105 transition-transform"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                  <div className="text-4xl font-bold text-foreground mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Timeline */}
        <section id="how" className="w-full py-24 relative">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Comment ça marche ?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Accédez aux soins de santé en 4 étapes simples
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {[
                { icon: Users, title: "Créez votre compte", desc: "Inscription gratuite en moins de 2 minutes" },
                { icon: Calendar, title: "Trouvez un médecin", desc: "Parcourez notre réseau de professionnels vérifiés" },
                { icon: Clock, title: "Réservez en ligne", desc: "Choisissez votre créneau horaire préféré" },
                { icon: CheckCircle2, title: "Consultez en sécurité", desc: "Profitez de votre consultation en toute confiance" },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex gap-6 mb-12 last:mb-0"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary border-4 border-background shadow-lg">
                      <step.icon className="w-8 h-8" />
                    </div>
                    {index < 3 && <div className="w-1 flex-1 bg-gradient-to-b from-primary/50 to-transparent mt-2" />}
                  </div>
                  <div className="flex-1 pb-12">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Bento Grid */}
        <section id="features" className="w-full py-24 bg-muted/5 relative z-10">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">{t("landing.features.title")}</h2>
              <p className="text-muted-foreground">{t("landing.features.desc")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Large Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="md:col-span-2 glass-card p-8 flex flex-col justify-between min-h-[300px] relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Calendar className="w-48 h-48 text-primary" />
                </div>
                <div>
                  <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{t("landing.feature.scheduling")}</h3>
                  <p className="text-muted-foreground max-w-sm">{t("landing.feature.scheduling_desc")}</p>
                </div>
              </motion.div>

              {/* Tall Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="md:row-span-2 glass-card p-8 flex flex-col min-h-[300px] relative overflow-hidden group"
              >
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl group-hover:bg-secondary/30 transition-all"></div>
                <div className="h-12 w-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4 text-secondary">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{t("landing.feature.trust")}</h3>
                <p className="text-muted-foreground mb-6">{t("landing.feature.trust_desc")}</p>
                <div className="mt-auto space-y-2">
                  <div className="flex items-center gap-3 text-sm text-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary"></div> {t("landing.feature.trust_doctors")}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary"></div> {t("landing.feature.trust_pharmacies")}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary"></div> {t("landing.feature.trust_donors")}
                  </div>
                </div>
              </motion.div>

              {/* Small Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-card p-8"
              >
                <div className="h-10 w-10 rounded-lg bg-red-500/20 flex items-center justify-center mb-4 text-red-400">
                  <Heart className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{t("landing.feature.donations")}</h3>
                <p className="text-sm text-muted-foreground mt-2">{t("landing.feature.donations_desc")}</p>
              </motion.div>

              {/* Small Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-card p-8"
              >
                <div className="h-10 w-10 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4 text-orange-400">
                  <Pill className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{t("landing.feature.map")}</h3>
                <p className="text-sm text-muted-foreground mt-2">{t("landing.feature.map_desc")}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mockups Showcase */}
        <section className="w-full py-24 relative overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Interface Moderne & Intuitive</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Découvrez notre plateforme conçue pour simplifier votre expérience santé
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-6 group hover:scale-105 transition-transform"
              >
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/dashboard-patient.png"
                    alt="Dashboard Patient"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mt-4">Espace Patient</h3>
                <p className="text-muted-foreground text-sm mt-2">
                  Gérez vos rendez-vous, consultez votre historique médical
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-6 group hover:scale-105 transition-transform"
              >
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/dashboard-doctor.png"
                    alt="Dashboard Médecin"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mt-4">Espace Médecin</h3>
                <p className="text-muted-foreground text-sm mt-2">
                  Gérez vos patients, consultations et statistiques
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="w-full py-24 bg-muted/5">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Ce qu'ils disent de nous</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Des milliers d'utilisateurs satisfaits à travers le pays
              </p>
            </div>

            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-primary/20 blur-[150px] animate-pulse"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Prêt à révolutionner votre santé ?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Rejoignez des milliers d'utilisateurs qui ont déjà fait le choix de Malodoc
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full h-14 px-10 bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  <Link href="/auth/register">
                    Commencer Gratuitement <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full h-14 px-10 border-2 font-bold text-lg hover:scale-105 transition-all">
                  <Link href="#how">
                    En savoir plus
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-8 w-full shrink-0 border-t border-border bg-background text-center relative z-10">
        <p className="text-xs text-muted-foreground">{t("landing.footer")}</p>
      </footer>
    </div>
  )
}
