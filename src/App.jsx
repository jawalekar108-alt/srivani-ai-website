import React, { useEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import DataDeletion from "./DataDeletion";
import {
  ArrowRight, Bot, CheckCircle2, Instagram, MessageCircle,
  Sparkles, Zap, ShieldCheck, BarChart3, Menu, X, Mail, Globe2
} from "lucide-react";

const COMPANY = "Srivani AI";
const EMAIL = "jawalekar108@gmail.com";

function Layout({ children }) {
  const location = useLocation();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpen(false);
  }, [location.pathname]);

  const nav = [
    ["/", "Home"],
    ["/services", "Services"],
    ["/about", "About"],
    ["/contact", "Contact"],
  ];

  return (
    <div className="site">
      <header className="nav-wrap">
        <nav className="nav container">
          <Link to="/" className="brand">
            <span className="brand-mark"><Sparkles size={18}/></span>
            <span>Srivani <b>AI</b></span>
          </Link>
          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X/> : <Menu/>}
          </button>
          <div className={"nav-links " + (open ? "open" : "")}>
            {nav.map(([path, label]) => (
              <Link key={path} to={path} className={location.pathname === path ? "active" : ""}>{label}</Link>
            ))}
            <Link to="/contact" className="nav-cta">Get Started <ArrowRight size={16}/></Link>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link to="/" className="brand footer-brand">
            <span className="brand-mark"><Sparkles size={18}/></span>
            <span>Srivani <b>AI</b></span>
          </Link>
          <p className="muted">AI-powered sales automation for modern businesses.</p>
        </div>
        <div>
          <h4>Company</h4>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h4>Legal</h4>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <span>India</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Srivani AI. All rights reserved.</span>
        <span>Built for smarter conversations.</span>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-glow glow-one"></div>
        <div className="hero-glow glow-two"></div>
        <div className="container hero-grid">
          <div>
            <div className="eyebrow"><span className="dot"></span> AI SALES AUTOMATION</div>
            <h1>Turn conversations into <span>customers.</span></h1>
            <p className="hero-copy">
              Srivani AI helps businesses automate sales conversations, capture leads,
              answer customer questions and follow up across social messaging channels.
            </p>
            <div className="hero-actions">
              <Link className="button primary" to="/contact">Talk to Srivani AI <ArrowRight size={18}/></Link>
              <Link className="button secondary" to="/services">Explore Services</Link>
            </div>
            <div className="trust-row">
              <span><CheckCircle2 size={17}/> 24/7 automation</span>
              <span><CheckCircle2 size={17}/> Faster responses</span>
              <span><CheckCircle2 size={17}/> Lead capture</span>
            </div>
          </div>
          <div className="dashboard-card">
            <div className="dash-top">
              <div><span className="live-dot"></span> AI Sales Agent</div>
              <span className="pill">LIVE</span>
            </div>
            <div className="chat">
              <div className="message customer">Hi! Is this shirt available in XL?</div>
              <div className="message bot"><span className="bot-icon"><Bot size={15}/></span> Yes! The RFD Premium Shirt is available in XL. Would you like to see the available colours?</div>
              <div className="message customer">Yes, show me.</div>
              <div className="message bot"><span className="bot-icon"><Bot size={15}/></span> We currently have Blue, Maroon and Brown. I can help you place an order.</div>
            </div>
            <div className="dash-stats">
              <div><strong>24/7</strong><span>Availability</span></div>
              <div><strong>AI</strong><span>Responses</span></div>
              <div><strong>1</strong><span>Sales Agent</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <div className="eyebrow">ONE AI LAYER</div>
            <h2>Sales automation built around your customers</h2>
            <p>Connect your business conversations to an AI workflow that can respond, qualify and follow up.</p>
          </div>
          <div className="feature-grid">
            <Feature icon={<Instagram/>} title="Instagram Automation" text="Handle product questions, customer conversations and lead interactions from Instagram."/>
            <Feature icon={<MessageCircle/>} title="WhatsApp Conversations" text="Create automated customer journeys and assist customers through WhatsApp messaging."/>
            <Feature icon={<Bot/>} title="AI Sales Assistant" text="Use your product and business information to provide helpful, consistent responses."/>
            <Feature icon={<BarChart3/>} title="Lead Management" text="Capture customer interest and organize leads for follow-up and conversion."/>
            <Feature icon={<Zap/>} title="Fast Responses" text="Reduce waiting time with automated responses available around the clock."/>
            <Feature icon={<ShieldCheck/>} title="Business Controls" text="Designed with configurable workflows so businesses can control their automation."/>
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container split">
          <div>
            <div className="eyebrow">FOR GROWING BUSINESSES</div>
            <h2>Let your team focus on customers, not repetitive replies.</h2>
          </div>
          <div className="check-list">
            {["Product and service enquiries", "Lead qualification", "Frequently asked questions", "Customer follow-ups", "Conversation-based selling"].map(x =>
              <div key={x}><CheckCircle2 size={19}/><span>{x}</span></div>
            )}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

function Feature({icon, title, text}) {
  return <div className="feature-card"><div className="feature-icon">{icon}</div><h3>{title}</h3><p>{text}</p></div>;
}

function CTA() {
  return <section className="cta-section"><div className="container cta"><div><div className="eyebrow">START WITH SRIVANI AI</div><h2>Build a smarter sales workflow.</h2><p>Tell us about your business and the conversations you want to automate.</p></div><Link className="button primary" to="/contact">Contact Us <ArrowRight size={18}/></Link></div></section>;
}

function About() {
  return <Page title="About Srivani AI" subtitle="Building practical AI automation for business conversations.">
    <div className="prose">
      <p>Srivani AI is an AI technology company focused on helping businesses improve customer communication and sales workflows through automation.</p>
      <p>Our platform is designed around real business conversations: answering questions, presenting product information, capturing leads and supporting follow-up workflows across messaging channels.</p>
      <h2>Our approach</h2>
      <div className="values">
        <Value title="Practical AI" text="We focus on useful automation that solves day-to-day business problems."/>
        <Value title="Customer-first" text="Conversations should be clear, relevant and helpful to customers."/>
        <Value title="Business control" text="Businesses should remain in control of their products, workflows and customer interactions."/>
      </div>
    </div>
  </Page>;
}

function Value({title,text}) { return <div className="value"><h3>{title}</h3><p>{text}</p></div>; }

function Services() {
  return <Page title="AI Sales Automation" subtitle="Tools and workflows designed to support customer conversations and lead generation.">
    <div className="service-list">
      <Service icon={<Instagram/>} title="Instagram Sales Automation" text="Automate selected customer interactions around your Instagram business presence, including product enquiries and lead conversations."/>
      <Service icon={<MessageCircle/>} title="WhatsApp Automation" text="Create structured customer journeys for enquiries, product information and follow-up conversations."/>
      <Service icon={<Bot/>} title="AI Sales Agent" text="Provide an AI assistant with relevant business and product information so it can respond to common customer questions."/>
      <Service icon={<BarChart3/>} title="Lead & Conversation Workflows" text="Capture useful lead information and connect conversations with follow-up processes."/>
    </div>
  </Page>;
}

function Service({icon,title,text}) { return <div className="service-row"><div className="feature-icon">{icon}</div><div><h2>{title}</h2><p>{text}</p></div></div>; }

function Contact() {
  return <Page title="Contact Srivani AI" subtitle="Have a business automation requirement? Send us a message.">
    <div className="contact-grid">
      <div className="contact-card">
        <h2>Let's talk</h2>
        <p>For product information, business enquiries or partnership discussions, contact us by email.</p>
        <a className="contact-line" href={`mailto:${EMAIL}`}><Mail size={20}/><span>{EMAIL}</span></a>
        <div className="contact-line"><Globe2 size={20}/><span>India</span></div>
      </div>
      <div className="contact-card">
        <h2>What to include</h2>
        <ul className="plain-list">
          <li>Your business type</li>
          <li>Channels you use (Instagram / WhatsApp)</li>
          <li>What you want to automate</li>
          <li>Approximate number of customer conversations</li>
        </ul>
      </div>
    </div>
  </Page>;
}

function Page({title, subtitle, children}) {
  return <section className="page">
    <div className="container">
      <div className="page-head"><div className="eyebrow">SRIVANI AI</div><h1>{title}</h1><p>{subtitle}</p></div>
      {children}
    </div>
  </section>;
}

function Privacy() {
  return <LegalPage title="Privacy Policy" date="Effective date: September 27, 2026">
    <p>Srivani AI ("Srivani AI", "we", "us", or "our") respects your privacy. This Privacy Policy explains how we may collect, use and protect information when you visit our website or use our AI sales automation services.</p>
    <h2>1. Information we may collect</h2>
    <p>Depending on how you interact with us, we may receive information such as your name, business name, email address, phone number, messages or other information you voluntarily provide. When our services are connected to third-party platforms, we may process information made available through those platforms as necessary to provide the requested service.</p>
    <h2>2. How we use information</h2>
    <p>We may use information to provide and operate our services, respond to enquiries, support customer conversations, improve our products, maintain security, prevent misuse and comply with applicable legal obligations.</p>
    <h2>3. Third-party platforms</h2>
    <p>Our services may integrate with platforms such as Meta products, Instagram and WhatsApp when a customer or business chooses to connect them. Those platforms have their own terms and privacy policies. Information obtained through an integration is handled only for legitimate service purposes and in accordance with applicable requirements.</p>
    <h2>4. Sharing of information</h2>
    <p>We do not sell personal information. We may share information with service providers that help us operate our technology, or where required by law, legal process, security needs or with your direction.</p>
    <h2>5. Data security</h2>
    <p>We use reasonable technical and organizational measures intended to protect information. No internet service can guarantee absolute security.</p>
    <h2>6. Data retention</h2>
    <p>We retain information only for as long as reasonably necessary for the purposes described in this policy, to provide services, resolve disputes, maintain records and meet legal obligations.</p>
    <h2>7. Your choices</h2>
    <p>You may contact us to request access, correction or deletion of information we hold about you, subject to applicable law and legitimate business requirements.</p>
    <h2>8. Children's privacy</h2>
    <p>Our services are intended for businesses and general audiences and are not directed to children under the applicable age of consent.</p>
    <h2>9. Changes to this policy</h2>
    <p>We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised effective date.</p>
    <h2>10. Contact</h2>
    <p>If you have questions about this Privacy Policy, contact us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
  </LegalPage>;
}

function Terms() {
  return <LegalPage title="Terms of Service" date="Effective date: September 27, 2026">
    <p>These Terms of Service ("Terms") govern your access to the Srivani AI website and services. By using our website or services, you agree to these Terms.</p>
    <h2>1. Our services</h2>
    <p>Srivani AI provides software and AI-powered automation intended to help businesses manage customer conversations, sales enquiries, lead capture and related workflows. Features may change as our products develop.</p>
    <h2>2. Account and integrations</h2>
    <p>Where a service requires an account or third-party connection, you are responsible for providing accurate information and maintaining appropriate authorization. You must not connect accounts that you do not have permission to manage.</p>
    <h2>3. Acceptable use</h2>
    <p>You agree not to use our services for unlawful activity, fraud, spam, harassment, unauthorized access, infringement of third-party rights, or activity that violates the rules of connected platforms.</p>
    <h2>4. Third-party services</h2>
    <p>Our services may depend on third-party platforms, APIs or infrastructure. Their availability, features and policies are controlled by those providers and may change independently of Srivani AI.</p>
    <h2>5. AI-generated responses</h2>
    <p>AI-generated content may occasionally be incomplete or inaccurate. Businesses are responsible for reviewing their workflows, product information and customer-facing use of automated responses where appropriate.</p>
    <h2>6. Intellectual property</h2>
    <p>The Srivani AI name, website, software and related materials are owned by or licensed to Srivani AI unless otherwise stated. You retain rights to content and information you provide, subject to the permissions needed to operate the services.</p>
    <h2>7. Availability</h2>
    <p>We aim to keep our services available and reliable, but we do not guarantee uninterrupted or error-free operation. Maintenance, third-party outages and other circumstances may affect availability.</p>
    <h2>8. Limitation of liability</h2>
    <p>To the extent permitted by applicable law, Srivani AI will not be responsible for indirect, incidental or consequential losses arising from use of the website or services.</p>
    <h2>9. Changes</h2>
    <p>We may update these Terms when our services or legal requirements change. Continued use after an update constitutes acceptance of the revised Terms to the extent permitted by law.</p>
    <h2>10. Contact</h2>
    <p>Questions about these Terms can be sent to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
  </LegalPage>;
}

function LegalPage({title,date,children}) {
  return <Page title={title} subtitle={date}>
    <article className="legal">{children}</article>
  </Page>;
}

function App() {
  return <Layout>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/privacy-policy" element={<Privacy/>}/>
      <Route path="/terms" element={<Terms/>}/>
      <Route path="/data-deletion" element={<DataDeletion/>}/>
      <Route path="*" element={<Home/>}/>
    </Routes>
  </Layout>;
}

export default App;
