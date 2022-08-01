import Women from "./images/women.jpg"
import Accessories from "./images/accessories.jpg"
import Men from "./images/men.jpg"


const Homeflex = () =>{
    return (
        <div className="homeflex">
            <div>
            <img src={Women} height="100%" width="100%"/>
            <button>WOMEN'S</button>
            </div>

            <div>
            <img src={Accessories} height="100%" width="100%" />
            <button>ACCESSORIES'S</button>
            </div>

            <div>
            <img src={Men} height="100%" width="100%" />
            <button>MEN'S</button>
            </div>
        </div>
    );
};

export default Homeflex;