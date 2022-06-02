import { Parallax } from 'react-parallax';
import Disconnected from '../img/img1.png';
import BgText from '../img/bgtxt.png';
 
const ImageOne = () => (
    <div className='mydiv img'>
    <Parallax className='image' bgImage={Disconnected}  strength={800} >
    <div className='mydiv'>
        <div className='content img'>
            <span className='img-txt'>feeling a little disconnected</span>
        </div>
    </div>
    </Parallax>
    <h4>hi</h4>
        <img src={BgText} alt="bg2" class = "center"/>
    </div>
);

export default ImageOne