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
            className={`min-w-[140px] cursor-pointer rounded-lg border-[1.5px] p-4 shadow-sm hover:border-primary-marine-blue ${
                currentPlanType === planType
                    ? 'border-primary-marine-blue bg-primary-purplish-blue/5'
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
            <div>
                <img src={imgSrc} alt={`${planType} plan`} />
                <h3 className="mt-10 font-bold text-primary-marine-blue">
                    {planType}
                </h3>
                <p>
                    ${planPrice}/{isYearly ? 'yr' : 'mo'}
                </p>
                {isYearly && (
                    <p className="text-sm text-primary-marine-blue">
                        2 months free
                    </p>
                )}
            </div>
        </label>
    );
};

export default PlanCard;
