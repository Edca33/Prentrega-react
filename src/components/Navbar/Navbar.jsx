import './navBarStyled.css';
import Cartwidget from '../CartWidget/Cartwidget';

function Navbar() {
    return (
        <div className="navBar">
            
            <h1>Games.Com</h1>
            <button>Ps5</button>
            <button>Xbox s/x</button>
            <button>PC</button>
            <button>Accesorios</button>
            <Cartwidget number={36}/>
        </div>
    )
}

export default Navbar;