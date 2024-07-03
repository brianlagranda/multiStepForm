import SelectPlan from '../components/SelectPlan/SelectPlan';
import { useSelectPlanForm } from '../hooks/useSelectPlanForm';

const SelectPlanPage: React.FC = () => {
    const {
        checked,
        planType,
        planSubs,
        handlePlanChange,
        handlePlanSubsChange,
        handleSubmit,
    } = useSelectPlanForm();

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
