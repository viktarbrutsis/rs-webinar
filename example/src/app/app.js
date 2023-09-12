import '../style.css';
import FooterView from './view/footer/footer-view';
import HeaderView from './view/header/header-view';

export default class App {
  constructor() {
    this.createView();
  }

  createView() {
    const headerView = new HeaderView();
    const footerView = new FooterView();

    document.body.append(headerView.getHtmlElement(), footerView.getHtmlElement());
  }
}
