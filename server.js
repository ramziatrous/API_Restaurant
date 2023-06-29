const express = require('express');
require('./config/connect');
const restaurant =require('./models/restau');
var cors = require('cors');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


app.post( '/add' , (req , res)=>{

    let  data = {
     "name": req.body.name ,
     "adresse": req.body.adresse ,
     "kategorie": req.body.kategorie ,
    }
     restau = new restaurant(data);
     restau.save()
         .then(
             (savedrestaurant)=>{
                 res.send(`restaurant saved \n Name : ${req.body.name}\n Adresse : ${req.body.adresse} \n Kategorie : ${req.body.kategorie}`)
             }
         )
         .catch(
             (err)=>{
                 res.send(err)
             }
         )
 });

 app.get('/getall', (req,res)=>{
    
    restaurant.find()
    .then(
        (restaurants)=>{

            res.send(restaurants);

        })
        .catch(
            (err)=>{
                res.send(err)
            }
        )
 });


 
 app.post('/getbyname', (req,res)=>{
    
    restaurant.findOne({ name:req.body.name})
    .then(
        (restauranta)=>{
            console.log(req.body.name)
            res.send(restauranta);
        })
        .catch(
            (err)=>{
                res.send(err)
            }
        )
    
 });

 app.post('/Updatebyname', (req,res)=>{

    let newdata = {
        "name": req.body.name ,
     "adresse": req.body.adresse ,
     "kategorie": req.body.kategorie ,
    };

    restaurant.findOneAndUpdate({name:req.body.name}, newdata)
    .then(
        (updated)=>{
            res.send(updated)
        })
        .catch(
            (err)=>{
                res.send(err)
            }
        )
    
 });


 app.post('/deletebyname', (req,res)=>{
    
    restaurant.findOneAndDelete({ name:req.body.name})
    .then(
        (deletedrestaurant)=>{
            
            res.send("restaurant deleted");
        })
        .catch(
            (err)=>{
                res.send(err)
            }
        )
    
 });


 app.post('/deletebyid', (req,res)=>{
 
    restaurant.findOneAndDelete({ _id:req.body.id})
    .then(
        (deletedrestaurant)=>{
            res.send("restaurant deleted");
        })
        .catch(
            (err)=>{
                res.send(err)
            }
        )
    
 });
 

app.listen(3000 , ()=>{

    console.log('server work');
})