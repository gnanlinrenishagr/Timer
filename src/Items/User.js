import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

function Users() {

    let [timer, setTimer] = useState(0)
    let [isstart, setStart] = useState(true)
    useEffect(() => {
        if (isstart) { setTimer(timer + 1) }
    }, [timer, isstart])
    
    
    return (
        <div className="App">
            <p style={{ marginTop: '300px' }}>Timer</p>
            <code style={{fontSize:'30px'}}><b>{timer}</b></code>
            <br></br>
            <button onClick={() => setStart(!isstart)}>{isstart ? "Stop" : "Start"}</button> {        }
            <button onClick={async () => { await setStart(false); setTimer(0) }}>Reset</button>
           
            
        </div>
    );
}

export default Users;

