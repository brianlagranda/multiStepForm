import { StepProps } from '../types/stepsType.ts';

const Steps = () => {
    return (
        <aside className="w-full rounded-lg bg-[url('../src/assets/images/bg-sidebar-desktop.svg')] bg-no-repeat p-6">
            <Step number="1">YOUR INFO</Step>
            <Step number="2">SELECT PLAN</Step>
            <Step number="3">ADD-ONS</Step>
            <Step number="4">SUMMARY</Step>
        </aside>
    );
};

const Step: React.FC<StepProps> = ({ number, children }) => {
    return (
        <div className="mb-4 flex items-center gap-x-4 p-1">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border text-sm font-medium text-white">
                {number}
            </div>
            <div className="">
                <p className="text-xs text-neutral-light-gray">STEP {number}</p>
                <p className="text-sm font-bold tracking-wider text-neutral-white">
                    {children}
                </p>
            </div>
        </div>
    );
};

export default Steps;
