import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");

  if (!code) {
    return NextResponse.json(
      {
        success: false,
        error: "No authorization code received",
      },
      { status: 400 }
    );
  }

  const redirectUri =
    "https://tally-app-three.vercel.app/api/auth/callback/uber/";

  try {
    const body = new URLSearchParams();

    body.append(
      "client_id",
      process.env.UBER_CLIENT_ID || ""
    );

    body.append(
      "client_secret",
      process.env.UBER_CLIENT_SECRET || ""
    );

    body.append(
      "grant_type",
      "authorization_code"
    );

    body.append(
      "redirect_uri",
      redirectUri
    );

    body.append(
      "code",
      code
    );

    const response = await fetch(
      "https://sandbox-login.uber.com/oauth/v2/token",
      {
        method: "POST",

        // IMPORTANT:
        // ONLY content-type header
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded",
        },

        body: body.toString(),
      }
    );

    const data = await response.json();

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error,
      },
      { status: 500 }
    );
  }
}