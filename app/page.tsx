
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">
        Hello, my name is Your Name
      </h1>

      <p className="mb-4">
        I am a student learning web development.
        I enjoy learning how to create websites using Next.js.
      </p>

      <Link
        href="/projects"
        className="text-blue-600 underline"
      >
        See my projects
      </Link>
    </main>
  );
}
