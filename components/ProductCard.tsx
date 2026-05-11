interface Product {

  id: number

  title: string

  price: string

  image: string

  url: string

  provider: string
}

interface Props {

  product: Product

  cheapestId: number | null

  savings: number
}

export default function ProductCard({

  product,

  cheapestId,

  savings

}: Props) {

  const randomDiscount =
    Math.floor(Math.random() * 40) + 10

  const randomRating =
    (Math.random() * 1 + 4).toFixed(1)

  const randomETA =
    Math.floor(Math.random() * 30) + 10

  const isFood =

    product.provider === 'PickMe' ||

    product.provider === 'Uber Eats'

  const providerLogo =

    product.provider === 'Daraz'

      ? 'https://1000logos.net/wp-content/uploads/2023/01/Daraz-logo.png'

      : product.provider === 'Ikman'

        ? 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Ikman.lk_logo.png'

        : product.provider === 'PickMe'

          ? 'https://play-lh.googleusercontent.com/5j1n3VJ4b0jD0R2fM4v2X5g6JQYj7lT4fJx9wK8lY2rN3wA5Qx6P7p9k2m8n3x4=s180'

          : 'https://cdn-icons-png.flaticon.com/512/5977/5977590.png'

  return (

    <div

      className={`

        rounded-3xl p-5 backdrop-blur-xl border transition-all hover:scale-105 relative overflow-hidden

        ${cheapestId === product.id

          ? 'bg-indigo-500/20 border-indigo-400 shadow-2xl shadow-indigo-500/30'

          : 'bg-white/5 border-white/10'

        }

      `}
    >

      <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full">

        FLASH DEAL

      </div>

      {cheapestId === product.id && (

        <div className="bg-indigo-500 text-white px-4 py-2 rounded-full inline-block mb-4">

          BEST DEAL

          <p className="text-sm text-indigo-200 mt-1">

            Save Rs. {savings.toLocaleString()}

          </p>

        </div>

      )}

      <img
        src={product.image}
        alt={product.title}
        className="w-full h-60 object-cover rounded-2xl"
      />

      <div className="flex gap-2 mt-4 flex-wrap">

        {isFood ? (

          <>

            <div className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">

              🍔 Free Delivery

            </div>

            <div className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">

              📍 Nearby

            </div>

            <div className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">

              ⚡ Fast Delivery

            </div>

          </>

        ) : (

          <>

            <div className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">

              {randomDiscount}% OFF

            </div>

            <div className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">

              BANK10

            </div>

            <div className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">

              Save Rs. 5,000

            </div>

          </>

        )}

      </div>

      <h2 className="text-2xl font-semibold mt-5">
        {product.title}
      </h2>

      <div className="flex items-center gap-3 mt-4">

        <img
          src={providerLogo}
          alt={product.provider}
          className="w-10 h-10 rounded-full bg-white p-1 object-contain"
        />

        <p className="text-gray-300">
          {product.provider}
        </p>

      </div>

      <div className="flex items-center justify-between mt-5">

        <div>

          <p className="text-gray-500 line-through text-sm">

            Rs. 450,000

          </p>

          <p className="text-3xl font-bold">
            {product.price}
          </p>

        </div>

        <div className="text-right">

          <p className="text-yellow-400">
            ⭐ {randomRating}
          </p>

          <p className="text-gray-400 text-sm mt-1">

            {isFood

              ? `Delivery in ${randomETA} mins`

              : `ETA ${randomETA} mins`

            }

          </p>

        </div>

      </div>

      <button
        onClick={() =>
          window.open(product.url)
        }
        className="w-full mt-6 bg-gradient-to-r from-indigo-500 to-violet-500 py-3 rounded-2xl font-semibold hover:scale-105 transition-all"
      >

        {isFood

          ? 'Order Now'

          : 'Continue to App'

        }

      </button>

    </div>
  )
}