const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
    employees:[]
}

const Slice = createSlice({
    name:'addEmployeeSlice',
    initialState,
    reducers:{
        addEmployee:(state, action)=>{
            // console.log(action)
            const data ={
                id:nanoid(),
                name:action.payload
            }
            state.employees.push(data)
        },
        removeEmployee:(state, action)=> {
            const data = state.employees.filter((item) => {
                return item.id !== action.payload
            })
            state.employees = data;
        }
    } 
});

export const {addEmployee, removeEmployee} = Slice.actions;
export default Slice.reducer; 