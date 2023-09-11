/**
 * @typedef {{
 * tag: String,
 * className: Array<string>,
 * textContent: string,
 * callback: function,
 * }} ElementParams
 */
export default class ElementCreator {
  constructor(param) {
    this.element = null;
    this.createElement(param);
  }
  /**
   * @param {ElementParams} param
   */

  createElement(param) {
    this.element = document.createElement(param.tag);
  }

  /**
   * @param {Array<string>} cssClasses
   */

  setCssClasses(cssClasses) {
    cssClasses.forEach((className) => this.element.classList.add(className));
  }
}
