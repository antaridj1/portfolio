const LinkIconPrimary = ({text, href, className, children}) => {
    return (
        <a href={href} className={`${className} text-normal w-full md:w-40 inline-flex justify-center text-white bg-primary border hover:text-gray-400 font-bold rounded-full text-sm px-5 py-7 md:p-4 my-2 md:mx-1`}>
            {text}
            {children}
        </a>
    );
}

const LinkIconSecondary = ({text, href, children}) => {
    return (
        <a href={href} className="text-normal w-full md:w-40 inline-flex justify-center text-gray-900 bg-transparent border border-gray-900 hover:text-gray-500 font-bold rounded-full text-sm px-5 py-7 my-2 md:p-4 md:mx-1">
            {text}
            {children}
        </a>
    );
}

export {LinkIconPrimary, LinkIconSecondary};