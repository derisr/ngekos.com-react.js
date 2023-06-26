import img from '../assests/img/ngekos_logo.png'


function header() {
    return (
<section id="beranda" class="d-flex align-items-center">
      <div class="container">
        <div class="row">
        <div class="col-lg-6 desc py-5" data-aos="fade-left" data-aos-delay="200">
          <img src={img} class="img-fluid animated" alt=""></img>
        </div> 
        
        <div class="col-lg-6 beranda-img py-5" data-aos="fade-right" data-aos-delay="200">
            <div class="py-5">
          <h1><span class="text-warning">ngekos</span>.com</h1>
          <h2>Sekarang cari kos dapat <br></br> hanya dengan modal rebahan.</h2>
          <div class="d-flex justify-content-center justify-content-lg-start">
            <a href="#rekomendasi" class="btn btn-get-started scrollto">Cari Kos Sekarang</a>
          </div></div>
        </div> 
        </div>
      </div>
</section>
  );
}

export default header;