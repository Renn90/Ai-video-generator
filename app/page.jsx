import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <h1>Hello There, how are you doing</h1>
      <UserButton />
    </main>
  );
}
