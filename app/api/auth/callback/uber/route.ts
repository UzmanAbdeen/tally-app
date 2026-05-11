import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");
  const error = req.nextUrl.searchParams.get("error");

  // Handle OAuth errors
  if (error) {
    return NextResponse.json(
      {
        success: false,
        error,
      },
      { status: 400 }
    );
  }

  // No auth code
  if (!code) {
    return NextResponse.json(
      {
        success: false,
        error: "No authorization code received",
      },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      "https://sandbox-login.uber.com/oauth/v2/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          client_id: process.env.UBER_CLIENT_ID!,
          client_secret: process.env.UBER_CLIENT_SECRET!,
          grant_type: "authorization_code",

          // IMPORTANT: same exact redirect URI
          redirect_uri:
            "https://tally-app-three.vercel.app/api/auth/callback/uber/",

          code,
        }),
      }
    );

    const data = await response.json();

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        error: "Token exchange failed",
        details: err,
      },
      { status: 500 }
    );
  }
}