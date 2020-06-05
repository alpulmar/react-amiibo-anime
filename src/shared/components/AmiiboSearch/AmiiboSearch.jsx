import React from 'react';
import './AmiiboSearch.scss'
import { useForm } from "react-hook-form";


export function AmiiboSearch (props) {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(props)
        props.fnFilterAmiibos(data);
    };

  return (
      
    <form class="c-Amiibo-Search" onSubmit={handleSubmit(onSubmit)}>
        <div className="c-Amiibo-Search__input">
            <label htmlFor="name">Name</label>
            <input className="b-input" type="text" name="name" id="name" ref={register}/>
        </div>
        <div className="c-Amiibo-Search__input">
            <label htmlFor="character">Character</label>
            <input className="b-input" type="text" name="character" id="character" ref={register}/>
        </div>
        <div className="c-Amiibo-Search__input">
            <label htmlFor="amiiboSeries">AmiiboSeries</label>
            <input className="b-input" type="text" name="amiiboSeries" id="amiiboSeries" ref={register}/>
        </div>
        <div className="c-Amiibo-Search__input">
            <label htmlFor="gameSeries">GameSeries</label>
            <input className="b-input" type="text" name="gameSeries" id="gameSeries" ref={register}/>
        </div>
        <div className="c-Amiibo-Search__input">
            <label htmlFor="type">Type</label>
            <select className="b-input" name="type" id="type" ref={register}>
                <option value=""></option>
                <option value="figure">Figure</option>
                <option value="card">Card</option>
            </select>
        </div>
        <div className="c-Amiibo-Search__input">
            <input className="b-btn mt-3" type="submit"/>
        </div>
    </form>
  );
}