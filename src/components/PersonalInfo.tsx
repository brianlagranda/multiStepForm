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
        <div className="mx-auto grid h-full w-3/4 grid-cols-4 rounded-lg bg-neutral-white p-4">
            <aside className="col-start-1 w-full rounded-lg bg-primary-light-blue p-4">
                Step
                <p className="text-black">1</p>
                <p className="text-black">2</p>
                <p className="text-black">3</p>
                <p className="text-black">4</p>
            </aside>

            <div className="col-span-3 col-start-2 mx-auto flex flex-col items-start p-4">
                <div className="my-4 flex flex-col items-start">
                    <h1 className="text-3xl font-bold">Personal info</h1>
                    <p className="">
                        Please provide your name, email address, and phone
                        number.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex w-full flex-col"
                >
                    <label className="flex text-sm">Name</label>
                    {errors.name && (
                        <span className="font-bold text-primary-strawberry-red">
                            This field is required
                        </span>
                    )}
                    <input
                        className="mb-4 w-full appearance-none rounded-lg border bg-white p-2.5 text-sm focus:border-primary-purplish-blue focus:bg-white focus:outline-none focus-visible:border-primary-purplish-blue"
                        defaultValue={''}
                        placeholder="e.g. Stephen King"
                        {...register('name', {
                            required: true,
                            pattern: /^[A-Za-z]+$/i,
                        })}
                    />

                    <label className="flex text-sm">Email Address</label>
                    {errors.email && (
                        <span className="font-bold text-primary-strawberry-red">
                            This field is required
                        </span>
                    )}
                    <input
                        className="mb-4 w-full appearance-none rounded-lg border bg-white p-2.5 text-sm focus:border-primary-purplish-blue focus:bg-white focus:outline-none focus-visible:border-primary-purplish-blue"
                        defaultValue={''}
                        placeholder="e.g. stephenking@lorem.com"
                        {...register('email', { required: true })}
                    />

                    <label className="flex text-sm">Phone Number</label>
                    {errors.phone && (
                        <span className="font-bold text-primary-strawberry-red">
                            This field is required
                        </span>
                    )}
                    <input
                        className="mb-4 w-full appearance-none rounded-lg border bg-white p-2.5 text-sm focus:border-primary-purplish-blue focus:bg-white focus:outline-none focus-visible:border-primary-purplish-blue"
                        defaultValue={''}
                        placeholder="e.g. +1 234 567 890"
                        {...register('phone')}
                    />

                    <input
                        type="submit"
                        className="h-10 w-1/4 rounded-lg bg-primary-marine-blue hover:bg-primary-pastel-blue"
                        name="Next Step"
                    />
                </form>
            </div>
        </div>
    );
};

export default PersonalInfo;
