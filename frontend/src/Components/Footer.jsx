export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-sm text-center md:text-left">
        {/* Office Address */}
        <div>
          <h4 className="font-semibold mb-2">Office</h4>
          <p>C1-602, Chandralok Nagari,</p>
          <p>Ganesh Nagar, Dhayari, Pune.</p>
        </div>

        {/* Urban Field Address */}
        <div>
          <h4 className="font-semibold mb-2">Field: Urban Slum</h4>
          <p>Gosavi Wasti,</p>
          <p>Karve Nagar, Pune.</p>
        </div>

        {/* Rural Field Address */}
        <div>
          <h4 className="font-semibold mb-2">Field: Rural</h4>
          <p>Shriram Nagar,</p>
          <p>Khed Shivapur, Pune.</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Your NGO Name. All rights reserved.
      </div>
    </footer>
  );
}

