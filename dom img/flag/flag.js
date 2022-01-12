const div1 = document.createElement("div");
document.body.append(div1);
const flagUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png";
const put = document.createElement("img");
put.setAttribute("src", flagUrl);
put.getAttribute("class","align")
document.body.append(put);


const brek = document.createElement("br");
document.body.append(brek);

const br = document.createElement("br");
document.body.append(br);

const div = document.createElement("div");
document.body.append(div);

const head = document.createElement("h2");
const addhead = head.innerText = "United States of America";
// addhead.getAttribute("class","all")
document.body.append(addhead);

const brk = document.createElement("br");
document.body.append(brk);

const content = document.createElement("p");
const add = content.innerText = "Population: 323-947-000";
// add.getAttribute("class","align")
document.body.append(add);

const bre = document.createElement("br");
document.body.append(bre);

const reg = document.createElement("p");
const addreg = content.innerText = "Region: America";
// addreg.getAttribute("class","align")
// addreg.getAttribute("class","select")
document.body.append(addreg);

const b = document.createElement("br");
document.body.append(b);

const cap = document.createElement("p");
const addcap = content.innerText = "Capital: Washington.D.C";
// addcap.getAttribute("class","align")
document.body.append(addcap);


