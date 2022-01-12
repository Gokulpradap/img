const url1 = "https://wallpaperaccess.com/full/2703791.jpg";
const img1 = document.createElement("img");
img1.setAttribute("src",url1);
img1.setAttribute("class","img-all");
document.body.append(img1);

const url2 = "https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg";
const img2 = document.createElement("img");
img2.setAttribute("src", url2);
img2.setAttribute("class","img-all");
document.body.append(img2);

const url3 = "https://www.teahub.io/photos/full/1-12815_purplish-blue-landscape-wallpaper-purple-and-blue-landscape.jpg";
const img3 = document.createElement("img");
img3.setAttribute("src", url3);
img3.setAttribute("class", "img-all");
document.body.append(img3);

const url4 = "https://mocah.org/uploads/posts/343911-Neon-Scenery-Landscape-Digital-Art.jpg";
const img4 = document.createElement("img");
img4.setAttribute("src", url4);
img4.setAttribute("class","img-all");
document.body.append(img4);

const allurl = [url1, url2, url3,url4];

// const all = document.createElement("img");

// for(let images of allurl){
//     console.log(images);

// }
// document.body.append(all);