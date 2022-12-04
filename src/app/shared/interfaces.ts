import * as Enums from './enums';

export interface ClickDelegateEvent {
  /**
   * data-id attribute
   */
  id: string;
  /**
   * data-type attribute
   */
  type: string;
  /**
   * CSS class.
   */
   selector: string;
  /**
   * Native mouse event.
   */
  dataset: DOMStringMap;
  /**
   * Native mouse event.
   */
  event: MouseEvent;
}

export interface SelectOption {
  id: string;
  value: string;
  hint: string;
}

export interface Model {
  slug: string;
  previewURL: string;
  name: string;
  articul?: string;
  factory?: Enums.ModelFactory;
}
