import React, { useEffect, useState } from 'react';
import "./styles.css";
import Person from '../components/Person';

export default function List() {

  const [data, setData] = useState([]);

  useEffect(() => {
    let list = sessionStorage.getItem("list");
    if (!list) {
      list = [];
    } else {
      list = JSON.parse(list);
    }
    setData(list);
  }, []);

  const handleDelete = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
    sessionStorage.setItem("list", JSON.stringify(updatedData));
  };

  const handleEdit = (index, updatedPerson) => {
    const updatedData = [...data];
    updatedData[index] = updatedPerson;
    setData(updatedData);
    sessionStorage.setItem("list", JSON.stringify(updatedData));
  };

  return (
    <div>
      <h1>Peoples</h1>
      <Person people={data} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}
