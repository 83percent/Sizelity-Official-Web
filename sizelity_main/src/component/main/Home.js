import { useContext } from 'react';
import { UserContext } from '../../App';
import CardProfile from './card/CardProfile';

const Main = () => {
    // Context
    const {user} = useContext(UserContext);    
    return (
        <article id="home">
            <div id="side-tap" className="en">
                <h1>Overview</h1>
                <div className="card-wrapper">
                    <div className="profile-wrapper">
                        <h2>Profile</h2>
                        <CardProfile 
                            sname={user.sname}/>
                    </div>
                    <div>
                        <h2>Product</h2>
                    </div>
                </div>
            </div>
            <div className="main-tap">

            </div>
        </article>
    )
}

export default Main;