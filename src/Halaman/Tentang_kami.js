import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar';
import Header_about from '../components/tentang_kami/componen_1';
import Componen_about from '../components/tentang_kami/componen_2';
import Componen_2_about from '../components/tentang_kami/componen_3';
import Footer from '../components/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header_about/>
        <div className='py-2'>
          <Componen_about/>
        </div>
    <Componen_2_about/>
    <Footer/>
    </div>
  );
}

export default App;
