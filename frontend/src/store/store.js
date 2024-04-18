import { configureStore,createSlice } from '@reduxjs/toolkit';

const initialState = {
  predictionResults: null, // Placeholder for prediction results
  isLoading: false, // Flag for loading state in UI
  error: null, // Store any errors during prediction request
};

const predictionSlice = createSlice({
  name: 'prediction',
  initialState,
  reducers: {
    startPrediction(state) {
      state.isLoading = true;
    },
    setPredictionResults(state, action) {
      state.predictionResults = action.payload;
      state.isLoading = false;
    },
    setPredictionError(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    clearPrediction(state) {
      state.predictionResults = null;
      state.error = null;
    },
  },
});

export const store = configureStore({
  reducer: predictionSlice.reducer,
});

export const {
  startPrediction,
  setPredictionResults,
  setPredictionError,
  clearPrediction,
} = predictionSlice.actions;
