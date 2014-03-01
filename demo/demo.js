var Modal = require('../src/uu-modal');

document.addEventListener('DOMContentLoaded', function() {
  var modal = new Modal({el: document.getElementById('test-modal')});
  var link = document.getElementById('open-modal');
  link.addEventListener('click', function() {
    modal.show();
  });

  var lightbox = new Modal({el: document.getElementById('lightbox'), width: 850});
  var link2 = document.getElementById('open-lightbox');
  link2.addEventListener('click', function(e) {
    e.preventDefault();
    lightbox.show();
  });

});
