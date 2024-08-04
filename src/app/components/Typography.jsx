const DoubleColorTitle = ({blackText, grayText, isSaparate = false}) => {
    return (
        <h1 className="text-5xl tracking-tighter animate-fade-right animate-once font-bold text-center leading-[58px] md:text-left md:leading-tight md:text-title-xl max-w-5xl mb-10">
            <span className="text-default-black">{blackText}</span>
            {isSaparate && <br></br>}
            <span className="text-default-grey"> {grayText}</span>
        </h1>
    );
}

const DoubleColorFooter = ({blackText, grayText, isSaparate = false}) => {
    return (
        <h1 className="text-5xl font-bold p-2 text-center leading-1 md:text-left md:leading-tight md:text-8xl max-w-5xl">
            <span className="text-default-black">{blackText}</span>
            {isSaparate && <br></br>}
            <span className="text-default-grey"> {grayText}</span>
        </h1>
    );
}

const Title = ({text}) => {
    return (
        <h1 className="text-5xl tracking-tighter animate-fade-right animate-once font-bold text-center leading-[58px] md:text-left md:leading-tight md:text-title-xl max-w-5xl mb-10">
            {text}
        </h1>
    );
}

const TitleMedium = ({text}) => {
    return (
        <h1 className="text-title-md text-default-black text-left md:text-left">
            {text}
        </h1>
    );
}

const DoubleColorSubtitle = ({blackText, grayText, isSaparate = false}) => {
    return (
        <h2 className="text-title-sm text-center md:text-left mb-10">
            <span className="text-default-black">{blackText}</span>
            {isSaparate && <br></br>}
            <span className="text-default-grey">{grayText}</span>
        </h2>
    );
}

const Subtitle = ({children}) => {
    return (
        <h2 className="text-[20px] leading-6 md:leading-tight md:text-title-sm my-8 max-w-5xl text-center md:text-left">
            {children}
        </h2>
    );
}

const SubtitleBold = ({children}) => {
    return (
        <h2 className="text-[20px] text-center font-bold leading-6 md:leading-tight md:text-title-sm my-4 max-w-5xl text-center md:text-left">
            {children}
        </h2>
    );
}

const Text = ({children}) => {
    return (
        <p className="mb-3">
            {children}
        </p>
    );
}

const TextExtraSmall = ({children}) => {
    return (
        <p className="mb-3 text-[12px]">
            {children}
        </p>
    );
}

export {DoubleColorTitle, DoubleColorFooter, Title, TitleMedium, DoubleColorSubtitle, Subtitle, SubtitleBold, Text, TextExtraSmall};