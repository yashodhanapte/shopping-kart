import React from 'react'
import { connect } from 'react-redux'
import Home from './Home';

const mapStateToProps = (state) => ({
    name: state.DataReducer.name
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);