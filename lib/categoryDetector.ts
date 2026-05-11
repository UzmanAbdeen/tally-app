export function detectCategory(query: string) {

  const lowerQuery =
    query.toLowerCase()

  const foodKeywords = [

    'pizza',
    'burger',
    'muffin',
    'kottu',
    'fried rice',
    'cake',
    'submarine',
    'rice',
    'coffee',
    'coke'

  ]

  const isFood =
    foodKeywords.some(keyword =>

      lowerQuery.includes(keyword)

    )

  if (isFood) {

    return 'food'
  }

  return 'product'
}