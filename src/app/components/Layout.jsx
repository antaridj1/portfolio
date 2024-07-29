const Section = ({ children, ...props }) => {
    return (
        <section className="h-screen container-xl px-5 md:px-10" {...props}>
            {children}
        </section>
    );
};

const SectionDetail = ({ children, ...props }) => {
    return (
        <section className="container-xl px-5 md:px-10" {...props}>
            {children}
        </section>
    );
};

export {Section, SectionDetail};
