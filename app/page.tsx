import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello, my name is Your Name</h1>
      <p>Write two or three sentences introducing yourself here.</p>
      <Link href="/projects">See my projects</Link>
    </main>
  );
}