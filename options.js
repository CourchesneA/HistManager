window.onload = function() {
	document.getElementById('save22').addEventListener('click',save_options);
	restore_options();
};

// Saves options to chrome.storage
function save_options() {
  var prohib = document.getElementById('prohibited').value;
  chrome.storage.sync.set({prohibited: prohib }, function() {
    // Update status to let user know options were saved.
    document.getElementById('status').innerHTML = 'Options saved.';
  });
}

// Restores textbox state using the preferences
// stored in chrome.storage.

function restore_options() {
	console.log("Params loaded");
  chrome.storage.sync.get({
    prohibited: ""
  }, function(items) {
    document.getElementById('prohibited').value = items.prohibited;
  });
}



