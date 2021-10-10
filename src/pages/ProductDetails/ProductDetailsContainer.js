
import { connect } from 'react-redux'
import ProductDetails from './ProductDetails';

const mapStateToProps = (state) => ({
    selectedProduct: state.DataReducer.selectedProduct,
})

const mapDispatchToProps = (dispatch) =>  ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);