function getJSON(url) {
    let resp;
    let xmlHttp;
    resp = "";
    xmlHttp = new XMLHttpRequest();

    if (xmlHttp != null) {
        xmlHttp.open("GET", url, false);
        xmlHttp.send(null);
        resp = xmlHttp.responseText;
    }
    return resp;
}
export default getJSON;