const express =  require('express');
const path = require('path');

const port = 7000;
const db = require('./config/mongoose');
const ItemList = require('./models/listitem');

const app = express();

// Readign static file assets
app.use(express.static('assets'));


// setting up template engine
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

// middleware or parser
app.use(express.urlencoded());

let list = [
    {
        name:'Manish',
    },
    {
        name:'Subham',
    }
];

app.get('/',(req,res)=>{
    ItemList.find({})
    .then((Item)=>{
        return res.render('form',{
            title:'Todo List',
            user_list:Item,
        });
    })
    .catch((err)=>{
        console.log('Error',err);
        return;
    })
});

// to read and save the data sent from browser
app.post('/user-list',function(req,res){
    ItemList.create({name:req.body.name})
    .then((newList)=>{
        console.log("*****",newList);
        return res.redirect('back');
    })
    .catch((err)=>{
        console.log("Error",err);
        return res.redirect('/');
    });
});


//to delete the list
app.get('/delete-list',(req,res)=>{ 
    let id = req.query.id;
    console.log(id);
    ItemList.findByIdAndDelete(id)
    .then((id)=>{
        console.log("Deleted Successfully item with id:",id);
        return res.redirect('back');
    }).catch((err)=>{
        console.log("Error while deleting the item");
        return res.redirect('back');
    })
}) 

app.listen(port,(err)=>{
    if(err){
        console.log("Error",err);
        return
    }
    console.log('Server is running on port',port);
});