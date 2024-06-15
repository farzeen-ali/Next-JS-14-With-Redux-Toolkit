const { createSlice, nanoid } = require("@reduxjs/toolkit")

const initialState = {
    students: []
}

const Slice = createSlice({
    name: 'myStudents',
    initialState,
    reducers:{
        addStudents:(state, action) => {
            const data = {
                id: nanoid(),
                name: action.payload
            }
            state.students.push(data);
        }
    }
})
export const {addStudents} = Slice.actions;
export default Slice.reducer;