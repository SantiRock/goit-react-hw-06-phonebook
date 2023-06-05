import { useDispatch } from "react-redux";
import { deleteContact } from "redux/sliceContacts";
import css from "./Contact.module.css"
import PropTypes from "prop-types";

export const Contact = ({ contact }) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(contact.id));

    return (
        <div>
            {contact.name}: {contact.number}
            <button className={css.btndel} onClick={handleDelete}>Delete</button>
        </div>
    )
}

Contact.propTypes = {
    contact: PropTypes.object,
}