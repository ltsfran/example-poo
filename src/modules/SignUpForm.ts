import { Form } from './../modules';
import { ISubmitForm } from './../interfaces';

export class SignUpForm extends Form implements ISubmitForm {
  init = (formQuery?: string, inputGroupQuery?: string, submitButtonQuery?: string) => {
    this.formQuery = formQuery || this.formQuery;
    this.inputGroupQuery = inputGroupQuery || this.inputGroupQuery;
    this.submitButtonQuery = submitButtonQuery || this.submitButtonQuery;

    this.catchDom();
    this.subscribeEvents();
  }

  private catchDom = () => {
    this.formElement = document.querySelector(this.formQuery);
    this.inputGroupElement = document.querySelectorAll(this.inputGroupQuery);
    this.submitButtonElement = document.querySelector(this.submitButtonQuery);
  }

  private subscribeEvents = () => {
    this.formElement.addEventListener('submit', this.handleSubmit);
  }

  handleSubmit = (event: Event): void => {
    event.preventDefault();
    console.log('handleSubmit SignUpForm', event);
  };
}
