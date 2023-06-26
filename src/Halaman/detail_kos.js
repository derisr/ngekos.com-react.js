import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar';
import Header_detail from '../components/detail_kos/component_1'
import Conten_detail_kos1 from '../components/detail_kos/component_2';
import Conten_detail_kos2 from '../components/detail_kos/component_3';
import Conten_detail_kos3 from '../components/detail_kos/component_4';
import Conten_detail_kos4 from '../components/detail_kos/component_5';
import Footer from '../components/footer';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Header_detail/>
    <Conten_detail_kos1/>
    <Conten_detail_kos2/>
    <Conten_detail_kos3/>
    <div className='py-4'>
    <Conten_detail_kos4/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
