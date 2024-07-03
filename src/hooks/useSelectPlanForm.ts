import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store/store';
import { updateSelectPlan } from '../features/form/formSlice';
import { PlanType } from '../types/selectPlanTypes';

export const useSelectPlanForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { planType, planSubs } = useSelector(
        (state: RootState) => state.form.selectPlan
    );
    const [checked, setChecked] = useState(planSubs === 'Yearly');

    const handlePlanChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(
            updateSelectPlan({
                planType: event.target.value as PlanType,
                planSubs,
            })
        );
    };

    const handlePlanSubsChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newPlanSubs = event.target.checked ? 'Yearly' : 'Monthly';
        setChecked(event.target.checked);
        dispatch(
            updateSelectPlan({
                planType,
                planSubs: newPlanSubs,
            })
        );
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        navigate('/add-ons');
    };

    return {
        checked,
        planType,
        planSubs,
        handlePlanChange,
        handlePlanSubsChange,
        handleSubmit,
    };
};
