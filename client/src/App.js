import React, { useState } from 'react';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [createdDate, setCreatedDate] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName.trim() === '' || lastName.trim() === '' || phone.trim() === '' || email.trim() === '' || company.trim() === '' || createdDate.trim() === '') return;

    if (editingIndex === -1) {
      // Add new contact
      setContacts([...contacts, { firstName, lastName, phone, email, company, createdDate }]);
    } else {
      // Update existing contact
      const updatedContacts = [...contacts];
      updatedContacts[editingIndex] = { firstName, lastName, phone, email, company, createdDate };
      setContacts(updatedContacts);
      setEditingIndex(-1);
    }

    // Reset form
    setFirstName('');
    setLastName('');
    setPhone('');
    setEmail('');
    setCompany('');
    setCreatedDate('');
  };

  const handleEdit = (index) => {
    const contact = contacts[index];
    setFirstName(contact.firstName);
    setLastName(contact.lastName);
    setPhone(contact.phone);
    setEmail(contact.email);
    setCompany(contact.company);
    setCreatedDate(contact.createdDate);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };

  return (
    <div className="App">
      <h1>Contact Management</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          type="text"
          placeholder="Created Date"
          value={createdDate}
          onChange={(e) => setCreatedDate(e.target.value)}
        />
        <button type="submit">{editingIndex === -1 ? 'Add Contact' : 'Update Contact'}</button>
      </form>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.firstName} {contact.lastName} - {contact.phone} - {contact.email} - {contact.company} - {contact.createdDate}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
