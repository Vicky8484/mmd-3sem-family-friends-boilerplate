import Link from "next/link";
import Logo from "./components/Logo";

export default function ListView() {
  return (
    <>
      <Logo />
      <h2>ListView</h2>
      <Link href="/detailview">Go to DetailView</Link>
    </>
  );
}
