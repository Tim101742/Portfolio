import Projecten from "./Projecten/Projecten";
import Skills from "./Skills/Skills";
import About from "./About/about";
import Header from "./Header/header";
import Welcome from "./Welcome/welcome";
import './index.css';
function App() {
  return (
    <>
    <Header/>
    <Welcome/>
      <About/>
        <Skills/>
      <Projecten />

    
    </>
  );
}

export default App;

