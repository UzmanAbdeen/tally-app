import { NextRequest, NextResponse }
from 'next/server'

export async function GET(
  req: NextRequest
) {

  const query =
    req.nextUrl.searchParams.get('q')

  if (!query) {

    return NextResponse.json([])
  }

  try {

    const response = await fetch(

      `http://localhost:5678/webhook/smart-compare?q=${query}`

    )

    const data =
      await response.json()

    return NextResponse.json(

      Array.isArray(data)

        ? data

        : []

    )

  } catch (error) {

    console.log(error)

    return NextResponse.json([])
  }
}