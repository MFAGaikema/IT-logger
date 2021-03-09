import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import M from 'materialize-css/dist/js/materialize';

import {connect} from 'react-redux';
import {deleteLog, setCurrent} from '../../actions/logActions';

const LogItem = ({log, deleteLog, setCurrent}) => {
  const {attention, message, tech, date, id} = log;

  const delLog = () => {
    deleteLog(id)
    M.toast({ html: `Log with ID of #${id} removed`})
  }

  return (
    <li className="collection-item">
      <div>
        <a href="#edit-log-modal" onClick={() => setCurrent(log)} className={`modal-trigger ${attention ? 'red-text' : 'blue-text'}`}>{message}</a>
        <br/>
        <span className="grey-text">
        <span className="black-text">ID #{id}</span> last updated by <span className="black-text">{tech}</span> on <Moment format="Do MMMM YYYY, h:mm:ss a" className="black-text">{date}</Moment>
        </span>
        <a href="#!" className="secondary-content" onClick={delLog}><i className="material-icons grey-text">delete</i></a>
      </div>
      
    </li>
  )
}

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
}

export default connect(null, {deleteLog, setCurrent})(LogItem)
