import './Ship.css'

const Ship = () => {

    const generateCargo = (number) => {
        const cargo = []
        for (let i = 0; i < number; i++) {
            cargo.push(<div key={"c-" + i} className="cargo-item"></div>)
        }
        return cargo
    }

    return <div className="content">
        <div className="sea">
            <div className="boat-container">
                <div className="cargo">
                    {generateCargo(80)}
                </div>
                <div className="boat">
                    <div className="boat-left"></div>
                    <div className="boat-middle"></div>
                    <div className="boat-right"></div>
                </div>
            </div>
            <div className="sea-image"></div>
        </div>
    </div>
}

export default Ship