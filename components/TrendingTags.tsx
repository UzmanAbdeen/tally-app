const tags = [

  'iPhone 16',
  'PS5',
  'Nike Air Max',
  'Burger',
  'Pizza',
  'Coca Cola',
  'Samsung S25',
  'Daraz deals'

]

export default function TrendingTags() {

  return (

    <div className="flex flex-wrap gap-4 mt-10 justify-center">

      <p className="text-orange-400">
        🔥 Trending:
      </p>

      {tags.map((tag) => (

        <div
          key={tag}
          className="bg-white/5 border border-white/10 px-5 py-2 rounded-full text-gray-300 hover:bg-indigo-500/20 transition-all cursor-pointer"
        >
          {tag}
        </div>

      ))}

    </div>
  )
}