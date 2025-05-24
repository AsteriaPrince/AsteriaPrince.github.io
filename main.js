

  //  DECLARE INNER HTML TAG

let elem = document.documentElement; let body = document.body,
    head = document.querySelectorAll("head")[0],
    libr = "/Images/";


  //  DOMCONTENTLOADED EVENT LISTENER

window.addEventListener("DOMContentLoaded", createInnerHTML);


  //  CREATE HEAD STYLES AND HOME EVENT LISTENER FUNCTIONS

function createInnerHTML() {
  
    //  HEAD STYLES
  
  document.title = "Donate For Me :)";

  let desc = "Terimakasih atas dukungannya :)",
      view = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
      webIcons = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,350,0,0";
  
  head.insertAdjacentHTML("beforeend", `
    <meta charset="UTF-8">
    
    <meta name="author" content="Zii">
    <meta name="description" content="${desc}">
    <meta name="viewport" content="${view}">
    
    <meta property="og:title" content="${document.title}">
    <meta property="og:description" content="${desc}">
    <meta property="og:image" content="">
    <meta property="og:type" content="website">
    <meta property="og:url" content="${window.location.href}">
    
    <link rel="icon" type="image/x-icon" href="">
    <link rel="stylesheet" href="${webIcons}">
  `);
  
    //  RELATIVE INTERFACE(S)
  
  createDesignedInterfaces();
}


  //  CREATE DESIGNED INTERFACE(S)

function createDesignedInterfaces() {
  
    //  DECLARE IMPORTANT VALUE(S)
  
  const img = [], txt0 = [], txt1 = [],
        links = ["saweria.co/AsteriaPrince", "sociabuzz.com/ziyuan"];
        onImg = document.querySelectorAll(".onImg"),
        onTxt0 = document.querySelectorAll(".onTxt0"),
        onTxt1 = document.querySelectorAll(".onTxt1"),
        options = document.querySelectorAll(".options"),
        innerData = {
          image: ["saweria;Saweria.png", "sociabuzz;Sociabuzz.png"],
          text: ["header;support me at", "thanks;Thank You :D"]
        };
  
    //  INSTALL THE IMAGE(S)
  
  for (let i = 0; i < innerData.image.length; i++) {
    img[i] = innerData.image[i].split(";")[1];
    img[i] = img[i].slice(0,1).toUpperCase()+img[i].slice(1,img[i].length);
    
    onImg[i].src = libr + img[i];
  }
  
    //  INSTALL THE TEXT(S)
  
  for (let i = 0; i < innerData.image.length; i++) {
    txt0[i] = innerData.image[i].split(";")[0];
    txt0[i] = txt0[i].slice(0,1)+txt0[i].slice(1,txt0[i].length);
    txt1[i] = innerData.text[i].split(";")[1];
    txt1[i] = txt1[i].slice(0,1)+txt1[i].slice(1,txt1[i].length);
    
    onTxt0[i].textContent = txt0[i]; onTxt1[i].textContent = txt1[i];
  }
  
  for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function() {
      window.open("https://" + links[i]);
    })
    
    options[i].addEventListener("contextmenu", function() { return false; })
  }
}