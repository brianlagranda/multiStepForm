import { useForm, SubmitHandler } from 'react-hook-form';
import { Inputs } from '../types/personalInfoType';

const PersonalInfo = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    console.log(watch('example'));

    return (
        <div className=' bg-red-200 w-full h-full'>
            <h1>Personal Info</h1>
            <p>Please provide your name, email address, and phone number.</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue='test' {...register('example')} />

                <input {...register('exampleRequired', { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}

                <input type='submit' />
            </form>
        </div>
    );
};

export default PersonalInfo;
