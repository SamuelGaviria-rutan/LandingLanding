import { useState } from "react"
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Building2,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Coffee,
  Crosshair,
  Eye,
  Gift,
  MapPin,
  Search,
  Send,
  ShoppingBag,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react"

const carouselSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920&h=1080",
    title: "Oferta de valor Comunidad Empresarial Nred",
    subtitle:
      "Conectamos tu organización con un portafolio de capacidades para el crecimiento de tu negocio.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1416339442236-8ceb164046f8?auto=format&fit=crop&q=80&w=1920&h=1080",
    title: "Gestión Inmobiliaria Inteligente",
    subtitle:
      "Espacios diseñados para la innovación, colaboración y el desarrollo empresarial.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&q=80&w=1920&h=1080",
    title: "Comunidad y Conexión B2B",
    subtitle: "Haciendo match con oportunidades y aliados estratégicos.",
  },
]

const quickAccess = [
  {
    title: "Solicitudes",
    text: "Si tienes alguna solicitud para el equipo Ruta N en temas Locativo y tecnológico, Contractuales, Administración PH y Facturación y cartera.",
    action: "Solicitar aquí",
    href: "https://share.hsforms.com/2ghS1NlyUStufNFaipeqeTQ3a3g2",
    icon: Building2,
  },
  {
    title: "Take a Spot",
    text: "Si necesitas hacer una reservación de salas de reuniones.",
    action: "Agendar reserva",
    href: "https://reservas.rutanmedellin.org/allbookings",
    icon: MapPin,
  },
  {
    title: "MOI",
    text: "Si necesitas gestionar ingreso de visitantes, carga y descarga, reserva de zonas comunes, noticias de la copropiedad.",
    action: "Gestionar accesos",
    href: "https://webapp.moi.city/login",
    icon: Users,
  },
]

const connectionSteps = [
  { title: "Un café de escucha", icon: Coffee },
  { title: "Revisión de hallazgos y match con oportunidades", icon: Search },
  { title: "Devolución de un portafolio de capacidades", icon: Briefcase },
  { title: "Activación de conexiones con capacidades", icon: Zap },
  { title: "Seguimiento al desarrollo", icon: TrendingUp },
]

const benefitSteps = [
  { title: "Revisa", text: "el listado", icon: Eye },
  {
    title: "Identifica",
    text: "el aliado, servicio o producto de tu interés",
    icon: Crosshair,
  },
  { title: "Envía", text: "una solicitud de conexión", icon: Send },
  { title: "Concreta", text: "y disfruta de tu beneficio", icon: Gift },
]

const knowledgeSteps = [
  "Revisa nuestro catálogo de informes por industria.",
  "Selecciona hasta tres informes que sean de tu interés, ya sea sobre tu industria o la de tu segmento estratégico de clientes.",
  "Solicita el acceso a estos informes.",
  "Recibirás los informes en tu correo electrónico.",
]

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () =>
    setCurrentSlide((previous) => (previous + 1) % carouselSlides.length)
  const prevSlide = () =>
    setCurrentSlide((previous) =>
      previous === 0 ? carouselSlides.length - 1 : previous - 1,
    )

  return (
    <main className="min-h-screen overflow-hidden bg-background font-sans text-foreground selection:bg-primary selection:text-dark">
      {/* Hero carousel */}
      <section
        aria-label="Contenido destacado"
        className="relative min-h-[min(42rem,100svh)] border-b-8 border-primary bg-dark lg:min-h-[50rem]"
      >
        {carouselSlides.map((slide, index) => (
          <div
            key={slide.title}
            aria-hidden={index !== currentSlide}
            className={`absolute inset-0 transition-opacity duration-200 ease-out ${
              index === currentSlide ? "z-10 opacity-100" : "z-0 opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt=""
              width="1920"
              height="1080"
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "low"}
              onError={(event) => {
                event.currentTarget.hidden = true
              }}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-dark/65" />
            <div className="relative z-10 mx-auto flex min-h-[min(42rem,100svh)] max-w-7xl items-end px-6 pb-28 pt-14 md:px-10 md:pb-32 md:pt-20 lg:min-h-[50rem] lg:px-12 lg:pb-36">
              <div className="grid w-full min-w-0 items-end gap-7 lg:grid-cols-12 lg:gap-8">
                <div className="min-w-0 lg:col-span-9">
                  <h1 className="max-w-5xl break-words text-balance text-5xl font-extrabold leading-[0.96] tracking-[-0.04em] text-white md:text-7xl lg:text-8xl">
                    {slide.title}
                  </h1>
                </div>
                <p className="max-w-md border-t border-white/40 pt-5 text-lg leading-relaxed text-white lg:col-span-3">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-0 right-0 z-30 flex h-18 items-stretch bg-background text-dark md:right-10 md:h-20 lg:right-12">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Ver imagen anterior"
            className="flex w-16 items-center justify-center border-r border-gray-line transition-colors duration-200 hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-dark"
          >
            <ChevronLeft className="size-5" />
          </button>
          <div className="flex min-w-32 items-center justify-center gap-2 px-5">
            {carouselSlides.map((slide, index) => (
              <button
                type="button"
                key={slide.title}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Ver imagen ${index + 1}`}
                aria-current={index === currentSlide}
                className={`h-1.5 transition-all duration-200 ${
                  index === currentSlide
                    ? "w-8 bg-dark"
                    : "w-3 bg-dark/30 hover:bg-dark"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Ver imagen siguiente"
            className="flex w-16 items-center justify-center border-l border-gray-line transition-colors duration-200 hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-dark"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </section>

      {/* Accesos rápidos */}
      <section className="bg-primary px-6 py-16 md:px-10 md:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid items-end gap-6 md:mb-14 md:gap-8 lg:grid-cols-12 lg:mb-20">
            <h2 className="break-words text-balance text-4xl font-extrabold leading-[0.98] tracking-[-0.04em] text-dark md:text-6xl lg:col-span-8 lg:text-7xl">
              Bienvenido a tu portal de{" "}
              <span className="underline decoration-2 underline-offset-8">
                accesos rápidos
              </span>{" "}
              para la experiencia inmobiliaria
            </h2>
            <p className="max-w-xl border-t border-dark/40 pt-5 text-lg leading-relaxed text-dark lg:col-span-4">
              Aquí encontrarás, de manera ágil y centralizada, los enlaces
              necesarios para realizar reservas, solicitar servicios y acceder a
              espacios de forma sencilla y segura.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-3 md:items-start md:gap-4">
            {quickAccess.map((item, index) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex min-h-0 flex-col overflow-hidden border border-gray-line/50 bg-white p-6 shadow-sm transition-all duration-200 ease-out md:min-h-80 md:p-8 md:hover:-translate-y-0.5 md:hover:border-primary/50 md:hover:shadow-md ${
                  index === 1 ? "md:mt-10" : ""
                }`}
              >
                <div className="absolute -inset-y-px -left-px w-1.5 origin-bottom scale-y-0 bg-dark transition-transform duration-200 md:group-hover:scale-y-100" />
                <div className="mb-8 flex items-start justify-between md:mb-10">
                  <div className="flex size-14 items-center justify-center bg-dark text-primary transition-all duration-200 md:group-hover:scale-110 md:group-hover:bg-primary md:group-hover:text-dark md:group-hover:outline md:group-hover:outline-1 md:group-hover:outline-dark">
                    <item.icon className="size-6" />
                  </div>
                  <span className="text-sm font-bold text-dark/50">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mb-3 text-2xl font-bold tracking-tight text-dark">
                  {item.title}
                </h3>
                <p className="mb-6 flex-1 leading-relaxed text-dark/70 md:mb-8">
                  {item.text}
                </p>
                <div className="flex items-center gap-2 border-t border-gray-line pt-5 text-sm font-bold text-dark">
                  {item.action}
                  <ArrowRight className="size-4 transition-transform duration-200 md:group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Conexión Nred */}
      <section
        id="nred"
        className="bg-dark px-6 py-16 text-white md:px-10 md:py-28 lg:px-12 lg:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 border-b border-white/20 pb-8 md:mb-20 md:pb-10">
            <h2 className="break-words text-balance text-5xl font-extrabold leading-none tracking-[-0.04em] md:text-7xl lg:text-8xl">
              Conexión <span className="text-primary">Nred</span>
            </h2>
          </div>

          <div className="grid gap-12 md:gap-16 lg:grid-cols-12 lg:gap-12">
            <div className="min-w-0 lg:col-span-4">
              <div className="lg:sticky lg:top-12">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.08em] text-primary">
                  ¿Qué es?
                </h3>
                <p className="mb-10 text-lg leading-relaxed text-white/80 md:mb-12 md:text-xl">
                  Es un servicio personalizado donde escuchamos las expectativas
                  y necesidades de tu organización, evaluamos las oportunidades
                  que tenemos a nuestro alcance y te entregamos un portafolio de
                  capacidades que puede aportar al crecimiento de tu negocio.
                </p>
                <p className="mb-5 font-medium text-white">
                  ¿Estas listo para disfrutar de este servicio?
                </p>
                <a
                  href="https://meetings.hubspot.com/diana-carolina-rua-toro?uuid=e5a8a440-963f-48c9-ab2f-41a7dab538c5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-12 w-full items-center justify-center gap-2 bg-primary px-5 py-4 text-center text-sm font-bold text-dark transition-colors duration-200 active:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:w-auto sm:px-7 md:hover:bg-primary-hover"
                >
                  <Calendar className="size-4" />
                  ¡Quiero reservar un cafecito!
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <h3 className="mb-6 text-2xl font-bold">¿Cómo funciona?</h3>
              <div className="border-t border-white/20">
                {connectionSteps.map((step, index) => (
                  <article
                    key={step.title}
                    className="group grid min-w-0 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 border-b border-white/20 py-5 transition-colors duration-200 active:bg-white/5 md:gap-8 md:px-5 md:py-7 md:hover:bg-white/5"
                  >
                    <span className="text-sm font-bold text-primary">
                      0{index + 1}
                    </span>
                    <div className="flex min-w-0 items-center gap-4 md:gap-5">
                      <step.icon className="size-5 shrink-0 text-primary" />
                      <h4 className="min-w-0 break-words text-base font-bold leading-snug transition-colors duration-200 md:text-xl md:group-hover:text-primary">
                        {step.title}
                      </h4>
                    </div>
                    <ArrowRight className="size-4 shrink-0 text-white/40 transition-transform duration-200 md:group-hover:translate-x-1 md:group-hover:text-primary" />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catálogo de Beneficios Nred */}
      <section
        id="beneficios"
        className="border-b border-gray-line bg-background px-6 py-16 md:px-10 md:py-28 lg:px-12 lg:py-36"
      >
        <div className="mx-auto grid max-w-7xl gap-12 md:gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="min-w-0 lg:col-span-5">
            <div className="lg:sticky lg:top-12">
              <h2 className="mb-7 break-words text-balance text-[2.75rem] font-extrabold leading-[0.98] tracking-[-0.04em] text-dark md:mb-8 md:text-6xl">
                Catálogo de Beneficios Nred
              </h2>
              <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.08em] text-dark">
                ¿Qué es?
              </h3>
              <p className="mb-10 max-w-lg text-lg leading-relaxed text-dark/70">
                Es una lista de aliados que ofrecen su portafolio de servicios y
                productos con un beneficio especial por ser parte de nuestras
                Empresas Nred en un modelo de atención B2B.
              </p>

              <div className="border-t border-dark pt-7">
                <p className="mb-5 font-medium text-dark">
                  ¿Estás listo para explorar estos beneficios?
                </p>
                <div className="flex flex-col items-stretch gap-5 sm:items-start">
                  <a
                    href="/docs/NRed_Beneficios.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-h-12 w-full items-center justify-center gap-2 bg-dark px-5 py-4 text-center text-sm font-bold text-white transition-colors duration-200 active:bg-dark-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dark sm:w-auto sm:px-7 md:hover:bg-dark-muted"
                  >
                    <ShoppingBag className="size-4" />
                    Catálogo de beneficios (PDF)
                    <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                  <a
                    href="https://3a3g2.share.hsforms.com/2l7CcIaoCSXes4eFaS3PU5g"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-h-11 items-center justify-center gap-2 text-sm font-bold text-dark underline decoration-1 underline-offset-4 transition-colors duration-200 active:text-dark-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dark sm:justify-start md:hover:text-dark-muted"
                  >
                    Solicita servicio aquí
                    <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <h3 className="mb-7 text-2xl font-bold text-dark">
              ¿Cómo funciona?
            </h3>
            <div className="grid gap-px bg-gray-line sm:grid-cols-2">
              {benefitSteps.map((step, index) => (
                <article
                  key={step.title}
                  className={`group flex min-h-56 flex-col border border-transparent bg-light p-6 shadow-sm transition-all duration-200 ease-out active:border-primary active:bg-primary sm:min-h-72 md:p-9 md:hover:-translate-y-0.5 md:hover:border-primary md:hover:bg-primary md:hover:shadow-xl ${
                    index === 1 || index === 2 ? "sm:bg-background" : ""
                  }`}
                >
                  <div className="mb-8 flex items-start justify-between sm:mb-12">
                    <step.icon className="size-6 text-dark" />
                    <span className="text-sm font-bold text-dark/40">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="mt-auto">
                    <h4 className="mb-2 text-2xl font-bold text-dark">
                      {step.title}
                    </h4>
                    <p className="max-w-xs leading-relaxed text-dark/70">
                      {step.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Talento Tech */}
      <section className="bg-background px-6 py-12 md:px-10 md:py-28 lg:px-12">
        <div className="mx-auto grid max-w-7xl border border-dark md:grid-cols-2">
          <article className="flex flex-col bg-dark p-7 text-white md:min-h-[32rem] md:justify-between md:p-12 lg:p-16">
            <div className="text-sm font-bold uppercase tracking-[0.08em] text-primary">
              Talento Tech
            </div>
            <div className="mt-4 md:mt-0">
              <h3 className="mb-8 break-words text-balance text-3xl font-extrabold leading-[0.98] tracking-[-0.04em] md:mb-10 md:text-5xl">
                CONOCE EL PANORAMA{" "}
                <span className="mt-2 block text-primary">TALENTO TECH</span>
              </h3>
              <a
                href="https://rutanmedellin.org/noticias/informetalentocti"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-12 w-full items-center justify-center gap-2 bg-primary px-7 py-4 text-sm font-bold text-dark transition-colors duration-200 active:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:inline-flex sm:w-auto md:hover:bg-primary-hover"
              >
                Ver informe
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </article>

          <article className="flex flex-col border-t border-dark bg-primary p-7 text-dark md:min-h-[32rem] md:justify-between md:border-l md:border-t-0 md:p-12 lg:p-16">
            <div className="text-sm font-bold uppercase tracking-[0.08em]">
              Comunidad
            </div>
            <div className="mt-4 md:mt-0">
              <h3 className="mb-8 break-words text-balance text-3xl font-extrabold leading-[0.98] tracking-[-0.04em] md:mb-10 md:text-5xl">
                PARTICIPA EN LA ENCUESTA DE{" "}
                <span className="mt-2 block text-white">TALENTO TECH</span>
              </h3>
              <a
                href="https://share.hsforms.com/2XbGemdJQTXCGugrh4DNgVg3a3g2?__hstc=264965520.8e36b32d9be1c0e986cffcc4ed5a062e.1787236420025.1790347805688.1790352894432.26&__hssc=264965520.1.1790352894432&__hsfp=41bc4476bf1b3eb9f6b39f112d6ba0b5"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-12 w-full items-center justify-center gap-2 bg-dark px-7 py-4 text-sm font-bold text-white transition-colors duration-200 active:bg-dark-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dark sm:inline-flex sm:w-auto md:hover:bg-dark-muted"
              >
                Participar ahora
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* Conocimiento Nred */}
      <section
        id="conocimiento"
        className="bg-light px-6 py-16 md:px-10 md:py-28 lg:px-12 lg:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 border-b border-dark pb-10 md:mb-16 md:gap-8 md:pb-12 lg:grid-cols-12 lg:items-end">
            <div className="min-w-0 lg:col-span-8">
              <h2 className="mb-7 break-words text-balance text-[2.75rem] font-extrabold leading-[0.98] tracking-[-0.04em] text-dark md:text-7xl">
                Conocimiento Nred
              </h2>
              <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.08em] text-dark">
                ¿Qué es?
              </h3>
              <p className="max-w-3xl text-lg leading-relaxed text-dark/70">
                Es el acceso exclusivo a conocimiento sobre 26 industrias que
                tenemos a disposición para la comunidad Nred desde el Centro de
                Pensamiento Ruta N.
              </p>
            </div>
            <BookOpen className="hidden size-24 justify-self-end text-primary lg:col-span-4 lg:block" />
          </div>

          <div className="grid gap-12 md:gap-16 lg:grid-cols-12 lg:gap-12">
            <div className="min-w-0 lg:col-span-5">
              <p className="mb-6 text-lg font-medium leading-relaxed text-dark md:text-xl">
                ¿Quieres explorar el contenido especializado que tenemos para
                ti?
              </p>
              <div className="flex flex-col items-stretch gap-5 sm:items-start">
                <a
                  href="/docs/NRed_Conocimiento.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-12 w-full items-center justify-center gap-2 bg-primary px-5 py-4 text-center text-sm font-bold text-dark transition-colors duration-200 active:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dark sm:w-auto sm:px-7 md:hover:bg-primary-hover"
                >
                  Conocer Informes (PDF)
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
                <a
                  href="https://3a3g2.share.hsforms.com/2l7CcIaoCSXes4eFaS3PU5g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-11 items-center justify-center gap-2 text-sm font-bold text-dark underline decoration-1 underline-offset-4 transition-colors duration-200 active:text-dark-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dark sm:justify-start md:hover:text-dark-muted"
                >
                  Solicita acceso aquí
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <h3 className="mb-6 text-2xl font-bold text-dark">
                ¿Cómo funciona?
              </h3>
              <div className="border-t border-dark">
                {knowledgeSteps.map((step, index) => (
                  <article
                    key={step}
                    className="grid min-w-0 grid-cols-[auto_minmax(0,1fr)] gap-4 border-b border-dark/20 py-5 md:gap-10 md:py-6"
                  >
                    <span className="text-sm font-bold text-dark">
                      0{index + 1}
                    </span>
                    <p className="min-w-0 break-words leading-relaxed text-dark/80">
                      {step}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
