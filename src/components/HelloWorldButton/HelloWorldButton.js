import _ from "lodash";
import "./HelloWorldButton.scss";

class HelloWorldButton {
  buttonCssClass = "btn";

  render() {
    const button = document.createElement("button");
    button.textContent = _.upperFirst("hello world");
    button.classList.add(this.buttonCssClass);
    const body = document.querySelector("body");
    body.appendChild(button);
  }
}

export default HelloWorldButton;
