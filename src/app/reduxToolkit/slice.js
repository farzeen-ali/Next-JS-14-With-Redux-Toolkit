const { createSlice, nanoid } = require("@reduxjs/toolkit");

const startingState = {
    employees:[]
}

const Slice = createSlice({
    startingState,
    reducers:{
        addEmployee:(state, action)=>{
            const data ={
                id:nanoid(),
                name:action.name
            }
            state.employees.push(data)
        }
    }
});

export const {addEmployee} = Slice.actions;
export default Slice.reducer;