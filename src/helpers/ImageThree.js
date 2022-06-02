import { Parallax } from 'react-parallax';
import Disconnected3 from '../img/img3.png';
import BgText from '../img/bgtxt2.png';
 
const ImageThree = () => (
    <div className='mydiv img'>
    <Parallax className='image' bgImage={Disconnected3}  strength={800}>
    <div className='mydiv'>
        <div className='content img'>
            <span className='img-txt'>d sc nn ct d</span>
            </div>
    </div>
        <img src={BgText} alt="bg2" class = "center3"/>
    </Parallax>

    </div>
);

export default ImageThree


 
