import React, {dispatch} from 'react'
import {setName} from '../redux/actions/PostActions'
import { connect } from 'react-redux'
import Home from './Home';

const mapStateToProps = (state) => ({
    name: state.DataReducer.name
})

const mapDispatchToProps = (dispatch) =>  ({
    setName:(name)=>dispatch(setName(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);