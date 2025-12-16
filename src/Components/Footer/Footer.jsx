import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-base-300 mt-10 text-base-content p-10">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-7xl mx-auto">
        {/* Brand / About */}
        <aside>
          <h2 className="text-2xl font-bold text-primary">YourApp</h2>
          <p className="mt-3 text-sm opacity-80">
            Building modern, scalable solutions for developers and businesses
            worldwide.
          </p>
        </aside>

        {/* Legal */}
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover" href="/terms">
            Terms of Service
          </a>
          <a className="link link-hover" href="/privacy">
            Privacy Policy
          </a>
        </nav>

        {/* Developer Resources */}
        <nav>
          <h6 className="footer-title">Developers</h6>
          <a className="link link-hover" href="/docs">
            Documentation
          </a>
          <a className="link link-hover" href="/api">
            API Reference
          </a>
          <a className="link link-hover" href="/status">
            System Status
          </a>
        </nav>

        {/* Social Media */}
        <nav>
          <h6 className="footer-title">Connect</h6>
          <div className="flex gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost btn-circle"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.93 4.93 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.38 4.482A13.94 13.94 0 011.671 3.149a4.916 4.916 0 001.523 6.573 4.903 4.903 0 01-2.229-.616v.061a4.916 4.916 0 003.946 4.827 4.996 4.996 0 01-2.224.084 4.918 4.918 0 004.588 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.057 0 14.01-7.496 14.01-13.986 0-.21 0-.423-.015-.637A9.936 9.936 0 0024 4.557z" />
              </svg>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost btn-circle"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23A11.51 11.51 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost btn-circle"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5C4.98 5 3.9 6 2.4 6H2.38C.9 6 0 5 0 3.5 0 2 1.1 1 2.62 1 4.14 1 4.98 2 4.98 3.5zM.24 24h4.32V7.98H.24V24zM7.98 7.98H12v2.16h.06c.56-1.06 1.94-2.18 3.98-2.18 4.26 0 5.04 2.8 5.04 6.44V24h-4.32v-7.08c0-1.68-.03-3.84-2.34-3.84-2.34 0-2.7 1.82-2.7 3.72V24H7.98V7.98z" />
              </svg>
            </a>
          </div>
        </nav>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-base-300 pt-4 text-center text-sm opacity-70 mx-auto">
        © {new Date().getFullYear()} YourApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
