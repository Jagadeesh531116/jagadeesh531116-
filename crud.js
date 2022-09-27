
let submitbtn = document.querySelector('#submit');
var input1 = document.querySelector('.input1');
var input2 = document.querySelector('.input2');
var input3 = document.querySelector('.input3');
var input4 = document.querySelector('.input4');

submitbtn.addEventListener('click', (e) => {
    e.preventDefault();
    // var ind1 = input1.value
    // var ind2 = input2.value
    // var ind3 = input3.value
    // var ind4 = input4.value

    if (!input1.value) {
        alert("please enter Name")
        input1.focus()
        input1.preventDefault()
    }
    else if (!input2.value) {
        alert("please enter Email")
        input2.focus()
        input2.preventDefault()
    }
    else if (!input3.value) {
        alert("please enter Mobile number")
        input3.focus()
        input3.preventDefault()
    }
    else if (!input4.value) {
        alert("please enter Passward")
        input4.focus()
        input4.preventDefault()
    }

    let table = document.querySelector('.table')
    let tr = document.createElement('tr')
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')
    let td3 = document.createElement('td')
    let td4 = document.createElement('td')

    // td1.innerHTML = `${ind1}`
    // td2.textContent = `${ind2}`
    // td3.textContent = `${ind3}`
    // td4.textContent = `${ind4}`

   

    input1.value = ""
    input2.value = ""
    input3.value = ""
    input4.value = ""

    let inp1 = document.createElement('input')
    let inp2 = document.createElement('input')
    let inp3 = document.createElement('input')
    let inp4 = document.createElement('input')

    td1.appendChild(inp1)
    td2.appendChild(inp2)
    td3.appendChild(inp3)
    td4.appendChild(inp4)

    inp1.value = `${td1}`
    inp2.value = `${td2}`
    inp3.value = `${td3}`
    inp4.value = `${td4}`

    table.appendChild(tr)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)

    tr.setAttribute("readonly", "readonly");
    inp1.setAttribute("readonly", "readonly");
    inp2.setAttribute("readonly", "readonly");
    inp3.setAttribute("readonly", "readonly");
    inp4.setAttribute("readonly", "readonly");


    var btn1 = document.createElement('button');
    btn1.innerHTML = "Edit"
    tr.appendChild(btn1)

    btn1.addEventListener('click', () => {
        if (btn1.innerHTML === "Edit") {
            inp1.removeAttribute("readonly");
            inp2.removeAttribute("readonly");
            inp3.removeAttribute("readonly");
            inp4.removeAttribute("readonly");

            btn1.innerHTML = "Save";
            tr.focus();
        } else {
            tr.setAttribute("readonly", "readonly");
            inp1.setAttribute("readonly", "readonly");
            inp2.setAttribute("readonly", "readonly");
            inp3.setAttribute("readonly", "readonly");
            inp4.setAttribute("readonly", "readonly");

            btn1.innerHTML = "Edit";
        }
    })

    var btn2 = document.createElement('button');
    btn2.innerHTML = "Remove"
    tr.appendChild(btn2)

    btn2.addEventListener("click", () => {
        if (btn2 === "Remove"){
            alert('Are u confirm')
        }
        else{
            table.removeChild(tr);
        } 
    });
})