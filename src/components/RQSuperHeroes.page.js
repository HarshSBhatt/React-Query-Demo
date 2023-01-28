import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const RQSuperHeroesPage = () => {
  const onSuccess = () => {
    console.log("Perform side effect after data fetching");
  };

  const onError = () => {
    console.log("Perform side effect after encountering error");
  };

  const { isLoading, isError, data, error, isFetching, refetch } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    {
      onSuccess,
      onError,
    }
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      <button disabled={isFetching || isLoading} onClick={refetch}>
        Fetch Heroes
      </button>
      {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};
