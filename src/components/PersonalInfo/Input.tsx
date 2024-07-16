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
    <div className="mb-4 w-full px-2 md:mb-6">
        <div className="flex h-5 justify-between pb-0 md:h-6 md:pb-1.5">
            <label className="flex text-[0.8rem] font-medium md:text-sm">
                {label}
            </label>
            {error && (
                <span className="text-[14px] font-bold text-primary-strawberry-red">
                    {error.message || requiredMessage}
                </span>
            )}
        </div>
        <input
            type={type}
            className={`h-10 w-full cursor-pointer appearance-none rounded border px-4 py-2.5 text-lg font-medium text-primary-marine-blue placeholder:text-base placeholder:text-neutral-cool-gray/70 focus:outline-none md:h-12 md:rounded-lg ${
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
