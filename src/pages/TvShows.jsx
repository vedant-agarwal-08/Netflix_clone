import React,{useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getGenres,fetchMovies } from "../store";
import { firebaseAuth } from "../utils/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import NotAvailabe from "../components/NotAvailable";
import styled from "styled-components";
import SelectGenre from "../components/SelectGenre";
function TvShows(){
    const[isScrolled,setIsScrolled]= useState(false);
    const navigate=useNavigate();
    const genresLoaded=useSelector((state)=>state.netflix.genresLoaded);
    const movies=useSelector((state)=>state.netflix.movies);
    const genres=useSelector((state)=>state.netflix.genres);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getGenres());
    },[])
    useEffect(()=>{
        if(genresLoaded)
        dispatch(fetchMovies({type:"tv"}));
    },[genresLoaded])
    window.onscroll=()=>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll=null);
    }
    onAuthStateChanged(firebaseAuth, (currentUser) => {
        // if (currentUser) navigate("/");
      });
    
    
    return(
        <Container>
        <div className="navbar">
            <Navbar isScrolled={isScrolled}/>
            </div>
            <div className="data">
            <SelectGenre genres={genres} type="tv"/>
                {
                    movies.length?<Slider movies={movies}/>:
                    <NotAvailabe />
                }
            </div>
        </Container>
    )
}
export default TvShows;
const Container=styled.div`
.data{
    margin-top:8rem;
    .not-available{
        text-alight:center;
        color:white;
        margin-top:4rem;
    }
}
`;