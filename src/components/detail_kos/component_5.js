import Card from 'react-bootstrap/Card';
import { BiMessageAltAdd } from "react-icons/bi"
import { RiMessage3Line } from "react-icons/ri"
import { ImLocation2 } from "react-icons/im"
import { AiFillStar } from "react-icons/ai"

import Button from 'react-bootstrap/Button';

import img_card1 from '../../assests/img/kos_1.jpg'
import img_card2 from '../../assests/img/kos_2.jpg'
import img_card3 from '../../assests/img/kos_3.jpg'

function conten_detail_kos() {
    return (
<section id="detail" class="d-flex align-items-center">
      <div class="container"> 
        <div class="row">
            <Card.Title className='bold fs-3 text-start py-4'>Kos Lainnya</Card.Title>

                <div style={{ width: '400px'}} className='m-3'>
                  <a href="detail">
                    <img
                      className="d-block w-100 rounded"
                      src={img_card1}
                      alt="First slide"
                    />
                  </a>
                  <Card.Body className='text-start'>
                    <div className="row">
                    <div className="col-9 py-1">
                    <Card.Title className='bold fs-4 py-2'>Kost Putri Handayani</Card.Title>
                    </div>
                    </div>
                    <div className="border rounded-3 bg-white col-8">
                      <h5 className="ps-2 py-2 fs-6 text-muted">Mulai</h5>
                      <h2 className="ps-2 text-danger"><span className="bold">Rp.1.500.000</span><span className="fs-6 text-muted">/bulan</span></h2>
                    </div>
                    <Card.Text className="py-2"><i><ImLocation2/></i>
                      <span className="ms-2 text-secondary fs-6">
                      Jalan Imam Bonjol nomor 22, Mejayan Kabupaten Caruban</span>
                    </Card.Text>
                    <div>
                      <span className="badge bg-primary ms-1">Kost putri</span>
                      <span className="badge text-secondary border ms-1">Spring bed</span>
                      <span className="badge text-secondary border ms-1">Lemari Pakaian</span>
                      <span className="badge text-secondary border ms-1">kamar mandi dalam</span>
                      <span className="badge text-secondary border ms-1">tempat jemuran</span>
                      <span className="badge text-secondary border ms-1">tempat parkir</span>
                    </div>
                    <div className="row">
                    <div className="col-6 py-4">
                    <RiMessage3Line/> <a className="text-secondary fs-6">Lihat Komentar(15)</a>
                    </div>
                    <div className="col-6 py-3">
                    <Button variant="success">Pesan Sekarang<span className="ms-1"><BiMessageAltAdd/></span></Button>
                    </div>
                    </div>
                  </Card.Body>
                </div>  
                
                <div style={{ width: '400px'}} className='m-3'>
                    <img
                      className="d-block w-100 rounded"
                      src={img_card2}
                      alt="First slide"
                    />
                  <Card.Body className='text-start'>
                    <div className="row">
                    <div className="col-9 py-1">
                    <Card.Title className='bold fs-4 py-2'>Kost Putra Mas Abi</Card.Title>
                    </div>
                    <div className="col-3 py-2">
                      <span className="badge bg-info"><span className="text-warning"><AiFillStar/></span> PREMIUM</span>
                    </div>
                    </div>
                    <div className="border rounded-3 bg-white col-8">
                      <h5 className="ps-2 py-2 fs-6 text-muted">Mulai</h5>
                      <h2 className="ps-2 text-danger"><span className="bold">Rp. 900.000</span><span className="fs-6 text-muted">/bulan</span></h2>
                    </div>
                    <Card.Text className="py-2"><i><ImLocation2/></i>
                      <span className="ms-2 text-secondary fs-6">
                      Jalan Agus Salim No.7, Mejayan Kabupaten Caruban</span>
                    </Card.Text>
                    <div>
                      <span className="badge bg-warning ms-1">Kost Putra</span>
                      <span className="badge text-secondary border ms-1">Spring bed</span>
                      <span className="badge text-secondary border ms-1">Lemari Pakaian</span>
                      <span className="badge text-secondary border ms-1">Kamar mandi luar</span>
                      <span className="badge text-secondary border ms-1">Tempat jemuran</span>
                      <span className="badge text-secondary border ms-1">Tempat parkir</span>
                      <span className="badge text-secondary border ms-1">WIFI</span>
                    </div>
                    <div className="row">
                    <div className="col-6 py-4">
                    <RiMessage3Line/> <a className="text-secondary fs-6">Lihat Komentar(15)</a>
                    </div>
                    <div className="col-6 py-3">
                    <Button variant="success">Pesan Sekarang<span className="ms-1"><BiMessageAltAdd/></span></Button>
                    </div>
                    </div>
                  </Card.Body>
                </div>  
                
                <div style={{ width: '400px'}} className='m-3'>
                    <img
                      className="d-block w-100 rounded"
                      src={img_card3}
                      alt="First slide"
                    />
                  <Card.Body className='text-start'>
                    <div className="row">
                    <div className="col-9 py-1">
                    <Card.Title className='bold fs-4 py-2'>Kost Annisa</Card.Title>
                    </div>
                    <div className="col-3 py-2">
                      <span className="badge bg-info"><span className="text-warning"><AiFillStar/></span> PREMIUM</span>
                    </div>
                    </div>
                    <div className="border rounded-3 bg-white col-8">
                      <h5 className="ps-2 py-2 fs-6 text-muted">Mulai</h5>
                      <h2 className="ps-2 text-danger"><span className="bold">Rp. 850.000</span><span className="fs-6 text-muted">/bulan</span></h2>
                    </div>
                    <Card.Text className="py-2"><i><ImLocation2/></i>
                      <span className="ms-2 text-secondary fs-6">
                      Jalan Panglima Sudirman, Caruban</span>
                    </Card.Text>
                    <div>
                      <span className="badge bg-primary ms-1">Kost Putri</span>
                      <span className="badge text-secondary border ms-1">Spring bed</span>
                      <span className="badge text-secondary border ms-1">Lemari Pakaian</span>
                      <span className="badge text-secondary border ms-1">Kamar mandi dalam</span>
                      <span className="badge text-secondary border ms-1">Tempat jemuran</span>
                      <span className="badge text-secondary border ms-1">Tempat parkir</span>
                      <span className="badge text-secondary border ms-1">Dapur</span>
                    </div>
                    <div className="row">
                    <div className="col-6 py-4">
                    <RiMessage3Line/> <a className="text-secondary fs-6">Lihat Komentar(15)</a>
                    </div>
                    <div className="col-6 py-3">
                    <Button variant="success">Pesan Sekarang<span className="ms-1"><BiMessageAltAdd/></span></Button>
                    </div>
                    </div>
                  </Card.Body>
                </div> 
                
                <div style={{ width: '400px'}} className='m-3'>
                  <a href="detail">
                    <img
                      className="d-block w-100 rounded"
                      src={img_card1}
                      alt="First slide"
                    />
                  </a>
                  <Card.Body className='text-start'>
                    <div className="row">
                    <div className="col-9 py-1">
                    <Card.Title className='bold fs-4 py-2'>Kost Putri Handayani</Card.Title>
                    </div>
                    </div>
                    <div className="border rounded-3 bg-white col-8">
                      <h5 className="ps-2 py-2 fs-6 text-muted">Mulai</h5>
                      <h2 className="ps-2 text-danger"><span className="bold">Rp.1.500.000</span><span className="fs-6 text-muted">/bulan</span></h2>
                    </div>
                    <Card.Text className="py-2"><i><ImLocation2/></i>
                      <span className="ms-2 text-secondary fs-6">
                      Jalan Imam Bonjol nomor 22, Mejayan Kabupaten Caruban</span>
                    </Card.Text>
                    <div>
                      <span className="badge bg-primary ms-1">Kost putri</span>
                      <span className="badge text-secondary border ms-1">Spring bed</span>
                      <span className="badge text-secondary border ms-1">Lemari Pakaian</span>
                      <span className="badge text-secondary border ms-1">kamar mandi dalam</span>
                      <span className="badge text-secondary border ms-1">tempat jemuran</span>
                      <span className="badge text-secondary border ms-1">tempat parkir</span>
                    </div>
                    <div className="row">
                    <div className="col-6 py-4">
                    <RiMessage3Line/> <a className="text-secondary fs-6">Lihat Komentar(15)</a>
                    </div>
                    <div className="col-6 py-3">
                    <Button variant="success">Pesan Sekarang<span className="ms-1"><BiMessageAltAdd/></span></Button>
                    </div>
                    </div>
                  </Card.Body>
                </div>  
                
                <div style={{ width: '400px'}} className='m-3'>
                    <img
                      className="d-block w-100 rounded"
                      src={img_card2}
                      alt="First slide"
                    />
                  <Card.Body className='text-start'>
                    <div className="row">
                    <div className="col-9 py-1">
                    <Card.Title className='bold fs-4 py-2'>Kost Putra Mas Abi</Card.Title>
                    </div>
                    <div className="col-3 py-2">
                      <span className="badge bg-info"><span className="text-warning"><AiFillStar/></span> PREMIUM</span>
                    </div>
                    </div>
                    <div className="border rounded-3 bg-white col-8">
                      <h5 className="ps-2 py-2 fs-6 text-muted">Mulai</h5>
                      <h2 className="ps-2 text-danger"><span className="bold">Rp. 900.000</span><span className="fs-6 text-muted">/bulan</span></h2>
                    </div>
                    <Card.Text className="py-2"><i><ImLocation2/></i>
                      <span className="ms-2 text-secondary fs-6">
                      Jalan Agus Salim No.7, Mejayan Kabupaten Caruban</span>
                    </Card.Text>
                    <div>
                      <span className="badge bg-warning ms-1">Kost Putra</span>
                      <span className="badge text-secondary border ms-1">Spring bed</span>
                      <span className="badge text-secondary border ms-1">Lemari Pakaian</span>
                      <span className="badge text-secondary border ms-1">Kamar mandi luar</span>
                      <span className="badge text-secondary border ms-1">Tempat jemuran</span>
                      <span className="badge text-secondary border ms-1">Tempat parkir</span>
                      <span className="badge text-secondary border ms-1">WIFI</span>
                    </div>
                    <div className="row">
                    <div className="col-6 py-4">
                    <RiMessage3Line/> <a className="text-secondary fs-6">Lihat Komentar(15)</a>
                    </div>
                    <div className="col-6 py-3">
                    <Button variant="success">Pesan Sekarang<span className="ms-1"><BiMessageAltAdd/></span></Button>
                    </div>
                    </div>
                  </Card.Body>
                </div>  
                
                <div style={{ width: '400px'}} className='m-3'>
                    <img
                      className="d-block w-100 rounded"
                      src={img_card3}
                      alt="First slide"
                    />
                  <Card.Body className='text-start'>
                    <div className="row">
                    <div className="col-9 py-1">
                    <Card.Title className='bold fs-4 py-2'>Kost Annisa</Card.Title>
                    </div>
                    <div className="col-3 py-2">
                      <span className="badge bg-info"><span className="text-warning"><AiFillStar/></span> PREMIUM</span>
                    </div>
                    </div>
                    <div className="border rounded-3 bg-white col-8">
                      <h5 className="ps-2 py-2 fs-6 text-muted">Mulai</h5>
                      <h2 className="ps-2 text-danger"><span className="bold">Rp. 850.000</span><span className="fs-6 text-muted">/bulan</span></h2>
                    </div>
                    <Card.Text className="py-2"><i><ImLocation2/></i>
                      <span className="ms-2 text-secondary fs-6">
                      Jalan Panglima Sudirman, Caruban</span>
                    </Card.Text>
                    <div>
                      <span className="badge bg-primary ms-1">Kost Putri</span>
                      <span className="badge text-secondary border ms-1">Spring bed</span>
                      <span className="badge text-secondary border ms-1">Lemari Pakaian</span>
                      <span className="badge text-secondary border ms-1">Kamar mandi dalam</span>
                      <span className="badge text-secondary border ms-1">Tempat jemuran</span>
                      <span className="badge text-secondary border ms-1">Tempat parkir</span>
                      <span className="badge text-secondary border ms-1">Dapur</span>
                    </div>
                    <div className="row">
                    <div className="col-6 py-4">
                    <RiMessage3Line/> <a className="text-secondary fs-6">Lihat Komentar(15)</a>
                    </div>
                    <div className="col-6 py-3">
                    <Button variant="success">Pesan Sekarang<span className="ms-1"><BiMessageAltAdd/></span></Button>
                    </div>
                    </div>
                  </Card.Body>
                </div> 

        </div>
      </div>
</section>
  );
}

export default conten_detail_kos;