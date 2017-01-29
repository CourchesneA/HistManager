window.onload = function() {

    document.getElementById('Cleanse').addEventListener("click", gatherOptions);
    document.getElementById('settings').addEventListener("click",function(){chrome.runtime.openOptionsPage()});
}

//Gather string
function gatherOptions() {
    console.log("gatherOption fct");
    //document.getElementById("status").innerHTML =  document.getElementById('prohibited').value;
    //alert("test");
    chrome.storage.sync.get({
        prohibited: ""
    }, function(items){
        gatherURLlist(items.prohibited);
        console.log(items.prohibited);
    });
    //var input = document.getElementById('prohibited').value;
}

//Gather URL list

function gatherURLlist(query){
    console.log("gatherURL fct");
    //var list = chrome.history.search(query, displayList(obj));
    //for testing purpose
   /* chrome.history.search({text: query, maxResults: 100}, function(data) {
            data.forEach(function(page) {
                        console.log(page.url);
                            });
    });*/
    
    chrome.history.search({text: query, maxResults: 100},deleteUrls);
}

//Delete entries

function deleteUrls(urls) {

    console.log("deleteUrls function");
    urls.forEach(function(page){
        chrome.history.deleteUrl({url:page.url});
        console.log("Successfully deleted: "+page.url);
    });

}


//Display log
