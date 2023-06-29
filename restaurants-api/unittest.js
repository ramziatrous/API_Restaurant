const http = require('http');

const host = '127.0.0.1';
const port = '3000';
const method = ['GET', 'POST', 'PUT', 'DELETE']
const bodies = [
    { name: "Bobs Burgers", adresse: "Zum Burgerladen 3, 12345 Burgerhausen", kategorie: "burgerrestaurant" }, 
    { name: "AmoreMia", adresse: "hamelnstr. 9", kategorie: "pizza" }, 
    { name: "SushiFu", adresse: "Streetstr. 8", kategorie: "sushi" }, 
    { name: "AmoreMia", adresse: "Burgerstr. 1", kategorie: "pizza"}, 
    { name: "SushiFu", adresse: "Streetstr. 8", kategorie: "thai"}
];
//check if Bob's Burgers exists
const request1 = {
    "method": method[0],
    "host": host,
    "port": port,
    "path": '/restaurant/Bobs%20Burgers',
    "body": bodies[0]
};
// check if AmoreMia exists
const request2 = {
    "method": method[0],
    "host": host,
    "port": port,
    "path": '/restaurant/AmoreMia',
    "body": bodies[1]
};
// check add AmoreMia to DB
const request3 = {
    "method": method[1],
    "host": host,
    "port": port,
    "path": '/restaurant',
    "headers": { "Content-Type": "application/json", "Content-Length": Buffer.byteLength(JSON.stringify(bodies[1])) },
    "body": bodies[1]
};
// check if SushiFu exists
const request4 = {
    "method": method[0],
    "host": host,
    "port": port,
    "path": '/restaurant/SushiFu',
    "body": bodies[2]
};
// add SushiFu to DB
const request5 = {
    "method": method[1],
    "host": host,
    "port": port,
    "path": '/restaurant',
    "headers": { "Content-Type": "application/json", "Content-Length": Buffer.byteLength(JSON.stringify(bodies[2])) },
    "body": bodies[2]
};
// check update AmoreMia
const request5a = {
    "method": method[2],
    "host": host,
    "port": port,
    "path": '/restaurant/AmoreMia',
    "headers": { "Content-Type": "application/json", "Content-Length": Buffer.byteLength(JSON.stringify(bodies[3])) },
    "body": bodies[3]
};
// check update SushiFu
const request6 = {
    "method": method[2],
    "host": host,
    "port": port,
    "path": '/restaurant/SushiFu',
    "headers": { "Content-Type": "application/json", "Content-Length": Buffer.byteLength(JSON.stringify(bodies[4])) },
    "body": bodies[4]
};
// check delete AmoreMia
const request7 = {
    "method": method[3],
    "host": host,
    "port": port,
    "path": '/restaurant/AmoreMia',
    "body": bodies[3]
};

// http.get(request1, (response) => {
//     response.setEncoding('utf8');
//     let chunks = '';
//     response.on('data', (chunk) => {
//         chunks += chunk;
//     });
//     response.on('end', function() {
//         console.log(chunks);
//     });
//     response.on('error', function(err) {
//         console.log(err);
//     });
// });

http.request(request1, (response) => {
    response.setEncoding('utf8');
    let chunks = '';
    response.on('data', (chunk) => {
        chunks += chunk;
    });
    response.on('end', function() {
        console.log(chunks);
    });
    response.on('error', function(err) {
        console.log(err);
    });
}).end();
http.request(request2, (response) => {
    response.setEncoding('utf8');
    let chunks = '';
    response.on('data', (chunk) => {
        chunks += chunk;
    });
    response.on('end', function() {
        console.log(chunks);
    });
    response.on('error', function(err) {
        console.log(err);
    });
}).end();
let result = http.request(request3, (response) => {
    response.setEncoding('utf8');
    let chunks = '';
    response.on('data', (chunk) => {
        chunks += chunk;
    });
    response.on('end', function() {
        console.log(chunks);
    });
    response.on('error', function(err) {
        console.log(err);
    });
});
result.write(JSON.stringify(bodies[1]));
result.end();
let result2 = http.request(request4, (response) => {
    response.setEncoding('utf8');
    let chunks = '';
    response.on('data', (chunk) => {
        chunks += chunk;
    });
    response.on('end', function() {
        console.log(chunks);
    });
    response.on('error', function(err) {
        console.log(err);
    });
});
result2.write(JSON.stringify(bodies[2]));
result2.end();
let result3 = http.request(request5, (response) => {
    response.setEncoding('utf8');
    let chunks = '';
    response.on('data', (chunk) => {
        chunks += chunk;
    });
    response.on('end', function() {
        console.log(chunks);
    });
    response.on('error', function(err) {
        console.log(err);
    });
});
result3.write(JSON.stringify(bodies[2]));
result3.end();
let result4 = http.request(request5a, (response) => {
    response.setEncoding('utf8');
    let chunks = '';
    response.on('data', (chunk) => {
        chunks += chunk;
    });
    response.on('end', function() {
        console.log(chunks);
    });
    response.on('error', function(err) {
        console.log(err);
    });
});
result4.write(JSON.stringify(bodies[3]));
result4.end();
let result5 = http.request(request6, (response) => {
    response.setEncoding('utf8');
    let chunks = '';
    response.on('data', (chunk) => {
        chunks += chunk;
    });
    response.on('end', function() {
        console.log(chunks);
    });
    response.on('error', function(err) {
        console.log(err);
    });
});
result5.write(JSON.stringify(bodies[4]));
result5.end();
let result6 = http.request(request7, (response) => {
    response.setEncoding('utf8');
    let chunks = '';
    response.on('data', (chunk) => {
        chunks += chunk;
    });
    response.on('end', function() {
        console.log(chunks);
    });
    response.on('error', function(err) {
        console.log(err);
    });
});
result6.write(JSON.stringify(bodies[3]));
result6.end();