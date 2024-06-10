import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PersonalInfoPage from './pages/PersonalInfoPage';
import SelectPlanPage from './pages/SelectPlanPage';
import Steps from './components/Steps';

function MultiStepForm() {
    return (
        <Router>
            <div className="flex h-screen items-center justify-center">
                <div className="mx-auto grid h-[600px] w-3/4 max-w-[65%] grid-cols-[2fr_2fr_2fr_1fr] rounded-xl bg-neutral-white p-4 shadow-xl lg:max-w-[50%]">
                    <Steps />
                    <Routes>
                        <Route path="/" element={<PersonalInfoPage />} />
                        <Route
                            path="/select-plan"
                            element={<SelectPlanPage />}
                        />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default MultiStepForm;
