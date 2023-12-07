// HomePage.js
import React from 'react';

const HomePage = () => {
  return (
    <html lang="en">
      <head>
        {/* Your head content here */}
      </head>
      <body>
        <header>
          {/* Your header content here */}
        </header>
        <div className="main-content">
          {/* Your main content here */}
        </div>
        <footer className="footer-section">
          {/* Your footer content here */}
        </footer>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <script>
          {window.netlifyIdentity && (
            window.netlifyIdentity.on('init', (user) => {
              if (!user) {
                window.netlifyIdentity.on('login', () => {
                  document.location.href = '/admin/';
                });
              }
            })
          )}
        </script>
      </body>
    </html>
  );
};

export default HomePage;
