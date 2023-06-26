import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assests/img/slide/1.png';
import img2 from '../../assests/img/slide/2.png';
import img3 from '../../assests/img/slide/3.png';

function header() {
    return (
<section id="beranda" class="d-flex align-items-center">
      <div class="container">
        <div class="row py-5">
        <div class="col-lg-5 desc py-5" data-aos="fade-left" data-aos-delay="200">
          <div className='py-5'>
          <h1><span className="h1 fw-bolder">SELAMAT DATANG, PERANTAU</span></h1>
          <h2 className='text-white'>Cari, Pesan dan Bayar <br></br> hanya dengan modal rebahan.</h2>
          </div>
          <div class="d-flex justify-content justify-content-lg-start">
            <a href="#rekomendasi" class="btn btn-get-started scrollto">Cari Kos Sekarang</a>
          </div>
        </div> 
        
        <div class="col-lg-7" data-aos="fade-right" data-aos-delay="200">
          <Carousel className='shadow'>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div> 
        </div>
      </div>
</section>
  );
}

export default header;