import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types'

import {connect} from 'react-redux';
import {getTechs} from '../../actions/techActions';

const TechSelectOptions = ({tech: {techs, loading}, getTechs}) => {
  useEffect(() => {
    getTechs()
  //eslint-disable-next-line
  }, [])

  return (
    <Fragment>
    {!loading && techs !== null && techs.map(tech => <option key={tech.id} value={`${tech.firstName} ${tech.lastName}`}>{tech.firstName} {tech.lastName}</option>)}
    </Fragment>
  )
}

TechSelectOptions.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  tech: state.tech
})

export default connect(mapStateToProps, {getTechs})(TechSelectOptions)
