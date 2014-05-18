var Modal = require('./modal');

module.exports = new Modal();
module.exports.Modal = Modal;

document.body.appendChild(module.exports.element);
