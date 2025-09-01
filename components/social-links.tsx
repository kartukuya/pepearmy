"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Twitter, Globe, BarChart3 } from "lucide-react"

export function SocialLinks() {
  const socialLinks = [
    { name: "Telegram", icon: MessageCircle, url: "https://t.me/portalpepearmy", color: "bg-blue-500" },
    { name: "Twitter", icon: Twitter, url: "https://x.com/basepepearmy_", color: "bg-sky-500" },
    { name: "Website", icon: Globe, url: "#", color: "bg-green-500" },
    { name: "Dexscreen", icon: BarChart3, url: "#", color: "bg-purple-500" },
  ]

  return (
    <div className="flex flex-wrap gap-3">
      {socialLinks.map((link) => (
        <Button
          key={link.name}
          size="sm"
          className={`${link.color} hover:opacity-80 transition-all duration-300 hover:scale-105`}
          onClick={() => link.url !== "#" && window.open(link.url, "_blank")}
        >
          <link.icon size={16} className="mr-2" />
          {link.name}
        </Button>
      ))}
    </div>
  )
}
