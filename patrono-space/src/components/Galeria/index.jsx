import React from 'react'

export default function Galeria({db}) {

    const filtro = "any"

  return (
    <section>
        <h2>Navegue pela galeria</h2>

        <div>
            <h3>Busque por tags</h3>
            <ul>
                {
                    db.map(cat => { return <li><p>{cat.name}</p></li>})
                }
            </ul>
        </div>

        <div>
            {
                filtro === "any"
                ?
                db.map(cat => {return cat.photos.map(ph => {return <p>{ph.name}</p>})})
                :
                console.log(db.map(cat => cat.name === filtro))
            }
        </div>
    </section>
  )
}
