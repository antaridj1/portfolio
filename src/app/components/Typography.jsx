const DoubleColorTitle = ({blackText, grayText, isSaparate = false}) => {
    return (
        <h1 className="text-6xl font-bold p-2 text-center leading-1 md:text-left md:leading-tight md:text-title-xl my-8 max-w-5xl">
            <span className="text-default-black">{blackText}</span>
            {isSaparate && <br></br>}
            <span className="text-default-grey"> {grayText}</span>
        </h1>
    );
}

const Title = ({text}) => {
    return (
        <h1 className="text-title-xl text-default-black text-center md:text-left mb-10">
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
        <h2 className="text-title-sm text-center md:text-left">
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

const Text = ({children}) => {
    return (
        <p className="mb-3">
            {children}
        </p>
    );
}

export {DoubleColorTitle, Title, TitleMedium, DoubleColorSubtitle, Subtitle, Text};