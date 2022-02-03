import PieCreate from "./PieCreate/PieCreate";

const PieIndex = (props) => {
  return (
    <div>
      <h2>Hello from Pie Index</h2>
      <PieCreate token={props.token} />
    </div>
  );
};

export default PieIndex;
