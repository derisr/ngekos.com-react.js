import { ImLocation2 } from "react-icons/im"
import { BiMessageAltAdd } from "react-icons/bi"
import { RiMessage3Line } from "react-icons/ri"
import { AiFillStar } from "react-icons/ai"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img_card1 from '../../assests/img/kos_8.jpg'

function content_2() {
    return (
    <section id="beranda_2" class="d-flex align-items bg-light">
      <div class="container">
        <div className='row text-center'>
        <div className='col-5 text-center'>
        <div class="input-group py-5">
            <input type="search" class="form-control rounded" placeholder="Cari kos sesuai lokasi, harga" aria-label="Search" aria-describedby="search-addon" />
            <button type="button" class="btn btn-primary">Cari</button>
        </div>
        </div>
        </div>
            <div class="row">
                <div class="col-lg-12 text-start">
                    <a class="h3 text-decoration-none text-dark">Kos dan Kontrakan <span className="bold">Premium</span></a>
                </div>
                
                <div style={{ width: '400px'}} className='m-3'>
                    <img
                      className="d-block w-100 rounded"
                      src={img_card1}
                      alt="First slide"
                    />
                  <Card.Body className='text-start'>
                    <div className="row">
                    <div className="col-9 py-1">
                    <Card.Title className='bold fs-4 py-2'>Kost Putri Handayani</Card.Title>
                    </div>
                    <div className="col-3 py-2">
                      <span className="badge bg-info"><span className="text-warning"><AiFillStar/></span> PREMIUM</span>
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
                      src={img_card1}
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
                      src={img_card1}
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
                    <img
                      className="d-block w-100 rounded"
                      src={img_card1}
                      alt="First slide"
                    />
                  <Card.Body className='text-start'>
                    <div className="row">
                    <div className="col-9 py-1">
                    <Card.Title className='bold fs-4 py-2'>Kost Griya Alvin</Card.Title>
                    </div>
                    <div className="col-3 py-2">
                      <span className="badge bg-info"><span className="text-warning"><AiFillStar/></span> PREMIUM</span>
                    </div>
                    </div>
                    <div className="border rounded-3 bg-white col-8">
                      <h5 className="ps-2 py-2 fs-6 text-muted">Mulai</h5>
                      <h2 className="ps-2 text-danger"><span className="bold">Rp. 800.000</span><span className="fs-6 text-muted">/bulan</span></h2>
                    </div>
                    <Card.Text className="py-2"><i><ImLocation2/></i>
                      <span className="ms-2 text-secondary fs-6">
                      Jalan Imam Bonjol nomor 22, Mejayan Kabupaten Caruban</span>
                    </Card.Text>
                    <div>
                      <span className="badge bg-primary ms-1">Kos Putri</span>
                      <span className="badge text-secondary border ms-1">Spring bed</span>
                      <span className="badge text-secondary border ms-1">Lemari Pakaian</span>
                      <span className="badge text-secondary border ms-1">Kamar mandi dalam</span>
                      <span className="badge text-secondary border ms-1">Tempat jemuran</span>
                      <span className="badge text-secondary border ms-1">Tempat parkir</span>
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
                      src={img_card1}
                      alt="First slide"
                    />
                  <Card.Body className='text-start'>
                    <div className="row">
                    <div className="col-9 py-1">
                    <Card.Title className='bold fs-4 py-2'>Kost Ungu</Card.Title>
                    </div>
                    <div className="col-3 py-2">
                      <span className="badge bg-info"><span className="text-warning"><AiFillStar/></span> PREMIUM</span>
                    </div>
                    </div>
                    <div className="border rounded-3 bg-white col-8">
                      <h5 className="ps-2 py-2 fs-6 text-muted">Mulai</h5>
                      <h2 className="ps-2 text-danger"><span className="bold">Rp.1.000.000</span><span className="fs-6 text-muted">/bulan</span></h2>
                    </div>
                    <Card.Text className="py-2"><i><ImLocation2/></i>
                      <span className="ms-2 text-secondary fs-6">
                      Jalan Imam Bonjol nomor 22, Mejayan Kabupaten Caruban</span>
                    </Card.Text>
                    <div>
                      <span className="badge bg-primary ms-1">Kost Campur</span>
                      <span className="badge text-secondary border ms-1">Spring bed</span>
                      <span className="badge text-secondary border ms-1">Lemari Pakaian</span>
                      <span className="badge text-secondary border ms-1">Kamar mandi luar</span>
                      <span className="badge text-secondary border ms-1">Tempat jemuran</span>
                      <span className="badge text-secondary border ms-1">Tempat parkir</span>
                      <span className="badge text-secondary border ms-1">AC</span>
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
                      src={img_card1}
                      alt="First slide"
                    />
                  <Card.Body className='text-start'>
                    <div className="row">
                    <div className="col-9 py-1">
                    <Card.Title className='bold fs-4 py-2'>Kost Ungu</Card.Title>
                    </div>
                    <div className="col-3 py-2">
                      <span className="badge bg-info"><span className="text-warning"><AiFillStar/></span> PREMIUM</span>
                    </div>
                    </div>
                    <div className="border rounded-3 bg-white col-8">
                      <h5 className="ps-2 py-2 fs-6 text-muted">Mulai</h5>
                      <h2 className="ps-2 text-danger"><span className="bold">Rp.1.000.000</span><span className="fs-6 text-muted">/bulan</span></h2>
                    </div>
                    <Card.Text className="py-2"><i><ImLocation2/></i>
                      <span className="ms-2 text-secondary fs-6">
                      Jalan Imam Bonjol nomor 22, Mejayan Kabupaten Caruban</span>
                    </Card.Text>
                    <div>
                      <span className="badge bg-primary ms-1">Kost Campur</span>
                      <span className="badge text-secondary border ms-1">Spring bed</span>
                      <span className="badge text-secondary border ms-1">Lemari Pakaian</span>
                      <span className="badge text-secondary border ms-1">Kamar mandi luar</span>
                      <span className="badge text-secondary border ms-1">Tempat jemuran</span>
                      <span className="badge text-secondary border ms-1">Tempat parkir</span>
                      <span className="badge text-secondary border ms-1">AC</span>
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
            <div class="row">
                <div class="col-lg-12 text-start py-5">
                    <a class="h3 text-decoration-none text-dark">Cari Kos sesuai tempat <span className="bold">Kerja</span> Anda</a>
                </div>
                
                <div style={{ width: '400px'}} className='m-3'>
                    <img
                      className="d-block w-100 rounded"
                      src={img_card1}
                      alt="First slide"
                    />
                  <Card.Body className='text-start'>
                    <div className="row">
                    <div className="col-12 py-1">
                    <Card.Title className='bold fs-4 py-2'>Kost Griya Alvin</Card.Title>
                    </div>
                    </div>
                    <div className="border rounded-3 bg-white col-8">
                      <h5 className="ps-2 py-2 fs-6 text-muted">Mulai</h5>
                      <h2 className="ps-2 text-danger"><span className="bold">Rp. 800.000</span><span className="fs-6 text-muted">/bulan</span></h2>
                    </div>
                    <Card.Text className="py-2"><i><ImLocation2/></i>
                      <span className="ms-2 text-secondary fs-6">
                      Jalan Imam Bonjol nomor 22, Mejayan Kabupaten Caruban</span>
                    </Card.Text>
                    <div>
                      <span className="badge bg-primary ms-1">Kos Putri</span>
                      <span className="badge text-secondary border ms-1">Spring bed</span>
                      <span className="badge text-secondary border ms-1">Lemari Pakaian</span>
                      <span className="badge text-secondary border ms-1">Kamar mandi dalam</span>
                      <span className="badge text-secondary border ms-1">Tempat jemuran</span>
                      <span className="badge text-secondary border ms-1">Tempat parkir</span>
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
                      src={img_card1}
                      alt="First slide"
                    />
                  <Card.Body className='text-start'>
                    <div className="row">
                    <div className="col-12 py-1">
                    <Card.Title className='bold fs-4 py-2'>Kost Griya Alvin</Card.Title>
                    </div>
                    </div>
                    <div className="border rounded-3 bg-white col-8">
                      <h5 className="ps-2 py-2 fs-6 text-muted">Mulai</h5>
                      <h2 className="ps-2 text-danger"><span className="bold">Rp. 800.000</span><span className="fs-6 text-muted">/bulan</span></h2>
                    </div>
                    <Card.Text className="py-2"><i><ImLocation2/></i>
                      <span className="ms-2 text-secondary fs-6">
                      Jalan Imam Bonjol nomor 22, Mejayan Kabupaten Caruban</span>
                    </Card.Text>
                    <div>
                      <span className="badge bg-primary ms-1">Kos Putri</span>
                      <span className="badge text-secondary border ms-1">Spring bed</span>
                      <span className="badge text-secondary border ms-1">Lemari Pakaian</span>
                      <span className="badge text-secondary border ms-1">Kamar mandi dalam</span>
                      <span className="badge text-secondary border ms-1">Tempat jemuran</span>
                      <span className="badge text-secondary border ms-1">Tempat parkir</span>
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
                      src={img_card1}
                      alt="First slide"
                    />
                  <Card.Body className='text-start'>
                    <div className="row">
                    <div className="col-12 py-1">
                    <Card.Title className='bold fs-4 py-2'>Kost Putri Handayani Kos </Card.Title>
                    </div>
                    </div>
                    <div className="border rounded-3 bg-white col-8">
                      <h5 className="ps-2 py-2 fs-6 text-muted">Mulai</h5>
                      <h2 className="ps-2 text-danger"><span className="bold">Rp. 800.000</span><span className="fs-6 text-muted">/bulan</span></h2>
                    </div>
                    <Card.Text className="py-2"><i><ImLocation2/></i>
                      <span className="ms-2 text-secondary fs-6">
                      Jalan Imam Bonjol nomor 22, Mejayan Kabupaten Caruban</span>
                    </Card.Text>
                    <div>
                      <span className="badge bg-primary ms-1">Kos Putri</span>
                      <span className="badge text-secondary border ms-1">Spring bed</span>
                      <span className="badge text-secondary border ms-1">Lemari Pakaian</span>
                      <span className="badge text-secondary border ms-1">Kamar mandi dalam</span>
                      <span className="badge text-secondary border ms-1">Tempat jemuran</span>
                      <span className="badge text-secondary border ms-1">Tempat parkir</span>
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
                      src={img_card1}
                      alt="First slide"
                    />
                  <Card.Body className='text-start'>
                    <Card.Title className='bold fs-4 py-2'>Kost Putri Handayani Kos </Card.Title>
                    <Card.Text><i><ImLocation2/></i>
                      <span className="ms-2 text-secondary fs-6">
                      Jalan Imam Bonjol nomor 22, Mejayan Kabupaten Caruban</span>
                    </Card.Text>
                    <div>
                      <span className="badge bg-danger ms-1">kos putri</span>
                      <span className="badge text-secondary border ms-1">Spring bed</span>
                      <span className="badge text-secondary border ms-1">Lemari Pakaian</span>
                      <span className="badge text-secondary border ms-1">kamar mandi dalam</span>
                      <span className="badge text-secondary border ms-1">tempat jemuran</span>
                      <span className="badge text-secondary border ms-1">tempat parkir</span>
                    </div>
                    <div className="py-3 text-end">
                    <Button variant="success">Pesan Sekarang<span className="ms-1"><BiMessageAltAdd/></span></Button>
                    </div>
                  </Card.Body>
                </div>
                <div style={{ width: '400px'}} className='m-3'>
                    <img
                      className="d-block w-100 rounded"
                      src={img_card1}
                      alt="First slide"
                    />
                  <Card.Body className='text-start'>
                    <Card.Title className='bold fs-4 py-2'>Kost Putri Handayani Kos </Card.Title>
                    <Card.Text><i><ImLocation2/></i>
                      <span className="ms-2 text-secondary fs-6">
                      Jalan Imam Bonjol nomor 22, Mejayan Kabupaten Caruban</span>
                    </Card.Text>
                    <div>
                      <span className="badge bg-danger ms-1">kos putri</span>
                      <span className="badge text-secondary border ms-1">Spring bed</span>
                      <span className="badge text-secondary border ms-1">Lemari Pakaian</span>
                      <span className="badge text-secondary border ms-1">kamar mandi dalam</span>
                      <span className="badge text-secondary border ms-1">tempat jemuran</span>
                      <span className="badge text-secondary border ms-1">tempat parkir</span>
                    </div>
                    <div className="py-3 text-end">
                    <Button variant="success">Pesan Sekarang<span className="ms-1"><BiMessageAltAdd/></span></Button>
                    </div>
                  </Card.Body>
                </div>
                <div style={{ width: '400px'}} className='m-3'>
                    <img
                      className="d-block w-100 rounded"
                      src={img_card1}
                      alt="First slide"
                    />
                  <Card.Body className='text-start'>
                    <Card.Title className='bold fs-4 py-2'>Kost Putri Handayani Kos </Card.Title>
                    <Card.Text><i><ImLocation2/></i>
                      <span className="ms-2 text-secondary fs-6">
                      Jalan Imam Bonjol nomor 22, Mejayan Kabupaten Caruban</span>
                    </Card.Text>
                    <div>
                      <span className="badge bg-danger ms-1">kos putri</span>
                      <span className="badge text-secondary border ms-1">Spring bed</span>
                      <span className="badge text-secondary border ms-1">Lemari Pakaian</span>
                      <span className="badge text-secondary border ms-1">kamar mandi dalam</span>
                      <span className="badge text-secondary border ms-1">tempat jemuran</span>
                      <span className="badge text-secondary border ms-1">tempat parkir</span>
                    </div>
                    <div className="py-3 text-end">
                    <Button variant="success">Pesan Sekarang<span className="ms-1"><BiMessageAltAdd/></span></Button>
                    </div>
                  </Card.Body>
                </div>

        </div>
      </div>
</section>

  );
}

export default content_2;   