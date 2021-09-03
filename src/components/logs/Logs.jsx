import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";
import {getLogs} from "../../actions/logActions";

const Logs = () => {
    const logs = useSelector((state)=> state.log.logs);
    const loading = useSelector((state) => state.log.loading);
    const dispatch = useDispatch();

    useEffect(()=>{
       dispatch(getLogs());
    },[]);


    if (loading || logs === null) {
        return <Preloader />;
    }

    return (
        <ul className='collection with-header'>
            <li className='collection-header'>
                <h4 className='center'>System Logs</h4>
            </li>
            {!loading && logs.length === 0 ? (
                <p className='center'>No logs to show...</p>
            ) : (
                logs.map(log => <LogItem log={log} key={log.id} />)
            )}
        </ul>
    );
};



export default Logs;
