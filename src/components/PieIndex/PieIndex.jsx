import React, { useState } from "react";

import PieCreate from "./PieCreate/PieCreate";
import PieTable from "./PieTable/PieTable";

const PieIndex = (props) => {
  const [refreshPieTable, setRefreshPieTable] = useState(true);
  return (
    <div>
      <h2>Hello from Pie Index</h2>
      <PieCreate
        token={props.token}
        refreshPieTable={refreshPieTable}
        setRefreshPieTable={setRefreshPieTable}
      />
      <PieTable token={props.token} refreshPieTable={refreshPieTable} />
    </div>
  );
};

export default PieIndex;
