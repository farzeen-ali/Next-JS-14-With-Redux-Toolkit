'use client';
import { removeEmployee } from '../reduxToolkit/slice';
import styles from '../showEmp.module.css';
import { useDispatch, useSelector } from "react-redux";

const DeleteEmployee = () => {
    const data = useSelector((value) => value.employeeData.employees)
    const dispatch = useDispatch(); 
  return (
    <>
     <h2>Delete Employee</h2>
     {
        data.map((item) => (
            <div key={item.id}>
                <span>{item.name}</span>
                <button className={styles.button} onClick={() => dispatch(removeEmployee(item.id))}>Delete</button>
            </div>
        ))
     }
    </>
  );
}

export default DeleteEmployee;
