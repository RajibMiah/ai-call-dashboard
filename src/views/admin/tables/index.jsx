import ComplexTable from "./components/ComplexTable";
import { columnsDataComplex } from "./variables/columnsData";
import tableDataComplex from "./variables/tableDataComplex.json";

const Tables = () => {
  return (
    <div>
      <ComplexTable
        columnsData={columnsDataComplex}
        tableData={tableDataComplex}
      />
    </div>
  );
};

export default Tables;
