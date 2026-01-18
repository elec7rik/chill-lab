let products = [
  { id: "1", name: "Laptop", price: 999, stock: 10 },
  { id: "2", name: "Headphones", price: 199, stock: 25 },
  { id: "3", name: "Keyboard", price: 89, stock: 50 },
];

export { products };

export async function GET() {
  return new Response(JSON.stringify(products), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, price, stock } = body;

  if (!name || price === undefined) {
    return new Response(
      JSON.stringify({ error: "name and price are required" }),
      { status: 400 }
    );
  }

  const newProduct = {
    id: Date.now().toString(),
    name,
    price,
    stock: stock ?? 0,
  };

  products.push(newProduct);

  return new Response(JSON.stringify(newProduct), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
