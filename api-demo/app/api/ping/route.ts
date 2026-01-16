export async function GET(request: Request) {
  // data object
  const data = [{ ok: true }, {clear: false}];
  const dataString = JSON.stringify(data);

  return new Response(
    // http response expects text not object
    // that's why we stringify the data object
    dataString,
    {
      status: 200,
      // headers is an object of strings
      // "Content-Type" is not a valid identifier thus ""s
      headers: { "Content-Type": "application/json" },
    }
  );
}
