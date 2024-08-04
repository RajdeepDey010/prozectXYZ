var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');

//at homepage
router.get('/', (req,res) => {
    //pass the query to database first
    dbConn.query('select * from employee order by salary desc', (err, records) => {
        if(err){
            req.flash(err);
            res.status(500).send({data: ''});
        }
        else{
            res.status(200).send({data:records});
            console.log({data:records})
        }

    });
});

module.exports =router;