import throttle from "lodash.throttle";
import { save, load } from "./storage";

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

const LOCAL_STORAGE_KEY = "feedback-form-state";

const { email, message } = form.elements;

// const dataForm = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
const dataForm = load(LOCAL_STORAGE_KEY);
populateFormField();


function onFormInput(evt) {

    const dataForm = { email: email.value, message: message.value };

    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataForm));
    save(LOCAL_STORAGE_KEY, dataForm);
};


function onFormSubmit(evt) {

    evt.preventDefault();

    if (email.value === '' || message.value.trim() === '') {
        alert("Error. Please fill all fields!");
        return;
    }

    console.log({ email: email.value, message: message.value });

    form.reset();
    localStorage.removeItem(LOCAL_STORAGE_KEY);

};


function populateFormField() {

if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }

};


