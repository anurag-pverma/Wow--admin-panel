
import React from "react";
import { DatePicker } from 'antd';
function Category() {
  return (
    <div >
      <div style={{ backgroundColor:"white"}}>
          <h1>Category</h1>
          <DatePicker placeholder="select date" />
        </div>
    </div>
  );
}

export default Category;
