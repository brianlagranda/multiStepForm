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
    const handleClick = () => {
        const event = {
            target: {
                name,
                checked: !checked,
            },
        } as unknown as React.ChangeEvent<HTMLInputElement>;
        onChange(event);
    };

    return (
        <div
            onClick={handleClick}
            className={`flex w-full cursor-pointer items-center rounded-lg border p-4 ${checked ? 'border-primary-purplish-blue bg-primary-purplish-blue/5' : ''}`}
        >
            <input
                type="checkbox"
                name={name}
                checked={checked}
                onChange={onChange}
                className="cursor-pointer"
            />
            <div className="flex justify-between">
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
        </div>
    );
};

export default AddOnsCard;
