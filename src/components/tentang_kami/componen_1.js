import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assests/img/slide/1.png';
import img2 from '../../assests/img/slide/2.png';
import img3 from '../../assests/img/slide/3.png';

function header_about() {
    return (
<section id="tentang" class="d-flex align-items-center">
      <div class="container">

        <div class="row p-4">

        <div class="col-lg-5 desc p-2 bg-white shadow rounded text-start" data-aos="fade-left" data-aos-delay="200">
          <div className='p-4'>
            <h1><span className="h1 fw-bolder text-dark">BUTUH KOS UNTUK TEMPAT TINGGAL?</span></h1>
            <h2 className='ps-2'><span className='fw-bold h1 text-warning'>ngekos</span><span className='h1 fw-bold text-default'>.com</span></h2>
          </div>
          <div class="p-4 d-flex justify-content justify-content-lg-start py-4">
            <a href="#rekomendasi" class="btn btn-get-started scrollto">Ngekos App</a>
            <a class="btn btn-get-started bg-white text-dark">Coming Soon</a>
          </div>
        </div> 

        <div class="col-lg-7 desc py-5" data-aos="fade-left" data-aos-delay="200">
        <div className='container py-5'>
          <div class="row col-lg-12 desc bg-white text-center rounded" data-aos="fade-left" data-aos-delay="200">
            <div className='col-3 p-4'>
                <h2 className='text-dark'>Kos <br></br> 100+</h2>
            </div>
            <div className='col-4 p-4'>
                <h2 className='text-dark'>Kontrakan <br></br>50+</h2>
            </div>
            <div className='col-5 py-4'>
                <h2 className='text-dark'>Kos dan Kontrakan Premium<br></br>10+</h2>
            </div>
          </div>
        </div>
        </div> 
        
        </div>
      </div>
</section>
  );
}

export default header_about;