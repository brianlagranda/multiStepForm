import React from 'react';
import AddOnsCard from './AddOnsCard';

interface AddOns {
    onlineService: boolean;
    largerStorage: boolean;
    customizableProfile: boolean;
}

interface AddOnsProps {
    addOns: AddOns;
    onAddOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (event: React.FormEvent) => void;
    isYearly: boolean;
}

const addOnsTypes = [
    {
        name: 'onlineService',
        label: 'Online service',
        description: 'Access to multiplayer games',
        monthlyPrice: 1,
        yearlyPrice: 10,
    },
    {
        name: 'largerStorage',
        label: 'Larger storage',
        description: 'Extra 1TB of cloud save',
        monthlyPrice: 2,
        yearlyPrice: 20,
    },
    {
        name: 'customizableProfile',
        label: 'Customizable profile',
        description: 'Custom theme on your profile',
        monthlyPrice: 2,
        yearlyPrice: 20,
    },
];

const PickAddOns: React.FC<AddOnsProps> = ({
    addOns,
    onAddOnChange,
    onSubmit,
    isYearly,
}) => {
    return (
        <>
            <div className="my-3.5 flex w-full flex-col items-start">
                <h1 className="py-2 text-3xl font-bold">Pick Add-Ons</h1>
                <p className="mb-4">
                    Add-ons help enhance your gaming experience.
                </p>
            </div>
            <form
                id="select-add-ons-form"
                onSubmit={onSubmit}
                className="w-full"
            >
                <div className="mt-2 flex flex-col gap-4">
                    {addOnsTypes.map((addOn) => (
                        <AddOnsCard
                            key={addOn.name}
                            name={addOn.name}
                            checked={addOns[addOn.name as keyof AddOns]}
                            label={addOn.label}
                            description={addOn.description}
                            price={
                                isYearly
                                    ? addOn.yearlyPrice
                                    : addOn.monthlyPrice
                            }
                            period={isYearly ? 'yr' : 'mo'}
                            onChange={onAddOnChange}
                        />
                    ))}
                </div>
            </form>
        </>
    );
};

export default PickAddOns;
