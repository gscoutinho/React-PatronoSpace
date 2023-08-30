import React, { useState } from 'react'
import Tag from '../Tag'


import sty from './Galeria.module.scss'


export default function Galeria({db}) {


    const [filtro, setFiltro] = useState('any')
    
    const applyFilter = (filter) => {
        filter === filtro
        ? setFiltro('any')
        : setFiltro(filter)
        
        
    }
  return (
    <section className={sty.galeria}>
        <h2>Navegue pela galeria</h2>

        <div className={sty.filter}>
            <h3>Busque por tags</h3>
            <ul>
                {
                    db.map(cat => { return <li key={cat.id}><a onClick={() => applyFilter(cat.id)} >{cat.name}</a></li>})
                }
            </ul>
        </div>

        <div className={sty.content}>
            {
                filtro === "any"
                ?
                db.map(cat => {return cat.photos.map(ph => {return <Tag photo={ph}/>})})
                :
                (
                    db
                    .filter(cat => cat.id === filtro)
                    .map(filteredCat => filteredCat.photos.map(ph => {return <Tag photo={ph}/>}))
                )
            }
        </div>
    </section>
  )
}
