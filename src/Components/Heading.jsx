

const Heading = ({ tittle, subtittle }) => {
    return (
        <div className="text-white">
            <h1 className="text-4xl font-bold">{tittle}</h1>
            <p className="py-6">{subtittle}</p>
        </div>

    );
};

export default Heading;