let users = [
  { id: "1", name: "alice" },
  { id: "2", name: "bob" },
];

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const user = users.find(u => u.id === id);

  if (!user) {
    return new Response(
      JSON.stringify({ error: "user not found" }),
      { status: 404 }
    );
  }

  return new Response(JSON.stringify(user), {
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

  const user = users.find(u => u.id === id);

  if (!user) {
    return new Response(
      JSON.stringify({ error: "user not found" }),
      { status: 404 }
    );
  }

  user.name = body.name ?? user.name;

  return new Response(JSON.stringify(user), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return new Response(
      JSON.stringify({ error: "user not found" }),
      { status: 404 }
    );
  }

  users.splice(index, 1);

  return new Response(
    JSON.stringify({ success: true }),
    { status: 200 }
  );
}
