import {
    FieldError,
    UseFormRegister,
    Path,
    FieldValues,
} from 'react-hook-form';

interface InputProps<T extends FieldValues> {
    label: string;
    name: Path<T>;
    placeholder?: string;
    type?: string;
    register: UseFormRegister<T>;
    required?: boolean;
    pattern?: {
        value: RegExp;
        message: string;
    };
    error?: FieldError;
    requiredMessage?: string;
}

const Input = <T extends FieldValues>({
    label,
    name,
    placeholder,
    type = 'text',
    register,
    required = false,
    pattern,
    error,
    requiredMessage = 'This field is required',
}: InputProps<T>) => (
    <div className="mb-6 w-full">
        <div className="flex h-6 justify-between pb-1.5">
            <label className="flex text-sm font-medium">{label}</label>
            {error && (
                <span className="text-[14px] font-bold text-primary-strawberry-red">
                    {error.message || requiredMessage}
                </span>
            )}
        </div>
        <input
            type={type}
            className={`w-full cursor-pointer appearance-none rounded-lg border px-4 py-2.5 text-lg font-medium text-primary-marine-blue placeholder:text-base placeholder:text-neutral-cool-gray/70 focus:outline-none ${
                error
                    ? 'border-primary-strawberry-red focus:border-primary-strawberry-red'
                    : 'border-gray-300 focus:border-primary-purplish-blue'
            }`}
            placeholder={placeholder}
            {...register(name, { required, pattern })}
        />
    </div>
);

export default Input;
