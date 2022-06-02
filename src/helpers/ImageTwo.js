import { Parallax } from 'react-parallax';
import Disconnected2 from '../img/img2.png';
import BgText2 from '../img/bgtxt2.png';
 
const ImageTwo = () => (


<div className='mydiv img'>
<Parallax className='image' bgImage={Disconnected2}  strength={800}>
<div className='mydiv'>
    <div className='content img'>
        <span className='img-txt'>f  l ng a l ttl  d sc nn ct d</span>
        </div>
</div>
    <img src={BgText2} alt="bg2" class = "center2"/>
</Parallax>

</div>
);

export default ImageTwo