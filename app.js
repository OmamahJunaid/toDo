var firebaseConfig = {
    apiKey: "AIzaSyB7WLlcRkzBLhQwCi5XoC_lyuguRZCilVs",
    authDomain: "todo-eaabb.firebaseapp.com",
    databaseURL: "https://todo-eaabb-default-rtdb.firebaseio.com",
    projectId: "todo-eaabb",
    storageBucket: "todo-eaabb.appspot.com",
    messagingSenderId: "706038176240",
    appId: "1:706038176240:web:70c03748754ed2b57c2535"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  console.log(firebase.auth)


  var input = document.getElementById("items")
  var list = document.getElementById("list")


firebase
.database()
.ref("todos").on("child_added",function(data){
        var li = document.createElement('li')
    var liTxt =document.createTextNode(data.val().value)
    li.appendChild(liTxt)
    var btndel = document.createElement("button")
    var btntxt = document.createTextNode (" x ")
    btndel.appendChild(btntxt)
    li.appendChild(btndel)
    btndel.setAttribute("class","btndel")
    btndel.setAttribute("id",data.val().key)
    btndel.setAttribute("onclick","delvalue(this)")
  
    var btnedit = document.createElement("button")
    var btntxt2 = document.createTextNode(" + ")
    btnedit.appendChild(btntxt2)
    li.appendChild(btnedit)
    btnedit.setAttribute("class","btnedit")
    btnedit.setAttribute("onclick","edit(this)")
    btnedit.setAttribute("id",data.val().key)

   list.appendChild(li)
   input.value=""

})















function addItems() {
    var key = firebase.database().ref("todos").push().key
    


   var obj={

    value: input.value,
    key:key

   }
   console.log(obj)
   firebase
    .database()
    .ref("todos")
    .child(key)
    .set(obj);


//     var li = document.createElement('li')
//     var liTxt =document.createTextNode(input.value)
//     li.appendChild(liTxt)
//     var btndel = document.createElement("button")
//     var btntxt = document.createTextNode (" x ")
//     btndel.appendChild(btntxt)
//     li.appendChild(btndel)
//     btndel.setAttribute("class","btndel")
//     btndel.setAttribute("onclick","delvalue(this)")
  
//     var btnedit = document.createElement("button")
//     var btntxt2 = document.createTextNode(" + ")
//     btnedit.appendChild(btntxt2)
//     li.appendChild(btnedit)
//     btnedit.setAttribute("class","btnedit")
//     btnedit.setAttribute("onclick","edit(this)")

//    list.appendChild(li)
//    input.value=""
}



function delAll(){
    firebase.database().ref("todos").remove()
    list.innerHTML =""
}
function delvalue(e){
    firebase.database().ref("todos").child(e.id).remove()
    e.parentNode.remove()
}
function edit(e) {
   var newVal= prompt("Enter New Value ....", e.parentNode.firstChild.nodeValue )
    var todoEdit={
        value: newVal,
        key: e.id

    }
    firebase
    .database()
    .ref("todos")
    .child(e.id)
    .set(todoEdit);
  e.parentNode.firstChild.nodeValue = newVal
    
}



