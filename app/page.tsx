import Link from "next/link";

export default function Home() {
  return (
    <section className="py-16">
      <h1 className="text-4xl font-semibold">Ekovus</h1>
      <p className="mt-3 max-w-2xl opacity-90">Artist home for music and press. Start with two pages while we build the rest.</p>
      <div className="mt-6 flex gap-4">
        <Link href="/about" className="rounded border border-white/20 px-4 py-2 text-sm">About</Link>
        <Link href="/epk" className="rounded border border-white/20 px-4 py-2 text-sm">EPK</Link>
      </div>
    </section>
  );
}