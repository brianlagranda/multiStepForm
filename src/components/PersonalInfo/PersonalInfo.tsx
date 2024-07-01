import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { InputsTypes } from '../../types/personalInfoTypes';
import Input from './Input';

interface PersonalInfoProps {
    onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
    errors: FieldErrors<InputsTypes>;
    register: UseFormRegister<InputsTypes>;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({
    onSubmit,
    errors,
    register,
}) => {
    return (
        <>
            <div className="my-3.5 flex flex-col items-start">
                <h1 className="py-2 text-3xl font-bold">Personal info</h1>
                <p className="mb-4">
                    Please provide your name, email address, and phone number.
                </p>
            </div>
            <form
                id="personal-info-form"
                onSubmit={onSubmit}
                className="mt-1 flex w-full flex-col"
            >
                <Input
                    label="Name"
                    name="name"
                    placeholder="e.g. Stephen King"
                    register={register}
                    required={true}
                    requiredMessage="This field is required"
                    pattern={{
                        value: /^[A-Za-z\s]+$/i,
                        message: 'Name can only contain letters and spaces',
                    }}
                    error={errors.name}
                />
                <Input
                    label="Email Address"
                    name="email"
                    placeholder="e.g. stephenking@lorem.com"
                    type="email"
                    register={register}
                    required={true}
                    requiredMessage="This field is required"
                    pattern={{
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Please enter a valid email address',
                    }}
                    error={errors.email}
                />
                <Input
                    label="Phone Number"
                    name="phone"
                    placeholder="e.g. +1 234 567 890"
                    type="tel"
                    register={register}
                    required={true}
                    requiredMessage="This field is required"
                    pattern={{
                        value: /^[+]?[0-9\s\-()]{10,}$/,
                        message: 'Please enter a valid phone number',
                    }}
                    error={errors.phone}
                />
            </form>
        </>
    );
};

export default PersonalInfo;
