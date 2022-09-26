import { getContact, getPet } from './query.js';

export const render = (contactId, petId) => {
  const { name: ownerName, surname } = getContact(contactId);
  const { name, species, age, id } = getPet(petId);
  const container = document.createElement('form');
  container.classList.add('edit-pet');

  container.innerHTML = `
  <h4>editing pet ${name} of ${ownerName} ${surname}.</h4>

  <label class="form-label mt-2">Name</label>
  <input type="text"
  name="name"
  class="form-control form-control-sm"
  value = '${name}'>

  <label class="form-label mt-2">Species</label>
  <input type="text"
  name="species"
  class="form-control
  form-control-sm"
  value = '${species}'>

  <label class="form-label mt-2">Age</label>
  <input type="text"
  name="age"
  class="form-control
  form-control-sm"
  value = ${age}
  >

  <input type="hidden" value="${id}" name="petId">

  <div class="mt-2">
    <button type="submit" class="btn btn-secondary me-1" title="Save">Save</button>
    <button type="button" class="cancel-button btn btn-secondary" title="Cancel">Cancel</button>
  </div>
`;

  return container;
};
