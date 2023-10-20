function addItems() {
    var input = document.getElementById("items")
    var list = document.getElementById("list")
    var li = document.createElement('li')
    var liTxt =document.createTextNode(input.value)
    li.appendChild(liTxt)
    var btndel = document.createElement("button")
    var btntxt = document.createTextNode("x")
    btndel.appendChild(btntxt)
    li.appendChild(btndel)
    btndel.setAttribute("class","btndel")
    btndel.setAttribute("onclick","delvalue(this)")
  
    var btnedit = document.createElement("button")
    var btntxt2 = document.createTextNode("+")
    btnedit.appendChild(btntxt2)
    li.appendChild(btnedit)
    btnedit.setAttribute("class","btnedit")
    btnedit.setAttribute("onclick","edit(this)")

   list.appendChild(li)
   input.value=""
}
function delAll(){
    list.innerHTML =""
}
function delvalue(e){
    e.parentNode.remove()
}
function edit(e) {
  e.parentNode.firstChild.nodeValue = prompt("Enter New Value ....")
    
}