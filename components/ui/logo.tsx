import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Cruip">
      {/* insert logo here */}
      <Image src={logo} width={100}
        height={100} alt="Cruip" />
    </Link>
  );
}
