"use client"

import Link from "next/link"
import { ExternalLink, MessageCircle, BarChart3, ShoppingCart } from "lucide-react"

export function Navigation() {
  const navItems = [
    { name: "Home", href: "#", icon: null },
    { name: "Basecamp(TG)", href: "https://t.me/pongoxrp", icon: MessageCircle, external: true },
    { name: "Comms(X)", href: "https://twitter.com/pongoxrp", icon: ExternalLink, external: true },
    { name: "DexTools", href: "https://dextools.io", icon: BarChart3, external: true },
    { name: "Supply(Buy)", href: "#buy", icon: ShoppingCart },
  ]

  return (
    <nav className="mb-12">
      <div className="flex flex-wrap gap-6 text-gray-400 text-sm">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-2 hover:text-white transition-colors duration-300 hover:scale-105"
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
          >
            {item.icon && <item.icon size={16} />}
            {item.name}
            {item.external && <ExternalLink size={12} />}
          </Link>
        ))}
      </div>
    </nav>
  )
}
