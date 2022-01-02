export class Form {
  protected formQuery: string = '.js-form';
  protected inputGroupQuery: string = '.js-input';
  protected submitButtonQuery: string = '.js-button';

  protected formElement: Element;
  protected inputGroupElement: NodeListOf<Element>;
  protected submitButtonElement: Element;
}
