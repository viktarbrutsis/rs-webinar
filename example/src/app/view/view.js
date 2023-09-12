import ElementCreator from '../util/element-creator';
/**
 * @typedef {{
 * tag: string,
 * className: Array<string>,
 * textContent: string
 * }} ViewParams
 */
export default class View {
  constructor(params) {
    this.elementCreator = this.createView(params);
  }
  /**
   * @returns {HTMLElement}
   */

  getHtmlElement() {
    return this.elementCreator.getElement();
  }

  /**
   * @param {ViewParams} params
   * @returns {ElementCreator}
   */

  createView(params) {
    const elementParams = {
      tag: params.tag,
      className: params.className,
      textContent: '',
      callback: null,
    };
    const elementCreator = new ElementCreator(elementParams);

    return elementCreator;
  }
}
