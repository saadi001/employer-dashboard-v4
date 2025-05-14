import Link from "next/link";

export default function Home() {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <Link href={"/dashboard"}>Go Dashboard</Link>
    </section>
  );
}
