import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store/store';
import Summary from '../components/Summary/Summary';

const SummaryPage: React.FC = () => {
    const navigate = useNavigate();
    const { selectPlan, addOns: addOnsState } = useSelector(
        (state: RootState) => state.form
    );
    const isYearly = selectPlan.planSubs === 'Yearly';

    const addOnsTypes = [
        {
            name: 'onlineService',
            label: 'Online service',
            price: isYearly ? 10 : 1,
        },
        {
            name: 'largerStorage',
            label: 'Larger storage',
            price: isYearly ? 20 : 2,
        },
        {
            name: 'customizableProfile',
            label: 'Customizable profile',
            price: isYearly ? 20 : 2,
        },
    ];

    const selectedAddOns = addOnsTypes
        .filter((addOn) => addOnsState[addOn.name as keyof typeof addOnsState])
        .map((addOn) => ({ label: addOn.label, price: addOn.price }));

    const planPrices = {
        Arcade: { monthly: 9, yearly: 90 },
        Advanced: { monthly: 12, yearly: 120 },
        Pro: { monthly: 15, yearly: 150 },
    };

    const planPrice =
        planPrices[selectPlan.planType][isYearly ? 'yearly' : 'monthly'];

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        navigate('/thank-you');
    };

    const handleClick = (event: React.FormEvent) => {
        event.preventDefault();
        navigate('/select-plan');
    };

    return (
        <Summary
            onSubmit={handleSubmit}
            onClick={handleClick}
            planType={selectPlan.planType}
            planPrice={planPrice}
            isYearly={isYearly}
            addOns={selectedAddOns}
        />
    );
};

export default SummaryPage;
