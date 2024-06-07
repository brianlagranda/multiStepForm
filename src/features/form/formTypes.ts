export interface FormState {
    personalInfo: {
        name: string;
        email: string;
        phone: string;
    };
    selectPlan: {
        plan: string;
        planSubs: 'Monthly' | 'Yearly';
    };
}

export const initialState: FormState = {
    personalInfo: {
        name: '',
        email: '',
        phone: '',
    },
    selectPlan: {
        plan: '',
        planSubs: 'Monthly',
    },
};
