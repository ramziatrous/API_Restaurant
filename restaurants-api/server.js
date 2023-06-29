const express = require('express');


const app = express();
const port = 3000;
const hostname = 'localhost';
app.use(express.json());


const pool = require('./connect');


app.get('/restaurants', (_,res)=>{
    pool.query(`select * from Restaurant `,(err,result)=>{
        if(err){
            return console.log(err);
        }
            res.send(result)
        })
        
        });

app.get('/restaurant/:name', (req, res) => {
    pool.query(`SELECT * FROM Restaurant WHERE Restaurant.Name = "${req.params.name}"`, (error, results) =>{
        if(error){
            return console.log(error);
        }
            res.send(results)
        })

    })

app.post('/restaurant', (req, res) => {
    pool.query(`INSERT INTO Restaurant(Name, Adresse,Kategorie) VALUES("${req.body.Name}", "${req.body.Adresse}","${req.body.Kategorie}")`,(error,result)=>{
        if(error){
            return console.log(error);
        }
            res.send(`Name : ${req.body.Name} Adresse : ${req.body.Adresse} Kategorie:${req.body.Kategorie}`)
        })
    })

app.put('/restaurant/:name', (req, res) => {

    pool.query(`UPDATE Restaurant SET Name = "${req.body.Name}", Adresse = "${req.body.Adresse}", Kategorie = "${req.body.Kategorie}" WHERE Name = "${req.params.name}"`, (error, result) => {
        if(error){
            return console.log(error);
        }
            res.send(`Name : ${req.body.Name} Adresse : ${req.body.Adresse} Kategorie:${req.body.Kategorie}`)
        })
})

app.delete('/restaurant/:name', (req, res) => {
    pool.query(`DELETE FROM Restaurant WHERE Name = "${req.params.name}"`, (error, results) => {
        if(error){
            return console.log(error);
        }
            res.send("Restaurant Deleted")
        })
    
})






app.listen(port, hostname, () => {
    console.log(`Server gestartet ${hostname}:${port}.`);
});
