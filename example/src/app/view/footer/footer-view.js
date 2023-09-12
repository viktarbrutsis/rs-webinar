import ElementCreator from '../../util/element-creator';

const CssClasses = {
  FOOTER: 'footer',
};
const TEXT = 'Spa example app';

export default class FooterView {
  constructor() {
    this.elementCreator = this.createView();
  }
  /**
   * @returns {HTMLElement}
   */

  getHtmlElement() {
    return this.elementCreator.getElement();
  }

  createView() {
    const params = {
      tag: 'footer',
      className: [CssClasses.FOOTER],
      textContent: TEXT,
      callback: null,
    };
    const elementCreator = new ElementCreator(params);

    return elementCreator;
  }
}
