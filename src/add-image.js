import imgAltText from "./img-alt-text.txt";

function addImage() {
  import(/* webpackPreload: true */ "./assets/img-01.jpg").then((module) => {
    const img = document.createElement("img");

    img.src = module.default;
    img.width = 300;
    img.height = 400;
    img.alt = imgAltText;

    document.body.appendChild(img);
  });
}

export default addImage;
