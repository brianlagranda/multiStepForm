import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import PersonalInfoPage from './pages/PersonalInfoPage';
import SelectPlanPage from './pages/SelectPlanPage';
import Steps from './components/Steps';
import FormNavButtons from './components/FormNavButtons/FormNavButtons';

const MultiStepForm: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const paths = ['/', '/select-plan', '/add-ons', '/summary'];
    const currentPathIndex = paths.indexOf(location.pathname);

    const handleBack = () => {
        if (currentPathIndex > 0) {
            navigate(paths[currentPathIndex - 1]);
        }
    };

    const handleForward = () => {
        const formId =
            location.pathname === '/'
                ? 'personal-info-form'
                : 'select-plan-form';
        const form = document.getElementById(formId);
        if (form) {
            form.dispatchEvent(
                new Event('submit', { cancelable: true, bubbles: true })
            );
        }
    };

    const showBackButton = currentPathIndex > 0;

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="mx-auto grid h-[600px] w-3/4 max-w-[65%] grid-cols-[2fr_2fr_2fr_1fr] rounded-xl bg-neutral-white p-4 shadow-xl lg:max-w-[50%]">
                <Steps />
                <div className="col-span-3 col-start-2 mx-auto flex flex-col items-start p-4">
                    <Routes>
                        <Route path="/" element={<PersonalInfoPage />} />
                        <Route
                            path="/select-plan"
                            element={<SelectPlanPage />}
                        />
                    </Routes>
                    <FormNavButtons
                        onBack={handleBack}
                        onForward={handleForward}
                        showBackButton={showBackButton}
                    />
                </div>
            </div>
        </div>
    );
};

export default MultiStepForm;
