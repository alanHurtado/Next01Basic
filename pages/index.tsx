import type { GetStaticProps, NextPage } from "next";
import { Grid } from '@nextui-org/react';
import pokeApi from "../api/pokeApi";
import { Layout } from "../components/layouts";
import { PokemonLista, Result } from "../interface";
import { PokemonCard } from '../components/pokemon';

interface Props {
  pokemons: Result[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Pokemon Nuevo">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await pokeApi.get<PokemonLista>("/pokemon?limit=560");
  const pokemons: Result[] = data.results.map( (poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i + 1 }.svg`
  }) )

  return {
    props: {
      pokemons,
    }, // will be passed to the page component as props
  };
};

export default Home;
