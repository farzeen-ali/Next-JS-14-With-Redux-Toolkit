'use client'
import { useDispatch, useSelector } from 'react-redux';
import styles from '../showEmp.module.css';
import { removeEmployee } from '../reduxToolkit/slice';

const ShowEmployees = () => {
  const employeeData = useSelector((data) => data.employeeData.employees);
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Show Employees</h2>
      {
        employeeData.map((item) => (
          <h4 key={item.id}>
          <span>{item.name}</span>
          <button className={styles.button} onClick={() => dispatch(removeEmployee(item.id))}>Delete</button>
          </h4>
        ))
      }
    </div>
  );
}

export default ShowEmployees;
