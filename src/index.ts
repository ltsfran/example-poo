import './index.css';

const formQuery = '.js-form';
const inputQuery = '.js-input';
const buttonQuery = '.js-button';

const formElement = document.querySelector(formQuery);
const inputElement = document.querySelectorAll(inputQuery);
const buttonElement = document.querySelector(buttonQuery);

const handleSubmit = (e: Event) => {
  e.preventDefault();
  console.log(inputElement, 'inputElement');
  console.log(buttonElement, 'buttonElement');
  console.log('handleSubmit');
};

formElement.addEventListener('submit', handleSubmit);
