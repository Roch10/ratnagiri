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

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="whatsappIcon">
      <path d="M12.04 2C6.57 2 2.12 6.4 2.12 11.82c0 1.9.56 3.74 1.61 5.31L2 22l5.06-1.61a10 10 0 0 0 4.98 1.28c5.47 0 9.92-4.41 9.92-9.83C21.96 6.4 17.51 2 12.04 2Zm0 17.87a8.15 8.15 0 0 1-4.35-1.24l-.31-.18-3 .96.98-2.87-.2-.31a7.86 7.86 0 0 1-1.26-4.41c0-4.43 3.65-8.04 8.14-8.04s8.14 3.61 8.14 8.04-3.65 8.05-8.14 8.05Zm4.46-6.02c-.24-.12-1.44-.7-1.66-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.77.94-.14.16-.28.18-.52.06-.24-.12-1.03-.37-1.96-1.19-.72-.64-1.21-1.43-1.35-1.67-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.29-.74-1.77-.19-.46-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 1.99 0 1.17.86 2.31.98 2.47.12.16 1.69 2.56 4.11 3.59.57.24 1.02.39 1.37.5.58.18 1.1.16 1.51.1.46-.07 1.44-.58 1.64-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
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

      </section>

      <div className="contactBar">
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

        <address className="reservationText">
          <strong>For Reservation:</strong>
          <span className="phoneLine">
            <a href="tel:+9779823443684">+977-9823443684</a>
            <span>, </span>
            <a href="tel:015145007">01-5145007</a>
            <span>, </span>
            <a href="tel:5145009">5145009</a>
          </span>
          <a href="mailto:ratnagirinepal@gmail.com">
            ratnagirinepal@gmail.com
          </a>
        </address>

        <a
          href="https://wa.me/9779823443684"
          target="_blank"
          rel="noreferrer"
          className="whatsappLink"
          aria-label="Chat with Ratnagiri Resort on WhatsApp"
        >
          <WhatsAppIcon />
        </a>
      </div>
    </main>
  );
}
