import "./asent/css/main.css"
import Nev from "./Component/navigation/Nev";
import Intro from "./Component/intro/Intro";
import Services from "./Component/services/Services";
import Exprience from "./Component/exprience/Exprience";
import Work from "./Component/work section/Work";
import Protfolio from "./Component/protfolio/protfolio";
import Testimonial from "./Component/client testimonial/Testimonial";
import Contact from "./Component/contact/Contact";
function App() {
  return (
    <div className="App">
      <Nev/>
      <Intro/>
      <Services/>
      <Exprience/>
      <Work></Work>
      <Protfolio/>
      <Testimonial/>
      <Contact/>
    </div>
  );
}

export default App;
