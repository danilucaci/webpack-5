import _ from "lodash";
import "./Image.scss";
import img from "./img-01.jpg";
import imgAltText from "./img-alt-text.txt";

class Image {
  render() {
    const image = document.createElement("img");
    image.src = img;
    image.alt = _.upperCase(imgAltText);
    image.width = 400;
    image.height = 300;
    image.className = "image";

    document.body.appendChild(image);
  }
}

export default Image;
