const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 mt-10 py-20 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
        {/* About Us */}
        <div>
          <h4 className="text-white font-semibold mb-4">About Us</h4>
          <p className="text-gray-400 text-sm">
            MiniCryptoExchange is your trusted platform for fast, secure, and
            easy cryptocurrency trading.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Email: support@minicrypto.com</li>
            <li>Phone: +1 (800) 123-4567</li>
            <li>Address: 123 Crypto St, Blockchain City</li>
          </ul>
        </div>

        {/* How to Trade */}
        <div>
          <h4 className="text-white font-semibold mb-4">How to Trade</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/register" className="hover:text-purple-500">
                Create an Account
              </a>
            </li>
            <li>
              <a href="/dashboard" className="hover:text-purple-500">
                Explore Dashboard
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-purple-500">
                FAQ & Guides
              </a>
            </li>
            <li>
              <a href="/support" className="hover:text-purple-500">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Our Partners */}
        <div>
          <h4 className="text-white font-semibold mb-4">Our Partners</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://partner1.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-500"
              >
                Partner 1
              </a>
            </li>
            <li>
              <a
                href="https://partner2.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-500"
              >
                Partner 2
              </a>
            </li>
            <li>
              <a
                href="https://partner3.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-500"
              >
                Partner 3
              </a>
            </li>
            <li>
              <a
                href="https://partner4.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-500"
              >
                Partner 4
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        &copy; 2025 MiniCryptoExchange. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
