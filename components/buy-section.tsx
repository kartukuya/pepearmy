"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Copy, Check } from "lucide-react"

export function BuySection() {
  const [copiedAddress, setCopiedAddress] = useState(false)
  const contractAddress = "rXRPContractAddressHere123456789"

  const exchanges = [
    { name: "First Ledger", type: "DEX", url: "https://firstledger.net", available: true },
    { name: "XP Market", type: "DEX", url: "https://xpmarket.io", available: true },
    { name: "X Magnetic", type: "DEX", url: "https://xmagnetic.com", available: true },
    { name: "MEXC", type: "CEX", url: "https://mexc.com", available: true },
    { name: "Coingecko", type: "Listing", url: "https://coingecko.com", available: false },
    { name: "CoinMarketCap", type: "Listing", url: "https://coinmarketcap.com", available: false },
  ]

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress)
      setCopiedAddress(true)
      setTimeout(() => setCopiedAddress(false), 2000)
    } catch (err) {
      console.error("Failed to copy address")
    }
  }

  return (
    <div className="space-y-6">
      <Card className="bg-gray-900 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Contract Address</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 p-3 bg-gray-800 rounded-lg">
            <code className="text-green-400 text-sm flex-1 break-all">{contractAddress}</code>
            <Button
              size="sm"
              variant="outline"
              onClick={copyAddress}
              className="border-gray-600 hover:bg-gray-700 bg-transparent"
            >
              {copiedAddress ? <Check size={16} /> : <Copy size={16} />}
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {exchanges.map((exchange) => (
          <Card
            key={exchange.name}
            className={`bg-gray-900 border-gray-700 transition-all duration-300 hover:scale-105 ${
              exchange.available ? "hover:border-green-500" : "opacity-60"
            }`}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold">{exchange.name}</h3>
                  <p className="text-gray-400 text-sm">{exchange.type}</p>
                </div>
                <div className="flex items-center gap-2">
                  {exchange.available ? (
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700"
                      onClick={() => window.open(exchange.url, "_blank")}
                    >
                      Trade <ExternalLink size={14} className="ml-1" />
                    </Button>
                  ) : (
                    <span className="text-yellow-500 text-sm">Coming Soon</span>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
