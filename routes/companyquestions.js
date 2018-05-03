var express = require('express');
var router = express.Router();
var cquestions=require('../models/companyquestions_model');

router.get('/:id?/:id1?',function(req,res,next){
 
if(req.params.id){
 
cquestions.getccquestionsById(req.params.id,req.params.id1,function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else{
  res.json(rows);
  }
  });
 }
 else{

cquestions.getAllcquestions(function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(rows);
  }
 
 });
 }
 });

 router.post('/',function(req,res,next){

cquestions.addcquestions(req.body,function(err,result){
  if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(req.body);
  //res.end(JSON.stringify(result));
	//https://www.9lessons.info/2017/02/create-restful-api-nodejs-mysql.html  
  }
  });
 });

 router.delete('/:id?/:id1?',function(req,res,next){
 
cquestions.deletecquestions(req.params.id,req.params.id1,function(err,count){
 
if(err)
  {
  res.json(err);
  }
  else
  {
  res.json(count);
  }
 
});
 });
router.put('/:id?/:id1?',function(req,res,next){
 
cquestions.updatecquestions(req.params.id,req.params.id1,req.body,function(err,rows){
 
if(err)
  {
  res.json(err);
  }
  else
  {
  res.status(200).json(rows);
  }
  });
 });
 module.exports = router;