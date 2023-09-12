import './header.css';
import View from '../view';

const CssClasses = {
  HEADER: 'header',
  NAV: 'nav',
};

export default class HeaderView extends View {
  constructor() {
    const params = {
      tag: 'header',
      className: [CssClasses.HEADER, CssClasses.NAV],
      textContent: 'Header example app',
    };
    super(params);
  }
}
