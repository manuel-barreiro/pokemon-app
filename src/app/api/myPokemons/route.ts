import { NextResponse } from "next/server"
import { JsonDB, Config } from "node-json-db";
import { PokemonData } from "../../../../types";
import { error } from "console";

const db = new JsonDB(new Config("db", true, true, "/"));

export async function POST(request: Request) {
  const newPokemon: PokemonData = await request.json()

  // index sera igual a -1 si el pokemon no esta en la db, si esta sera el valor del indice
  const index = await db.getIndex("/catchedPokemons", Number(newPokemon.id), "id");

  if (index === -1) {
    // Agrego el nuevo pokemon a la db
    await db.push("/catchedPokemons[]", newPokemon);
    return NextResponse.json({ success: `Caught ${newPokemon.name}` }, { status: 200 })
  } else {
    return NextResponse.json({ error: `You already caught ${newPokemon.name}` }, { status: 409 })
  }
}
 
export async function PUT(request: Request) {}
 
export async function DELETE(request: Request) {}