export type PlanSubscription = 'Monthly' | 'Yearly';

export type PlanType = 'Arcade' | 'Advanced' | 'Pro';

export type Inputs = {
    plan: PlanType;
    planSubs: PlanSubscription;
};
