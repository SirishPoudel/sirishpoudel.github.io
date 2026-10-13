import Link from "next/link";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <main id="main" className="not-found">
      <p className="eyebrow">404</p>
      <h1>This page doesn&apos;t exist</h1>
      <Link href="/" className="btn btn-primary">Back home →</Link>
    </main>
  );
}
