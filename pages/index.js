import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <html lang="en">
      <Head>
        <title>Your Page Title</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Silkscreen&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap" rel="stylesheet" />
        {/* Add any additional head elements as needed */}
      </Head>
      <body>
        <header>
          <img src="Logo-Kickbonuses.svg" alt="Kickbonuses Logo" />
        </header>

        <div className="main-content">
          {/* Styled Casino Box */}
          <div
            className="casino-box"
            onClick={() => (window.location.href = 'your-bonus-link.html')}
          >
            <img
              src="6318bfd6e2a1691b9b74b8a0_wolfy-casino-logo-big.png"
              alt="Casino Logo"
            />
            <h2>Exclusive Bonus Offer!</h2>
            <p>
              Get a 100% bonus on your first deposit. Don't miss out on this
              exciting opportunity!
            </p>
            <button>Get Bonus</button>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer-section">
          <div className="footer-container">
            {/* Two Columns */}
            <div className="footer-columns">
              {/* Column 1 */}
              <div className="footer-column">
                <div className="mega-footer-left-wrapper">
                  <h5>GAMBLE AWARE</h5>
                  <p className="mega-footer-paragraph-2">
                    Most people gamble for fun and enjoyment. However, some
                    people think of gambling as a way to make money, spend more
                    than they can afford, or use gambling to distract
                    themselves from everyday problems. Following these tips can
                    help you to gamble more safely.
                    <br />
                    <br />
                    1. Don't think of gambling as a way to make money
                    <br />
                    2. Only gamble with money you can afford to lose
                    <br />
                    3. Set a money limit in advance
                    <br />
                    4. Set a time limit in advance
                    <br />
                    5. Never chase your losses
                    <br />
                    To find further advice, help and support visit:{' '}
                    <a href="https://www.begambleaware.org/">
                      https://www.begambleaware.org/
                    </a>
                    <br />
                  </p>
                  <h5>DISCLAIMER</h5>
                  <p className="mega-footer-paragraph-2 mobile">
                    Kickbonus.com is not responsible for incorrect information
                    on bonuses, offers, or promotions listed on the website.
                    Kickbonus.com recommends that the player reviews all the
                    terms and conditions of all bonuses listed on the Casino's
                    website.
                  </p>
                </div>
              </div>
              {/* Column 2 */}
              <div className="footer-column">
                <div className="logo-footer">
                  <img
                    src="Logo-Kickbonuses.svg"
                    loading="lazy"
                    width="80%"
                    alt="Kickbonuses"
                  />
                </div>
              </div>
            </div>
            {/* Copyright Text */}
            <div className="copyright-text">
              <p>&copy; 2023 - 2024 Kickbonus.com. All rights reserved.</p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}

