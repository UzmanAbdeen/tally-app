export async function scrapeIkman(query: string) {

  return [

    {
      id: 101,
      title: `${query} - Ikman Seller`,
      price: 'Rs. 385,000',
      image: 'https://via.placeholder.com/300',
      url: 'https://ikman.lk',
      provider: 'Ikman'
    },

    {
      id: 102,
      title: `${query} - Used Condition`,
      price: 'Rs. 365,000',
      image: 'https://via.placeholder.com/300',
      url: 'https://ikman.lk',
      provider: 'Ikman'
    }

  ]
}