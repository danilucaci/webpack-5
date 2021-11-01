import _ from "lodash";
import "./Image.scss";
import img from "./img-01.jpg";
import imgAltText from "./img-alt-text.txt";

function Image() {
  return <img className="image" src={img} alt={_.upperFirst(imgAltText)} />;
}

export default Image;
