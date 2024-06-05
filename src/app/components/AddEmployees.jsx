'use client';

import { useState } from 'react';
import styles from '../addEmp.module.css'
import { useDispatch } from 'react-redux';
import { addEmployee } from '../reduxToolkit/slice';

const AddEmployees = () => {
  const [empName, setEmpName] = useState('');
  const dispatch = useDispatch();
  const dataDispatch = () => {
    console.log(empName)
    dispatch(addEmployee(empName))
  }
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Add Employees</h2>
      <input className={styles.input} onChange={(e) => setEmpName(e.target.value)} type="text" placeholder="Enter Employee Data" />
      <button onClick={dataDispatch} className={styles.button}>Add</button>
    </div>
  );
}

export default AddEmployees;
