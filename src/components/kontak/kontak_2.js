import img1 from './../../assests/img/ngekos_logo.png'

function componen_contact() {
    return (
        <section id="about" class="d-flex align-items-center">
              <div class="container">
                <div class="row">
                <div class="col-lg-6 desc" data-aos="fade-left" data-aos-delay="200">
                  <h1 class="h2 bold text-end">Tentang Kami</h1>
                  <h2 class="h1 bold text-end">ngekos.com</h2>
                  <p className="text-end">Ngekos.com merupakan situs/website pencarian property berupa kost yang disewakanan di daerah Caruban. Dengan adanya website ngekos.com dapat memudahkan pelajar/mahasiswa dari luar kota.</p>
                </div>  
                
                <div class="col-lg-6 about-decs" data-aos="fade-right" data-aos-delay="200">
        <img
          className="d-block w-60"
          src={img1}
          alt="First slide"
        />
                 
                </div> 
                </div>
              </div>
        </section>
  );
}

export default componen_contact;

