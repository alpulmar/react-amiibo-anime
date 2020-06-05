import React, { useContext, useEffect } from 'react';
import axios from "axios";
import { environment } from "../../environments/environment";
import { AnimeGallery } from "../../shared/components/AnimeGallery/AnimeGallery";
import { AnimesContext } from "../../shared/contexts/AnimesContext";
import { AnimeSearch } from "../../shared/components/AnimeSearch/AnimeSearch";

export function Animes () {

    // const [animes, setAnimes] = useState([]);

    const [animes, setAnimes] = useContext(AnimesContext);

    useEffect(() => {
        axios.get(environment.url2 + 'anime?page[limit]=15').then(res => {
            setAnimes(res.data.data);
        })
    }, [])

    function filterAnimes(data){
        console.log(data);
    }

    return (
        <div>
            <h1 className="b-text-primary d-flex justify-content-center">Animes</h1>
            <AnimeSearch fnFilterAnimes={filterAnimes}/>
            <AnimeGallery animes={animes}/>
        </div>
    );
}