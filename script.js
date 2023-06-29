function add () {
    document.getElementById("add").style.display="block";
    document.getElementById("update").style.display="none";
    document.getElementById("showall").style.display="none";
    document.getElementById("showone").style.display="none";
    document.getElementById("delname").style.display="none";
    document.getElementById("delid").style.display="none";
}
function update () {
    document.getElementById("add").style.display="none";
    document.getElementById("update").style.display="block";
    document.getElementById("showall").style.display="none";
    document.getElementById("showone").style.display="none";
    document.getElementById("delname").style.display="none";
    document.getElementById("delid").style.display="none";
}
function showall () {
    document.getElementById("update").style.display="none";
    document.getElementById("add").style.display="none";
    document.getElementById("showall").style.display="block";
    document.getElementById("showone").style.display="none";
    document.getElementById("delname").style.display="none";
    document.getElementById("delid").style.display="none";
}

function showone () {
    document.getElementById("update").style.display="none";
    document.getElementById("showall").style.display="none";
    document.getElementById("add").style.display="none";
    document.getElementById("showone").style.display="block";
    document.getElementById("delname").style.display="none";
    document.getElementById("delid").style.display="none";
}
function delname () {
    document.getElementById("update").style.display="none";
    document.getElementById("showall").style.display="none";
    document.getElementById("showone").style.display="none";
    document.getElementById("delname").style.display="block";
    document.getElementById("add").style.display="none";
    document.getElementById("delid").style.display="none";
}
function delid () {
    document.getElementById("update").style.display="none";
    document.getElementById("showall").style.display="none";
    document.getElementById("showone").style.display="none";
    document.getElementById("delname").style.display="none";
    document.getElementById("add").style.display="none";
    document.getElementById("delid").style.display="block";
}


function AddRes () {
    nom = document.getElementById("addname").value;
    adr = document.getElementById("addadresse").value;
    kat = document.getElementById("addkategorie").value;
    
    fetch('http://127.0.0.1:3000/add', {
        headers: {
            
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({name: nom,adresse:adr,kategorie:kat}),
    })
        .then(response => executeShowAll())
        
}

function UpdateRes () {
    upnom = document.getElementById("upname").value;
    upadr = document.getElementById("upadresse").value;
    upkat = document.getElementById("upkategorie").value;
    
    fetch('http://127.0.0.1:3000/Updatebyname', {
        headers: {
            
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({name: upnom,adresse:upadr,kategorie:upkat}),
    })
        .then(response => {executeShowAll();
            console.log("hello")
            
        });
            
        
}


function deleteres () {
    nom = document.getElementById("del").value;
    
    fetch('http://127.0.0.1:3000/deletebyname', {
        headers: {
            
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({name: nom}),
    })
        .then(response => executeShowAll())
        
}
function ShowOne () {
    nom = document.getElementById("one").value;
    
    fetch('http://127.0.0.1:3000/getbyname', {
        headers: {
            
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({name: nom}),
    })
    .then(response => response.json())
    .then(result => {
        console.log(result);
        let table = '            <tr>' +
            '                <th>Name</th>' +
            '                <th>Address</th>' +
            '                <th>Kategorie</th>' +
            '            </tr>';
        
            table+= '<tr><td>' + result['name'] + '</td> <td>' + result['adresse'] + '</td><td>' + result['kategorie'] +'</td></tr>';
        
        document.getElementById("tableShowAll").innerHTML = table;
    })
        
}

function executeShowAll () {
    fetch('http://127.0.0.1:3000/getall', {
        headers: {
            
            'Accept': 'application/json'
        }
    })
        .then(response => response.json())
        .then(result => {
            
            let table = '            <tr>' +
                '                <th>Name</th>' +
                '                <th>Address</th>' +
                '                <th>Kategorie</th>' +
                '            </tr>';
            for(let i = 0; i < result.length; i++) {
                table+= '<tr><td>' + result[i]['name'] + '</td> <td>' + result[i]['adresse'] + '</td><td>' + result[i]['kategorie'] +'</td></tr>';
            }
            document.getElementById("tableShowAll").innerHTML = table;
        })
}