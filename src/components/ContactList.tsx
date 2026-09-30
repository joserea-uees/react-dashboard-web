import type { Contact } from '../types/contact'
import ContactRow from './ContactRow'
const contacts: Contact[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
  }
];

function ContactList() {
    return (
        <table className="table table-striped table-hover align-middle">
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Email</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contact) => (
                    <ContactRow key={contact.id} contact={contact} />
                ))}
            </tbody>
        </table>
    );
}

export default ContactList;
