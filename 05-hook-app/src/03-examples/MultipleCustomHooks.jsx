import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {

  const { data, isLoading, hasError } = useFetch('https://rickandmortyapi.com/api/character/2')
console.log({ data, isLoading, hasError })

  return (
    <>
        <h1>RickAndMorty: Characters</h1>
        <hr />
    
    </>
  )
}
