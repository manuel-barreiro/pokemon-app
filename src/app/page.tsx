import PokeGrid from "@/components/PokeGrid";

export default async function Home() {
  return (
    <main className="flex flex-col items-center gap-10 py-28">
      <PokeGrid />
    </main>
  );
}
