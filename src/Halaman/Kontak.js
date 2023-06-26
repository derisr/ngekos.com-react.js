import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar';
import Header_contact from '../components/kontak/kontak_1';
import Footer from '../components/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header_contact/>
        <div className='py-2'>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
