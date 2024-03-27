import { Props } from "./interfaces";
import './styles.css';

const View = (props: Props) => {
  return (
    <div className="view">
      <label>{props.id}</label>
      <div>{props.title}</div>
    </div>
  );
};

export default View;
