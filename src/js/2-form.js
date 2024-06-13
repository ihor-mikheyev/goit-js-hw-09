const formData = {
  email: '',
  message: '',
};

const formElement = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';

// retrieve saved data
const savedFormData = JSON.parse(localStorage.getItem(storageKey));
if (savedFormData) {
  Object.assign(formData, savedFormData);
  formElement.email.value = formData.email;
  formElement.message.value = formData.message;
}

// write data in localStorage
formElement.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(storageKey, JSON.stringify(formData));
});

// send form and reset it or show alert
formElement.addEventListener('submit', event => {
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  event.preventDefault();
  localStorage.removeItem(storageKey);
  // clear the keys value in formData Obj
  for (let key in formData) {
    if (formData.hasOwnProperty(key)) {
      formData[key] = '';
    }
  }
  formElement.reset();
});
