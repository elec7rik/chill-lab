let users = [
  { id: "1", name: "alice" },
  { id: "2", name: "bob" },
];

export async function GET() {
  return new Response(JSON.stringify(users), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name } = body;

  if (!name) {
    return new Response(
      JSON.stringify({ error: "name is required" }),
      { status: 400 }
    );
  }

  const newUser = {
    id: Date.now().toString(),
    name,
  };

  users.push(newUser);

  return new Response(JSON.stringify(newUser), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
