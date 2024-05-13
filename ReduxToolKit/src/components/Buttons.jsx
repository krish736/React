import { useDispatch } from "react-redux";
import { counterAction } from "../store/counter";
import { privacyAction } from "../store/privacy";

const Buttons = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    // dispatch({ type: "INCREMENT" });
    dispatch(counterAction.increment());
  };

  const handleDecrement = () => {
    // dispatch({ type: "DECREMENT" });
    dispatch(counterAction.decrement());
  };

  const handlePrivacy = () =>{
    dispatch(privacyAction.toggle());
  }

  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button
        type="button"
        className="btn btn-primary btn-lg px-4 gap-3"
        onClick={handleIncrement}
      >
        INCREMENT
      </button>
      <button
        type="button"
        className="btn btn-secondary btn-lg px-4"
        onClick={handleDecrement}
      >
        DECREMENT
      </button>
      <button
        type="button"
        className="btn btn-danger btn-lg px-4"
        onClick={handlePrivacy}
      >
        PRIVACY
      </button>
    </div>
  );
};

export default Buttons;
