  
  
//   #####1pour selectionée id######
  // let myHelloId=document.getElementById("hello")
// console.log(myHelloId)
// 2#####pour changer le text######
// myHelloId.innerHTML="hi i am happy for you"
// 3#####pour changer le style######
// myHelloId.style.color="red"
// 4#####pour selectionée class######
// let myClass=document.getElementsByClassName("js")
// console.log(myClass[0])
// 5#####pour selectioneé les balise######
// let myClassTag=document.getElementsByTagName("i")
// console.log(myClassTag)
// 6#####pour queryselector######
// let myQuery=document.querySelector("#hello");
// myQuery.style.color="red";
// console.log(myQuery)
// 6#####pour queryAllselector######
// let myQuery=document.querySelectorAll(".js");
// myQuery.style.color="red";
// console.log(myQuery)
// #####7 pour le body#####
// let body=document.body;

// body.innerHTML="<div>"
// console.log(body)


// outerHTML
// let container=document.getElementById("container")
// console.log(container.outerHTML)




// ineerHTML
// let container=document.getElementById("container")
// console.log(container.innerHTML)




// previous  and next
// let myClass = document.getElementsByClassName("second");
// console.log(myClass.p);




// comment ajputer un enfant  element
// let nadia=document.createElement("h1")
// let content=document.createTextNode("hy my name is jokee")
// nadia.appendChild(content)
// console.log(nadia)



// // event
// let btn=document.getElementById("btn");
// btn.onclick=function(){
//   console.log('hello')
//   document.body.style.background='red'
// }



// let dollar=document.getElementById("dollar")
// let derham=document.getElementById("derham")
// dollar.onkeyup=function()
// {
//   derham.value=dollar.value*10,8

// }
// derham.onkeyup=function(){
//   dollar.value=derham.value/10,8}

// let After=document.getElementById("After");
// let Before=document.getElementById("Before");
// let inside=document.getElementById("inside");
// let Hi=document.getElementById("Hi");
// let js=document.getElementById("js");

// js.style.backgroundColor="red";
// js.style.height="50px";
// After.onclick=function(){
//   js.after(Hi)
// }
// Before.onclick=function(){
//   js.before(Hi)
// }
// inside.onclick=function(){
//   js.append(Hi)
// }


// let  element = document.getElementById("monElement");
//  element.classList.add("maClasse");

// let bouton =document.getElementById("monBouton");
//  bouton.addEventListener("click", function() {
//   console.log("hello you are the best")
//  });
function getValue() 
{ let nameInput = document.getElementById("f3dabi");
 let f3dabi = nameInput.value; 
 console.log("La valeur du champ de saisie est :", f3dabi); }


// Animation
 let element = document.getElementById("myElement"); 
 let position = 0; function animate() 
 { position += 5; 
   element.style.left = position + "px"; 
  requestAnimationFrame(animate);  } 
 animate();



// //Ajouter une selule A LA TROISIEMME LINE DE TABLEU et supprimer la 5EME LINE
// let myline =document.getElementById("json")
// document.appendChild(td)
// // myline=document.createElement()
// // myline.textContent="fati"


// myline.innerHTML="<tr>"
// console.log(body)