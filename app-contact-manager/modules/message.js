export default (message = '', type = 'primary') => {
  const messageContainer = document.createElement('div');
  messageContainer.classList.add(
    'alert',
    `alert-${type}`,
    'd-flex',
    'justify-content-between',
    'align-items-center',
  );

  // FYI exista un textContent
  messageContainer.textContent = message;
  const closeButton = document.createElement('button');
  closeButton.classList.add('btn', 'align-self-baseline', 'pt-0');
  closeButton.textContent = 'X';
  closeButton.title = 'close';

  messageContainer.append(closeButton);

  closeButton.addEventListener('click', () => {
    messageContainer.remove();
  });

  return messageContainer;
};
