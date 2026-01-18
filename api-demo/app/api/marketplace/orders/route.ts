import { products } from "../products/route";

interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}

interface Order {
  id: string;
  items: OrderItem[];
  total: number;
  status: string;
  createdAt: string;
}

const orders: Order[] = [];

export { orders };

export async function GET() {
  return new Response(JSON.stringify(orders), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { items } = body;

  if (!items || !Array.isArray(items) || items.length === 0) {
    return new Response(
      JSON.stringify({ error: "items array is required" }),
      { status: 400 }
    );
  }

  const orderItems: OrderItem[] = [];
  let total = 0;

  for (const item of items) {
    const { productId, quantity } = item;

    if (!productId || !quantity || quantity < 1) {
      return new Response(
        JSON.stringify({ error: "each item needs productId and quantity" }),
        { status: 400 }
      );
    }

    const product = products.find(p => p.id === productId);

    if (!product) {
      return new Response(
        JSON.stringify({ error: `product ${productId} not found` }),
        { status: 404 }
      );
    }

    if (product.stock < quantity) {
      return new Response(
        JSON.stringify({ error: `insufficient stock for ${product.name}` }),
        { status: 400 }
      );
    }

    product.stock -= quantity;
    const itemTotal = product.price * quantity;
    total += itemTotal;

    orderItems.push({
      productId,
      quantity,
      price: product.price,
    });
  }

  const newOrder: Order = {
    id: Date.now().toString(),
    items: orderItems,
    total,
    status: "completed",
    createdAt: new Date().toISOString(),
  };

  orders.push(newOrder);

  return new Response(JSON.stringify(newOrder), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
