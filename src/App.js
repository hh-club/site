import Bg from './components/Bg';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import Team from './components/Team';
import Roadmap from './components/Roadmap';
import Info from './components/Info';
import Specs from './components/Specs';
// import Footer from './components/Footer';


function App() {
  return (
    <>
      <NavBar />
      <Bg />
      <Welcome />
      <Specs />
      <Info />
      <Roadmap />
      <Team />
      <NavBar />
    </>
  );
}

export default App;
