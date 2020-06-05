import React from 'react';
import './AnimeGallery.scss'


export function AnimeGallery (props) {

    return (
        <div className="c-anime-gallery">
            <div className="row">
                {props.animes.map((item, index) =>
                    <div className={index < 3 ? "col-lg-4 col-md-6 col-sm-12" : "col-xl-4 col-lg-4 col-md-6 col-sm-12"} key={index}>
                        <div
                            className={index < 3 ? "c-anime-gallery__item c-anime-gallery__item--max" : "c-anime-gallery__item"}>
                            <figure className="c-anime-gallery__item">
                                <img src={item.attributes.posterImage.original} alt=""
                                     className="c-anime-gallery__img"/>
                                <figcaption
                                    className="c-anime-gallery__caption">{item.attributes.titles.en ? item.attributes.titles.en : item.attributes.titles.en_jp}</figcaption>
                            </figure>
                        </div>
                    </div>)}
            </div>
        </div>

    );
}