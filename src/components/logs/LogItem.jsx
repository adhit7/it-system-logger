import React from 'react';
import PropTypes from 'prop-types';
import Moment from "react-moment";
import {useDispatch} from "react-redux";
import {deleteLog, setCurrent} from "../../actions/logActions";

const LogItem = ({log}) => {
    const dispatch = useDispatch();
    const onDelete = () => {
        dispatch(deleteLog(log.id));
    }
    return (
        <li className="collection-item">
            <div>
                <a href='#edit-log-modal' onClick={() => dispatch(setCurrent(log))} className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}>{log.message}</a><br/>
                <span className='grey-text'>
                    <span className='black-text'>ID #{log.id}</span> last updated by <span className='black-text'>{log.tech}</span> on <Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment>
                </span>
                <a href="" onClick={onDelete} className="secondary-content">
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    );
};

LogItem.propTypes = {
    log:PropTypes.object.isRequired,
};

export default LogItem;
