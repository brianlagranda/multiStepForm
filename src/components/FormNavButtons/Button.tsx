interface ButtonProps {
    label: string;
    onClick: () => void;
    variant: 'forward' | 'backward';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant }) => {
    const baseStyles = 'h-12 cursor-pointer rounded-lg';

    const forwardStyles =
        'bg-primary-marine-blue px-6 text-white hover:bg-primary-marine-blue/85';
    const backwardStyles =
        'text-neutral-cool-gray/70 hover:text-primary-marine-blue font-medium';

    const styles = variant === 'forward' ? forwardStyles : backwardStyles;

    return (
        <button onClick={onClick} className={`${baseStyles} ${styles}`}>
            {label}
        </button>
    );
};

export default Button;
