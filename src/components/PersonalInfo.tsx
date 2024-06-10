import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { Inputs } from '../types/personalInfoTypes';
import Input from './Input';

interface PersonalInfoProps {
    onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
    errors: FieldErrors<Inputs>;
    register: UseFormRegister<Inputs>;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({
    onSubmit,
    errors,
    register,
}) => {
    return (
        <>
            <div className="col-span-3 col-start-2 mx-auto flex flex-col items-start p-4">
                <div className="my-4 flex flex-col items-start">
                    <h1 className="py-2 text-3xl font-bold">Personal info</h1>
                    <p className="mb-4">
                        Please provide your name, email address, and phone
                        number.
                    </p>
                </div>
                <form onSubmit={onSubmit} className="flex w-full flex-col">
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
                            className="h-12 w-1/4 cursor-pointer rounded-lg bg-primary-marine-blue text-white hover:bg-primary-marine-blue/85"
                            value="Next Step"
                        />
                    </div>
                </form>
            </div>
        </>
    );
};

export default PersonalInfo;
