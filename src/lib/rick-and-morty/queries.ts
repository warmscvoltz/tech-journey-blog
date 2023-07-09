/*
 Check out graphql console: https://rickandmortyapi.com/graphql
*/
export const ApiUrl = 'https://rickandmortyapi.com/graphql';

const fetchCharacters = `
query fetchCharacters($page: Int, $search: String){
  characters(page: $page, filter: { name: $search }) {
    info {
      count,
      pages,
      next,
      prev
    }
    results {
      id,
      name,
      image,
      status,
      species
    }
  }
}
`;

export const Queries = {
  fetchCharacters,
};
