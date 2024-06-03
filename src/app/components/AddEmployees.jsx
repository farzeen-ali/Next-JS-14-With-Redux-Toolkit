import styles from '../addEmp.module.css'

const AddEmployees = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Add Employees</h2>
      <input className={styles.input} type="text" placeholder="Enter Employee Data" />
      <button className={styles.button}>Add</button>
    </div>
  );
}

export default AddEmployees;
