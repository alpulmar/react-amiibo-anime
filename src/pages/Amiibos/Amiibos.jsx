import React, { useContext, useEffect } from 'react';
import axios from "axios";
import { environment } from "../../environments/environment";
import { AmiiboGallery } from "../../shared/components/AmiiboGallery/AmiiboGallery";
import { AmiibosContext } from "../../shared/contexts/AmiibosContext";
import { AmiiboSearch } from "../../shared/components/AmiiboSearch/AmiiboSearch";

export function Amiibos () {

    // const [amiibos, setAmiibos] = useState([]);

    const [amiibos, setAmiibos] = useContext(AmiibosContext);


    useEffect(() => {
        axios.get(environment.url + 'amiibo').then(res => {
            setAmiibos(res.data.amiibo);
        })
    }, [])

    function filterAmiibos(data){
        console.log(data);
    }


    return (
        <div>
            <h1 className="b-text-primary d-flex justify-content-center">Amiibos</h1>
            <AmiiboSearch fnFilterAmiibos={filterAmiibos}/>
            <AmiiboGallery amiibos={amiibos}/>
        </div>
    );
}

