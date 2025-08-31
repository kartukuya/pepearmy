"use client"

import { useState } from "react"
import Image from "next/image"

export default function PepeArmy() {
  const [activeSection, setActiveSection] = useState("warriors")
  const [showContent, setShowContent] = useState(false)

  const sections = {
    warriors: {
      title: "BASE TRENCH WARRIORS",
      image: "/images/pepe-trench-warrior.jpg",
      content: (
        <div className="text-gray-300 space-y-6 font-mono text-sm leading-relaxed">
          <p>
            Pepe isn't just any warrior—he's a soldier born in the meme coin trenches, where countless tokens rise and
            fall in the blink of an eye. Born with determination and courage, Pepe wears his colors with pride,
            symbolizing his loyalty to Base Network and his mission to unite meme coins under one flag. For Pepe, the
            Base blockchain isn't just a platform—it's his battleground, and he's ready to lead the meme coin
            revolution.
          </p>

          <div className="mt-8">
            <h3 className="text-white font-bold mb-4">1. Supply Posts [Where to buy]:</h3>
            <ul className="space-y-2 ml-4">
              <li>• Uniswap [DEX]</li>
              <li>• SushiSwap [DEX]</li>
              <li>• BaseSwap [DEX]</li>
              <li>• MEXC</li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-white font-bold mb-4">2. Listings and Updates:</h3>
            <ul className="space-y-2 ml-4">
              <li>• Coingecko</li>
              <li>• CMC</li>
              <li>• MoonTok</li>
              <li>• CN Token</li>
            </ul>
          </div>
        </div>
      ),
    },
    mission: {
      title: "PEPE'S MISSION",
      image: "/images/pepe-mission.png",
      content: (
        <div className="text-gray-300 space-y-6 font-mono text-sm leading-relaxed">
          <p>
            Pepe stands boldly against the conventional currents of the crypto world, challenging the status quo with
            every transaction. His mission is to break free from the chains of traditional investment norms, where
            speculative frenzy often overshadows true potential. Pepe isn't here to follow trends; he's here to set
            them, sparking a movement where creativity, community, and courage are the new currencies. He aims to
            redefine what it means to be a meme coin, not just as a fleeting jest but as a symbol of resilience and
            innovation on the Base Network.
          </p>
        </div>
      ),
    },
    army: {
      title: "THE BASE ARMY",
      image: "/images/base-army.jpg",
      content: (
        <div className="text-gray-300 space-y-6 font-mono text-sm leading-relaxed">
          <p>
            Pepe's call is not just for followers but for fellow warriors. He seeks to unite all who have faith in the
            power of memes to disrupt, innovate, and unite. Under Pepe's leadership, the community isn't just a group of
            investors; it's a legion of like-minded individuals bound by the shared goal of transforming the meme coin
            landscape. Together, they aim to create a cohesive front, leveraging the strength of the Base Network to
            fight for visibility, value, and victory in the crypto wars. Pepe's troop is where every member is both a
            soldier and a strategist in this grand meme coin crusade.
          </p>
        </div>
      ),
    },
    attack: {
      title: "THE ATTACK PLAN",
      image: "/images/attack-plan.jpg",
      content: (
        <div className="text-gray-300 space-y-6 font-mono text-sm leading-relaxed">
          <div>
            <h3 className="text-white font-bold mb-3">1. Uniting the Troops:</h3>
            <p className="mb-2">
              <strong>Objective:</strong> Assemble a formidable force of meme coin enthusiasts and Base Network
              believers.
            </p>
            <p>
              <strong>Strategy:</strong> Rally the scattered forces under Pepe's banner. Promote unity through shared
              vision, community events, and exclusive token benefits. Establish a command center on telegram where
              strategies are discussed and camaraderie is built.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-3">2. Invading the Enemy:</h3>
            <p className="mb-2">
              <strong>Objective:</strong> Disrupt the dominance of established meme coins and conquer new territories.
            </p>
            <p>
              <strong>Strategy:</strong> Launch surprise attacks via significant token burns, strategic partnerships,
              and showcasing Pepe's unique features. Utilize the Base Network's speed and efficiency to outmaneuver
              competitors, capturing market share and investor interest.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-3">3. Growing the Community:</h3>
            <p className="mb-2">
              <strong>Objective:</strong> Expand our ranks to include both seasoned warriors and fresh recruits.
            </p>
            <p>
              <strong>Strategy:</strong> Implement a rigorous recruitment campaign with educational content, interactive
              AMAs, and incentivized participation in community activities. Develop a loyalty program where every action
              taken by members directly contributes to the token's growth and stability.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-3">4. Listing on Exchanges:</h3>
            <p className="mb-2">
              <strong>Objective:</strong> Secure strategic positions by listing on major and niche exchanges.
            </p>
            <p>
              <strong>Strategy:</strong> Engage in diplomatic talks with exchange leaders, showcasing Pepe's potential
              and community support. Prepare for a coordinated assault with a series of listings to ensure broad
              accessibility and liquidity, turning each listing into a victory parade for our troops.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-3">5. Guerrilla Marketing:</h3>
            <p className="mb-2">
              <strong>Objective:</strong> Wage unconventional warfare to capture the market's attention.
            </p>
            <p>
              <strong>Strategy:</strong> Deploy unexpected marketing maneuvers like flash mob events, viral social media
              campaigns, and meme contests. Use the element of surprise with pop-up events and flash giveaways in
              unexpected places, both online and offline, to keep Pepe at the forefront of investors' minds.
            </p>
          </div>

          <div className="mt-8 p-4 bg-gray-800 bg-opacity-50 rounded">
            <p className="text-white font-bold">
              With these stages, PEPE ARMY aims to not only survive but thrive in the meme coin trenches, transforming
              from a mere participant to a dominant force, leading the charge towards a new era of meme coin supremacy
              on Base Network.
            </p>
          </div>
        </div>
      ),
    },
  }

  const allImages = [
    { src: "/images/pepe-trench-warrior.jpg", title: "BASE TRENCH WARRIORS" },
    { src: "/images/pepe-mission.png", title: "PEPE'S MISSION" },
    { src: "/images/base-army.jpg", title: "THE BASE ARMY" },
    { src: "/images/attack-plan.jpg", title: "THE ATTACK PLAN" },
  ]

  const handleMenuClick = (section: string) => {
    setActiveSection(section)
    setShowContent(true)
  }

  const closeContent = () => {
    setShowContent(false)
  }

  return (
    <div className="min-h-screen bg-blue-900 text-white flex">
      {/* Left Sidebar */}
      <div className="w-1/2 bg-blue-900 p-8 flex flex-col">
        {/* Navigation */}
        <nav className="mb-12">
          <div className="flex space-x-8 text-gray-400 text-sm font-mono">
            <button
              onClick={() => setShowContent(false)}
              className="hover:text-white transition-all duration-300 hover:scale-105 hover:glow-blue"
            >
              Home
            </button>
            <span className="hover:text-white transition-all duration-300 hover:scale-105 hover:glow-blue cursor-default">
              Basecamp(TG)
            </span>
            <span className="hover:text-white transition-all duration-300 hover:scale-105 hover:glow-blue cursor-default">
              Comms(X)
            </span>
            <span className="hover:text-white transition-all duration-300 hover:scale-105 hover:glow-blue cursor-default">
              DexTools
            </span>
            <button
              onClick={() => setShowContent(false)}
              className="hover:text-white transition-all duration-300 hover:scale-105 hover:glow-blue"
            >
              Supply(Buy)
            </button>
          </div>
        </nav>

        {/* PEPE ARMY Logo or Content */}
        {!showContent ? (
          <div className="mb-16 animate-fadeIn">
            <h1 className="text-[80px] font-black text-white leading-none tracking-tighter hover:text-green-400 transition-colors duration-500">
              PEPE
            </h1>
            <h2 className="text-[60px] font-black text-white leading-none tracking-tighter hover:text-green-400 transition-colors duration-500">
              ARMY
            </h2>
          </div>
        ) : (
          <div className="mb-8 animate-fadeIn">
            <h1 className="text-[48px] font-black text-white leading-none tracking-tighter mb-8">
              {sections[activeSection as keyof typeof sections].title}
            </h1>
            <div className="animate-slideIn">{sections[activeSection as keyof typeof sections].content}</div>
          </div>
        )}

        {/* Menu Items or Close Button */}
        {!showContent ? (
          <div className="space-y-8 flex-1 font-mono">
            <button
              onClick={() => handleMenuClick("warriors")}
              className="block text-left text-lg transition-all duration-500 transform hover:translate-x-4 hover:scale-105 text-gray-400 hover:text-white hover:glow-blue"
            >
              BASE TRENCH WARRIORS
            </button>

            <button
              onClick={() => handleMenuClick("mission")}
              className="block text-left text-lg transition-all duration-500 transform hover:translate-x-4 hover:scale-105 text-gray-400 hover:text-white hover:glow-blue"
            >
              PEPE'S MISSION
            </button>

            <button
              onClick={() => handleMenuClick("army")}
              className="block text-left text-lg transition-all duration-500 transform hover:translate-x-4 hover:scale-105 text-gray-400 hover:text-white hover:glow-blue"
            >
              THE BASE ARMY
            </button>

            <button
              onClick={() => handleMenuClick("attack")}
              className="block text-left text-lg transition-all duration-500 transform hover:translate-x-4 hover:scale-105 text-gray-400 hover:text-white hover:glow-blue"
            >
              THE ATTACK PLAN
            </button>
          </div>
        ) : (
          <div className="flex-1 flex items-end">
            <button
              onClick={closeContent}
              className="text-white hover:text-red-400 text-lg font-mono transition-all duration-300 hover:scale-105 animate-pulse"
            >
              ← Back to Menu
            </button>
          </div>
        )}

        {/* Footer */}
        <div className="mt-auto space-y-2 font-mono animate-fadeIn">
          <div className="text-gray-500 text-xs leading-relaxed">
            <div className="mb-2">©2025 PEPE ARMY. All rights reserved.</div>
            <div className="mb-1">
              This website and its contents are protected by copyright and other intellectual property laws.
            </div>
            <div className="mb-1">Unauthorized reproduction, distribution, or modification is strictly prohibited.</div>
            <div>PEPE ARMY is a decentralized community project on Base Network.</div>
          </div>
        </div>
      </div>

      {/* Right Content Area */}
      <div className="w-1/2 relative">
        {!showContent ? (
          <div className="h-screen overflow-y-auto scroll-smooth">
            <div className="space-y-0">
              {allImages.map((image, index) => (
                <div key={index} className="relative h-screen w-full group transition-all duration-700 hover:scale-105">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:brightness-110"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-blue-900 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500"></div>
                  <div className="absolute top-8 left-8 transform transition-all duration-500 group-hover:translate-x-4">
                    <div className="flex items-center">
                      <span className="text-2xl mr-4 text-white drop-shadow-lg transition-all duration-300 group-hover:text-green-400">
                        →
                      </span>
                      <h2 className="text-3xl font-bold text-white font-mono drop-shadow-lg transition-all duration-300 group-hover:text-green-400">
                        {image.title}
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="h-screen relative animate-fadeIn">
            <Image
              src={sections[activeSection as keyof typeof sections].image || "/placeholder.svg"}
              alt={sections[activeSection as keyof typeof sections].title}
              fill
              className="object-contain transition-all duration-500"
              priority
            />
          </div>
        )}
      </div>
    </div>
  )
}
