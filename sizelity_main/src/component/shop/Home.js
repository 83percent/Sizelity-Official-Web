import { useContext, useState } from 'react';
import { ServerContext, UserContext } from '../../App';

// Component
import CardProfile from './card/CardProfile';
import CardProduct from './card/CardProduct';
import CardAD from './card/CardAD';
import CardEvent from './card/CardEvent';

const Main = () => {

    // State
    const [productNum, setProductNum] = useState(0);
    const [requestNum, setRequestNum] = useState(0);
    const [ADs, setADs] = useState([]);
    const [events, setEvents] = useState([]);

    // Context
    const {user} = useContext(UserContext);
    const server = useContext(ServerContext);
    console.log(user);
    console.log(server);
    return (
        <article id="home">
            <div id="side-tap" className="en">
                <h1 className="ko">대시보드</h1>
                <div className="card-wrapper">
                    <div className="profile-wrapper">
                        <h2>Profile</h2>
                        <CardProfile 
                            sname={user.sname}/>
                    </div>
                    <div>
                        <h2>Product</h2>
                        <CardProduct 
                            productNum={productNum}
                            requestNum={requestNum} />
                    </div>
                    <div>
                        <h2>AD</h2>
                        <CardAD
                            ADs={ADs} />
                    </div>
                    <div>
                        <h2>Event</h2>
                        <CardEvent
                            events={events} />
                    </div>
                </div>
            </div>
            <div className="main-tap">

            </div>
        </article>
    )
}

export default Main;