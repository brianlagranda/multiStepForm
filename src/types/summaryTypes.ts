interface AddOn {
    label: string;
    price: number;
}

export interface SummaryProps {
    onSubmit: (event: React.FormEvent) => void;
    onClick: (event: React.FormEvent) => void;
    planType: string;
    planPrice: number;
    isYearly: boolean;
    addOns: AddOn[];
}
