function conten_detail_kos() {
    return (
<section id="detail" class="d-flex align-items-center">
      <div class="container">   
        <div class="row py-2">
        <div class="col-lg-12" data-aos="fade-left" data-aos-delay="200">
          <div className='py-4 text-start'>
            <p className="fs-5 fw-bold">Lokasi Kos</p>
                
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1012531.7326619474!2d110.85774693006682!3d-7.552930965995405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79c708ac1e4983%3A0x738b653e98904f07!2skost%20putri%20bu%20kandi%20%2F%20kos%20caruban%20%2F%20kost%20caruban!5e0!3m2!1sid!2sid!4v1670315455088!5m2!1sid!2sid'
                  className='w-100 rounded'
                  height='400'
                  loading='lazy'
                ></iframe>
          </div>
        </div> 
        </div>
      </div>
</section>
  );
}

export default conten_detail_kos;