'use client';
import { removeEmployee } from '../reduxToolkit/slice';
import styles from '../showEmp.module.css';
import { useDispatch, useSelector } from "react-redux";

const DeleteEmployee = () => {
    const data = useSelector((value) => value.employees)
    const dispatch = useDispatch(); 
  return (
    <>
     <h2>Delete Employee</h2>
     {
        data.map((item) => (
            <>
                <span key={item.id}>{item.name}</span>
                <button className={styles.button} onClick={() => dispatch(removeEmployee(item.id))}>Delete</button>
            </>
        ))
     }
    </>
  );
}

export default DeleteEmployee;
