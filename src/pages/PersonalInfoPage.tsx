import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { InputsTypes } from '../types/personalInfoTypes';
import { updatePersonalInfo } from '../features/form/formSlice';
import PersonalInfo from '../components/PersonalInfo/PersonalInfo';
import { RootState } from '../store/store';

const PersonalInfoPage: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const personalInfo = useSelector(
        (state: RootState) => state.form.personalInfo
    );

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InputsTypes>({
        defaultValues: personalInfo,
        mode: 'onSubmit',
        reValidateMode: 'onChange',
    });

    const onSubmit: SubmitHandler<InputsTypes> = (data) => {
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
