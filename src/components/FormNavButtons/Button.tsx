interface ButtonProps {
    label: string;
    onClick: () => void;
    variant: 'forward' | 'backward';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant }) => {
    const baseStyles =
        'h-10 md:h-12 cursor-pointer rounded md:rounded-lg text-sm md:text-md';

    const forwardStyles =
        'bg-primary-marine-blue md:px-6 px-4 text-white hover:bg-primary-marine-blue/85';
    const backwardStyles =
        'text-neutral-cool-gray/70 hover:text-primary-marine-blue font-bold md:font-medium';

    const styles = variant === 'forward' ? forwardStyles : backwardStyles;

    return (
        <button onClick={onClick} className={`${baseStyles} ${styles}`}>
            {label}
        </button>
    );
};

export default Button;
