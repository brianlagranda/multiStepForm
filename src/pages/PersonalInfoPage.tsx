import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Inputs } from '../types/personalInfoTypes';
import { updatePersonalInfo } from '../features/form/formSlice';
import PersonalInfo from '../components/PersonalInfo';

const PersonalInfoPage: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        dispatch(updatePersonalInfo(data));
        navigate('/select-plan');
    };

    return (
        <PersonalInfo
            onSubmit={handleSubmit(onSubmit)}
            errors={errors}
            register={register}
        />
    );
};

export default PersonalInfoPage;
