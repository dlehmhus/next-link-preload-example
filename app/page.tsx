import Link from "next/link";

export default function Home() {
  return (
    <main style={{ display: "flex", gap: 20 }}>
      <Link href="/slug-a">Route A</Link>
      <Link href="/slug-b">Route B</Link>
      <Link href="/slug-c" prefetch={true}>
        Route C
      </Link>
    </main>
  );
}
