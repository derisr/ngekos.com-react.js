import Card from 'react-bootstrap/Card';

import { ImLocation2 } from "react-icons/im"
import { BsWhatsapp } from "react-icons/bs"
import { HiOutlineMail } from "react-icons/hi"
import { AiFillStar } from "react-icons/ai"
import { GiBed } from "react-icons/gi"
import { MdOutlineDoorSliding } from "react-icons/md"
import { FaShower } from "react-icons/fa"
import { TbToolsKitchen2 } from "react-icons/tb"
import { FaMotorcycle } from "react-icons/fa"
import { GiHanger } from "react-icons/gi"
import { AiOutlineWifi } from "react-icons/ai"
import { GiTable } from "react-icons/gi"
import { GiSofa } from "react-icons/gi"

function conten_detail_kos() {
    return (
<section id="detail" class="d-flex align-items-center">
      <div class="container">   
        <div class="row py-2">
        <div class="col-lg-9" data-aos="fade-left" data-aos-delay="200">
            <div className='text-start'>
                <div className="col-9 py-1">
                    <Card.Title className='bold fs-3 py-2'>Kost Putri Handayani</Card.Title>
                <Card.Text className="py-2"><i><ImLocation2/></i>
                  <span className="ms-2 text-secondary fs-6">
                      Jalan Imam Bonjol nomor 22, Mejayan Kabupaten Caruban</span>
                </Card.Text>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <Card.Text>
                            <span className="ms-2 text-secondary fs-6">
                                Terakhir diubah tanggal 10 Desember 2022</span>
                            </Card.Text>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <hr className='py-1'></hr>

                <div className='container text-start'>
                    <div className='row'>
                        <div className='col-6'>
                            <Card.Title className='bold fs-6'>Keterangan</Card.Title>
                            <div className='py-3 container'>
                                <div className='row'>
                                    <div className='col-4'>
                                        <p className='fs-6 text-muted'>Jenis Kamar </p>
                                        <p className='fs-6 text-muted'>Jumlah Kamar </p>
                                        <p className='fs-6 text-muted'>Ukuran Kamar </p>
                                        <p className='fs-6 text-muted'>Umur Bangunan </p>
                                    </div>
                                    <div className='col-6'>
                                        <p className='fs-6 text-muted'>: <span className="badge bg-info"><span className="text-warning"><AiFillStar/></span> PREMIUM</span></p>
                                        <p className='fs-6 text-muted'>: 10 Kamar</p>
                                        <p className='fs-6 text-muted'>: 3 x 3 Meter</p>
                                        <p className='fs-6 text-muted'>: baru</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <Card.Title className='bold fs-6'>Aturan</Card.Title>
                            <div className='py-3 container'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <p className='fs-6 text-muted'>- Jam Bertamu (sampai 21.00 WIB)</p>
                                        <p className='fs-6 text-muted'>- Tidak diperbolehkan memelihara binatang</p>
                                        <p className='fs-6 text-muted'>- Dilarang membawa lawan jenis menginap</p>
                                        <p className='fs-6 text-muted'>- Dilarang membawa minuman keras</p>
                                        <p className='fs-6 text-muted'>- Dilarang membawa obat - obatan terlarang</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <hr></hr>
            <Card.Title className='bold fs-6 text-start'>Fasilitas</Card.Title>
            <div className='container'>
                <div className='row'>
                    <div className='py-3 col-4 text-start'>
                        <p className='fs-6 text-muted'><span className='fs-5 me-2'><GiBed/></span> Spring Bed</p>
                        <p className='fs-6 text-muted'><span className='fs-5 me-2'><MdOutlineDoorSliding/></span> Lemari</p>
                        <p className='fs-6 text-muted'><span className='fs-5 me-2'><FaShower/></span> Kamar Mandi Dalam</p>
                    </div>
                    <div className='py-3 col-4 text-start'>
                        <p className='fs-6 text-muted'><span className='fs-5 me-2'><TbToolsKitchen2/></span> Dapur</p>
                        <p className='fs-6 text-muted'><span className='fs-5 me-2'><FaMotorcycle/></span> Parkiran Luas</p>
                        <p className='fs-6 text-muted'><span className='fs-5 me-2'><GiHanger/></span> Jemuran</p>
                    </div>
                    <div className='py-3 col-4 text-start'>
                        <p className='fs-6 text-muted'><span className='fs-5 me-2'><AiOutlineWifi/></span> Jaringan Internet</p>
                        <p className='fs-6 text-muted'><span className='fs-5 me-2'><GiTable/></span> Meja Belajar</p>
                        <p className='fs-6 text-muted'><span className='fs-5 me-2'><GiSofa/></span> Ruang Tamu</p>
                    </div>
                </div>
            </div>

        </div> 
        <div class="col-lg-3" data-aos="fade-left" data-aos-delay="200">
            <div className="text-start border rounded-3 bg-white col-12">
                <div className="text-start border rounded-3 bg-white p-4">
                <h5 className="ps-2 fs-6 text-muted">Mulai</h5>
                <h2 className="ps-2 text-danger"><span className="bold">Rp.1.500.000</span><span className="fs-6 text-muted">/bulan</span></h2>
                </div>
                <a className='btn col-12'>Hubungi</a>
                <a className='btn btn-success col-12'><BsWhatsapp/> WhatsApp</a>
                <a className='btn btn-info col-12 text-white'><HiOutlineMail/> Email</a>
            </div>
        </div> 
        </div>
      </div>
</section>
  );
}

export default conten_detail_kos;