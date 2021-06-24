import axios from 'axios';
import { useContext, useEffect } from 'react';

// Context
import { ServerContext } from '../../App';
import { AlertToggle } from '../../router/MainRouter';

const ProductExpires = () => {

    //Context
    const server = useContext(ServerContext);
    const alert = useContext(AlertToggle);

    const event = {
        getData : async function() {
            await axios({
                method : 'GET',
                url : `${server}/product/get/expires`,
                withCredentials : true,
                timeout: 3500
            }).then(response => {

            }).catch(err => {

            });
        }, // getData()
    }

    useEffect(() => {
        event.getData();
    }, [])

    return (
        <div>asdf</div>
    )
}

export default ProductExpires;