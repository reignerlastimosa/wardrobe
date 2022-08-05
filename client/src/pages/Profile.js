import Header from './components/Header';
import Nav from './components/Nav';
import Avatar from './components/Avatar';
import Profileform from './components/Profileform';
import Footer from './components/Footer';

import './Profile.css';

const Profile = () =>{
    return (
        <div className="profile">
            <Header/>
            <Nav/>
            <Avatar />
            <Profileform />
            <Footer/>
        </div>
    );
};

export default Profile;