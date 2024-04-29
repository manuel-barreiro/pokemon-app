import PokeGrid from "@/components/PokeGrid";
import { loadPokemons } from "@/lib/functions";

export default async function Home() {
  
  const displayedPokemons = await loadPokemons()

  return (
    <main className="flex flex-col items-center gap-10 py-20">
      <PokeGrid displayedPokemons={displayedPokemons}/>
    </main>
  );
}
