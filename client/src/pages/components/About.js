import Passion from './images/passion.jpg';
import Art from './images/art.jpg'

const About = () =>{
    return (
        <div className="about">
            <div className ="about-1">
            <h1>ABOUT US</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div className="about-2">
            <img src={Passion} height="100%" width="100%"/> 
            </div>

            <div className ="about-3">
            <img src={Art} height="100%" width="100%"/> 
            </div>

            <div className ="about-4">
            <h1>WHO WE ARE</h1>
            <p>Sollicitudin nibh sit amet commodo nulla facilisi nullam. Sed risus ultricies tristique nulla. Est velit egestas dui id ornare. Ut etiam sit amet nisl. Tortor at risus viverra adipiscing at in. Orci a scelerisque purus semper eget. Pharetra convallis posuere morbi leo urna. Molestie at elementum eu facilisis sed odio morbi quis. Tortor posuere ac ut consequat semper. Congue nisi vitae suscipit tellus. Neque egestas congue quisque egestas. Eros in cursus turpis massa tincidunt dui ut.  </p>
            </div>

        </div>
    );
};

export default About;