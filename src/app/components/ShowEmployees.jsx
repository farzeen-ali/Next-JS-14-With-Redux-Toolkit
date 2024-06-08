'use client'
import { useSelector } from 'react-redux';
import styles from '../showEmp.module.css';

const ShowEmployees = () => {
  const employeeData = useSelector((data) => data.employees);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Show Employees</h2>
      {
        employeeData.map((item) => (
          <h4 key={item.id}>{item.name}</h4>
        ))
      }
    </div>
  );
}

export default ShowEmployees;
