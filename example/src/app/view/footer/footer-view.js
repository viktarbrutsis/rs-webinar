import ElementCreator from '../../util/element-creator';

const CssClasses = {
  FOOTER: 'footer',
};
const TEXT = 'Spa example app';

export default class FooterView {
  constructor() {}

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
