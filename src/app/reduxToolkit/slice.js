const { createSlice, nanoid, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    employees: [],
    isLoading: false,
    error: null,
    employeesAPIData: []
}

export const apiData = createAsyncThunk("apidata", async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
})

const Slice = createSlice({
    name: 'addEmployeeSlice',
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            const data = {
                id: nanoid(),
                name: action.payload
            }
            state.employees.push(data)
        },
        removeEmployee: (state, action) => {
            state.employees = state.employees.filter(item => item.id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(apiData.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        builder.addCase(apiData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.employeesAPIData = action.payload;
        })
        builder.addCase(apiData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
});

export const { addEmployee, removeEmployee } = Slice.actions;
export default Slice.reducer;
