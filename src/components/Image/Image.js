import _ from "lodash";
import "./Image.scss";
import img from "./img-01.jpg";
import imgAltText from "./img-alt-text.txt";

function Image() {
  return <img src={img} alt={_.upperFirst(imgAltText)} />;
}

export default Image;
