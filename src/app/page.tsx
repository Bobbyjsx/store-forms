import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 space-y-6">
      <Link
        href="/user-response"
        target="_blank"
        className="py-3 px-5 border-2 border-slate-300 rounded-md"
      >
        Fill form{" "}
      </Link>
      <Link
        href="https://docs.google.com/spreadsheets/d/1c-woAkDW3QmNnmncfxKIcbwx8MLNCQwJbv2EMu3-ARs/edit?usp=sharing"
        target="_blank"
        className="py-3 px-5 border-2 border-slate-300 rounded-md"
      >
        Go to spreadsheet{" "}
      </Link>
    </main>
  );
}
