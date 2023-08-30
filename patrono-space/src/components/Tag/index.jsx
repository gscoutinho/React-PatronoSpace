import React from 'react'
import sty from './Tag.module.scss'

import logoFavorito from './assets/favorito.png'
import logoOpen from './assets/open.png'

export default function Tag({photo}) {
  return (
    <div className={sty.container} style={{height: "auto", width: "350px"}}>
        <img 
        src={photo.img_src}
        alt={photo.name}
        />

        <div className={sty.ph_description}>
            <div className={sty.ph_description_alias}>
                <h4>{photo.name}</h4>
                <h5>{photo.author}</h5>
            </div>

            <div className={sty.ph_description_actions}>
                <a><img src={logoFavorito} alt='Favorito'/></a>
                <a><img src={logoOpen} alt='Favorito'/></a>
            </div>
        </div>
    </div>
  )
}
