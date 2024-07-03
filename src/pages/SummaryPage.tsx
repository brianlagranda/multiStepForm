import Summary from '../components/Summary/Summary';
import { useSummaryForm } from '../hooks/useSummaryForm';

const SummaryPage: React.FC = () => {
    const {
        handleSubmit,
        handleClick,
        planType,
        planPrice,
        isYearly,
        selectedAddOns,
    } = useSummaryForm();

    return (
        <Summary
            onSubmit={handleSubmit}
            onClick={handleClick}
            planType={planType}
            planPrice={planPrice}
            isYearly={isYearly}
            addOns={selectedAddOns}
        />
    );
};

export default SummaryPage;
