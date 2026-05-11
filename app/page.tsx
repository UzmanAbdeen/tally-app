'use client'

import { useState, useEffect } from 'react'

import HeroSection
from '@/components/HeroSection'

import SearchBar
from '@/components/SearchBar'

import TrendingTags
from '@/components/TrendingTags'

import PlatformBadges
from '@/components/PlatformBadges'

import FeatureHighlights
from '@/components/FeatureHighlights'

import ProductCard
from '@/components/ProductCard'

export default function HomePage() {

  const [query, setQuery] = useState('')

  const [products, setProducts]
    = useState<any[]>([])

  const [loading, setLoading]
    = useState(false)

  const [recommendation, setRecommendation]
    = useState('')

  const [cheapestId, setCheapestId]
    = useState<number | null>(null)

  const [savings, setSavings]
    = useState(0)

  const [location, setLocation]
    = useState('')

  const detectLocation = () => {

    if (!navigator.geolocation) return

    navigator.geolocation.getCurrentPosition(

      (position) => {

        const latitude =
          position.coords.latitude

        const longitude =
          position.coords.longitude

        setLocation(

          `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`

        )
      }

    )
  }

  useEffect(() => {

    detectLocation()

  }, [])

  const searchProducts = async () => {

    if (!query) return

    setLoading(true)

    try {

      const response = await fetch(

        `/api/search?q=${query}`

      )

      const data =
        await response.json()

      const safeProducts =

        Array.isArray(data)

          ? data

          : []

      setProducts(safeProducts)

      if (safeProducts.length > 0) {

        const cheapest =
          safeProducts.reduce(

            (prev: any, current: any) => {

              const prevPrice =
                parseInt(

                  prev.price?.replace(
                    /[^0-9]/g,
                    ''
                  )

                ) || 0

              const currentPrice =
                parseInt(

                  current.price?.replace(
                    /[^0-9]/g,
                    ''
                  )

                ) || 0

              return currentPrice < prevPrice

                ? current

                : prev
            }

          )

        setCheapestId(cheapest.id)

        const prices =
          safeProducts.map(

            (product: any) =>

              parseInt(

                product.price?.replace(
                  /[^0-9]/g,
                  ''
                )

              ) || 0

          )

        const highestPrice =
          Math.max(...prices)

        const cheapestPrice =
          parseInt(

            cheapest.price?.replace(
              /[^0-9]/g,
              ''
            )

          ) || 0

        setSavings(

          highestPrice - cheapestPrice

        )

        setRecommendation(

          `${cheapest.provider} offers the best overall deal for ${query}.`

        )
      }

    } catch (error) {

      console.log(error)

      setProducts([])

    } finally {

      setLoading(false)
    }
  }

  return (

    <main className="min-h-screen bg-black text-white overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_40%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.12),transparent_40%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        <HeroSection />

        <SearchBar
          query={query}
          setQuery={setQuery}
          searchProducts={searchProducts}
        />

        <TrendingTags />

        <PlatformBadges />

        {location && (

          <div className="mt-8 flex justify-center">

            <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-full text-gray-300">

              📍 Location Detected: {location}

            </div>

          </div>

        )}

        <FeatureHighlights />

        {recommendation && (

          <div className="mt-16 bg-indigo-500/10 border border-indigo-500/20 rounded-3xl p-8">

            <h2 className="text-3xl font-bold">
              AI Recommendation
            </h2>

            <p className="text-gray-300 mt-3 text-lg">
              {recommendation}
            </p>

          </div>

        )}

        {loading && (

          <div className="mt-16 text-center">

            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-500 mx-auto"></div>

            <p className="text-gray-400 mt-6">
              Comparing platforms...
            </p>

          </div>

        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {products.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
              cheapestId={cheapestId}
              savings={savings}
            />

          ))}

        </div>

      </div>

    </main>
  )
}