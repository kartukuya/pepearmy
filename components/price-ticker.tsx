"use client"

import { useState, useEffect } from "react"
import { TrendingUp, TrendingDown } from "lucide-react"

export function PriceTicker() {
  const [price, setPrice] = useState(0.0001234)
  const [change, setChange] = useState(15.67)
  const [isPositive, setIsPositive] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate price changes
      const newChange = (Math.random() - 0.5) * 10
      const newPrice = price * (1 + newChange / 100)
      setPrice(newPrice)
      setChange(Math.abs(newChange))
      setIsPositive(newChange > 0)
    }, 3000)

    return () => clearInterval(interval)
  }, [price])

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-white font-semibold">PONGO/XRP</h3>
          <p className="text-2xl font-bold text-white">${price.toFixed(8)}</p>
        </div>
        <div className={`flex items-center gap-1 ${isPositive ? "text-green-400" : "text-red-400"}`}>
          {isPositive ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
          <span className="font-semibold">{change.toFixed(2)}%</span>
        </div>
      </div>
    </div>
  )
}
