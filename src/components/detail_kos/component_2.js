import img_card1 from '../../assests/img/kos_1.jpg'
import img_card2 from '../../assests/img/kos_2.jpg'
import img_card3 from '../../assests/img/kos_3.jpg'
import img_card4 from '../../assests/img/kos_4.jpg'

function conten_detail_kos() {
    return (
<section id="detail" class="d-flex align-items-center">
      <div class="container">   
        <div class="row">
          <div className='col-6'>
            <img
                className="d-block w-100 rounded-start"
                src={img_card1}
                alt="First slide"
            />
          </div>
          <div className='col-6'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <img
                            className="d-block w-100"
                            src={img_card1}
                            alt="First slide"
                        />
                    </div>
                    <div className='col-6'>
                        <img
                            className="d-block w-100 rounded-end"
                            src={img_card1}
                            alt="First slide"
                        />
                    </div>
                </div>
            </div>
            <div className='container py-4'>
                <div className='row'>
                    <div className='col-6'>
                        <img
                            className="d-block w-100"
                            src={img_card1}
                            alt="First slide"
                        />
                    </div>
                    <div className='col-6'>
                        <img
                            className="d-block w-100 rounded-end"
                            src={img_card1}
                            alt="First slide"
                        />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
</section>
  );
}

export default conten_detail_kos;