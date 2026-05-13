import React from "react";

const WHATSAPP_NUMBER = "261388795783";
const WHATSAPP_DISPLAY = "+261 38 87 957 83";
const WHATSAPP_MESSAGE = "Bonjour BRO WIFI ZONE, je souhaite vérifier si ma maison est couverte par vos offres internet CPE.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// Quand tu auras créé ton groupe WhatsApp, remplace ce lien par ton vrai lien d'invitation.
// Exemple : https://chat.whatsapp.com/xxxxxxxxxxxxxxxxxxxxxx
const FORUM_GROUP_LINK = WHATSAPP_LINK;

function createWhatsappQuestionLink(topic) {
  const message = `Bonjour BRO WIFI ZONE, j'ai une question Forum Réseaux sur : ${topic}. Pouvez-vous m'aider ?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const images = {
  logo: "/logo-bro-wifi-zone.webp",
  banner: "/banniere-bro-wifi-zone.webp",
};

const plans = [
  {
    name: "Starter",
    speed: "5 Mbps",
    price: "50.000 Ar",
    color: "green",
    description: "Idéal pour un usage basique.",
    features: ["Navigation web", "Réseaux sociaux", "Messagerie", "Support de base"],
  },
  {
    name: "Confort",
    speed: "10 Mbps",
    price: "70.000 Ar",
    color: "blue",
    description: "Parfait pour la maison.",
    features: ["Navigation fluide", "Streaming HD", "Plusieurs appareils", "Bon rapport qualité/prix"],
    highlighted: true,
  },
  {
    name: "Premium",
    speed: "15 Mbps",
    price: "90.000 Ar",
    color: "gold",
    description: "Pour une expérience optimale.",
    features: ["Très haute performance", "Streaming 4K", "Jeux en ligne", "Support prioritaire"],
  },
];

const equipments = [
  { icon: "satellite", title: "Starlink", text: "Source internet haut débit pour alimenter le réseau local." },
  { icon: "router", title: "MikroTik", text: "Routeurs, gestion réseau, contrôle d'accès, optimisation et sécurité." },
  { icon: "tower", title: "Antennes CPE", text: "Connexion client par antenne installée chez vous selon la couverture." },
  { icon: "wifi", title: "WiFi & points d'accès", text: "Distribution du signal pour maisons, commerces et zones à couvrir." },
];

const advantages = [
  { icon: "people", title: "Proximité", text: "Un service local avec accompagnement et conseils." },
  { icon: "bolt", title: "Installation simple", text: "Vérification de couverture puis installation CPE adaptée." },
  { icon: "shield", title: "Réseau contrôlé", text: "Infrastructure suivie pour offrir une connexion plus stable." },
  { icon: "tools", title: "Dépannage", text: "Aide, configuration et résolution des problèmes de connexion." },
];

function validatePlans(list) {
  return (
    Array.isArray(list) &&
    list.length === 3 &&
    list.some((plan) => plan.name === "Starter" && plan.speed === "5 Mbps" && plan.price === "50.000 Ar") &&
    list.some((plan) => plan.name === "Confort" && plan.speed === "10 Mbps" && plan.price === "70.000 Ar") &&
    list.some((plan) => plan.name === "Premium" && plan.speed === "15 Mbps" && plan.price === "90.000 Ar")
  );
}

const testResults = [
  { name: "Les 3 offres sont présentes", passed: plans.length === 3 },
  { name: "Les tarifs et débits sont corrects", passed: validatePlans(plans) },
  { name: "Le lien WhatsApp est configuré", passed: WHATSAPP_LINK.includes("wa.me/") && WHATSAPP_NUMBER.length >= 10 },
  { name: "Le Forum Réseaux est configuré", passed: FORUM_GROUP_LINK.length > 0 && typeof createWhatsappQuestionLink("test") === "string" },
];

export default function BroWifiZoneLandingPage() {
  const allTestsPassed = testResults.every((test) => test.passed);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Nav />
      <Hero />
      <About />
      <Offers />
      <Equipment />
      <Advantages />
      <ForumSection />
      <Contact />
      <FloatingWhatsApp />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-cyan-400/20 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
        <a href="#accueil" className="flex items-center gap-3">
          <LogoImage small />
          <div className="hidden sm:block">
            <p className="font-black tracking-wide">BRO WIFI ZONE</p>
            <p className="text-xs text-slate-400">Connecter • Configurer • Partager</p>
          </div>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-bold text-slate-200 lg:flex">
          <a className="hover:text-cyan-300" href="#apropos">À propos</a>
          <a className="hover:text-cyan-300" href="#offres">Offres</a>
          <a className="hover:text-cyan-300" href="#equipements">Équipements</a>
          <a className="hover:text-cyan-300" href="#avantages">Avantages</a>
          <a className="hover:text-cyan-300" href="#forum">Forum Réseaux</a>
          <a className="hover:text-cyan-300" href="#contact">Contact</a>
        </nav>
        <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="rounded-2xl bg-green-500 px-4 py-3 text-center text-sm font-black text-white shadow-lg shadow-green-900/40 hover:bg-green-400">
          WhatsApp<br className="sm:hidden" /> <span className="hidden sm:inline">{WHATSAPP_DISPLAY}</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden border-b border-cyan-400/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.35),transparent_35%),linear-gradient(135deg,#020617,#071a33_45%,#020617)]" />
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(56,189,248,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,.18) 1px, transparent 1px)", backgroundSize: "44px 44px" }} />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[1fr_1.05fr] lg:py-20">
        <div>
          <div className="mb-8 flex justify-center lg:hidden">
            <LogoImage />
          </div>
          <p className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">
            Internet local haut débit par CPE
          </p>
          <h1 className="text-5xl font-black leading-none tracking-tight md:text-7xl">
            BRO <span className="text-cyan-400">WIFI</span> ZONE
          </h1>
          <p className="mt-4 text-2xl italic text-white/90">Ensemble, trouvons la solution !</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Solutions réseau et Internet pour particuliers, commerces et communautés : connexion CPE, configuration MikroTik, Starlink, WiFi, dépannage et conseils.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#offres" className="rounded-full bg-cyan-400 px-7 py-4 text-center font-black text-slate-950 shadow-xl shadow-cyan-950/40 hover:bg-cyan-300">
              Voir les offres internet
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="rounded-full bg-green-500 px-7 py-4 text-center font-black text-white shadow-xl shadow-green-950/40 hover:bg-green-400">
              Appeler maintenant
            </a>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-4">
            <MiniService icon="router" title="MikroTik" />
            <MiniService icon="satellite" title="Starlink" />
            <MiniService icon="wifi" title="WiFi & Réseaux" />
            <MiniService icon="tools" title="Dépannage" />
          </div>
        </div>
        <div className="relative">
          <img src={images.banner} alt="Bannière BRO WIFI ZONE avec équipements réseau" className="hidden w-full rounded-[2rem] border border-cyan-300/20 shadow-2xl shadow-cyan-950/50 lg:block" />
          <div className="rounded-[2rem] border border-cyan-300/20 bg-white/10 p-6 shadow-2xl backdrop-blur lg:hidden">
            <LogoImage />
            <p className="mt-5 text-center text-sm text-slate-300">Solutions réseau, Internet CPE, WiFi, Starlink et MikroTik.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="apropos" className="mx-auto max-w-7xl px-5 py-20">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div className="rounded-[2rem] border border-cyan-400/20 bg-white/10 p-8 text-center shadow-xl">
          <LogoImage />
          <p className="mt-6 rounded-full bg-cyan-400/10 px-4 py-3 font-black text-cyan-200">Connecter • Configurer • Partager</p>
        </div>
        <div>
          <SectionLabel>À propos</SectionLabel>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">Une solution internet locale, claire et accessible.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            BRO WIFI ZONE aide les clients à accéder à Internet grâce à une infrastructure locale : Starlink, MikroTik, antennes CPE et points d'accès WiFi. Notre objectif est simple : connecter les foyers, commerces et petites structures avec des offres mensuelles compréhensibles et un accompagnement de proximité.
          </p>
        </div>
      </div>
    </section>
  );
}

function Offers() {
  return (
    <section id="offres" className="bg-white py-20 text-slate-950">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center">
          <SectionLabel dark>Offres</SectionLabel>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">Nos abonnements Internet CPE</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">Les tarifs sont mensuels. La disponibilité dépend de la couverture et de la faisabilité de l'installation CPE.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => <PlanCard key={plan.name} plan={plan} />)}
        </div>
      </div>
    </section>
  );
}

function Equipment() {
  return (
    <section id="equipements" className="mx-auto max-w-7xl px-5 py-20">
      <SectionLabel>Équipements</SectionLabel>
      <h2 className="mt-3 text-3xl font-black md:text-5xl">Une infrastructure pensée pour le terrain.</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {equipments.map((item) => <InfoCard key={item.title} {...item} />)}
      </div>
    </section>
  );
}

function Advantages() {
  return (
    <section id="avantages" className="bg-slate-900 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionLabel>Avantages</SectionLabel>
        <h2 className="mt-3 text-3xl font-black md:text-5xl">Pourquoi choisir BRO WIFI ZONE ?</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item) => <InfoCard key={item.title} {...item} />)}
        </div>
      </div>
    </section>
  );
}

function ForumSection() {
  const forumTopics = [
    { title: "Starlink", question: "Pourquoi ma connexion Starlink coupe parfois ?" },
    { title: "MikroTik", question: "Comment améliorer la portée du WiFi ?" },
    { title: "CPE & Antennes", question: "Où installer correctement une antenne CPE ?" },
    { title: "Hotspot", question: "Comment sécuriser un hotspot public ?" },
  ];

  return (
    <section id="forum" className="bg-white py-20 text-slate-950">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center">
          <SectionLabel dark>Forum Réseaux</SectionLabel>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">Entraide & Conseils Réseau</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Une section communautaire pour aider les utilisateurs à comprendre les réseaux WiFi, Starlink, MikroTik, les antennes CPE et les problèmes Internet du quotidien.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {forumTopics.map((topic) => (
            <div key={topic.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg">
              <div className="inline-flex rounded-2xl bg-cyan-100 p-3 text-cyan-700">💬</div>
              <h3 className="mt-5 text-2xl font-black">{topic.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{topic.question}</p>
              <a
                href={createWhatsappQuestionLink(topic.title)}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block rounded-full bg-green-500 px-5 py-3 font-black text-white hover:bg-green-400"
              >
                Poser ma question
              </a>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <h3 className="text-3xl font-black">Besoin d'aide sur votre réseau ?</h3>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Posez vos questions directement sur WhatsApp : problèmes WiFi, configuration MikroTik, choix d'antenne CPE, optimisation réseau ou dépannage Internet.
              </p>
            </div>
            <div className="text-center">
              <a
                href={FORUM_GROUP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-cyan-400 px-8 py-4 text-lg font-black text-slate-950 shadow-xl hover:bg-cyan-300"
              >
                Rejoindre le Forum Réseaux
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-20">
      <div className="overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-white/10 shadow-2xl lg:grid lg:grid-cols-[1.1fr_0.9fr]">
        <div className="p-8 md:p-12">
          <SectionLabel>Contact</SectionLabel>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">Besoin d'infos ou d'assistance ?</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Contactez-nous sur WhatsApp pour vérifier votre zone, choisir votre offre et organiser l'installation CPE.
          </p>
          <div className="mt-8 space-y-4">
            <ContactLine icon="phone" text={`WhatsApp : ${WHATSAPP_DISPLAY}`} />
            <ContactLine icon="pin" text="Zone de couverture : à préciser selon votre secteur" />
            <ContactLine icon="wifi" text="Message conseillé : vérification de couverture + choix de l'offre" />
          </div>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-green-500 px-8 py-4 text-lg font-black text-white shadow-xl shadow-green-950/40 hover:bg-green-400">
            Appeler maintenant sur WhatsApp
          </a>
        </div>
        <div className="bg-slate-950/70 p-8 md:p-12">
          <div className="rounded-3xl border border-cyan-400/20 bg-slate-950 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Message automatique</p>
            <p className="mt-4 text-xl font-bold leading-8">{WHATSAPP_MESSAGE}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlanCard({ plan }) {
  const colorClass = plan.color === "green" ? "text-green-400 border-green-400/50" : plan.color === "gold" ? "text-yellow-400 border-yellow-400/50" : "text-cyan-400 border-cyan-400/50";
  const priceClass = plan.color === "green" ? "bg-green-500" : plan.color === "gold" ? "bg-yellow-500" : "bg-blue-600";

  return (
    <div className={`relative rounded-[2rem] border p-8 shadow-xl ${plan.highlighted ? "scale-[1.02] border-cyan-400 bg-slate-950 text-white" : `bg-slate-950 text-white ${colorClass}`}`}>
      {plan.highlighted && <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-cyan-400 px-4 py-1 text-xs font-black uppercase tracking-wide text-slate-950">Populaire</div>}
      <h3 className={`text-3xl font-black ${colorClass.split(" ")[0]}`}>{plan.name}</h3>
      <p className="mt-2 text-slate-300">{plan.description}</p>
      <div className={`mt-6 rounded-2xl ${priceClass} px-5 py-4 text-white shadow-lg`}>
        <p className="text-4xl font-black">{plan.price}</p>
        <p className="text-lg">Ar / mois</p>
      </div>
      <div className="mt-7 flex items-center gap-4">
        <IconBadge icon="speed" />
        <div>
          <p className="text-3xl font-black">{plan.speed}</p>
          <p className="text-sm text-slate-400">Débit jusqu'à</p>
        </div>
      </div>
      <ul className="mt-7 space-y-3 text-slate-200">
        {plan.features.map((feature) => <li key={feature} className="flex gap-3"><span className="font-black text-cyan-300">✓</span>{feature}</li>)}
      </ul>
      <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="mt-8 block rounded-full bg-white px-6 py-3 text-center font-black text-slate-950 hover:bg-cyan-100">Choisir cette offre</a>
    </div>
  );
}

function InfoCard({ icon, title, text }) {
  return (
    <div className="rounded-3xl border border-cyan-400/20 bg-slate-950/70 p-6 shadow-xl">
      <IconBadge icon={icon} />
      <h3 className="mt-5 text-xl font-black">{title}</h3>
      <p className="mt-3 leading-7 text-slate-300">{text}</p>
    </div>
  );
}

function MiniService({ icon, title }) {
  return (
    <div className="rounded-2xl border border-cyan-400/20 bg-slate-950/60 p-4 text-center">
      <div className="mx-auto mb-3 flex justify-center"><InlineIcon name={icon} className="h-8 w-8 text-cyan-300" /></div>
      <p className="text-xs font-black uppercase text-cyan-100">{title}</p>
    </div>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 rounded-full bg-green-500 px-5 py-4 font-black text-white shadow-2xl shadow-green-950/50 hover:bg-green-400"
      aria-label="Contacter BRO WIFI ZONE sur WhatsApp"
    >
      WhatsApp
    </a>
  );
}

function ContactLine({ icon, text }) {
  return <div className="flex items-center gap-3 text-slate-200"><InlineIcon name={icon} className="h-6 w-6 shrink-0 text-cyan-300" /><span>{text}</span></div>;
}

function SectionLabel({ children, dark = false }) {
  return <p className={`text-sm font-black uppercase tracking-[0.25em] ${dark ? "text-cyan-700" : "text-cyan-300"}`}>{children}</p>;
}

function LogoImage({ small = false }) {
  return (
    <div className={small ? "h-14 w-14 overflow-hidden rounded-full border border-cyan-400/40 bg-slate-950" : "mx-auto h-56 w-56 overflow-hidden rounded-full border border-cyan-400/40 bg-slate-950 shadow-2xl shadow-cyan-950/60"}>
      <img src={images.logo} alt="Logo BRO WIFI ZONE" className="h-full w-full object-cover" />
    </div>
  );
}

function IconBadge({ icon }) {
  return <div className="inline-flex rounded-2xl bg-cyan-400 p-3 text-slate-950"><InlineIcon name={icon} className="h-6 w-6" /></div>;
}

function Footer() {
  return <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">© {new Date().getFullYear()} BRO WIFI ZONE. Tous droits réservés.</footer>;
}

function InlineIcon({ name, className = "h-6 w-6" }) {
  const common = { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" };
  const icons = {
    wifi: <><path d="M5 13a10 10 0 0 1 14 0" /><path d="M8.5 16.5a5 5 0 0 1 7 0" /><path d="M12 20h.01" /></>,
    tower: <><path d="M12 3v18" /><path d="M8 21h8" /><path d="M9 7a3 3 0 0 1 6 0" /><path d="M6 4a7 7 0 0 1 12 0" /><path d="M9 21l3-8 3 8" /></>,
    bolt: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></>,
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.6a2 2 0 0 1-.45 2.11L8 9.72a16 16 0 0 0 6.28 6.28l1.29-1.29a2 2 0 0 1 2.11-.45c.83.3 1.7.51 2.6.63A2 2 0 0 1 22 16.92z" />,
    pin: <><path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11z" /><circle cx="12" cy="10" r="2" /></>,
    tools: <><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.1-3.1a6 6 0 0 1-7.9 7.9l-6.7 6.7a2.1 2.1 0 0 1-3-3l6.7-6.7a6 6 0 0 1 7.9-7.9l-3.1 3.1z" /></>,
    router: <><rect x="3" y="11" width="18" height="8" rx="2" /><path d="M7 15h.01" /><path d="M11 15h.01" /><path d="M15 15h.01" /><path d="M8 11V7" /><path d="M16 11V7" /></>,
    satellite: <><path d="M5 19l5-5" /><path d="M6 13a6 6 0 0 0 5 5" /><path d="M4 11a10 10 0 0 0 9 9" /><path d="M12 4l8 8" /><path d="M16 4l4 4" /><path d="M12 8l4-4" /></>,
    people: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
    speed: <><path d="M21 12a9 9 0 1 1-18 0" /><path d="M12 12l5-5" /><path d="M7 12h.01" /><path d="M17 12h.01" /></>,
  };
  return <svg {...common}>{icons[name] || icons.pin}</svg>;
}
