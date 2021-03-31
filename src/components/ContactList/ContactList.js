import ContactListItem from "../ContactListItem/ContactListItem";
import PropTypes from "prop-types";
import style from "./ContactList.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { Component } from "react";

class ContactList extends Component{

  render() {
    const { contacts, deletedContacts } = this.props;

    return (
      <TransitionGroup component="ul" className={style.list}>
        {contacts.map((contact) => (
          <CSSTransition key={contact.id} timeout={250} classNames={style}>
            <ContactListItem
              id={contact.id}
              name={contact.name}
              number={contact.number}
              deletedContacts={deletedContacts}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }
}

ContactList.propTypes = {
  cotacts: PropTypes.array,
  onDelete: PropTypes.func,
  deletedContacts: PropTypes.func,
};

const mapStateToProps = (state) => ({
  contacts: state.phonebook.contacts.filter(
    (contact) =>
      contact.name
        .toLowerCase()
        .indexOf(state.phonebook.filter.toLowerCase()) !== -1
  ),
});

export default connect(mapStateToProps)(ContactList);
