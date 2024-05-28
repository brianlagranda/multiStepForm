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

    console.log(watch('name'));

    return (
        <div className=' bg-neutral-white w-full h-full rounded-lg grid grid-cols-2 p-4'>
            <aside className='col-start-1 w-1/3 bg-primary-light-blue rounded-lg'>
                Step
                <p className='text-black'>1</p>
                <p className='text-black'>2</p>
                <p className='text-black'>3</p>
                <p className='text-black'>4</p>
            </aside>

            <div className='col-start-2'>
                <h1>Personal Info</h1>
                <p>
                    Please provide your name, email address, and phone number.
                </p>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='flex flex-col'
                >
                    <input
                        defaultValue={''}
                        placeholder='e.g. Stephen King'
                        {...register('name', { required: true })}
                    />
                    {errors.name && (
                        <span className='text-primary-strawberry-red font-bold'>
                            This field is required
                        </span>
                    )}

                    <input
                        defaultValue={''}
                        placeholder='e.g. stephenking@lorem.com'
                        {...register('email', { required: true })}
                    />
                    {errors.email && (
                        <span className='text-primary-strawberry-red font-bold'>
                            This field is required
                        </span>
                    )}

                    <input
                        defaultValue={''}
                        placeholder='e.g. +1 234 567 890'
                        {...register('phone')}
                    />

                    <input
                        type='submit'
                        className='w-1/4 h-10 rounded-lg bg-primary-marine-blue hover:bg-primary-pastel-blue'
                        name='Next Step'
                    />
                </form>
            </div>
        </div>
    );
};

export default PersonalInfo;
