
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar';
import Header from '../components/beranda/header'
import Content_1 from '../components/beranda/content_1';
import Content_2 from '../components/beranda/content_2';
import Content_3 from '../components/beranda/content_3';
import Footer from '../components/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <div className='py-2'>
      <Content_1/>
      </div>
      <div className='py-1'>
      <Content_2/>
      </div>
      <Content_3/>
      <Footer/>
    </div>
  );
}

export default App;
