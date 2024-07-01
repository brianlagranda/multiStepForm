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

    return (
        <div className="flex h-screen select-none items-center justify-center">
            <div className="mx-auto grid h-[600px] w-3/4 max-w-[65%] grid-cols-[2fr_2fr_2fr_1fr] rounded-xl bg-neutral-white p-4 shadow-xl lg:max-w-[50%]">
                <Steps />
                <div className="col-span-3 col-start-2 mx-auto flex w-full flex-col items-start px-28 py-4">
                    <Routes>
                        <Route path="/" element={<PersonalInfoPage />} />
                        <Route
                            path="/select-plan"
                            element={<SelectPlanPage />}
                        />
                        <Route path="/add-ons" element={<PickAddOnsPage />} />
                        <Route path="/summary" element={<SummaryPage />} />
                        <Route path="/thank-you" element={<ThankYou />} />
                    </Routes>
                    {showFormNavButtons && (
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
    );
};

export default MultiStepForm;
