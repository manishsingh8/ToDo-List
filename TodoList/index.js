const express =  require('express');
const path = require('path');

const port = 7000;

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
    return res.render('form',{
        title:'Todo List',
        user_list:list
    });
});

// to read and save the data sent from browser
app.post('/user-list',function(req,res){
    list.push(req.body);
    console.log(req.body);
    return res.redirect('/');
});


//to delete the list
app.get('/delete-list',(req,res)=>{
    console.log(req.query);
    let index = list.findIndex(item => item.name === req.query.name);
    list.splice(index,1);
    return res.redirect('back');
}) 

app.listen(port,(err)=>{
    if(err){
        console.log("Error",err);
        return
    }
    console.log('Server is running on port',port);
});