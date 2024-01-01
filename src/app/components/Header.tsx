import Link from "next/link";
import Container from "./Container";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 w-full h-header shadow-basic">
      <Container>
        <div className="flex items-end justify-between h-header pb-3 text-xl font-semibold">
          <Link href="/docs">Ask Docs</Link>
          <Link href="/">Ask Home</Link>
          <Link href="/intro">Ask Intro</Link>
        </div>
      </Container>
    </header>
  );
}
