import PieCreate from "./PieCreate/PieCreate";
import PieTable from "./PieTable/PieTable";

const PieIndex = (props) => {
  return (
    <div>
      <h2>Hello from Pie Index</h2>
      <PieCreate token={props.token} />
      <PieTable token={props.token} />
    </div>
  );
};

export default PieIndex;
