import Image from "next/image";
import Countdown from "./countdown";

function FacebookIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="socialIcon">
      <path d="M14.2 8.3V6.9c0-.7.5-.9.9-.9h2.2V2.2L14.2 2c-3.4 0-5.1 2-5.1 5.5v.8H6v4.3h3.1V22h4.4v-9.4h3.2l.5-4.3h-3Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="socialIcon">
      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm9.9 2.1a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="comingSoon">
      <Image
        src="/images/resort-background.jpg"
        alt="Ratnagiri Resort building in Nagarkot"
        fill
        priority
        sizes="100vw"
        className="backgroundImage"
      />
      <div className="shade" />

      <section className="content" aria-labelledby="page-title">
        <Image
          src="/images/ratnagiri-logo-cropped.jpg"
          alt="Ratnagiri Resort Nagarkot"
          width={360}
          height={260}
          priority
          className="logo"
        />

        <div className="launchBlock">
          <h1 id="page-title" aria-label="We are launching our website">
            <span>We Are Launching</span>
            <span>Our Website</span>
          </h1>
          <div className="rule" />

          <Countdown targetDate="2026-07-17T00:00:00+05:45" />
        </div>

        <address className="reservation">
          <strong>For Reservation:</strong>
          <span className="phoneLine">
            <a href="tel:+9779823443684">+977-9823443684</a>
            <span>, </span>
            <a href="tel:015145007">01-5145007</a>
            <span>, </span>
            <a href="tel:015145009">01-5145009</a>
          </span>
          <a href="mailto:ratnagirinepal@gmail.com">ratnagirinepal@gmail.com</a>
        </address>
      </section>

      <nav className="socialLinks" aria-label="Social media">
        <a
          href="https://www.facebook.com/ratnagiriresort"
          target="_blank"
          rel="noreferrer"
          aria-label="Ratnagiri Resort on Facebook"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://www.instagram.com/ratnagiriresortpvt.ltd/"
          target="_blank"
          rel="noreferrer"
          aria-label="Ratnagiri Resort on Instagram"
        >
          <InstagramIcon />
        </a>
      </nav>
    </main>
  );
}
