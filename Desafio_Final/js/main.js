stock = [0,0,0,0,0]

function insertText () {
    for (let i = 0; i <= stock.length - 1 ; i++) {
        switch(i){
            case 0:
                nombre = "Gondolas"
                break
            case 1:
                nombre = "Racks"
                break
            case 2:
                nombre = "Estanterias"
                break
            case 3:
                nombre = "Rieles"
                break
            case 4:
                nombre = "Mensulas"
                break
        }
        document.getElementById('name'+i).innerHTML = nombre;
        document.getElementById('cant'+i).innerHTML = stock[i];
    }
}

function setStock () {
    if (document.getElementById('Input1').value != "") {
        switch(document.getElementById('select').value){
            case "0":
                stock[0] = parseInt(document.getElementById('Input1').value) + stock[0]
                break
            case "1":
                stock[1] = parseInt(document.getElementById('Input1').value) + stock[1]
                break
            case "2":
                stock[2] = parseInt(document.getElementById('Input1').value) + stock[2]
                break
            case "3":
                stock[3] = parseInt(document.getElementById('Input1').value) + stock[3]
                break
            case "4":
                stock[4] = parseInt(document.getElementById('Input1').value) + stock[4]
                break
        }
    } if (document.getElementById('Input2').value != "") {
        switch(document.getElementById('select').value){
            case "0":
                stock[0] = stock[0] - parseInt(document.getElementById('Input2').value)
                break
            case "1":
                stock[1] = stock[1] - parseInt(document.getElementById('Input2').value) 
                break
            case "2":
                stock[2] = stock[2] - parseInt(document.getElementById('Input2').value) 
                break
            case "3":
                stock[3] = stock[3] - parseInt(document.getElementById('Input2').value) 
                break
            case "4":
                stock[4] = stock[4] - parseInt(document.getElementById('Input2').value) 
                break
        }
    }
    insertText ()
}