const fs = require('fs');
const path = require("path");

const imgUrl = (file)=>{
    var destination = file.destination,
        filename = file.filename,
        mimetype = file.mimetype.replace(/image\//,'.'),
        path = destination.replace(/public/,'static'),
        imgUrl = '/'+ path + filename + mimetype;
    return imgUrl;
}

const reName = (imgUrl) =>{
        var path =  __dirname + imgUrl;
           path = path.replace(/\//,/\\/);
           path = path.replace(/static/,'');
        var NewImgUrl = path.replace(/until/,'public');
        var OldImgUrl  =  NewImgUrl.substr(0,NewImgUrl.indexOf('.'));

        fs.rename(OldImgUrl,NewImgUrl,(err)=>{
            console.log(err);
        })
}

const delFile = (imgUrl) =>{
    var path =  __dirname + imgUrl;
    path = path.replace(/\//,/\\/);
    path = path.replace(/static/,'');
 var NewImgUrl = path.replace(/until/,'public');
    fs.unlink(NewImgUrl,(err)=>{
        console.log(err)
    })
}

module.exports = {
    imgUrl,
    reName,
    delFile
}