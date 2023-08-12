import sty from './styles/styGlobal.scss';
import Header from './components/Header';
import Menu from './components/Menu';

function App() {
  return (
    <div className={sty.App}>
      <Header />

      <Menu />
    </div>
  );
}

export default App;
