import { AiFillInstagram } from "react-icons/ai";
import { GrTwitter } from "react-icons/gr";
import { ImPhone } from "react-icons/im";


function header_contact() {
    return (
<section id="tentang_2" class="d-flex align-items-center">
      <div class="container text-start">

        <div class="row p-4">

        <div class="col-lg-5 desc p-2 bg-white shadow rounded text-start" data-aos="fade-left" data-aos-delay="200">
          <div className='p-4'>
            <h1><span className="h1 fw-bolder text-dark">BUTUH KOS UNTUK TEMPAT TINGGAL?</span></h1>
            <h2 className='ps-2'><span className='fw-bold h1 text-warning'>ngekos</span><span className='h1 fw-bold text-default'>.com</span></h2>
          </div>
          <div class="py-4">
            <div className='container bg-light p-5 col-9 rounded shadow  py-4'>
                <div className='row col-12'>
                    <div className='col-1'>
                    <div>
                        <span className='fs-4 text-black-50'>
                            <AiFillInstagram/>
                        </span>
                    </div>
                    <div className='py-1'>
                        <span className='fs-4 text-black-50'>
                            <GrTwitter/>
                        </span>
                    </div>
                    <div>
                        <span className='fs-4 text-black-50'>
                            <ImPhone/>
                        </span>
                    </div>
                    </div>
                    <div className='col-10'>
                    <div className='p-1'>
                        <h6 className='fs-4 text-black-50 fw-bold'>@ngekos.com</h6>
                    </div>
                    <div className='p-1'>
                        <h6 className='fs-4 text-black-50 fw-bold'>@ngekos.com</h6>
                    </div>
                    <div className='p-1'>
                        <h6 className='fs-4 text-black-50 fw-bold'>0351-9238-9237</h6>
                    </div>
                    </div>
                </div>
            </div>
          </div>
        </div> 

        <div class="col-lg-7 desc py-5 bg-white text-start" data-aos="fade-left" data-aos-delay="200">
        <div className='container py-5'>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1"></input>
            </div>
            <div class="mb-3">
                <form>
                <label for="exampleFormControlTextarea1" class="form-label">Masukkan Pesan Anda</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
                <div className='py-5 text-end'>
                    <input class="btn btn-primary" type="submit" value="Submit"/>
                </div>
                </form>
            </div>
        </div>
        </div> 
        
        </div>
      </div>
</section>
  );
}

export default header_contact;