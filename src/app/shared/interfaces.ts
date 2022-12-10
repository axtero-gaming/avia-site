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

export interface GalleryItem {
  url: string;
  description?: string;
}

export interface SpecificationGroup {
  name: string;
  items: SpecificationItem[]
}

export interface SpecificationItem {
  name: string;
  value?: string|number;
}

export interface Model {
  slug: string;
  previewURL: string;
  name: string;
  articul?: string;
  factory?: Enums.ModelFactory;
  // Model
  shortDescription?: string;
  realPreviewURL?: string;
  description?: string;
  galleryItems?: GalleryItem[];
  specificationGroups?: SpecificationGroup[];
}

export interface HowToMakeStep {
  imgURL: string;
  header: string;
  description: string;
}
