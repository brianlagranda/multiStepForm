import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store/store';
import { updateAddOns } from '../features/form/formSlice';

export const usePickAddOnsForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { addOns, selectPlan } = useSelector(
        (state: RootState) => state.form
    );
    const isYearly = selectPlan.planSubs === 'Yearly';

    const handleAddOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;
        dispatch(updateAddOns({ [name]: checked }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        navigate('/summary');
    };

    return {
        addOns,
        isYearly,
        handleAddOnChange,
        handleSubmit,
    };
};
