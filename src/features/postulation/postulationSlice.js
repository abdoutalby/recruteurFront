import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postulationService from "./postulationService";
const initialState = {
    postulations: [],
    postulationIsError: false,
    postulationIsSuccess: false,
    postulationIsLoading: false,
    postulationMessage: "",
};

export const getAll = createAsyncThunk(
    "postulation/getAll",
    async(_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await postulationService.getAll(token);
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const postulationSlice = createSlice({
    name: "postulations",
    initialState,
    reducers: {
        reset: (state) => initialState,
    },

    extraReducers: (buider) => {
        buider
            .addCase(getAll.pending, (state) => {
                state.postulationIsLoading = true;
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.postulationIsSuccess = true;
                state.postulationIsLoading = false;
                state.postulations = action.payload;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.postulationIsError = true;
                state.postulationIsLoading = false;
                state.postulationMessage = action.payload;
            });
    },
});

export const { reset } = postulationSlice.actions;
export default postulationSlice.reducer;