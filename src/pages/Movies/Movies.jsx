import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, ContainerMovies, LoadingScreen, Movie } from "./style";

function Movies(props) {
  const {setPage, setMovie} = props
  const [movies, setMovies] = useState(undefined);
  const [load, setLoad] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://mock-api.driven.com.br/api/v8/cineflex/movies"
        );
        setMovies(response.data);
        setLoad(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  function handleChange(movieId){
    setPage(1)
    setMovie(movieId)
    navigate(`/sessoes/${movieId}`)
  }

  return (
    <Container>
      <p>Selecione o filme</p>
      <LoadingScreen load={load} />
      <ContainerMovies>
        {movies !== undefined &&
          movies.map((movie, index) => (
              <Movie key={index} data-test="movie" onClick={() => handleChange(movie.id)}>
                <img src={movie.posterURL} alt="" />
              </Movie>
          ))}
      </ContainerMovies>
    </Container>
  );
}

export default Movies;