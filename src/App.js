import React from 'react';
import './App.css';

const Header = () => (
  <header className="navbar">
    <div className="container">
      <div className="logo">
        <h1>FakeMyEmail</h1>
        <p className="tagline">Your inbox's new best friend.</p>
      </div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#services">Top Services</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>
        <a href="#get-started" className="btn btn-primary">Get Started</a>
      </nav>
    </div>
  </header>
);

const HeroSection = () => (
  <section id="home" className="hero">
    <div className="hero-background"></div>
    <div className="container">
      <h2>Protect Your Inbox. Use an Alias.</h2>
      <p className="subheadline">Because giving out your real email is sooo 2005.</p>
      <div className="button-row">
        <a href="#simplelogin" className="btn btn-secondary">Try SimpleLogin →</a>
        <a href="#anonaddy" className="btn btn-secondary">Try AnonAddy →</a>
      </div>
    </div>
  </section>
);

const BenefitsSection = () => (
  <section id="how-it-works" className="benefits">
    <div className="container">
      <div className="benefit-card">
        <span className="emoji">✉️</span>
        <h3>Stop spam before it starts</h3>
        <p>Use a unique alias for every service. If you get spammed, just delete the alias.</p>
      </div>
      <div className="benefit-card">
        <span className="emoji">🔒</span>
        <h3>Hide your identity online</h3>
        <p>Prevent companies from tracking you across different websites using your email.</p>
      </div>
      <div className="benefit-card">
        <span className="emoji">🚀</span>
        <h3>Works with any site</h3>
        <p>Generate a new email alias on the fly for newsletters, sign-ups, and more.</p>
      </div>
    </div>
  </section>
);

const ComparisonTable = () => (
  <section id="services" className="comparison">
    <div className="container">
      <h2>Compare Top Email Alias Services</h2>
      <table>
        <thead>
          <tr>
            <th>Provider</th>
            <th>Key Features</th>
            <th>Free Plan</th>
            <th>Paid Plan Starts At</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SimpleLogin</td>
            <td>Open source, unlimited aliases, PGP</td>
            <td>15 Aliases</td>
            <td>$30/year</td>
            <td><a href="#simplelogin-start" className="btn btn-table">Get Started →</a></td>
          </tr>
          <tr>
            <td>AnonAddy</td>
            <td>Open source, custom domains, API</td>
            <td>Unlimited Aliases (shared domain)</td>
            <td>$1/month</td>
            <td><a href="#anonaddy-start" className="btn btn-table">Get Started →</a></td>
          </tr>
          <tr>
            <td>DuckDuckGo Email</td>
            <td>Free, integrated with search, simple</td>
            <td>Free</td>
            <td>N/A</td>
            <td><a href="#duckduckgo-start" className="btn btn-table">Get Started →</a></td>
          </tr>
        </tbody>
      </table>
      <p className="footnote">
        We may earn a commission if you sign up. Thanks for funding my caffeine habit!
      </p>
    </div>
  </section>
);

const EducationalSection = () => (
  <section className="educational">
    <div className="container">
      <h2>What’s an Email Alias?</h2>
      <div className="edu-content">
        <p>
          An email alias is a forwarding email address that hides your real email address. When you give out an alias, emails sent to it are forwarded to your actual inbox. This allows you to protect your primary email from spam, data breaches, and tracking without having to manage multiple inboxes.
        </p>
        <p className="absurd">
          Think of it like wearing a Halloween mask, but for your inbox. If a vampire (or a spammer) gets annoying, you just take off the mask and poof! You're gone. No garlic or wooden stakes required.
        </p>
      </div>
    </div>
  </section>
);

const BlogTeaser = () => (
  <section id="blog" className="blog-teaser">
    <div className="container">
      <h2>From Our Blog</h2>
      <div className="blog-grid">
        <div className="blog-card">
          <h3>Best Email Alias Services of 2025</h3>
          <p>We compare the top players in the email privacy game so you don't have to. Who will come out on top?</p>
          <a href="#blog-post-1" className="read-more">Read More →</a>
        </div>
        <div className="blog-card">
          <h3>How I Stopped Spam and Found True Happiness</h3>
          <p>A personal journey from an inbox overflowing with junk to a state of digital nirvana. It's possible.</p>
          <a href="#blog-post-2" className="read-more">Read More →</a>
        </div>
        <div className="blog-card">
          <h3>Are You Still Using Your Real Email? You Animal.</h3>
          <p>A slightly-judgmental look at why sharing your primary email is a practice best left in the past.</p>
          <a href="#blog-post-3" className="read-more">Read More →</a>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="testimonials">
    <div className="container">
      <div className="testimonial-card">
        <p>"I use aliases for everything now — even my pizza orders. They don't need to know my real email to send me coupons."</p>
        <span>– Dave, Ohio</span>
      </div>
      <div className="testimonial-card">
        <p>"My inbox is clean, my soul is cleansed. I've reached a new level of digital zen."</p>
        <span>– Priya, New York</span>
      </div>
      <div className="testimonial-card">
        <p>"Setting this up was easier than I thought. 10/10 would recommend to my non-technical grandma."</p>
        <span>– Alex, California</span>
      </div>
    </div>
  </section>
);

const CtaSection = () => {
  // A simple countdown timer effect for the CTA section
  React.useEffect(() => {
    const timerEl = document.getElementById('countdown-timer');
    if (!timerEl) return;

    let time = 1 * 60 + 23; // 14 minutes 23 seconds

    const interval = setInterval(() => {
      time--;
      if (time <= 0) {
        timerEl.textContent = "You've been spammed!";
        timerEl.classList.add('spammed');
        clearInterval(interval);
        return;
      }

      const minutes = Math.floor(time / 60).toString().padStart(2, '0');
      const seconds = (time % 60).toString().padStart(2, '0');

      timerEl.textContent = `00:${minutes}:${seconds}`;
    }, 1000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []); // Empty dependency array ensures this runs only once

  return (
    <section className="cta">
      <div className="container">
        <h2>Ready to Reclaim Your Inbox?</h2>
        <a href="#get-started" className="btn btn-primary btn-large">Stop Spam Today – Get Started</a>
        <div className="countdown">
          <p>Time until the next data breach:</p>
          <span id="countdown-timer">00:14:23</span>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p className="disclaimer">
        Affiliate Disclosure: We may receive a commission if you sign up for a service through our links. This helps us keep the lights on and the coffee flowing. We only recommend services we believe in.
      </p>
      <div className="footer-links">
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
        <a href="#contact">Contact</a>
      </div>
      <p>&copy; {new Date().getFullYear()} FakeMyEmail. All rights reserved.</p>
    </div>
  </footer>
);


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <ComparisonTable />
        <EducationalSection />
        <BlogTeaser />
        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;