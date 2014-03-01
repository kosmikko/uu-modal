var Modal = require('../src/uu-modal');

document.addEventListener('DOMContentLoaded', function() {
  var modal = new Modal({el: document.getElementById('test-modal')});
  var link = document.getElementById('open-modal');
  link.addEventListener('click', function() {
    modal.show();
  });
});
