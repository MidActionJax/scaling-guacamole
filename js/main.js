/* 
    Jaxon Doolittle
    13 ~ 999
    2/22/2023
*/

var Hello = "Hello World!"

// document.getElementById("outputToHtml").textContent = "Hello World!"

function getResults(){
    document.getElementById("outputToHtml").textContent = "Hello World!"
}

function downloadFile(url, fileName){
    fetch(url, { method: 'get', mode: 'no-cors', referrerPolicy: 'no-referrer' })
      .then(res => res.blob())
      .then(res => {
        const aElement = document.createElement('a');
        aElement.setAttribute('download', fileName);
        const href = URL.createObjectURL(res);
        aElement.href = href;
        // aElement.setAttribute('href', href);
        aElement.setAttribute('target', '_blank');
        aElement.click();
        URL.revokeObjectURL(href);
      });
  };
  document.querySelector('button').onclick =function () {
    downloadFile('https://www.google-analytics.com/analytics.js', 'gooleAnalytics.js');
}


