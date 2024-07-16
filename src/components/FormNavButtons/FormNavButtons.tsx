import Button from './Button';

interface FormNavButtonsProps {
    onBack: () => void;
    onForward: () => void;
    showBackButton: boolean;
    currentPath: string;
}

const FormNavButtons: React.FC<FormNavButtonsProps> = ({
    onBack,
    onForward,
    showBackButton,
    currentPath,
}) => {
    return (
        <div
            className={`mt-auto flex w-full p-4 md:col-span-3 md:col-start-2 md:row-start-3 md:items-end md:p-0 ${showBackButton ? 'justify-between' : 'justify-end'}`}
        >
            {showBackButton && (
                <Button label="Go Back" onClick={onBack} variant="backward" />
            )}
            <Button
                label={`${currentPath === 'summary' ? 'Confirm' : 'Next Step'}`}
                onClick={onForward}
                variant="forward"
            />
        </div>
    );
};

export default FormNavButtons;
