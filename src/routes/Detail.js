import { useEffect } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';


function Detail (){
    const location = useLocation();
    const history = useNavigate();

    useEffect(()=>{
        if(location.state === null){
            history('/');
            console.log("test");
        }
    }, []);

    return (
        <>
        {location.state?
        <span>{location.state.title}</span>
        :
        console.log("null")
        }
        </>
        
    )
}

export default Detail;