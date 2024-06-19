import { PlanSubscription, PlanType } from '../../types/selectPlanTypes';
import PlanCard from './PlanCard';
import arcadeImg from '../../assets/images/icon-arcade.svg';
import advancedImg from '../../assets/images/icon-advanced.svg';
import proImg from '../../assets/images/icon-pro.svg';
import CustomSwitch from './CustomSwitch';

interface SelectPlanProps {
    planType: PlanType;
    planSubs: PlanSubscription;
    onPlanChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onPlanSubsChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (event: React.FormEvent) => void;
    checked: boolean;
}

const planTypes = [
    { type: 'Arcade', img: arcadeImg, monthlyPrice: 9, yearlyPrice: 90 },
    { type: 'Advanced', img: advancedImg, monthlyPrice: 12, yearlyPrice: 120 },
    { type: 'Pro', img: proImg, monthlyPrice: 15, yearlyPrice: 150 },
];

const SelectPlan: React.FC<SelectPlanProps> = ({
    planType,
    onPlanChange,
    onPlanSubsChange,
    onSubmit,
    checked,
}) => {
    return (
        <>
            <div className="my-3.5 flex w-full flex-col items-start">
                <h1 className="py-2 text-3xl font-bold">Select your plan</h1>
                <p className="mb-4">
                    You have the option of monthly or yearly billing.
                </p>
            </div>
            <form id="select-plan-form" onSubmit={onSubmit}>
                <div className="flex gap-4">
                    {planTypes.map((plan) => (
                        <PlanCard
                            key={plan.type}
                            planType={plan.type}
                            planPrice={
                                checked ? plan.yearlyPrice : plan.monthlyPrice
                            }
                            currentPlanType={planType}
                            onChange={onPlanChange}
                            imgSrc={plan.img}
                            isYearly={checked}
                        />
                    ))}
                </div>
                <div className="mt-8 flex h-12 items-center justify-center rounded-md bg-neutral-magnolia/50">
                    <span
                        className={`mr-4 text-sm font-bold ${checked ? 'text-neutral-cool-gray/70' : 'text-primary-marine-blue'}`}
                    >
                        Monthly
                    </span>
                    <label className="relative inline-flex cursor-pointer items-center">
                        <CustomSwitch
                            checked={checked}
                            onChange={onPlanSubsChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    </label>
                    <span
                        className={`ml-4 text-sm font-bold ${checked ? 'text-primary-marine-blue' : 'text-neutral-cool-gray/70'}`}
                    >
                        Yearly
                    </span>
                </div>
            </form>
        </>
    );
};

export default SelectPlan;
