const LinkIconPrimary = ({text, children}) => {
    return (
        <a className="text-white bg-primary border inline-flex focus:outline-none hover:text-gray-400 focus:ring-4 focus:ring-gray-100 font-bold rounded-full text-sm px-5 py-4 m-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-gray-800 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            {text}
            {children}
        </a>
    );
}

const LinkIconSecondary = ({text, children}) => {
    return (
        <a className="text-gray-900 bg-white border border-gray-900 inline-flex focus:outline-none hover:text-gray-500 focus:ring-4 focus:ring-gray-100 font-bold rounded-full text-sm px-5 py-4 m-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-gray-800 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            {text}
            {children}
        </a>
    );
}

export {LinkIconPrimary, LinkIconSecondary};