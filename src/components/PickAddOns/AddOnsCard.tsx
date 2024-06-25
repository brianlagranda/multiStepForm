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
            className={`flex w-full cursor-pointer items-center justify-between rounded-lg border p-4 hover:border-primary-purplish-blue ${checked ? 'border-primary-purplish-blue bg-primary-purplish-blue/5' : ''}`}
        >
            <input
                type="checkbox"
                name={name}
                checked={checked}
                onChange={onChange}
                className="m-2 h-4 w-4 cursor-pointer accent-primary-purplish-blue"
            />
            <div className="ml-2 flex w-full items-center justify-between">
                <div>
                    <span className="ml-2 font-bold">{label}</span>
                    <p className="ml-2 text-sm text-neutral-cool-gray">
                        {description}
                    </p>
                </div>
                <div>
                    <span className="text-sm font-bold text-primary-purplish-blue/65">
                        +${price}/{period}
                    </span>
                </div>
            </div>
        </label>
    );
};

export default AddOnsCard;
