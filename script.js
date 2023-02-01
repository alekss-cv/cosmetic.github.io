let test = document.querySelector(".test")
const XHR = new XMLHttpRequest();
XHR.open("GET" , "http://localhost:8848/" ,true);
XHR.onload = ()=>{
    console.log(XHR.status ,XHR.statusText);
    test.innerHTML = XHR.response
}
XHR.send()
