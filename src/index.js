import ReactDOM from "react-dom/client";

// add the green inside this function
const Alert = (props) => {
  if (props.color === "green") {
    return (
      <div class="alert alert-success" role="alert">
        {props.text}
      </div>
    );
  } else if (props.color === "orange") {
    return (
      <div class="alert alert-warning" role="alert">
        {props.text}
      </div>
    );
  } else if (props.color === "red") {
    return (
      <div class="alert alert-danger" role="alert">
        {props.text}
      </div>
    );
  }
};

// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understand what properties is the component using
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Alert text="OMG! Something really bad has happended!" color="red" />
    <Alert text="Well, it is not that bad after all!" color="orange" />
    <Alert text="I am supposed to be green" color="green" />
  </div>
);
