import _ from "lodash";
import "./HelloWorldButton.scss";

function HelloWorldButton({ name }) {
  return <button className="btn">hello-{_.upperFirst(name)}</button>;
}

export default HelloWorldButton;
