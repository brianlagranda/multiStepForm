interface AddOnsCardProps {
    name: string;
    checked: boolean;
    label: string;
    description: string;
    price: number;
    period: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddOnsCard: React.FC<AddOnsCardProps> = ({
    name,
    checked,
    label,
    description,
    price,
    period,
    onChange,
}) => {
    return (
        <label
            className={`flex h-16 w-full cursor-pointer items-center justify-between rounded-lg border p-4 hover:border-primary-purplish-blue md:h-full ${checked ? 'border-primary-purplish-blue bg-primary-purplish-blue/5' : ''}`}
        >
            <input
                type="checkbox"
                name={name}
                checked={checked}
                onChange={onChange}
                className="h-4 w-4 cursor-pointer accent-primary-purplish-blue md:m-2"
            />
            <div className=" ml-0 flex w-full items-center justify-between md:ml-2">
                <div>
                    <span className="md:text-md ml-2 text-sm font-bold">
                        {label}
                    </span>
                    <p className="ml-2 text-xs text-neutral-cool-gray md:text-sm">
                        {description}
                    </p>
                </div>
                <div>
                    <span className="text-xs font-bold text-primary-purplish-blue/65 md:text-sm">
                        +${price}/{period}
                    </span>
                </div>
            </div>
        </label>
    );
};

export default AddOnsCard;
