"use client"

interface MilitaryCharacterProps {
  type: "mission" | "warrior" | "army" | "attack"
  className?: string
}

export function MilitaryCharacter({ type, className = "" }: MilitaryCharacterProps) {
  const characters = {
    mission: (
      <div className={`relative ${className}`}>
        {/* Pongo Character with Flag */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-400 via-yellow-500 to-orange-600 rounded-lg">
          <div className="absolute top-10 right-10 w-32 h-20 bg-purple-300 rounded-lg transform rotate-12">
            <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
              <div className="text-white font-bold text-sm">XRP</div>
            </div>
          </div>
          <div className="absolute bottom-20 left-10 w-20 h-20 bg-green-600 rounded-full">
            <div className="absolute inset-2 bg-gray-800 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-black font-bold text-lg">
            PONGO'S MISSION
          </div>
        </div>
      </div>
    ),
    warrior: (
      <div className={`relative ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-400 via-orange-500 to-yellow-600 rounded-lg">
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-green-600 rounded-lg">
            <div className="absolute inset-2 bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-white font-bold">XRP</div>
            </div>
          </div>
          <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-brown-600 rounded-lg"></div>
          <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-brown-600 rounded-lg"></div>
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-black font-bold text-lg">
            XRP TRENCH WARRIORS
          </div>
        </div>
      </div>
    ),
    army: (
      <div className={`relative ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-300 via-orange-400 to-red-500 rounded-lg">
          <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-red-600 rounded-full">
            <div className="absolute inset-2 bg-yellow-400 rounded-full"></div>
          </div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-16 bg-green-700 rounded-lg"></div>
          <div className="absolute top-10 right-10 text-black font-bold text-lg">THE XRP ARMY</div>
        </div>
      </div>
    ),
    attack: (
      <div className={`relative ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-green-400 via-yellow-500 to-orange-500 rounded-lg">
          <div className="absolute top-1/4 left-1/3 w-20 h-20 bg-green-800 rounded-lg">
            <div className="absolute inset-2 bg-gray-700 rounded-lg flex items-center justify-center">
              <div className="text-white text-xs">MAP</div>
            </div>
          </div>
          <div className="absolute bottom-1/4 right-1/3 w-16 h-4 bg-orange-600 rounded-full"></div>
          <div className="absolute top-10 left-10 text-black font-bold text-lg">THE ATTACK PLAN</div>
        </div>
      </div>
    ),
  }

  return characters[type]
}
