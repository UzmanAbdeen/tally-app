import { NextResponse } from "next/server";

export async function GET() {
  const clientId = process.env.UBER_CLIENT_ID;

  const redirectUri =
    "https://tally-app-three.vercel.app/api/auth/callback/uber";

  const scopes = "eats.order";

  const uberAuthUrl =
    `https://sandbox-login.uber.com/oauth/v2/authorize` +
    `?client_id=${clientId}` +
    `&response_type=code` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&scope=${encodeURIComponent(scopes)}`;

  return NextResponse.redirect(uberAuthUrl);
}