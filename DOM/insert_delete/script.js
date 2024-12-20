let newbtn=document.createElement("button");
newbtn.innerText="click me";
console.log(newbtn);

let div = document.querySelector("div");
div.append(newbtn);// add at the end
div.prepend(newbtn);// add at first

div.before(newbtn);// add at the end
//div.after(newbtn);// add at first

let h2=document.createElement("h2");
h2.innerHTML="<i>Hello JavaScript</i>";

document.querySelector("body").prepend(h2);

let para = document.querySelector("p");
para.remove();