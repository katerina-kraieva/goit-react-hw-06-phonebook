import shortid from 'shortid';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-action';
import s from './Filter.module.css';

function Filter({ value, onChange }) {
  const findId = shortid.generate();
  return (
    <div>
      <label htmlFor={findId} className={s.label}>Find contacts by name</label>
      <input className={s.input} id={findId} type="text" value={value} onChange={onChange} />
    </div>
  );
}
const mapStateToProps = state => ({
  value: state.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);