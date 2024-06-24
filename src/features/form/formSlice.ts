import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormState, initialState } from './formTypes';

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        updatePersonalInfo(
            state,
            action: PayloadAction<FormState['personalInfo']>
        ) {
            state.personalInfo = action.payload;
        },
        updateSelectPlan(
            state,
            action: PayloadAction<FormState['selectPlan']>
        ) {
            state.selectPlan = action.payload;
        },
        updateAddOns(
            state,
            action: PayloadAction<Partial<FormState['addOns']>>
        ) {
            state.addOns = { ...state.addOns, ...action.payload };
        },
    },
});

export const { updatePersonalInfo, updateSelectPlan, updateAddOns } =
    formSlice.actions;

export default formSlice.reducer;
