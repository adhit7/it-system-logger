import React, {useEffect, useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min';
import {useDispatch, useSelector} from "react-redux";
import {updateLog} from "../../actions/logActions";

const EditLogModal = () => {
    const [message, setMessage] = useState('');
    const [attention,setAttention] = useState(false);
    const [tech,setTech] = useState('');
    const current = useSelector(state => state.log.current);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(current){
            setMessage(current.message);
            setAttention(current.attention);
            setTech(current.tech);
        }
    },[current]);

    const onSubmit = () => {
        if(message === '' || tech === ''){
            M.toast({html:'Please enter a message and tech'});
        }else{
            const update = {
                message,
                attention,
                tech,
                date:new Date(),
                id : current.id,
            }

            dispatch(updateLog(update));

            setMessage('');
            setTech('');
            setAttention(false);
        }
    }

    return (
        <div id="edit-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="message" value={message} onChange={e => setMessage(e.target.value)}/>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <select name="tech" value={tech} className="browser-default" onChange={e => setTech(e.target.value)}>
                            <option value="" disabled>Select Technician</option>
                            <option value="John Doe">John Doe</option>
                            <option value="Sam Smith">Sam Smith</option>
                            <option value="Sara Wilson">Sara Wilson</option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input type="text" className="filled-in" checked={attention} value={attention} onChange={e => setAttention(!attention)}/>
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue waves-light btn">Enter</a>
            </div>
        </div>
    );
};


const modalStyle = {
    width:'75%',
    height:'75%'
}

export default EditLogModal;
