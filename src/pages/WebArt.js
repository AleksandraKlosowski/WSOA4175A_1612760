import ImageOne from "../helpers/ImageOne";
import ImageTwo from "../helpers/ImageTwo";
import ImageThree from "../helpers/ImageThree";
import TextBox from '../helpers/TextBox';
import TextBoxTwo from '../helpers/TextBoxTwo';
import "../index.css";

function WebArt() {
  return (
    <div className='webart'>
      <ImageOne />
      <TextBox />
      <ImageTwo />
      <TextBoxTwo />
      <ImageThree />
    </div>
  );
}

export default WebArt;