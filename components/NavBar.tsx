import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <div>
      <Link
        href="/"
        style={{ color: router.pathname === "/" ? "red" : "blue" }}
      >
        HOME
      </Link>
      <Link
        href="about"
        style={{ color: router.pathname === "/about" ? "red" : "blue" }}
      >
        ABOUT
      </Link>
    </div>
  );
}
