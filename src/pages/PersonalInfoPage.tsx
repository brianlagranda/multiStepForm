import React from 'react';
import PersonalInfo from '../components/PersonalInfo/PersonalInfo';
import { usePersonalInfoForm } from '../hooks/usePersonalInfoForm';

const PersonalInfoPage: React.FC = () => {
    const { register, handleSubmit, errors, onSubmit } = usePersonalInfoForm();

    return (
        <PersonalInfo
            onSubmit={handleSubmit(onSubmit)}
            errors={errors}
            register={register}
        />
    );
};

export default PersonalInfoPage;
