import "./button.scss";

class HelloWorldButton {
  buttonCssClass = "btn";

  render() {
    const button = document.createElement("button");
    button.textContent = "Hello world";
    button.classList.add(this.buttonCssClass);
    const body = document.querySelector("body");
    body.appendChild(button);
  }
}

export default HelloWorldButton;
