import { SummaryProps } from '../../types/summaryTypes';

const Summary: React.FC<SummaryProps> = ({
    onSubmit,
    onClick,
    planType,
    planPrice,
    isYearly,
    addOns,
}) => {
    const planDuration = isYearly ? 'Yearly' : 'Monthly';
    const totalAddOnsPrice = addOns.reduce(
        (acc, addOn) => acc + addOn.price,
        0
    );
    const totalPrice = planPrice + totalAddOnsPrice;

    return (
        <>
            <div className="my-3.5 flex w-full flex-col items-start">
                <h1 className="py-2 text-3xl font-bold">Finishing up</h1>
                <p className="mb-4">
                    Double-check everything looks OK before confirming.
                </p>
            </div>
            <form
                id="summary-form"
                onSubmit={onSubmit}
                className="flex w-full flex-col rounded-lg bg-neutral-alabaster px-6 py-4"
            >
                <div className="flex w-full items-center justify-between">
                    <div className="flex flex-col items-start">
                        <span className=" font-bold text-primary-marine-blue">
                            {planType} ({planDuration})
                        </span>
                        <button
                            onClick={onClick}
                            className="text-sm font-medium text-neutral-cool-gray underline hover:text-primary-purplish-blue"
                        >
                            Change
                        </button>
                    </div>
                    <span className=" font-bold text-primary-marine-blue">
                        ${planPrice}/{isYearly ? 'yr' : 'mo'}
                    </span>
                </div>
                <hr className="my-4" />
                <div className="">
                    {addOns.length > 0 ? (
                        <ul className="flex flex-col gap-3 text-neutral-cool-gray">
                            {addOns.map((addOn, index) => (
                                <li
                                    key={index}
                                    className="flex justify-between"
                                >
                                    <span>{addOn.label}</span>
                                    <span className="text-sm text-primary-marine-blue">
                                        +${addOn.price}/{isYearly ? 'yr' : 'mo'}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No add-ons selected</p>
                    )}
                </div>
            </form>
            <div className="mt-2 flex w-full justify-between px-6 py-4 text-lg">
                <span className="text-sm text-neutral-cool-gray">
                    Total ({isYearly ? 'per year' : 'per month'})
                </span>
                <span className="text-xl font-bold text-primary-purplish-blue">
                    +${totalPrice}/{isYearly ? 'yr' : 'mo'}
                </span>
            </div>
        </>
    );
};

export default Summary;
