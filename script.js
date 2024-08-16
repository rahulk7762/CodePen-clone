function run(){
    let htmlcode = document.querySelector("#html-code").value;
    let csscode = document.querySelector("#css-code").value;
    let jscode = document.querySelector("#js-code").value;
    let output = document.querySelector("#output");

output.contentDocument.body.innerHTML = htmlcode + "<style>" + csscode +"</style>";
output.contentWindow.eval(jscode);

}