
const User = require('../models/model');
const userCtrl = {};

userCtrl.getAll = (req, res, next)=>{
    for (let x in req.query) {
        req.query[x] = new RegExp(req.query[x], 'i');
    }
    User.find(req.query).then((data)=>{
        res.status(200).send(data);
    }).catch(next);
};

userCtrl.textSearch = (req, res, next)=>{ 
    search = new RegExp(req.query.q, 'i');
    User.find({$or:[{'name':search}]})
      .then((data)=>{
        res.status(200).send(data);
    }).catch(next);
};

userCtrl.get = (req, res, next)=>{
    User.findById(req.params.id).then((data)=>{
        res.status(200).send(data);
    }).catch(next);
};

userCtrl.create = (req, res, next)=>{
    // req.body.password = req.body.tel_no_res;
    // console.log(req.body);
    // console.log(req.body.image);
    User.create(req.body).then((data)=>{
        res.status(201).send(data);
    }).catch(next);
};

userCtrl.change_password = (req, res, next)=>{
     User.findById(req.params.id).then((data)=>{
        if (req.body.current_password == req.body.password) {
            Member.findByIdAndUpdate({_id:req.params.id}, {password: req.body.password }).then((data)=>{
                res.status(200).send({
                    success:true, 
                    data:data, 
                    message:""
                });
            });
        } else {
            res.status(400).send({
                success:false,
                message:""
            });
        }
    }).catch(err => {
        res.status(400).send({
            success:false,
            message: err.message 
        })
    });
};

userCtrl.update = (req, res, next)=>{
    User.findByIdAndUpdate({_id:req.params.id}, req.body).then((data)=>{
        User.findById(req.params.id).then((data)=>{
            res.status(200).send({
                success:true, 
                data:data, 
                message:""
            });
        });
    }).catch(err => {
        res.status(400).send({
            success:false,
            message: err.message 
        })
    });
};

userCtrl.delete = (req, res, next)=>{
    User.findByIdAndRemove({_id:req.params.id}).then((data)=>{
        res.status(200).send(data);
    }).catch(next);
};

exports = module.exports = userCtrl;