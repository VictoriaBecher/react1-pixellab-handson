import { addMessage, clearMessages } from './notificationBar.js';
import { findContact } from './query.js';
// ommit {} for default exports
import render from './message.js';
import { pluralize } from './utils.js';
import stage from './stage.js';
// do not ommit {} for named exports
import { render as renderContact } from './contact.js';
import { clearStage } from './clearStage.js';

const searchForm = document.querySelector('.search-form');
//  search-form input[name="q"]

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // currentTarget este elementul pe care am rulat
  // addEventListener
  const form = event.currentTarget;
  const queryInput = form.q;

  clearMessages();

  const contacts = findContact(queryInput.value.toLowerCase().trim());
  const contactsCount = contacts.length;
  const fragment = new DocumentFragment();

  contacts.forEach((contact) => {
    fragment.append(renderContact(contact));
  });

  if (queryInput.value.length <= 3) {
    addMessage(render('Please enter more than 3 characters', 'warning', 'div'));
    return;
  }

  if (contactsCount <= 0) {
    addMessage(
      render(
        `No contacts found for your search term: ${queryInput.value}`,
        'warning',
        'div',
      ),
    );
  } else {
    const petsCount = contacts.reduce((petsCount, contact) => {
      const { pets = [] } = contact;
      petsCount += pets.length;

      return petsCount;
    }, 0);

    addMessage(
      render(
        `Found ${pluralize(contactsCount, {
          one: 'contact',
          many: 'contacts',
        })} with ${
          petsCount <= 0
            ? 'no pets'
            : pluralize(petsCount, {
                one: 'pet',
                many: 'pets',
              })
        }. Your search term was: '${queryInput.value}'`,
        'success',
        'div',
      ),
    );
  }

  queryInput.value = '';
  clearStage(stage);
  stage.append(fragment);
});

export default searchForm;
