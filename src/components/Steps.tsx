import { useLocation } from 'react-router-dom';
import { StepProps } from '../types/stepsTypes';

const Steps = () => {
    const location = useLocation();

    const steps = [
        { number: '1', label: 'YOUR INFO', path: '/' },
        { number: '2', label: 'SELECT PLAN', path: '/select-plan' },
        { number: '3', label: 'ADD-ONS', path: '/add-ons' },
        { number: '4', label: 'SUMMARY', path: '/summary' },
    ];

    return (
        <aside className="flex w-full items-start justify-center gap-2 bg-[url('../src/assets/images/bg-sidebar-mobile.svg')] bg-cover bg-no-repeat py-6 md:block md:h-full md:rounded-lg md:bg-[url('../src/assets/images/bg-sidebar-desktop.svg')] md:p-8">
            {steps.map((step) => (
                <Step
                    key={step.number}
                    number={step.number}
                    isActive={
                        location.pathname === step.path ||
                        (step.number === '4' &&
                            location.pathname === '/thank-you')
                    }
                >
                    {step.label}
                </Step>
            ))}
        </aside>
    );
};

const Step: React.FC<StepProps> = ({ number, children, isActive }) => {
    return (
        <div className="mb-4 flex items-center p-1 md:gap-x-4">
            <div
                className={`flex h-8 w-8 items-center justify-center rounded-full border border-primary-light-blue text-sm font-bold ${isActive ? 'bg-primary-light-blue' : 'text-white'}`}
            >
                {number}
            </div>
            <div className="hidden md:block">
                <p className="text-[13px] tracking-tighter text-neutral-light-gray/80">
                    STEP {number}
                </p>
                <p className="text-sm font-bold tracking-wider text-neutral-white/90">
                    {children}
                </p>
            </div>
        </div>
    );
};

export default Steps;
