const express = require('express');
const router = express.Router();

const Recipe = require('../models/recipe');

//retrieve recipes
router.get('/recipes',(req,res,next)=>{
  Recipe.find(function (err,recipes) {
    res.json(recipes);
  })
});

//add recipy
router.post('/recipe',(req,res,next)=>{
  let newRecipe = new Recipe({
    name : req.body.name,
    volume : req.body.volume,
    total_strength : req.body.total_strength,
    des_pg : req.body.des_pg,
    des_vg : req.body.des_vg,
    nic_strength : req.body.nic_strength,
    nic_pg : req.body.nic_pg,
    nic_vg : req.body.nic_vg,
    nic_vol :req.body.nic_vol,
    flavor : req.body.flavor,
    date : req.body.date
  });

  newRecipe.save((err,recipe)=>{
    if(err){
      res.json({msg: 'Failed to add recipe'+err});
    }else{
      res.json({msg:'Recipe added successfully'});
    }
  })
});

router.delete('/recipe/:id',(req,res,next)=>{
  Recipe.remove({_id:req.params.id},function (err,result) {
    if(err){
      res.json(err);
    }else{
      res.json(result);
    }
  })
});


router.get('/login',(req,res,next)=>{
  res.send('login');
});

router.get('/register',(req,res,next)=>{
  res.send('register');
});

router.get('/logout', (req, res,next) => {
  res.send('You are on the logout page');
});

router.get('/', function (req, res, next) {
  return res.sendFile(path.join(__dirname + '/src/app/components/login/login.component.html'));
});
module.exports =router;
