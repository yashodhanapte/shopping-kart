import {setName, getAllUsers, setSelectedProduct} from '../../redux/actions/PostActions'
import { connect } from 'react-redux'
import Home from './Home';

const mapStateToProps = (state) => ({
    name: state.DataReducer.name,
    allUsers: state.DataReducer.allUsers,
})

const mapDispatchToProps = (dispatch) =>  ({
    setName:(name)=>dispatch(setName(name)),
    getAllUsers: () => dispatch(getAllUsers()),
    setSelectedProduct: (product)=>dispatch(setSelectedProduct(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);