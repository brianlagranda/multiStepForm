import { useForm, SubmitHandler } from 'react-hook-form';
import { Inputs } from '../types/personalInfoType';
import Input from './Input.tsx';
import Steps from './Steps.tsx';

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
        <div className="flex h-screen items-center justify-center">
            <div className="mx-auto grid w-3/4 max-w-[65%] grid-cols-[2fr_2fr_2fr_1fr] rounded-xl bg-neutral-white p-4 shadow-lg lg:max-w-[50%]">
                <Steps />

                <div className="col-span-3 col-start-2 mx-auto flex flex-col items-start p-4">
                    <div className="my-4 flex flex-col items-start">
                        <h1 className="py-2 text-3xl font-bold">
                            Personal info
                        </h1>
                        <p className="mb-4">
                            Please provide your name, email address, and phone
                            number.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex w-full flex-col"
                    >
                        <Input
                            label="Name"
                            name="name"
                            placeholder="e.g. Stephen King"
                            register={register}
                            required={true}
                            pattern={/^[A-Za-z]+$/i}
                            error={errors.name}
                        />

                        <Input
                            label="Email Address"
                            name="email"
                            placeholder="e.g. stephenking@lorem.com"
                            type="email"
                            register={register}
                            required={true}
                            error={errors.email}
                        />

                        <Input
                            label="Phone Number"
                            name="phone"
                            placeholder="e.g. +1 234 567 890"
                            type="tel"
                            register={register}
                            required={true}
                            error={errors.phone}
                        />

                        <div className="mt-24 flex w-full justify-end">
                            <input
                                type="submit"
                                className=" h-12 w-1/4 rounded-lg bg-primary-marine-blue text-white hover:bg-primary-marine-blue/85"
                                value="Next Step"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;
