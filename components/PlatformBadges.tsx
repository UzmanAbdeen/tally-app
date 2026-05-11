const platforms = [

  'PickMe Food',
  'Uber Eats',
  'Daraz',
  'Ikman',
  'Keells',
  'Cargills'

]

export default function PlatformBadges() {

  return (

    <div className="flex flex-wrap justify-center gap-4 mt-10">

      {platforms.map((platform) => (

        <div
          key={platform}
          className="bg-white/5 border border-white/10 px-6 py-3 rounded-2xl text-gray-300 hover:border-indigo-500 transition-all"
        >
          {platform}
        </div>

      ))}

    </div>
  )
}