interface Props {

  query: string

  setQuery: (value: string) => void

  searchProducts: () => void
}

export default function SearchBar({

  query,

  setQuery,

  searchProducts

}: Props) {

  return (

    <div className="mt-12">

      <div className="flex items-center bg-white/5 border border-indigo-500/30 rounded-full p-3 backdrop-blur-xl shadow-2xl shadow-indigo-500/10">

        <input
          type="text"
          placeholder="Search iPhone 16, Pizza, Nike shoes, PS5..."
          value={query}
          onChange={(e) =>
            setQuery(e.target.value)
          }
          className="flex-1 bg-transparent px-6 text-lg outline-none text-white placeholder:text-gray-500"
        />

        <button
          onClick={searchProducts}
          className="bg-gradient-to-r from-indigo-500 to-violet-500 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all"
        >
          Compare Now
        </button>

      </div>

    </div>
  )
}