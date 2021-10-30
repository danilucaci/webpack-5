import "./button.scss";

class HelloWorldButton {
  render() {
    const button = document.createElement("button");
    button.textContent = "Hello world";
    button.classList.add("btn");
    const body = document.querySelector("body");
    body.appendChild(button);
  }
}

export default HelloWorldButton;
