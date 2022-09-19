export default (message = '', type = 'primary', element = 'section') => {
  const messageContainer = document.createElement(element);
  messageContainer.classList.add(
    'alert',
    `alert-${type}`,
    'd-flex',
    'justify-content-between',
    'align-items-center',
    // 'position-absolute',
    // 'container',
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
