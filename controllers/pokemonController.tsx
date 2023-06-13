import { PrismaClient, pokemon } from '@prisma/client';

const prisma = new PrismaClient();

export const getPokemons = async (): Promise<pokemon[]> => {
    const pokemons = await prisma.pokemon.findMany();
    return pokemons;
};
