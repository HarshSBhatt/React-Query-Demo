import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends");
};

export const ParallelQueriesPage = () => {
  const { data: superHeroes } = useQuery("super-hero", fetchSuperHeroes);
  const { data: friends } = useQuery("friends", fetchFriends);
  return <div>Parallel Queries Page</div>;
};
