let myLibrary= [];
const body=document.querySelector("body")
const addmore=document.querySelector("#more")
const container= document.querySelector("#container")
    const popup = document.createElement("form")
    popup.setAttribute("action","#")
    const popupcont=document.createElement("div")
popupcont.id="popupcontainer"
const div1=document.createElement("div")
const label1= document.createElement("label")
label1.textContent="Title :"
label1.setAttribute("for", "title")
const ititle = document.createElement("input")
ititle.id="title"
div1.appendChild(label1)
div1.appendChild(ititle)
const div2=document.createElement("div")
const label2= document.createElement("label")
label2.textContent="Author :"
label2.setAttribute("for", "author")
const iauthor = document.createElement("input")
iauthor.id="author"
div2.appendChild(label2)
div2.appendChild(iauthor)
const div3=document.createElement("div")
const label3= document.createElement("label")
label3.textContent="Number of Pages :"
label3.setAttribute("for", "noofpages")
const ino_of_pages = document.createElement("input")
ino_of_pages.id="noofpages"
div3.appendChild(label3)
div3.appendChild(ino_of_pages)
ino_of_pages.setAttribute("type", "number");
ino_of_pages.setAttribute("min", "1");
ino_of_pages.setAttribute("max", "5000");
const div4 = document.createElement("div");
const label4 = document.createElement("label");
label4.textContent = "Read Status:";
div4.appendChild(label4);

// ✅ YES option
const yesLabel = document.createElement("label");
yesLabel.textContent = " Yes ";
const yesRadio = document.createElement("input");
yesRadio.type = "radio";
yesRadio.name = "readstatus";
yesRadio.value = "Yes";

// ✅ NO option
const noLabel = document.createElement("label");
noLabel.textContent = " No ";
const noRadio = document.createElement("input");
noRadio.type = "radio";
noRadio.name = "readstatus";
noRadio.value = "No";

// combine them
div4.appendChild(yesRadio);
div4.appendChild(yesLabel);
div4.appendChild(noRadio);
div4.appendChild(noLabel);

const addbtn = document.createElement("button")
addbtn.textContent="Add this book" 
popup.id="popup"
popup.appendChild(div1)
popup.appendChild(div2)
popup.appendChild(div3)
popup.appendChild(div4)
popup.appendChild(addbtn)
popupcont.appendChild(popup)
popup.querySelectorAll("input").forEach(input => input.required = true);


function removeBook(id) {
  myLibrary = myLibrary.filter(book => book.id !== id);

}

addmore.addEventListener("click", ()=>{
  
    ititle.value = "";
iauthor.value = "";
ino_of_pages.value = "";
     if (!document.body.contains(popupcont)) {
    body.appendChild(popupcont);
}
})
popup.addEventListener("submit", (e)=>{ 

   const titleValue = ititle.value;
  const authorValue = iauthor.value;
  const pagesValue = ino_of_pages.value;
  const readStatusValue = document.querySelector('input[name="readstatus"]:checked')?.value;

 e.preventDefault();
    popupcont.remove()
      ititle.value = "";
  iauthor.value = "";
  ino_of_pages.value = "";
   
      const checkedRadio = popup.querySelector('input[name="readstatus"]:checked');
  if (checkedRadio) checkedRadio.checked = false;
   const newbook={
        id: crypto.randomUUID(),
    title: titleValue,
    author:authorValue,
    Pages:pagesValue,
    Readstatus:readStatusValue

};
myLibrary.push(newbook)
displayBook(newbook)
console.log(myLibrary)


}


)
function displayBook(book){
    const unit = document.createElement("div")
    unit.classList.add("unit")
    function createline(a, b){
     const p = document.createElement("p");
     const first =document.createElement("span")
     const scnd =document.createElement("span")
     first.textContent= a + "";
     scnd.textContent=b;
     p.append(first,scnd);
     return p;
    }
    unit.append(createline("Title : ", book.title),createline("Author : ",book.author),createline("Number of Pages : ", book.Pages),createline("Read Status : ",book.Readstatus))
const btn = document.createElement("button")
btn.className="Read Status"
btn.textContent="Change Read Status"
btn.addEventListener("click", () => {
  book.Readstatus = book.Readstatus === "Yes" ? "No" : "Yes";
  unit.querySelectorAll("p")[3].querySelectorAll("span")[1].textContent = book.Readstatus;
});

unit.appendChild(btn)

container.appendChild(unit)

 unit.classList.remove("animate-click"); // reset animation
  void unit.offsetWidth; // trigger reflow to restart animation
  unit.classList.add("animate-click") 
}

