import { NextRequest, NextResponse }
from 'next/server'

import { scrapeDaraz }
from '@/lib/scrapers/daraz'

export async function GET(
  req: NextRequest
) {

  const query =
    req.nextUrl.searchParams.get('q')

  if (!query) {

    return NextResponse.json([])
  }

  try {

    const products =
      await scrapeDaraz(query)

    return NextResponse.json(products)

  } catch (error) {

    console.log(error)

    return NextResponse.json([])
  }
}