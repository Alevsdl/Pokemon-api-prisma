import { GetServerSideProps, NextPage } from 'next';
import { PrismaClient, pokemon } from '@prisma/client';

const prisma = new PrismaClient();

interface PokemonsPageProps {
    pokemons: pokemon[];
}

const PokemonsPage: NextPage<PokemonsPageProps> = ({ pokemons }) => {
    return (
        <div>
            <h1>Pokemons</h1>
            <table>
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemons.map((pokemon) => (
                        <tr key={pokemon.id}>
                            <td>{pokemon.numero}</td>
                            <td>{pokemon.nombre}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps<PokemonsPageProps> = async () => {
    const pokemons = await prisma.pokemon.findMany();

    return {
        props: {
            pokemons,
        },
    };
};

export default PokemonsPage;
