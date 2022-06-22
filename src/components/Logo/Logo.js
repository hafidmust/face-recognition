import Tilt from "react-tilt"
import face from './face.png'
const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 250, width: 250 }} >
            <div className="Tilt-inner pa3"> 
            <img src={face} alt="logo" width={150} />
             </div>
        </Tilt>
        </div>
        
    )
}

export default Logo;