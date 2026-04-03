import Link from "next/link"
import { socialLinks } from "@/lib/data"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">DevPortfolio</h3>
            <p className="text-gray-400">
              Creating amazing web experiences for clients worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>

            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>

          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>

            <ul className="space-y-2 text-gray-400">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Responsive Design</li>
              <li>Website Optimization</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>

            <div className="flex gap-4">

              {socialLinks.map((social) => (

                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-purple-800 rounded-full flex items-center justify-center hover:bg-purple-700 transition"
                >

                  <i className={`fab ${social.icon}`}></i>

                </a>

              ))}

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 DevPortfolio. All rights reserved.</p>
        </div>

      </div>
    </footer>
  )
}