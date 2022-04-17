document.addEventListener('DOMContentLoaded', function() {
    var selectedMenu;
    document.getElementById("tablinkContainer").addEventListener("click", function(e) {
      selectedMenu;
      if (selectedMenu) {
        // hide previously selected menu content
        document.getElementById(selectedMenu).classList.add('hidden');
      }
      // show currently selected menu content
      selectedMenu = e.target.dataset.link;
      document.getElementById(selectedMenu).classList.remove('hidden');
    });
  });
  