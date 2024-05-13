import { useSelector } from "react-redux";

const CounterValue = () => {

  const {counterVal} = useSelector((store) => store.counter)

  return (
    <div className="px-4 py-5 my-5 text-center">
      <p className="lead mb-4" style = {{fontSize: '50px'}}>{counterVal}</p>
    </div>
  );
};

export default CounterValue;
