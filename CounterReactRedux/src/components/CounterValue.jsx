import { useSelector } from "react-redux";

const CounterValue = () => {

  const counter = useSelector(store => store.counter)

  return (
    <div className="px-4 py-5 my-5 text-center">
      <p className="lead mb-4" style = {{fontSize: '50px'}}>{counter}</p>
    </div>
  );
};

export default CounterValue;
