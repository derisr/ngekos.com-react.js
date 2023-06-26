import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar';
import Header_kos from '../components/kos/component1';
import Content from '../components/kos/components2'
import Footer from '../components/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header_kos/>
        <div className='py-2'>
          <Content/>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
