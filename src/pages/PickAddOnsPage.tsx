import React from 'react';
import PickAddOns from '../components/PickAddOns/PickAddOns';
import { usePickAddOnsForm } from '../hooks/usePickAddOnsForm';

const PickAddOnsPage: React.FC = () => {
    const { addOns, isYearly, handleAddOnChange, handleSubmit } =
        usePickAddOnsForm();

    return (
        <PickAddOns
            addOns={addOns}
            onAddOnChange={handleAddOnChange}
            onSubmit={handleSubmit}
            isYearly={isYearly}
        />
    );
};

export default PickAddOnsPage;
