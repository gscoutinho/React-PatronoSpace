
import styApp from './styles/App.module.scss';

import Header from './components/Header';
import Menu from './components/Menu';

import banner from './styles/assets/banner.png';
import Rodape from './components/Rodape';

import data from './db/data.json'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react';
import Galeria from './components/Galeria';
import Populares from './components/Populares';



function App() {

  const [db, setDb] = useState(data.categories.map(categ => { return { ...categ, id: uuidv4(), photos: categ.photos.map(ph => { return { ...ph, id: uuidv4() } }) } }))



  return (
    <>
      <Header />
      <main>
        <section className={styApp.menu_banner}>
          <Menu />
          <div className={styApp.menu_banner__imagem}>
            <h1>A galeria mais completa do espaço</h1>
            <img
              src={banner}
              alt='banner'
            />
          </div>
        </section>

        <section className={styApp.content}>
          <Galeria
            db={db}

            className={styApp.galeria}
          />

        <Populares 
        
        className={styApp.populares}
        />
        </section>

      </main>
      <Rodape />
    </>
  );
}

export default App;
