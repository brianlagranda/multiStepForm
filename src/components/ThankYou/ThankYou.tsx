import thankYouImg from '../../assets/images/icon-thank-you.svg';

const ThankYou: React.FC = () => {
    return (
        <>
            <div className="flex h-full w-full flex-col items-center justify-center gap-2.5 py-16 text-center md:py-0">
                <img
                    src={thankYouImg}
                    alt="Icon Thank you"
                    className="h-14 md:h-20"
                />
                <h1 className="mt-4">Thank you!</h1>
                <p>
                    Thanks for confirming your subscription! We hope you have
                    fun using our platform. If you ever need support, please
                    feel free to email us at support@loregaming.com.
                </p>
            </div>
        </>
    );
};

export default ThankYou;
