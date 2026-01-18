import { orders } from "../route";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const order = orders.find(o => o.id === id);

  if (!order) {
    return new Response(
      JSON.stringify({ error: "order not found" }),
      { status: 404 }
    );
  }

  return new Response(JSON.stringify(order), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
