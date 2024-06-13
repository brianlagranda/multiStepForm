import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store/store';
import { updateSelectPlan } from '../features/form/formSlice';
import { PlanType } from '../types/selectPlanTypes';
import SelectPlan from '../components/SelectPlan/SelectPlan';

const SelectPlanPage: React.FC = () => {
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

    return (
        <SelectPlan
            planType={planType}
            planSubs={planSubs}
            onPlanChange={handlePlanChange}
            onPlanSubsChange={handlePlanSubsChange}
            onSubmit={handleSubmit}
            checked={checked}
        />
    );
};

export default SelectPlanPage;
