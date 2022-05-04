import "./Button.css";

function Button(props) {
  return (
    <div>
      <button style={{ backgroundColor: props.bgc }}>{props.name}</button>
    </div>
  );
}

export default Button;
