import 'babel-polyfill';
import Message from './Message.js';

const message = new Message();
document.getElementById('main').innerHTML = `<h1>${message.render()}</h1>`;

if (module.hot) {
  module.hot.accept();
}
