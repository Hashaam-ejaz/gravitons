import React, { useState } from "react";
import {
  Menu, X, Plane, Truck, Package, Building2, ShieldCheck, Globe,
  Users, Clock, Leaf, GraduationCap, HeartHandshake, Landmark,
  Anchor, Compass, Mail, Phone, MapPin, Linkedin, Instagram,
  BadgeCheck, FileCheck, Layers,
} from "lucide-react";

import gravitonsIcon from "./assets/gravitons-icon.webp";

const LOGO_SRC = gravitonsIcon;

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#sectors", label: "Sectors" },
  { href: "#contact", label: "Contact" },
];

const CORE_VALUES = [
  { icon: Compass, title: "Gravitational Attraction", text: "We attract the right solutions, partners, and opportunities for every client." },
  { icon: Anchor, title: "Unbreakable Hold", text: "We hold your projects, cargo, and timelines together with unwavering reliability." },
  { icon: Globe, title: "Universal Reach", text: "Our network spans air, sea, and land routes across the globe." },
  { icon: Layers, title: "Integrated Solutions", text: "One partner for end-to-end support, from first mile to last." },
];

const SERVICES = [
  {
    id: "aviation",
    title: "Aviation Support & Training",
    icon: Plane,
    intro: "Third-party ground and technical support for passenger and cargo carriers.",
    items: [
      { title: "Ground Handling Support", text: "Trained manpower, tugs, baggage handling, and ramp safety supervision." },
      { title: "Aircraft Maintenance Support", text: "Third-party coordination for line maintenance, spare parts logistics, and tooling supply." },
      { title: "Aviation Security", text: "Screening, access control, and cargo security to IATA and national civil aviation standards." },
      { title: "Crew & Passenger Logistics", text: "Hotel bookings, transportation, and concierge services for airline crews on layover." },
    ],
  },
  {
    id: "logistics",
    title: "Logistics Solutions",
    icon: Truck,
    intro: "Moving cargo across air, sea, and land with the same reliability, every time.",
    items: [
      { title: "Freight Forwarding", text: "Air, sea, and land consolidation with door-to-door delivery." },
      { title: "Project Cargo Logistics", text: "Heavy-lift and oversized cargo transport for construction and energy." },
      { title: "Warehousing & Distribution", text: "Bonded and non-bonded warehousing with real-time inventory management." },
      { title: "Cold Chain Logistics", text: "Temperature-controlled transport for pharmaceuticals, food, and perishables." },
    ],
  },
  {
    id: "trade",
    title: "Import & Export Trading",
    icon: Package,
    intro: "Sourcing, customs, and compliance handled in-house, end to end.",
    items: [
      { title: "Commodity Trading", text: "Sourcing and supply of raw materials, construction steel, cement, and aviation fuel additives." },
      { title: "Customs Clearance", text: "In-house brokerage with HS code classification and duty optimization." },
      { title: "Supplier Sourcing", text: "Connecting international buyers with vetted manufacturers worldwide." },
    ],
  },
  {
    id: "construction",
    title: "Construction & Infrastructure",
    icon: Building2,
    intro: "From private builds to mega structures, delivered under international supervision.",
    items: [
      { title: "Construction of Infrastructure", text: "Private buildings to mega structures, supervised by international experts, with warranty." },
      { title: "Construction Logistics", text: "Just-in-time delivery of materials, plant, and machinery to site." },
      { title: "Labor & Camp Management", text: "Skilled and unskilled labor, plus secure accommodation and welfare facilities." },
      { title: "Building Materials Supply", text: "Aggregates, structural steel, prefab structures, and finishing materials." },
      { title: "Project Management Support", text: "Site supervision, safety auditing, and quality assurance for civil works." },
    ],
  },
];

const DIFFERENTIATORS = [
  { icon: Compass, title: "The Gravitational Force", text: "We attract the right solutions and hold your projects together \u2014 the way gravity holds the universe together." },
  { icon: Layers, title: "Integrated Multi-Industry Expertise", text: "We understand where aviation meets construction, and deliver the logistics that connect them." },
  { icon: MapPin, title: "Regional Knowledge", text: "Deep expertise in customs regimes, labor law, and security protocols across Pakistan and beyond." },
  { icon: ShieldCheck, title: "Safety Obsession", text: "Not just compliant on paper \u2014 culturally obsessed with zero-harm operations." },
  { icon: Landmark, title: "Financial Stability", text: "Strong banking relationships and credit lines, so your project never halts for a cash-flow gap." },
  { icon: Clock, title: "24/7 Operational Support", text: "Aviation and logistics don't sleep. Neither does our command center." },
];

const SECTORS = [
  { icon: Plane, title: "Commercial & General Aviation", text: "Cargo carriers, charter, and low-cost passenger airlines needing ground support." },
  { icon: Landmark, title: "Government & Defense", text: "Air force logistics, disaster response cargo, and public infrastructure projects." },
  { icon: Building2, title: "Construction Prime Contractors", text: "Tier-1 and Tier-2 contractors needing material supply and labor management." },
  { icon: HeartHandshake, title: "NGOs & Humanitarian Agencies", text: "Time-sensitive relief cargo clearance and distribution." },
  { icon: Package, title: "Industrial Importers & Exporters", text: "Manufacturers and traders needing reliable, insured supply chains." },
];

const LEADERSHIP = [
  { name: "Muhammad Umar Farooq Rana", role: "Chairman & Director \u2013 Aviation", tag: "SI(M), TJ", bio: "35 years in aviation, logistics, and management. Former military pilot, certified across management, logistics, HR, and finance." },
  { name: "Ayesha Umar", role: "Managing Director", bio: "Leads corporate strategy and operations across all four divisions." },
  { name: "Muhammad Zaeem Rana", role: "Director \u2013 Construction", bio: "Civil engineer with years of mega-infrastructure experience in Germany and Saudi Arabia." },
  { name: "Muhammad Zaigham Rana", role: "Director \u2013 Logistics, Supply Chain & Compliance", bio: "Expertise in supply chain, customs, freight forwarding, and contractual compliance." },
  { name: "Muhammad Zain Rana", role: "Director \u2013 IT & Finance", bio: "Handles technology infrastructure and financial operations." },
];

const CERTIFICATIONS = [
  { icon: BadgeCheck, title: "ISO 9001:2025", subtitle: "Quality Management" },
  { icon: Leaf, title: "ISO 14001", subtitle: "Environmental Management" },
  { icon: Plane, title: "IATA IOSA", subtitle: "Ground Handling Partner Status" },
  { icon: ShieldCheck, title: "OHSAS 18001", subtitle: "Occupational Health & Safety" },
  { icon: FileCheck, title: "AEO Status", subtitle: "Authorized Economic Operator" },
];

const CSR = [
  { icon: GraduationCap, title: "Safety Training", text: "Free safety and skills training for construction workers before they deploy to site." },
  { icon: Users, title: "Women in Logistics", text: "Recruiting and training female cargo handlers and customs agents." },
  { icon: Leaf, title: "Green Logistics", text: "Offsetting our footprint by planting trees for every major project we complete." },
];

function initialsOf(name) {
  const parts = name.split(" ").filter(Boolean);
  const first = parts[0] ? parts[0][0] : "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

function Nav({ open, setOpen }) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-navy border-b border-white-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-3">
          <img src={LOGO_SRC} alt="Gravitons emblem" className="h-10 w-10 object-contain" />
          <span className="font-display text-xl tracking-wide text-white">
            GRAVIT<span className="text-gold">O</span>NS
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="font-body text-sm text-white-70 link-gold transition-colors">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-gold font-body text-sm font-semibold px-5 py-2.5 rounded-full transition-colors">
            Talk to Us
          </a>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-navy-deep border-t border-white-10 px-5 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-body text-white-70 text-base"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-gold text-center font-body font-semibold px-5 py-3 rounded-full"
          >
            Talk to Us
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative bg-navy blueprint-grid overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="pointer-events-none absolute -right-40 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="orbit-ring animate-spin-slow" style={{ width: 620, height: 620 }} />
        <div className="orbit-ring" style={{ width: 460, height: 460, position: "absolute", top: 80, left: 80 }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="flex flex-wrap gap-2 mb-8">
            {["Aviation", "Logistics", "Construction", "Trade"].map((tag) => (
              <span key={tag} className="tag-pill text-xs font-body font-semibold tracking-wide rounded-full px-3 py-1">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-display text-white text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Where Opportunities Gravitate.
          </h1>

          <p className="font-body text-white-70 text-lg mt-6 max-w-xl leading-relaxed">
            The gravitational force that holds ambitious projects together — across aviation, logistics, trade, and construction.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a href="#services" className="btn-gold font-body font-semibold px-7 py-3.5 rounded-full transition-colors">
              See Our Capabilities
            </a>
            <a href="#contact" className="btn-outline font-body font-semibold px-7 py-3.5 rounded-full border transition-colors">
              Talk to Our Team
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img src={LOGO_SRC} alt="Gravitons emblem" className="w-64 sm:w-80 lg:w-96 drop-shadow-2xl" />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-navy text-3xl sm:text-4xl">Who We Are</h2>
          <p className="font-body text-ink text-lg mt-5 leading-relaxed">
            GRAVITONS is a multi-faceted consultancy and support company headquartered in Lahore, Pakistan,
            working at the intersection of aviation, infrastructure, and global trade. We exist to be the
            gravitational force that holds your projects together — providing safety, reliability, and
            efficiency where the margin for error is zero.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {CORE_VALUES.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="border-t-2 border-gold pt-5">
                <Icon className="text-navy" size={26} strokeWidth={1.5} />
                <h3 className="font-display text-navy text-lg mt-4">{v.title}</h3>
                <p className="font-body text-ink-soft text-sm mt-2 leading-relaxed">{v.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Services({ active, setActive }) {
  const current = SERVICES[active];
  const Icon = current.icon;
  return (
    <section id="services" className="bg-navy-deep py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-white text-3xl sm:text-4xl">Core Services &amp; Capabilities</h2>
          <p className="font-body text-white-60 text-lg mt-4">Four disciplines. One point of contact.</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-10 border-b border-white-10 pb-6">
          {SERVICES.map((s, i) => {
            const TabIcon = s.icon;
            const isActive = i === active;
            return (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className={
                  "flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-body font-semibold transition-colors border " +
                  (isActive ? "bg-gold text-navy border-gold" : "text-white-70 border-white-15")
                }
              >
                <TabIcon size={16} />
                {s.title}
              </button>
            );
          })}
        </div>

        <div className="mt-10">
          <div className="flex items-center gap-3 mb-6">
            <Icon className="text-gold" size={30} strokeWidth={1.5} />
            <p className="font-body text-white-70">{current.intro}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {current.items.map((item) => (
              <div key={item.title} className="bg-white-5 border border-white-10 rounded-xl p-6">
                <h3 className="font-display text-white text-base">{item.title}</h3>
                <p className="font-body text-white-60 text-sm mt-2 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-navy text-3xl sm:text-4xl">Why Gravitons</h2>
          <p className="font-body text-ink-soft text-lg mt-4">The unfair advantage.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 mt-14">
          {DIFFERENTIATORS.map((d) => {
            const Icon = d.icon;
            return (
              <div key={d.title} className="flex gap-4">
                <div className="shrink-0 w-11 h-11 rounded-full bg-navy flex items-center justify-center">
                  <Icon className="text-gold" size={19} strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-display text-navy text-base">{d.title}</h3>
                  <p className="font-body text-ink-soft text-sm mt-1.5 leading-relaxed">{d.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Sectors() {
  return (
    <section id="sectors" className="bg-navy py-24 blueprint-grid">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-white text-3xl sm:text-4xl">Who We Serve</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-12">
          {SECTORS.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="bg-white-5 border border-white-10 rounded-xl p-6 hover-border-gold transition-colors">
                <Icon className="text-gold" size={22} strokeWidth={1.5} />
                <h3 className="font-display text-white text-base mt-4">{s.title}</h3>
                <p className="font-body text-white-60 text-sm mt-2 leading-relaxed">{s.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Leadership() {
  const [chair, ...rest] = LEADERSHIP;
  return (
    <section id="leadership" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-navy text-3xl sm:text-4xl">Leadership</h2>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-6 items-start bg-navy rounded-2xl p-8">
          <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center shrink-0 font-display text-navy text-xl">
            {initialsOf(chair.name)}
          </div>
          <div>
            <h3 className="font-display text-white text-xl">
              {chair.name} <span className="text-gold text-sm font-body align-middle">{chair.tag}</span>
            </h3>
            <p className="font-body text-gold text-sm mt-1">{chair.role}</p>
            <p className="font-body text-white-70 text-sm mt-3 leading-relaxed max-w-xl">{chair.bio}</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {rest.map((p) => (
            <div key={p.name} className="border border-navy-10 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center font-display text-gold">
                {initialsOf(p.name)}
              </div>
              <h3 className="font-display text-navy text-base mt-4">{p.name}</h3>
              <p className="font-body text-gold text-xs font-semibold mt-1">{p.role}</p>
              <p className="font-body text-ink-soft text-sm mt-2 leading-relaxed">{p.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Compliance() {
  return (
    <section className="bg-silver-tint py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-navy text-3xl sm:text-4xl">Certifications &amp; Compliance</h2>
          <p className="font-body text-ink-soft text-lg mt-4">Building toward the standards our clients expect.</p>
        </div>

        <div className="flex flex-wrap gap-4 mt-10">
          {CERTIFICATIONS.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="flex items-center gap-3 bg-white border border-navy-10 rounded-full pl-4 pr-5 py-2.5">
                <Icon className="text-navy" size={18} />
                <div className="leading-tight">
                  <p className="font-body text-navy text-sm font-semibold">{c.title}</p>
                  <p className="font-body text-ink-faint text-xs">{c.subtitle}</p>
                </div>
                <span className="font-body text-xs font-semibold text-orange">In Progress</span>
              </div>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-3 gap-8 mt-20">
          {CSR.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title}>
                <Icon className="text-gold" size={24} strokeWidth={1.5} />
                <h3 className="font-display text-navy text-base mt-3">{c.title}</h3>
                <p className="font-body text-ink-soft text-sm mt-2 leading-relaxed">{c.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section id="contact" className="bg-navy py-24 blueprint-grid">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <h2 className="font-display text-white text-3xl sm:text-4xl leading-tight">
              Ready to move your project forward?
            </h2>
            <p className="font-body text-white-70 text-lg mt-5 max-w-md leading-relaxed">
              For tenders, partnerships, or logistics support, talk to our commercial team. When it matters most, you need excellence.
            </p>
            <a
              href="mailto:info@gravitons.pk"
              className="btn-gold inline-flex items-center gap-2 font-body font-semibold px-7 py-3.5 rounded-full mt-8 transition-colors"
            >
              <Mail size={18} /> Email Us
            </a>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="text-gold shrink-0 mt-1" size={20} />
              <p className="font-body text-white-70">
                House No. 703, Phase 7, DHA
                <br />
                Lahore 54792, Pakistan
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-gold shrink-0 mt-1" size={20} />
              <a href="tel:+923335190020" className="font-body text-white-70 link-gold transition-colors">
                +92 333 5190020
              </a>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-gold shrink-0 mt-1" size={20} />
              <a href="mailto:info@gravitons.pk" className="font-body text-white-70 link-gold transition-colors">
                info@gravitons.pk
              </a>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.linkedin.com/company/gravitons"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Gravitons on LinkedIn"
                className="w-10 h-10 rounded-full border border-white-15 flex items-center justify-center hover-border-gold transition-colors"
              >
                <Linkedin size={17} className="text-white" />
              </a>
              <a
                href="https://www.instagram.com/gravitate"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Gravitons on Instagram"
                className="w-10 h-10 rounded-full border border-white-15 flex items-center justify-center hover-border-gold transition-colors"
              >
                <Instagram size={17} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-deep pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <img src={LOGO_SRC} alt="Gravitons emblem" className="h-9 w-9 object-contain" />
              <span className="font-display text-white text-lg">
                GRAVIT<span className="text-gold">O</span>NS
              </span>
            </div>
            <p className="font-body text-white-60 text-sm mt-4 leading-relaxed">Where Opportunities Gravitate.</p>
          </div>

          <div>
            <h4 className="font-body text-white text-sm font-semibold tracking-wide">Explore</h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="font-body text-white-60 text-sm link-gold transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-white text-sm font-semibold tracking-wide">Divisions</h4>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id} className="font-body text-white-60 text-sm">
                  {s.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-white text-sm font-semibold tracking-wide">Contact</h4>
            <ul className="mt-4 space-y-2.5 font-body text-white-60 text-sm">
              <li>House No. 703, Phase 7, DHA, Lahore</li>
              <li>
                <a href="tel:+923335190020" className="link-gold transition-colors">
                  +92 333 5190020
                </a>
              </li>
              <li>
                <a href="mailto:info@gravitons.pk" className="link-gold transition-colors">
                  info@gravitons.pk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white-10 mt-14 pt-6 flex flex-col sm:flex-row justify-between gap-3">
          <p className="font-body text-white-60 text-xs">
            © {new Date().getFullYear()} Gravitons (Pvt.) Ltd. All rights reserved.
          </p>
          <p className="font-body text-white-60 text-xs">Lahore, Pakistan</p>
        </div>
      </div>
    </footer>
  );
}

export default function GravitonsLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);

  return (
    <div className="font-body bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700;800&display=swap');
        :root{
          --navy:#0A1B2E;
          --navy-deep:#060F1A;
          --gold:#D4AF37;
          --gold-light:#E7C767;
          --silver:#A3B1C6;
          --ink:#2C2C2C;
          --orange:#E87A2A;
        }
        html{ scroll-behavior:smooth; }
        .font-display{ font-family:'Playfair Display', Georgia, serif; }
        .font-body{ font-family:'Open Sans', system-ui, -apple-system, sans-serif; }

        .bg-navy{ background-color:var(--navy); }
        .bg-navy-deep{ background-color:var(--navy-deep); }
        .text-navy{ color:var(--navy); }
        .bg-gold{ background-color:var(--gold); }
        .text-gold{ color:var(--gold); }
        .border-gold{ border-color:var(--gold); }
        .text-silver{ color:var(--silver); }
        .text-ink{ color:var(--ink); }
        .text-ink-soft{ color:rgba(44,44,44,0.72); }
        .text-ink-faint{ color:rgba(44,44,44,0.5); }
        .text-orange{ color:var(--orange); }
        .bg-silver-tint{ background-color:rgba(163,177,198,0.16); }

        .bg-white-5{ background-color:rgba(255,255,255,0.05); }
        .border-white-10{ border-color:rgba(255,255,255,0.12); }
        .border-white-15{ border-color:rgba(255,255,255,0.18); }
        .text-white-60{ color:rgba(255,255,255,0.64); }
        .text-white-70{ color:rgba(255,255,255,0.76); }
        .border-navy-10{ border-color:rgba(10,27,46,0.12); }

        .btn-gold{ background-color:var(--gold); color:var(--navy); }
        .btn-gold:hover{ background-color:var(--gold-light); }
        .btn-outline{ border:1px solid rgba(255,255,255,0.35); color:#fff; }
        .btn-outline:hover{ border-color:var(--gold); color:var(--gold); }
        .link-gold:hover{ color:var(--gold); }
        .hover-border-gold:hover{ border-color:var(--gold); }

        .tag-pill{ border:1px solid rgba(255,255,255,0.18); color:var(--silver); }

        section[id]{ scroll-margin-top:84px; }

        .blueprint-grid{
          background-image:
            linear-gradient(rgba(212,175,55,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,175,55,0.07) 1px, transparent 1px);
          background-size:46px 46px;
        }

        .orbit-ring{ border:1px solid rgba(212,175,55,0.22); border-radius:9999px; }
        @keyframes spin-slow{ from{ transform:rotate(0deg); } to{ transform:rotate(360deg); } }
        .animate-spin-slow{ animation:spin-slow 150s linear infinite; }
        @media (prefers-reduced-motion: reduce){
          .animate-spin-slow{ animation:none; }
        }
      `}</style>

      <Nav open={menuOpen} setOpen={setMenuOpen} />

      <main>
        <Hero />
        <About />
        <Services active={activeService} setActive={setActiveService} />
        <WhyUs />
        <Sectors />
        <Leadership />
        <Compliance />
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}
