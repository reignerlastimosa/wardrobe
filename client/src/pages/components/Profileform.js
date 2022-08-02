const Profileform = () =>{
    return (
        <div className="profileform">
             
           <h2>Account</h2>
           <button className="edit-profile"> Edit </button>
           <form>
            
            <div className="profileLabel">   
            <label>Fullname</label>
            <label>Username</label>
            <label>Password</label>
            <label>Contact No.</label>
            <label>Address</label>
            </div>

            <div className="profileInput">
            <input type="text"/>
            <input type="text"/>
            <input type="password"/>
            <input type="tel"/>
            <input type="text"/>

            </div>
            
           
            
           </form>
        </div>
    );
};

export default Profileform;