import Shoes from './images/shoes.jpg';
import Watch from './images/watch.jpg';
import Woman from './images/woman.jpg';
import Man from './images/man.jpg';



const Homegrid = () =>{
    return (
        <div className="homegrid">
            <div class="grid-1"> <img src={Shoes} height="100%" width="100%"/></div>
            <div class="grid-2"><img src={Watch} height="100%" width="100%"/> </div>
            <div class="grid-3"> <img src={Woman} height="100%" width="100%"/></div>
            <div class="grid-4"><img src={Man} height="100%" width="100%"/> </div>
        </div>
    );
};

export default Homegrid;