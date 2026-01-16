export async function GET(request: Request) {
  const data = [
    { id: "1", name: "alice" },
    { id: "2", name: "bob" },
    { id: "3", name: "claire" },
  ];

  console.log(data);
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
