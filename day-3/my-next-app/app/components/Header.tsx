import Link from "next/link";
 
export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 text-center">
        <Link href="/" className="text-xl font-semibold text-gray-900">
          Omnie Solutions
        </Link>
      </div>
    </header>
  );
}