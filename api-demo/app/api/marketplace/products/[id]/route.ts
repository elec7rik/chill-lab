import { products } from "../route";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const product = products.find(p => p.id === id);

  if (!product) {
    return new Response(
      JSON.stringify({ error: "product not found" }),
      { status: 404 }
    );
  }

  return new Response(JSON.stringify(product), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();

  const product = products.find(p => p.id === id);

  if (!product) {
    return new Response(
      JSON.stringify({ error: "product not found" }),
      { status: 404 }
    );
  }

  product.name = body.name ?? product.name;
  product.price = body.price ?? product.price;
  product.stock = body.stock ?? product.stock;

  return new Response(JSON.stringify(product), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return new Response(
      JSON.stringify({ error: "product not found" }),
      { status: 404 }
    );
  }

  products.splice(index, 1);

  return new Response(
    JSON.stringify({ success: true }),
    { status: 200 }
  );
}
