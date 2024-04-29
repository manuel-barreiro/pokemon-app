import PaginationComponent from "@/components/PaginationComponent";
import PokeGrid from "@/components/PokeGrid";
import { loadPokemons } from "@/lib/functions";

export default async function Home({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  
  const allPokemons = await loadPokemons()

  // Page number taken from URL
  let page = searchParams['page'] ?? 1
  // Hard coded number of cards shown per page (can also add functionality and get it from searchParams)
  const per_page = 12

  // Calculate total number of pages
  const pagesNum = Math.ceil(allPokemons.length / per_page)

  // Reset to first page if these conditions apply
  if (Number(page) < 1 || Number(page) > pagesNum ) {
    page = 1
  }

  // Start and end variables calculated to slice the data array and only show those results
  const start = (Number(page) - 1) * Number(per_page) // 0, 12, 24 ...
  const end = start + Number(per_page) // 12, 24, 36 ...
  const displayedPokemons = allPokemons.slice(start, end)

  return (
    <main className="flex flex-col items-center gap-10 py-20">
      <PokeGrid displayedPokemons={displayedPokemons}/>
      <PaginationComponent hasNextPage={end < allPokemons.length} hasPrevPage={start > 0} perPage={per_page} pagesNum={pagesNum} />
    </main>
  );
}
