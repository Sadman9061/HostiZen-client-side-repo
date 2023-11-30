
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center py-28">
            <h3 className="text-4xl uppercase border-y-4 py-4">{heading}</h3>
            <p className="text-yellow-600 mt-4">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;