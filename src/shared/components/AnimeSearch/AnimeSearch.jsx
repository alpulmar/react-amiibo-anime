import React from 'react';
import './AnimeSearch.scss'
import { useForm } from "react-hook-form";

export function AnimeSearch(props) {
    
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(props)
        props.fnFilterAnimes(data);
    };

    return(
        <form className="c-Anime-Search" onSubmit={handleSubmit(onSubmit)}>
            <div className="c-Anime-Search__input">
                <label htmlFor="name">Name</label>
                <input className="b-input" type="text" name="name" id="name" ref={register}/>
            </div>
            <div className="c-Anime-Search__input">
                <label htmlFor="type">Category</label>
                <select className="b-input" name="type" id="type" ref={register}>
                    <option value=""></option>
                    <option value="aventura">Aventura</option>
                    <option value="drama">Drama</option>
                </select>
            </div>
            <div className="c-Anime-Search__input">
                <input className="b-btn mt-3" type="submit"/>
            </div>
        </form>
    );

}