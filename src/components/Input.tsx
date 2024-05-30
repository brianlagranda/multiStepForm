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
    pattern?: RegExp;
    error?: FieldError;
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
}: InputProps<T>) => (
    <div className="mb-4 w-full">
        <div className="mb-1 flex justify-between">
            <label className="flex text-sm font-medium">{label}</label>
            {error && (
                <span className="font-bold text-primary-strawberry-red">
                    This field is required
                </span>
            )}
        </div>
        <input
            type={type}
            className={`w-full appearance-none rounded-lg border px-2.5 py-2 text-lg font-medium text-primary-marine-blue focus:outline-none ${
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
