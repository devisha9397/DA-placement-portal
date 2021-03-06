var express = require('express');
var router = express.Router();
var que = require('../models/question_model');

router.get('/:id?', function (req, res, next) {

    if (req.params.id) {

        que.getQueById(req.params.id, function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else {

        que.getAllque(function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }

        });
    }
});

router.post('/', function (req, res, next) {

    que.addQue(req.body, function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
                  que.getrecentques((err, questions) => {
                    if(err) throw err;
                 else {

                         res.json({
                                      success: true,
                                        questions
                
                              });
                    }
    
                  });

             }
    });
});

router.delete('/:id', function (req, res, next) {

    que.deleteQue(req.params.id, function (err, count) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(count);
        }

    });
});
router.put('/:id?', function (req, res, next) {
	console.log("put");
    que.updateQue(req.params.id, req.body, function (err, rows) {

        if (err) {
            res.json(err);
        }
        else {
            res.status(200).json(rows);
        }
    });
});
module.exports = router;