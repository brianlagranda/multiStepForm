export interface FormState {
    personalInfo: {
        name: string;
        email: string;
        phone: string;
    };
    selectPlan: {
        planType: 'Arcade' | 'Advanced' | 'Pro';
        planSubs: 'Monthly' | 'Yearly';
    };
    addOns: {
        onlineService: boolean;
        largerStorage: boolean;
        customizableProfile: boolean;
    };
}

export const initialState: FormState = {
    personalInfo: {
        name: '',
        email: '',
        phone: '',
    },
    selectPlan: {
        planType: 'Arcade',
        planSubs: 'Monthly',
    },
    addOns: {
        onlineService: false,
        largerStorage: false,
        customizableProfile: false,
    },
};
