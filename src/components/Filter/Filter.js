import PropTypes from "prop-types";
import { connect } from "react-redux";
import phonebookActions from "../../redux/phonebook/phonebook-actions";
import style from './Filter.module.css';

const Filter = ({ filter, handleChange}) => {
  return (
    <div className={style.containerFilter}>
<input
            type="text"
            name="filter"
            value={filter}
            onChange={handleChange}
          />
    </div>
    
  );
};

Filter.propTypes = {
    filter:PropTypes.string,
    handleChange: PropTypes.func,
};

const mapStateToProps = state => ({
  filter: state.phonebook.filter
})

const mapDispatchToProps = dispatch => ({
  handleChange: e => dispatch(phonebookActions.changeFilter(e.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);