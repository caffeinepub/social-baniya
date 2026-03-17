import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  ArrowRight,
  Award,
  Brain,
  Briefcase,
  CheckCircle,
  ChevronDown,
  Clock,
  MessageCircle,
  Rocket,
  ShoppingBag,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { SiWhatsapp } from "react-icons/si";

// ---------- WhatsApp URLs ----------
const WA_AI = "https://wa.me/919518665194?text=AI";
const WA_ENROLL_ONLINE =
  "https://wa.me/919518665194?text=I%20want%20to%20Enroll%20Online";
const WA_ENROLL_OFFLINE =
  "https://wa.me/919518665194?text=I%20want%20to%20Enroll%20Offline";
const WA_START = "https://wa.me/919518665194?text=START";
const WA_COURSE = "https://wa.me/919518665194?text=COURSE";

// ---------- Scroll Animation Hook ----------
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

// ---------- Reveal Wrapper ----------
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useScrollReveal();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ---------- WA Button ----------
function WAButton({
  href,
  text,
  variant = "primary",
  ocid,
}: {
  href: string;
  text: string;
  variant?: "primary" | "outline" | "gold";
  ocid: string;
}) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-base transition-all duration-200 cursor-pointer";
  const styles = {
    primary:
      "bg-electric text-white hover:brightness-110 glow-electric font-display text-lg px-8 py-4",
    outline:
      "border-2 border-electric text-electric hover:bg-electric hover:text-white font-display text-lg px-8 py-4",
    gold: "bg-gold text-[oklch(0.1_0.01_250)] hover:brightness-110 glow-gold font-display text-lg px-8 py-4",
  };
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-ocid={ocid}
      className={`${base} ${styles[variant]}`}
    >
      <SiWhatsapp className="w-5 h-5" />
      {text}
    </a>
  );
}

// ---------- Header ----------
function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy border-b border-electric/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <img
          src="/assets/uploads/Untitled-design-5--1.png"
          alt="Social Baniya"
          className="h-10 w-auto"
        />
        <WAButton
          href={WA_AI}
          text="WhatsApp Now"
          variant="primary"
          ocid="nav.primary_button"
        />
      </div>
    </header>
  );
}

// ---------- Hero ----------
function Hero() {
  return (
    <section className="gradient-hero min-h-screen flex flex-col justify-center items-center text-center px-4 pt-24 pb-16">
      <Reveal>
        <Badge
          className="mb-6 text-sm font-semibold px-4 py-2 bg-electric/20 text-electric border border-electric/40 font-body"
          data-ocid="hero.section"
        >
          <Zap className="w-4 h-4 mr-1 inline" />⚡ AI Ka Zamana Aa Gaya
        </Badge>
      </Reveal>

      <Reveal delay={0.1}>
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-extrabold leading-[1.05] tracking-tight mb-6">
          <span className="text-foreground">Padh rahe ho,</span>
          <br />
          <span className="text-gradient">Kama kyun nahi rahe?</span>
        </h1>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mb-4 font-body">
          Jab tak sochoge —
          <span className="text-gold font-semibold">
            {" "}
            tab tak woh aage nikal jayega.
          </span>
        </p>
      </Reveal>

      <Reveal delay={0.3}>
        <p className="text-base text-muted-foreground max-w-xl mb-10 font-body">
          Real skills. Real earning. AI ka unfair advantage — sirf tumhare haath
          mein.
        </p>
      </Reveal>

      <Reveal delay={0.4}>
        <WAButton
          href={WA_AI}
          text="WhatsApp pe 'AI' bhejo →"
          variant="primary"
          ocid="hero.primary_button"
        />
      </Reveal>

      <Reveal delay={0.5}>
        <div className="mt-16 flex flex-col items-center gap-1 text-muted-foreground">
          <p className="text-sm">Scroll karo — sach suno</p>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </Reveal>
    </section>
  );
}

// ---------- Reality Slap ----------
function RealitySlap() {
  const lines = [
    "YouTube video dekha. Notes liye. Kuch nahi kiya.",
    "3 courses kiye. Portfolio? Zero.",
    "Time ja raha hai. Earning nahi aa rahi.",
    "Yaar aage badh gaya. Tu abhi bhi 'soch' raha hai.",
  ];

  return (
    <section className="bg-navy-light py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <span className="text-electric text-sm font-bold tracking-widest uppercase font-body">
            SACH SUNO
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold mt-3 mb-12 leading-tight">
            Tum sirf <span className="text-gold">consume</span> kar rahe ho.
          </h2>
        </Reveal>
        <div className="space-y-5">
          {lines.map((line, i) => (
            <Reveal key={line} delay={0.1 * (i + 1)}>
              <div className="flex items-start gap-4 p-5 card-navy rounded-xl">
                <AlertTriangle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                <p className="text-lg sm:text-xl font-medium font-body text-foreground/90">
                  {line}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Why Happening ----------
function WhyHappening() {
  const points = [
    { icon: Target, text: "Theory seekhte ho, execution nahi hoti" },
    {
      icon: AlertTriangle,
      text: "Direction nahi hai — isliye effort waste ho raha hai",
    },
    {
      icon: Users,
      text: "Koi nahi hai jo bata sake: 'yeh karo, yeh mat karo'",
    },
  ];

  return (
    <section className="gradient-dark py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <span className="text-electric text-sm font-bold tracking-widest uppercase font-body">
            PROBLEM KYA HAI?
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold mt-3 mb-10 leading-tight">
            Random YouTube se{" "}
            <span className="text-gradient">kuch nahi hoga.</span>
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-5">
          {points.map(({ icon: Icon, text }, i) => (
            <Reveal key={text} delay={0.1 * (i + 1)}>
              <div className="card-navy rounded-2xl p-6 flex flex-col gap-4 h-full">
                <div className="w-10 h-10 rounded-lg bg-electric/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-electric" />
                </div>
                <p className="font-body text-base text-foreground/85 leading-relaxed">
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Mentor ----------
function MentorIntro() {
  const traits = [
    "100+ businesses ke saath kaam kar chuka hai",
    "5+ saal ki real agency experience",
    "Woh theory nahi, revenue samajhta hai",
    "Tera growth partner — not just a trainer",
  ];

  return (
    <section className="bg-navy py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <span className="text-electric text-sm font-bold tracking-widest uppercase font-body">
            MEET YOUR MENTOR
          </span>
        </Reveal>
        <div className="mt-8 grid md:grid-cols-2 gap-12 items-center">
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-electric/20 blur-2xl" />
              <img
                src="/assets/uploads/Untitled-design-3--2.png"
                alt="Abhishek Gupta"
                className="relative w-full max-w-sm mx-auto object-contain drop-shadow-2xl"
              />
            </div>
          </Reveal>
          <div>
            <Reveal delay={0.2}>
              <h3 className="font-display text-3xl font-extrabold text-foreground">
                Abhishek Gupta
              </h3>
              <p className="text-electric font-semibold mt-1 font-body">
                Founder, Sociban Digital Solution Pvt. Ltd.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold mt-6 mb-6 leading-tight">
                Yeh sirf ek aur <span className="text-gold">course seller</span>{" "}
                nahi hai.
              </h2>
            </Reveal>
            <div className="space-y-3">
              {traits.map((trait, i) => (
                <Reveal key={trait} delay={0.1 * (i + 3)}>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-electric shrink-0" />
                    <p className="font-body text-foreground/85">{trait}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- AI Advantage ----------
function AIAdvantage() {
  return (
    <section className="bg-navy-light py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <span className="text-gold text-sm font-bold tracking-widest uppercase font-body">
            AI ADVANTAGE
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold mt-3 mb-6 leading-tight">
            Jo kaam pehle <span className="text-gold">5 ghante</span> leta tha —
            <br />
            ab <span className="text-gradient">5 minute</span> mein.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="grid sm:grid-cols-3 gap-6 mt-10 text-left">
            {[
              {
                icon: Brain,
                title: "AI-Powered Speed",
                desc: "AI tools se kaam hota hai — fast, clean, professional.",
              },
              {
                icon: Rocket,
                title: "Execution-First",
                desc: "Seeho aur karo — ek hi saath. Theory nahi, action.",
              },
              {
                icon: TrendingUp,
                title: "Earning Focus",
                desc: "Focus: earning, not just learning. Real results.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="card-navy rounded-2xl p-6 border border-electric/20 hover:border-electric/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-electric/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-electric" />
                </div>
                <h4 className="font-display font-bold text-lg text-foreground mb-2">
                  {title}
                </h4>
                <p className="font-body text-sm text-muted-foreground">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- Curriculum ----------
function Curriculum() {
  const bullets = [
    {
      icon: Brain,
      text: "AI Tools for Video, Content & Ads (in minutes, not hours)",
    },
    { icon: TrendingUp, text: "Meta & Google Ads that actually convert" },
    {
      icon: Star,
      text: "Content Strategy that builds brand + revenue",
    },
    {
      icon: ShoppingBag,
      text: "Dropshipping & E-commerce Setup end-to-end",
    },
    {
      icon: Briefcase,
      text: "Agency Model — how to get clients & deliver results",
    },
    {
      icon: Award,
      text: "Internship Experience + Job Placement Assistance",
    },
  ];

  return (
    <section className="gradient-dark py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <span className="text-electric text-sm font-bold tracking-widest uppercase font-body">
            WHAT YOU'LL LEARN
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold mt-3 mb-10 leading-tight">
            Real Skills. <span className="text-gradient">Real Earning.</span>
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-4">
          {bullets.map(({ icon: Icon, text }, i) => (
            <Reveal key={text} delay={0.08 * i}>
              <div
                className="flex items-start gap-4 p-5 card-navy rounded-xl hover:border-electric/40 border border-transparent transition-colors"
                data-ocid={`curriculum.item.${i + 1}`}
              >
                <div className="w-9 h-9 rounded-lg bg-electric/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 text-electric" />
                </div>
                <p className="font-body text-base text-foreground/90 leading-snug">
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.5}>
          <div className="mt-12 text-center">
            <WAButton
              href={WA_START}
              text="Message 'START' on WhatsApp →"
              variant="outline"
              ocid="curriculum.primary_button"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- Future Identity ----------
function FutureIdentity() {
  const lines = [
    "Apne phone se paise kama raha hai.",
    "Client ki call aa rahi hai.",
    "Dosto ko bata raha hai — 'haan, main freelancing karta hoon.'",
    "Maa-baap proud feel kar rahe hain.",
    "Aur sabse zaroori — TU khud confident hai.",
  ];

  return (
    <section className="bg-navy py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <span className="text-gold text-sm font-bold tracking-widest uppercase font-body">
            IMAGINE THIS
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold mt-3 mb-12 leading-tight">
            90 din baad <span className="text-gradient">tu kahan hoga?</span>
          </h2>
        </Reveal>
        <div className="space-y-4">
          {lines.map((line, i) => (
            <Reveal key={line} delay={0.1 * (i + 1)}>
              <div className="flex items-center gap-5 p-5 rounded-xl border border-gold/20 bg-gold/5 hover:border-gold/40 transition-colors">
                <span className="text-gold font-display font-extrabold text-2xl min-w-[36px] text-center">
                  {i + 1}
                </span>
                <p className="font-body text-lg text-foreground/90">{line}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Offer Stack ----------
function OfferStack() {
  const items = [
    { icon: Brain, title: "AI-Powered Digital Marketing Program" },
    { icon: ShoppingBag, title: "E-Commerce & Dropshipping Masterclass" },
    { icon: Rocket, title: "Live Practical Training (Agency-style)" },
    { icon: Briefcase, title: "Internship with Real Projects" },
    { icon: Award, title: "Job Placement Assistance" },
  ];

  return (
    <section className="bg-navy-light py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <span className="text-electric text-sm font-bold tracking-widest uppercase font-body">
            THE COMPLETE PACKAGE
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold mt-3 mb-10 leading-tight">
            Sirf ek course nahi —{" "}
            <span className="text-gradient">ek complete system.</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {items.map(({ icon: Icon, title }, i) => (
            <Reveal key={title} delay={0.08 * i}>
              <div
                className="card-navy rounded-2xl p-5 flex items-center gap-4 border border-electric/20"
                data-ocid={`offer.item.${i + 1}`}
              >
                <div className="w-10 h-10 rounded-lg bg-electric/20 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-electric" />
                </div>
                <p className="font-body font-medium text-foreground/90 text-sm leading-snug">
                  {title}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Pricing */}
        <Reveal delay={0.4}>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card-navy rounded-2xl p-7 border border-electric/40 text-center">
              <p className="text-electric font-body font-semibold text-sm uppercase tracking-wider mb-2">
                Online
              </p>
              <p className="font-display text-5xl font-extrabold text-foreground">
                ₹10,000
              </p>
              <p className="text-muted-foreground font-body text-sm mt-2">
                Anywhere in India
              </p>
              <WAButton
                href={WA_ENROLL_ONLINE}
                text="Enroll Online"
                variant="primary"
                ocid="offer.online.primary_button"
              />
            </div>
            <div
              className="rounded-2xl p-7 border-2 border-gold bg-gold/10 text-center relative overflow-hidden"
              data-ocid="offer.offline.card"
            >
              <div className="absolute top-3 right-3">
                <Badge className="bg-gold text-[oklch(0.1_0.01_250)] font-semibold text-xs">
                  RECOMMENDED
                </Badge>
              </div>
              <p className="text-gold font-body font-semibold text-sm uppercase tracking-wider mb-2">
                Offline · Hisar
              </p>
              <p className="font-display text-5xl font-extrabold text-foreground">
                ₹24,000
              </p>
              <p className="text-muted-foreground font-body text-sm mt-2">
                In-person mentorship + live sessions
              </p>
              <WAButton
                href={WA_ENROLL_OFFLINE}
                text="Enroll Offline"
                variant="gold"
                ocid="offer.offline.primary_button"
              />
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.5}>
          <p className="text-center text-muted-foreground font-body text-sm mt-5">
            Offline includes in-person mentorship, live sessions & hands-on
            execution.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- Objection Handling ----------
function ObjectionHandling() {
  const faqs = [
    {
      q: "Main beginner hoon, kya mujhe samajh aayega?",
      a: "Bilkul. Yahan se shuru hota hai — zero se. Koi background nahi chahiye.",
    },
    {
      q: "Maine pehle bhi courses kiye hain, kuch nahi hua.",
      a: "Kyunki woh courses the — yeh execution program hai. Yahan karte hain, sirf sunte nahi.",
    },
    {
      q: "Kya main sach mein earn kar sakta hoon?",
      a: "No fake promises. But real skills + real execution = real results. Yahi yahan milega.",
    },
  ];

  return (
    <section className="gradient-dark py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold mb-10 leading-tight">
            Tera Sawaal. <span className="text-gradient">Mera Jawab.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <AccordionItem
                key={q}
                value={`faq-${i}`}
                className="card-navy rounded-xl border border-electric/20 px-5 data-[state=open]:border-electric/50 transition-colors"
                data-ocid={`faq.item.${i + 1}`}
              >
                <AccordionTrigger className="font-display font-semibold text-base sm:text-lg text-left py-5 hover:no-underline">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground pb-5 text-base leading-relaxed">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- Urgency ----------
function Urgency() {
  const lines = [
    "Har din delay = naya competitor aage.",
    "Yeh wave 2-3 saal mein saturate ho jaayegi.",
    "Jo abhi seekhega — woh market lead karega.",
    "Overthink mat karo. Ek message bhejo.",
  ];

  return (
    <section
      className="py-20 px-4 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.15 0.06 80) 0%, oklch(0.12 0.025 255) 60%)",
      }}
    >
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,oklch(0.75_0.18_80)_0%,transparent_70%)]" />
      <div className="max-w-4xl mx-auto relative">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-6 h-6 text-gold" />
            <span className="text-gold text-sm font-bold tracking-widest uppercase font-body">
              ABHI NAHI TOH KAB?
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold mb-8 leading-tight">
            AI ki train <span className="text-gold">chhoot rahi hai.</span>
          </h2>
        </Reveal>
        <div className="space-y-3 mb-12">
          {lines.map((line, i) => (
            <Reveal key={line} delay={0.1 * (i + 1)}>
              <div className="flex items-center gap-3">
                <ArrowRight className="w-4 h-4 text-gold shrink-0" />
                <p className="font-body text-lg text-foreground/90">{line}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.5}>
          <WAButton
            href={WA_COURSE}
            text="Text 'COURSE' if you're serious →"
            variant="gold"
            ocid="urgency.primary_button"
          />
        </Reveal>
      </div>
    </section>
  );
}

// ---------- Footer ----------
function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-navy border-t border-electric/20 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center sm:items-start gap-3">
            <img
              src="/assets/uploads/Untitled-design-5--1.png"
              alt="Social Baniya"
              className="h-10 w-auto"
            />
            <p className="text-muted-foreground font-body text-sm">
              Sociban Digital Solution Pvt. Ltd.
            </p>
          </div>
          <div className="flex flex-col items-center sm:items-end gap-3">
            <p className="text-muted-foreground font-body text-sm">
              Questions? WhatsApp:{" "}
              <span className="text-electric font-semibold">
                +91 9518665194
              </span>
            </p>
            <WAButton
              href={WA_AI}
              text="Chat on WhatsApp"
              variant="outline"
              ocid="footer.primary_button"
            />
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-electric/10 text-center">
          <p className="text-muted-foreground font-body text-sm">
            © {year}. Built with ❤️ using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-electric hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ---------- Floating WhatsApp ----------
function FloatingWA() {
  return (
    <AnimatePresence>
      <motion.a
        href={WA_AI}
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="floating.primary_button"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:brightness-110 transition-all font-semibold font-body text-sm"
      >
        <SiWhatsapp className="w-5 h-5" />
        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </motion.a>
    </AnimatePresence>
  );
}

// ---------- App ----------
export default function App() {
  return (
    <div className="bg-navy min-h-screen">
      <Header />
      <main>
        <Hero />
        <RealitySlap />
        <WhyHappening />
        <MentorIntro />
        <AIAdvantage />
        <Curriculum />
        <FutureIdentity />
        <OfferStack />
        <ObjectionHandling />
        <Urgency />
      </main>
      <Footer />
      <FloatingWA />
    </div>
  );
}
