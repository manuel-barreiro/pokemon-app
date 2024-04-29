import PaginationComponent from "@/components/PaginationComponent";
import PokeGrid from "@/components/PokeGrid";
import { loadPokemons } from "@/lib/functions";

export default async function Home({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  
  const allPokemons = await loadPokemons()

  return (
    <main className="flex flex-col items-center gap-10 py-20">
      <PokeGrid displayedPokemons={allPokemons}/>
    </main>
  );
}
