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

async getTrips() {
    const res = await fetch("http://localhost:5000/trips");
    const json = res.json();
    const data = json.data;
    console.log(data);

}


async function getCurrentTabURL() {
    const tabs = await chrome.tabs.query({active: true, currentWindow: true})
    let url = tabs[0].url;
    return url;
}

async function addBookmark() {
    fetch(`http://localhost:5000/add/bookmark`, {
        body: JSON.stringify(await getCurrentTabURL())
    })   
}
