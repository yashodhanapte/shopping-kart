import {setName, getAllUsers} from '../redux/actions/PostActions'
import { connect } from 'react-redux'
import Home from './Home';

const mapStateToProps = (state) => ({
    name: state.DataReducer.name,
    allUsers: state.DataReducer.allUsers
})

const mapDispatchToProps = (dispatch) =>  ({
    setName:(name)=>dispatch(setName(name)),
    getAllUsers: ()=> dispatch(getAllUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);