import ContactList from './contacts/Contacts';
import Form from './form/form';
import Section from './section/section';
import Filter from './filter/filter';

function Phonebook() {
  return (
    <div>
      <Section title="Phonebook">
        <Form onSubmit={'addNewContact'} />
      </Section>
      <Section title="Contacts">
        <ContactList contacts={[]} onClick={'deleteContact'}>
          <Filter onChange={'handleChange'} onSubmit={'preventSubmit'} />
        </ContactList>
      </Section>
    </div>
  );
}

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
        color: '#010101',
      }}
    >
      <Phonebook />
    </div>
  );
};
