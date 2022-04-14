import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Datatable = () => {
  const [data, setData] = useState([]);
  const student = data.map((item) => {
    return {
    item
  });

  useEffect(() => {
    const getStudent = async () => {
      const { data } = await axios.get(
        "http://localhost:5000/api/authStudent/studentclass/Lss"
      );
      setData(data);
    };
    getStudent();
  }, []);

  console.log(data);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/teacher/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
