const formData = {
  email: '',
  message: '',
};

const formElement = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';

const savedFormData = JSON.parse(localStorage.getItem(storageKey));
if (savedFormData) {
  Object.assign(formData, savedFormData);
  formElement.email.value = formData.email;
  formElement.message.value = formData.message;
}

formElement.addEventListener('input', event => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(storageKey, JSON.stringify(formData));
});

formElement.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.removeItem(storageKey);
  formElement.reset();
});
