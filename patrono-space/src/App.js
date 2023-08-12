
import styApp from './styles/App.module.scss';

import Header from './components/Header';
import Menu from './components/Menu';

import banner from './styles/assets/banner.png';


function App() {
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
      </main>

    </>
  );
}

export default App;
