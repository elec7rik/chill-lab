import { NextResponse } from "next/server";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get("address");
  const limit = searchParams.get("limit") ?? "100";

  const apiKey = process.env.HELIUS_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "helius api key missing" },
      { status: 500 }
    );
  }

  const heliusUrl = `https://api.helius.xyz/v0/addresses`;

  if (!address) {
    return NextResponse.json({ error: "address is required" }, { status: 400 });
  }

  return NextResponse.json({
    expenses: [],
    totalSpent: 0,
  });
}
