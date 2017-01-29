window.onload = function() {

    document.getElementById('Cleanse').addEventListener("click", gatherOptions);
    document.getElementById('settings').addEventListener("click",function(){chrome.runtime.openOptionsPage()});
//    document.getElementById('genhist').addEventListener("click",function (){chrome.history.deleteAll(generatePure)});
    document.getElementById('genhist').addEventListener("click",generatePure);
}

//Gather string
function gatherOptions() {
    console.log("gatherOption fct");
    chrome.storage.sync.get({
        prohibited: ""
    }, function(items){
        gatherURLlist(items.prohibited);
        console.log(items.prohibited);
    });
}

//Gather URL list

function gatherURLlist(query){
    console.log("gatherURL fct");
    chrome.history.search({text: query, maxResults: 100},deleteUrls);
}

//Delete entries

function deleteUrls(urls) {

    console.log("deleteUrls function");
    var entrycount = urls.length;
    urls.forEach(function(page){
        chrome.history.deleteUrl({url:page.url});
        console.log("Successfully deleted: "+page.url);
    });

    document.getElementById('status').innerHTML="Successfully deleted "+entrycount+" History entries";
}


//Generate pure history

function generatePure() {
    console.log("Generate pure fct");
    var goodUrl = [
       "http://www.o-bible.com/cgibin/ob.cgi?version=kjv&book=gen&chapter=1",
       "http://www.angeltherapy.com/meet-the-angels",
       "https://www.youtube.com/watch?v=jgpJVI3tDbY",
       "http://www.cbcmusic.ca/genres/classical",
       "http://www.christianitytoday.com/biblestudies/",
       "https://bible.org/",
       "http://hyperphysics.phy-astr.gsu.edu/hbase/hframe.html",
       "https://en.wikipedia.org/wiki/Biology",
       "http://static.fas.harvard.edu/registrar/ugrad_handbook/current/chapter2/study_cards.html",
       "http://www.livescience.com/26983-lymphatic-system.html",
       "http://www.english-online.at/science/atoms-and-elements/atoms-and-important-chemical-elements.htm",
       "http://www.inc.com/john-rampton/15-ways-to-become-a-better-person.html",
       "http://www.thefeelgoodlifestyle.com/10-reasons-i-love-my-mom-more-than-anything.html",
       "https://www.brainyquote.com/quotes_of_the_day.html",
       "https://xkcd.com/",
       "http://www.webmd.com/diet/obesity/features/10-motivational-tips-to-keep-you-healthy#1",
       "https://www.protrainingprograms.com/"
       ]
       goodUrl.sort(function() {
             return .5 - Math.random();
       });

    for(var i=0; i<goodUrl.length; i++){

        chrome.history.addUrl({url:goodUrl[i]});

    }
    document.getElementById('status').innerHTML="Successfully generated "+goodUrl.length+" History entries";

}
