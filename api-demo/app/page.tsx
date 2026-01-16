"use client";

export default function Page() {
  async function loadUsers() {
    const res = await fetch("/api/users");
    const data = await res.json();
    console.log(data);
  }
  return <button onClick={loadUsers}>data</button>;
}
