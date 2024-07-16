import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import PersonalInfoPage from './pages/PersonalInfoPage';
import SelectPlanPage from './pages/SelectPlanPage';
import PickAddOnsPage from './pages/PickAddOnsPage';
import Steps from './components/Steps';
import FormNavButtons from './components/FormNavButtons/FormNavButtons';
import SummaryPage from './pages/SummaryPage';
import ThankYou from './components/ThankYou/ThankYou';

const MultiStepForm: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const formIds: { [key: string]: string } = {
        '/': 'personal-info-form',
        '/select-plan': 'select-plan-form',
        '/add-ons': 'add-ons-form',
        '/summary': 'summary-form',
    };

    const paths = Object.keys(formIds);
    const currentPath = location.pathname.slice(1);
    const currentPathIndex = paths.indexOf(location.pathname);

    const handleBack = () => {
        if (currentPathIndex > 0) {
            navigate(paths[currentPathIndex - 1]);
        }
    };

    const handleForward = () => {
        const formId = formIds[location.pathname];
        const form = formId ? document.getElementById(formId) : null;

        if (form) {
            form.dispatchEvent(
                new Event('submit', { cancelable: true, bubbles: true })
            );
        } else if (currentPathIndex < paths.length - 1) {
            navigate(paths[currentPathIndex + 1]);
        }
    };

    const showBackButton = currentPathIndex > 0;
    const showFormNavButtons = currentPathIndex !== -1;

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="grid h-screen select-none grid-rows-[172px_1fr]">
            {isMobile && <Steps />}
            <div className="h-full bg-neutral-magnolia p-4 md:flex md:h-screen md:flex-col md:justify-center">
                <div className="-my-[5.6rem] mx-auto mb-auto rounded-xl bg-neutral-white p-4 shadow-xl md:my-[5.6rem] md:grid md:h-[600px] md:w-full md:max-w-[65%] md:grid-cols-[2fr_2fr_2fr_1fr] lg:max-w-[50%]">
                    {!isMobile && <Steps />}
                    <div className="relative mx-auto w-full px-2 md:col-span-3 md:col-start-2 md:flex md:flex-col md:px-24 md:py-4">
                        <FormRoutes />
                        {showFormNavButtons && !isMobile && (
                            <FormNavButtons
                                onBack={handleBack}
                                onForward={handleForward}
                                showBackButton={showBackButton}
                                currentPath={currentPath}
                            />
                        )}
                    </div>
                </div>
            </div>
            {showFormNavButtons && isMobile && (
                <FormNavButtons
                    onBack={handleBack}
                    onForward={handleForward}
                    showBackButton={showBackButton}
                    currentPath={currentPath}
                />
            )}
        </div>
    );
};

const FormRoutes: React.FC = () => (
    <Routes>
        <Route path="/" element={<PersonalInfoPage />} />
        <Route path="/select-plan" element={<SelectPlanPage />} />
        <Route path="/add-ons" element={<PickAddOnsPage />} />
        <Route path="/summary" element={<SummaryPage />} />
        <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
);

export default MultiStepForm;
