import { AiFillInstagram } from "react-icons/ai";
import { GrTwitter } from "react-icons/gr";
import { ImPhone } from "react-icons/im";
import { FaTiktok } from "react-icons/fa";

function footer() {
    return (
<footer id="footer" class="text-light text-center text-lg-start">
  <div class="container py-1">
    <div class="row py-2">
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0 p-3">
        <h3 class="text bold">ngekos.com</h3>
      </div>

      <div class="col-lg-3 col-md-6 mb-4 mb-md-0 p-3">
        <h5 class="text bold">Kantor</h5>

        <ul href="" class="list-unstyled">
          <li>
            <a class="h5 text-white text-dark nonunderline">Jalan Doho nomor 21 Winongo, Kecamatan Manguharjo, Kota Madiun</a>
          </li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-6 mb-4 mb-md-0 p-3">
        <h5 class="text bold">Kontak</h5>

        <ul class="list-unstyled">
          <li>
            <a href="mailto:ngekos_official@gmail.com" class="h5 text-white text-dark text-link">ngekos_official@gmail.com</a>
          </li>
          <li>
            <a href="https://wa.me/+6281337224717" class="h5 text-white text-dark text-link">+6281719873921</a>
          </li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-6 mb-4 mb-md-0 p-3">
        <h5 class="text bold">Sosial Media</h5>

        <ul class="list-unstyled">
          <li>
            <span className="me-3"><AiFillInstagram/></span>
            <span className="me-3"><GrTwitter/></span>
            <span className="me-3"><FaTiktok/></span>
            <span className="me-3"><ImPhone/></span>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="text-center p-3">
    © 2022 Copyright:
    <a class="text-white text-dark nonunderline bold" href="#">Emerof-R_Reborn</a>
  </div>
</footer>
  );
}

export default footer;