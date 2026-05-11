const features = [

  {
    title: 'Cheapest Price',
    description: 'Always get the best deal',
    icon: '💸'
  },

  {
    title: 'Fastest Delivery',
    description: 'Quickest to your door',
    icon: '⚡'
  },

  {
    title: 'Best Promo Codes',
    description: 'Exclusive discounts',
    icon: '🎟️'
  },

  {
    title: 'AI Recommendations',
    description: 'Smart product picks',
    icon: '🤖'
  },

  {
    title: 'Nearby Results',
    description: 'Closest to your location',
    icon: '📍'
  },

  {
    title: 'Flash Deals',
    description: 'Limited time offers',
    icon: '🔥'
  }

]

export default function FeatureHighlights() {

  return (

    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mt-16">

      {features.map((feature) => (

        <div
          key={feature.title}

          className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-xl hover:border-indigo-500 hover:bg-indigo-500/10 transition-all"
        >

          <div className="text-3xl">
            {feature.icon}
          </div>

          <h3 className="text-white font-semibold mt-4">
            {feature.title}
          </h3>

          <p className="text-gray-500 text-sm mt-2">
            {feature.description}
          </p>

        </div>

      ))}

    </div>
  )
}