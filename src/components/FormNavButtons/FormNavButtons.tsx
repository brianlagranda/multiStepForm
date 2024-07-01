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
            className={`col-span-3 col-start-2 flex h-full w-full items-end ${showBackButton ? 'justify-between' : 'justify-end'}`}
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
