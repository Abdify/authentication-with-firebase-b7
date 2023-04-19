const Color = ({ update, hexCode, index }) => {
    let style = {
        backgroundColor: hexCode,
    };
    return (
        <div className="color" onClick={() => update(index)} style={style}>
            <p className="color__code">{hexCode}</p>
        </div>
    );
};

export default Color;