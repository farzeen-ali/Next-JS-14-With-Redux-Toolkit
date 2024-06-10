'use client';

import { useState } from 'react';
import styles from '../addEmp.module.css'
import { useDispatch } from 'react-redux';
import { addEmployee } from '../reduxToolkit/slice';
import Link from 'next/link';

const AddEmployees = () => {
  const [empName, setEmpName] = useState('');
  const dispatch = useDispatch();
  const dataDispatch = () => {
    // console.log(empName)
    dispatch(addEmployee(empName))
    setEmpName('');
  }
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Add Employees</h2>
      <input className={styles.input} value={empName} onChange={(e) => setEmpName(e.target.value)} type="text" placeholder="Enter Employee Data" />
      <button onClick={dataDispatch} className={styles.button}>Add</button>
      <Link href='/delete-employee'>Delete</Link>
    </div>
  );
}

export default AddEmployees;
