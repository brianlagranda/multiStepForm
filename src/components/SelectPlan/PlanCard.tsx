interface PlanCardProps {
    planType: string;
    currentPlanType: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    imgSrc: string;
    planPrice: number;
    isYearly: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({
    planType,
    currentPlanType,
    onChange,
    imgSrc,
    planPrice,
    isYearly,
}) => {
    return (
        <label
            className={`min-w-[140px] cursor-pointer rounded-lg border-[1.5px] p-4 shadow-sm hover:border-primary-purplish-blue ${
                currentPlanType === planType
                    ? 'border-primary-purplish-blue bg-primary-purplish-blue/5'
                    : ''
            }`}
        >
            <input
                type="radio"
                value={planType}
                checked={currentPlanType === planType}
                onChange={onChange}
                className="hidden"
            />
            <div className="flex items-start gap-4 md:block">
                <img src={imgSrc} alt={`${planType} plan`} />
                <div
                    className={`grid h-full ${isYearly ? 'grid-rows-[1fr_1fr_1fr]' : 'grid-rows-[1fr_1fr]'}  items-center md:block`}
                >
                    <h3 className="font-bold md:mt-10">{planType}</h3>
                    <p>
                        ${planPrice}/{isYearly ? 'yr' : 'mo'}
                    </p>
                    {isYearly && (
                        <p className="text-sm text-primary-marine-blue">
                            2 months free
                        </p>
                    )}
                </div>
            </div>
        </label>
    );
};

export default PlanCard;
