const Section = ({ className, id, children }) => {
    return (
        <section className={`container-2xl p-5 md:p-10 ${className}`} id={id}>
            {children}
        </section>
    );
};

const SectionDetail = ({ children, ...props }) => {
    return (
        <section className="container-2xl px-5 md:px-10" {...props}>
            {children}
        </section>
    );
};

export {Section, SectionDetail};
