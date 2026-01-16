export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }>}
) {
  const { id } = await params;
  return new Response(JSON.stringify({ userId: id }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
