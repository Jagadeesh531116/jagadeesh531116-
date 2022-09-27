let nameInputEl = document.getElementById("name");
let emailInputEl = document.getElementById("email");
let numberInputEl = document.getElementById("number");
let passwordInputEl = document.getElementById("password");
var newPage = document.querySelector('.newPage');
var detailsBgContainer = document.querySelector('.details-bg-container');
let clickButton = document.getElementById('clickButton');

clickButton.addEventListener("click", (e) => {


    newPage.style.display = "block";

    e.preventDefault();


    let ind1 = nameInputEl.value.trim();
    let ind2 = emailInputEl.value.trim();
    let ind3 = numberInputEl.value.trim();
    let ind4 = passwordInputEl.value.trim();



    if (!nameInputEl.value) {
        alert("please enter Name")
        nameInputEl.focus()
        nameInputEl.preventDefault()
    }
    if (!emailInputEl.value) {
        alert("please enter Email")
        emailInputEl.focus()
        emailInputEl.preventDefault()
    }
    if (!numberInputEl.value) {
        alert("please enter Mobile number")
        numberInputEl.focus()
        numberInputEl.preventDefault()
    }
    if (numberInputEl.length < 10 || numberInputEl.length > 10) {  
        alert("enter valid  Phone number");
        numberInputEl.focus();
    }
    if (!passwordInputEl.value) {
        alert("please enter Passward")
        passwordInputEl.focus()
        passwordInputEl.preventDefault()
    }
    
    if (passwordInputEl.length < 5) {
        alert("Password can't be  less than five digits");
        passwordInputEl.focus();
    }



    let inputDiv = document.getElementById("inputDiv");

    let input1 = document.createElement("input");
    let input2 = document.createElement("input");
    let input3 = document.createElement("input");
    let input4 = document.createElement("input");

    inputDiv.setAttribute("readonly", "readonly");
    input1.setAttribute("readonly", "readonly");
    input2.setAttribute("readonly", "readonly");
    input3.setAttribute("readonly", "readonly");
    input4.setAttribute("readonly", "readonly");

    input1.value = `${ind1}`;
    input2.value = `${ind2}`;
    input3.value = `${ind3}`;
    input4.value = `${ind4}`;

    inputDiv.appendChild(input1);
    inputDiv.appendChild(input2);
    inputDiv.appendChild(input3);
    inputDiv.appendChild(input4);



// EditBtn


    var btn1 = document.createElement('button');
    btn1.classList.add("btn1");
    btn1.innerHTML = "Edit";
    inputDiv.appendChild(btn1);
    nameInputEl.value = "";
    emailInputEl.value = "";
    numberInputEl.value = "";
    passwordInputEl.value = "";
    btn1.addEventListener("click", () => {
        if (btn1.innerHTML === "Edit") {
            input1.removeAttribute("readonly");
            input2.removeAttribute("readonly");
            input3.removeAttribute("readonly");
            input4.removeAttribute("readonly");
            btn1.innerHTML = "Save";
            inputDiv.focus();
        } else {
            inputDiv.setAttribute("readonly", "readonly");
            input1.setAttribute("readonly", "readonly");
            input2.setAttribute("readonly", "readonly");
            input3.setAttribute("readonly", "readonly");
            input4.setAttribute("readonly", "readonly");
            btn1.innerHTML = "Edit";
        }
    });



// DeleteBtn



    var btn2 = document.createElement('button');
    btn2.classList.add("btn2");
    btn2.innerHTML = "Delete";
    inputDiv.appendChild(btn2);
    btn2.addEventListener("click", () => {
        inputDiv.removeChild(input1);
        inputDiv.removeChild(input2);
        inputDiv.removeChild(input3);
        inputDiv.removeChild(input4);
        inputDiv.removeChild(btn1);
        inputDiv.removeChild(btn2);
    });

});