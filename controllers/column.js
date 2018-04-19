const Column = require('../models/column');

//查
const getFirst =(req,res)=>{
   Column.find({})
         .exec()
         .then(data=>{
            res.render('columnList',{
                data:data 
            })
            // res.send(data);
         })
         .catch(err=>{
          res.send({
            status:-1,
            msg:"err",
            data:err.message.toString()
          })
        })
}

//增
const getFrom =(req,res)=>{
  var data = {
    orderNo:'',
    name:'',
    Catalog:'',
    Id:''
}
  res.render('columnFrom',{
      data:data
  });
}

//存 更
const createCio = (req,res)=>{
    const data = req.body;
    var id = req.body._id;
    if(id){
        Column.update({_id:req.body._id}, req.body,{ multi: true })
              .exec()
              .then(re=>{
                 res.redirect('/admin/column')
              })
              .catch(err=>{
                res.send({
                  status:-1,
                  msg:"err",
                  data:err.message.toString()
                })
              })
    }else{
        const instanceCio = new Column({
          orderNo:data.orderNo,
          name:data.name,
          Catalog:data.Catalog,
          Id:data.Id
        })
        instanceCio.save()
                    .then(data=>{
                      res.redirect('/admin/column')
                    })
                    .catch(err=>{
                      res.send({
                        status:-1,
                        msg:"err",
                        data:err.message.toString()
                      })
                    })
    }
}

//改
const updateCio = (req,res)=>{
    var id = req.params.id
    if(id){
      Column.findById(id,function(err,data){
        res.render('columnFrom',{
          data: data
        })
      })
    }  
}

//删
const deleteCio = (req,res)=>{
  var id = req.query.id
  Column.remove({_id:id})
            .then(re=>{
              res.json({success:1})
            })
            .catch(err=>{
              res.send({
                status:-1,
                msg:"err",
                data:err.message.toString()
              })
            })
}

module.exports = {
  createCio,
  updateCio,
  deleteCio,
  getFirst,
  getFrom
}
