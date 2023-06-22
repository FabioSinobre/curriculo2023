import { Link } from "react-router-dom";
import './gallery.css'

import Slide1 from "../../assets/fotos/Slide1.jpg"
import Slide2 from "../../assets/fotos/Slide2.jpg"
import Slide3 from "../../assets/fotos/Slide3.jpg"
import Slide4 from "../../assets/fotos/Slide4.jpg"
import Slide5 from "../../assets/fotos/Slide5.jpg"
import Slide6 from "../../assets/fotos/Slide6.jpg"
import Slide7 from "../../assets/fotos/Slide7.jpg"
import Slide8 from "../../assets/fotos/Slide8.jpg"
import Slide9 from "../../assets/fotos/Slide9.jpg"
import Slide10 from "../../assets/fotos/Slide10.jpg"
import Slide11 from "../../assets/fotos/Slide11.jpg"
import Slide12 from "../../assets/fotos/Slide12.jpg"
import Slide13 from "../../assets/fotos/Slide13.jpg"
import Slide14 from "../../assets/fotos/Slide14.jpg"
import Slide15 from "../../assets/fotos/Slide15.jpg"
import Slide16 from "../../assets/fotos/Slide16.jpg"
import Slide17 from "../../assets/fotos/Slide17.jpg"
import Slide18 from "../../assets/fotos/Slide18.jpg"
import Slide19 from "../../assets/fotos/Slide19.jpg"
import Slide20 from "../../assets/fotos/Slide20.jpg"
import Slide21 from "../../assets/fotos/Slide21.jpg"
import Slide22 from "../../assets/fotos/Slide22.jpg"
import Slide23 from "../../assets/fotos/Slide23.jpg"
import Slide24 from "../../assets/fotos/Slide24.jpg"
import Slide25 from "../../assets/fotos/Slide25.jpg"
import Slide26 from "../../assets/fotos/Slide26.jpg"

function Gallery(){
    return(
        <>
        <div className="gallery_container">
            <h1>Galeria de Fotos</h1>
            <div className="gallery_columns">
                <div className="gallery_img"><Link to='/'><img src={Slide1} alt="" /></Link> </div>
                <div className="gallery_img"><Link to='/'><img src={Slide2} alt="" /></Link> </div>
                <div className="gallery_img"><Link to='/'><img src={Slide3} alt="" /></Link> </div>
                <div className="gallery_img"><Link to='/'><img src={Slide4} alt="" /></Link> </div>
                <div className="gallery_img"><Link to='/'><img src={Slide5} alt="" /></Link> </div>
                <div className="gallery_img"><Link to='/'><img src={Slide6} alt="" /></Link> </div>
                <div className="gallery_img"><Link to='/'><img src={Slide7} alt="" /></Link> </div>
                <div className="gallery_img"><Link to='/'><img src={Slide8} alt="" /></Link> </div>
                <div className="gallery_img"><Link to='/'><img src={Slide9} alt="" /></Link> </div>
                <div className="gallery_img"><Link to='/'><img src={Slide10} alt="" /></Link> </div>
                <div className="gallery_img"><Link to='/'><img src={Slide11} alt="" /></Link> </div>
                <div className="gallery_img"><Link to='/'><img src={Slide12} alt="" /></Link> </div>
                <div className="gallery_img"><Link to='/'><img src={Slide13}alt="" /></Link> </div>
                <div className="gallery_img"><Link to='/'><img src={Slide14} alt="" /></Link> </div>
                <div className="gallery_img"><Link to='/'><img src={Slide15} alt="" /></Link> </div>
                <div className="gallery_img"><Link to='/'><img src={Slide16} alt="" /></Link> </div>
                <div className="gallery_img"><Link to='/'><img src={Slide17} alt="" /></Link> </div>
                <div className="gallery_img"><Link to='/'><img src={Slide18}alt="" /></Link> </div>
                <div className="gallery_img"><Link to='/'><img src={Slide19} alt="" /></Link> </div>
                <div className="gallery_img"><Link to='/'><img src={Slide20} alt="" /></Link> </div>
                <div className="gallery_img"><Link to='/'><img src={Slide21} alt="" /></Link> </div>
                <div className="gallery_img"><Link to='/'><img src={Slide22} alt="" /></Link> </div>
                <div className="gallery_img"><Link to='/'><img src={Slide23} alt="" /></Link> </div>
                <div className="gallery_img"><Link to='/'><img src={Slide24} alt="" /></Link> </div>
                <div className="gallery_img"><Link to='/'><img src={Slide25} alt="" /></Link> </div>
                <div className="gallery_img"><Link to='/'><img src={Slide26} alt="" /></Link> </div>
            </div>
        </div>
        </>
    )
}

export default Gallery