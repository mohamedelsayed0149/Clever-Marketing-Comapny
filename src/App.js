import './App.css'
import Header from './Header';
import Nav from './Nav';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import Products from './Products';
import Team from './Team';
import ContactUs from './ContactUs';
import MapPart from './MapPart';
import Foot from "./Foot";


function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <ImageSlider slides={SliderData} />
      <hr />
      <Products />
      <hr />
      <Team />
      <hr />
      <MapPart />
      <hr />
      <ContactUs />
      <hr />
      <Foot />
    </div>
  );
}

export default App;
