import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const API_KEY = "API_KEY";

export default function IndexPage() {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
      (async()=>{
        const response = await fetch(`https://~~/movie/popular?api_key=${API_KEY}`);
        const { results } = await response.json();
        console.log(results);
        setMovies(results);
      })();
      
    }, []);
    
    return <div>
      <Seo title="Home" />
      {!movies && <h4>Loading..</h4>}
      {movies?.map(movie => <div key={movie.id}>
        <h4>{movie.original_title}</h4>
      </div>)}
    </div>
}
