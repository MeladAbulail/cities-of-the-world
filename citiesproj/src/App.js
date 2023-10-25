import './App.css';
import Home from './components/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import CitiesList from './components/CitiesList';
import Footer from './components/footer';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home citiesData={citiesData} />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/cities' element={<CitiesList citiesData={citiesData} />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

const citiesData = [
  {
      id: 1,
      name: 'New York City',
      country: 'United States',
      info: 'The largest city in the United States, known for its iconic skyline and diverse culture.',
      img: 'https://www.travelandleisure.com/thmb/91pb8LbDAUwUN_11wATYjx5oF8Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg',
    },
    {
      id: 2,
      name: 'Paris',
      country: 'France',
      info: 'The capital of France, famous for its art, fashion, and romantic ambiance.',
      img: 'https://bestdayeveryday.com/wp-content/uploads/2021/11/Paris-1-1024x686.jpeg',
    },
    {
      id: 3,
      name: 'Tokyo',
      country: 'Japan',
      info: 'A bustling metropolis with a rich history, known for its technology and cuisine.',
      img: 'https://www.gotokyo.org/en/plan/tokyo-outline/images/main.jpg',
    },{
      id: 4,
      name: 'London',
      country: 'United Kingdom',
      info: 'The capital of the UK, famous for its historic landmarks and diverse culture.',
      img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f5/de/london.jpg?w=700&h=500&s=1',
    },
    {
      id: 5,
      name: 'Sydney',
      country: 'Australia',
      info: 'Australia\'s largest city, known for its stunning beaches and iconic Opera House.',
      img: 'https://i.natgeofe.com/n/bd48279e-be5a-4f28-9551-5cb917c6766e/GettyImages-103455489cropped.jpg',
    },
    {
      id: 6,
      name: 'Rome',
      country: 'Italy',
      info: 'The capital of Italy, famous for its ancient history, architecture, and cuisine.',
      img: 'https://tourismmedia.italia.it/is/image/mitur/20220127150143-colosseo-roma-lazio-shutterstock-756032350-1?wid=1600&hei=900&fit=constrain,1&fmt=webp',
    },
    {
      id: 7,
      name: 'Rio de Janeiro',
      country: 'Brazil',
      info: 'Known for its vibrant Carnival, beautiful beaches, and stunning landscapes.',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Cidade_Maravilhosa.jpg/1200px-Cidade_Maravilhosa.jpg',
    },
    {
      id: 8,
      name: 'Dubai',
      country: 'United Arab Emirates',
      info: 'A city of modern skyscrapers and luxury shopping in the Middle East.',
      img: 'https://i.natgeofe.com/n/f3d0b742-5bef-4665-87e8-61ef82a0101c/dubai-travel.jpg?w=2880&h=1920',
    },
    {
      id: 9,
      name: 'Cape Town',
      country: 'South Africa',
      info: 'Located at the southern tip of Africa, known for its stunning landscapes and wildlife.',
      img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2e/1e/cape-town.jpg?w=700&h=-1&s=1',
    },
    {
      id: 10,
      name: 'Berlin',
      country: 'Germany',
      info: 'The capital of Germany, known for its rich history, vibrant arts scene, and modern architecture.',
      img: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/04/03/11/fernsehturm.jpg?width=1200&height=1200&fit=crop',
    },
    {
      id: 11,
      name: 'Munich',
      country: 'Germany',
      info: 'Famous for its beer culture, historical architecture, and vibrant cultural scene.',
      img: 'https://cdn.britannica.com/06/152206-050-72BD5CAC/twin-towers-Church-of-Our-Lady-Munich.jpg',
    },
    {
      id: 12,
      name: 'San Francisco',
      country: 'United States',
      info: 'Located in California, known for its picturesque views of the Golden Gate Bridge, cable cars, and a thriving tech industry.',
      img: 'https://upload.wikimedia.org/wikipedia/commons/6/61/San_Francisco_from_the_Marin_Headlands_in_August_2022.jpg',
    }
]