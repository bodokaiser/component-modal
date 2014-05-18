var Modal = require('./modal');

module.exports = function(element, options) {
  options = options || {};

  var modal = new Modal();

  if (element) {
    modal.insert(element);
  }
  if (options.title) {
    modal.title(options.title);
  }
  if (options.insert !== false) {
    document.body.appendChild(modal.element);
  }
  if (options.closable === false) {
    modal.element.querySelector('.close').remove();
  }

  return modal;
};

module.exports.Modal = Modal;
