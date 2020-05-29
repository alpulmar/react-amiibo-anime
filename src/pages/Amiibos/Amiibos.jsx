import React, { useEffect, useState } from 'react';
import axios from "axios";
import { environment } from "../../environments/environment";
import { AmiiboGallery } from "../../shared/components/AmiiboCallery/AmiiboGallery";

export function Amiibos () {

    const [amiibos, setAmiibos] = useState([]);

    useEffect(() => {
        axios.get(environment.url + 'amiibo').then(res => {
            console.log('##ABEL## >> Amiibos >>  resacon en las vegas', res);
            setAmiibos(res.data.amiibo.splice(0,9));
        })
    }, [])

    return (
        <div>
            <h1 className="b-text-primary d-flex justify-content-center">Amiibos</h1>
            <AmiiboGallery amiibos={amiibos}/>
        </div>
    );
}

