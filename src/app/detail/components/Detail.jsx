import {Text, TitleMedium} from "@/app/components/Typography";

export default function Detail({title, children}) {
    return (
        <div className="md:flex mb-10 md:mb-10">
            <div className="md:flex-1 mb-5 flex items-start">
                <TitleMedium text={title} />
            </div>
            <div className="md:flex-1 flex items-center">
                <Text>
                    {children}
                </Text>
            </div>
        </div>
    );
}