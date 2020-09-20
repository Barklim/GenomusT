const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const config = require('./config/config').get(process.env.NODE_ENV);
const app = express();
//const api = express.Router();

mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE)

const { User } = require('./models/user'); 
const { Book } = require('./models/book');
const { Gen } = require('./models/gen');
const { IGen } = require('./models/igen');
const { auth } = require('./middleware/auth');

app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static('client/build'))

// GET //
app.get('/api/auth',auth,(req,res)=>{
    res.json({
        isAuth:true,
        id:req.user._id,
        email:req.user.email,
        name:req.user.name,
        lastname:req.user.lastname,
        genId:req.user.genId,
        role:req.user.role
    })
});

app.get('/api/logout',auth,(req,res)=>{
    req.user.deleteToken(req.token,(err,user)=>{
        if(err) return res.status(400).send(err);
        res.sendStatus(200)
    })
})

// мб 0браб0дадь
app.get('/api/getBook',(req,res)=>{
    let id = req.query.id;

    Book.findById(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.send(doc);
    })
})

app.get('/api/allow',(req,res)=>{
        Book.findOne({genId:req.query.user}).exec((err,doc)=>{

            if(!doc) return res.send({
                allowCheck: false,
                allowCompat: false,
                allowShow: false
            });
            if(err) return res.send({
                allowCheck: false,
                allowCompat: false,
                allowShow: false
            });
            if(doc) return res.send({
                allowCheck: doc.allowCheck,
                allowCompat: doc.allowCompat,
                allowShow: doc.allowShow
            }); 
        })
})



app.get('/api/getGen',(req,res)=>{
    let id = req.query.id;

    Gen.findById(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.send(doc);
    })
})

// TEST
app.get('/api/test_gens',(req,res)=>{
    let id = req.query.id;

    Gen.findById(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        //res.send(doc);

        if ( false ) {
            res.send(doc);
        } else {

            Gen.findById(id,(err,doc)=>{
                if(err) return res.status(400).send(err);
                //res.send(doc);
                    res.send(false);
            })

        }
    })
})

/*app.get('/api/getIgen',(req,res)=>{
    let id = req.query.id;

    IGen.findById(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.send(doc);
    })
})*/

app.get('/api/getUser',(req,res)=>{
    let id = req.query.id;

    User.findById(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.send(doc);
    })
})

app.get('/api/books',(req,res)=>{
    // locahost:3001/api/books?skip=3&limit=2&order=asc
    let skip = parseInt(req.query.skip);
    let limit = parseInt(req.query.limit);
    let order = req.query.order;

    // ORDER = asc || desc
    Book.find({allowCompat:true}).skip(skip).sort({_id:order}).limit(limit).exec((err,doc)=>{
        if(err) return res.status(400).send(err);
        res.send(doc);
    })
})

app.get('/api/getReviewer',(req,res)=>{
    let id = req.query.id;

    User.findById(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json({
            name: doc.name,
            lastname: doc.lastname
        })
    })
})

app.get('/api/users',(req,res)=>{
    let id = req.query.id;
    var allow = true; // Убрадь

    User.findById(id,(err,doc)=>{
        if(err) return res.status(400).send(err);

        if(!doc) return res.status(400).send(
                [{
                    "isFail": "true",
                    "_id": "FAKEiD8ab5d98719d0467351",
                    "email": "test@mail.ru",
                    "password": "$2a$10$FAKEU5NIygANxCwNZHdkUuWVf4HZ4dXY9wLQJ.6z/MUaQl8KcfkWe",
                    "name": "Fakename",
                    "lastname": "FakeLastname",
                    "__v": 0,
                    "genId": "FAKE00",
                    "role": 0
                }]
            );

        if(doc.role === 0) { 

            User.find({},(err,users)=>{
                if(err) return res.status(400).send(err);
                    res.status(200).send(users);
            })

        } else {
            res.json([{
                "isFail": "true",
                "_id": "FAKEiD8ab5d98719d0467359",
                "email": "test@mail.ru",
                "password": "$2a$10$FAKEU5NIygANxCwNZHdkUuWVf4HZ4dXY9wLQJ.6z/MUaQl8KcfkWe",
                "name": "Fakename",
                "lastname": "FakeLastname",
                "__v": 0,
                "genId": "FAKE00",
                "role": 0
            }])
        }
    })
})

app.get('/api/user_posts',(req,res)=>{
    Book.find({ownerId:req.query.user}).exec((err,docs)=>{
        if(err) return res.status(400).send(err);
        res.send(docs)
    })
})

app.get('/api/all_user_posts',(req,res)=>{
    let id = req.query.id;

    User.findById(id,(err,doc)=>{
        if(err) return res.status(400).send(err);

            if(!doc) return res.status(400).send(
                [{
                    "_id": "FAKE1d5331379f1f0c6671d4",
                    "updatedAt": "2019-01-26T16:53:42.322Z",
                    "createdAt": "2019-01-26T13:14:59.502Z",
                    "name": "testname",
                    "author": "test",
                    "rating": 5,
                    "ownerId": "FAKEe5a7e18c9b171c90ab13",
                    "__v": 0,
                    "allowCompat": false,
                    "allowCheck": false,
                    "genId": "FAKE13",
                    "price": "Неизвестно",
                    "pages": "32",
                    "img_url": "n/a",
                    "review": "test"
                }]
            );    

        if(doc.role === 0) { 

            Book.find({},(err,users)=>{
                if(err) return res.status(400).send(err);
                    res.status(200).send(users);
            })

        } else {
            res.json([{
                "_id": "FAKE2d5331379f1f0c6671d4",
                "updatedAt": "2019-01-26T16:53:42.322Z",
                "createdAt": "2019-01-26T13:14:59.502Z",
                "name": "testname",
                "author": "test",
                "rating": 5,
                "ownerId": "FAKEe5a7e18c9b171c90ab13",
                "__v": 0,
                "allowCompat": false,
                "allowCheck": false,
                "genId": "FAKE13",
                "price": "Неизвестно",
                "pages": "32",
                "img_url": "n/a",
                "review": "test"
            }])
        }
    })
})

app.get('/api/user_gens',(req,res)=>{
    let id = req.query.id;

    User.findById(id,(err,doc)=>{
        if(err) return res.status(400).send(err);

        if(!doc) return res.status(400).send(
            [{
                "_id": "5c4872e10c3fb61c80337cc0",
                "updatedAt": "2019-01-26T14:19:56.599Z",
                "createdAt": "2019-01-23T13:57:53.853Z",
                "ownerGenId": "FAKEe28ab5d98719d0467359",
                "__v": 0,
                "rule_29": 0,
                "rule_28": 0,
                "rule_27": 0,
                "rule_26": 0,
                "rule_25": 0,
                "rule_24": 0,
                "rule_23": 0,
                "rule_22": 0,
                "rule_21": 0,
                "rule_20": 0,
                "rule_19": 0,
                "rule_18": 0,
                "rule_17": 0,
                "rule_16": 0,
                "rule_15": 0,
                "rule_14": 0,
                "rule_13": 0,
                "rule_12": 0,
                "rule_11": 0,
                "rule_10": 0,
                "rule_9": 1,
                "rule_8": 1,
                "rule_7": 1,
                "rule_6": 1,
                "rule_5": 1,
                "rule_4": 1,
                "rule_3": 1,
                "rule_2": 1,
                "rule_1": 1,
                "rule_0": 1,
                "genId": "FAKE1"
            }]
        );

        if(doc.role === 0) { 

            Gen.find({},(err,docs)=>{
                if(err) return res.status(400).send(err);
                res.status(200).send(docs);
            })

        } else {
            res.json(
                [{
                    "_id": "5c4872e10c3fb61c80337cc0",
                    "updatedAt": "2019-01-26T14:19:56.599Z",
                    "createdAt": "2019-01-23T13:57:53.853Z",
                    "ownerGenId": "FAKEe28ab5d98719d0467359",
                    "__v": 0,
                    "rule_29": 0,
                    "rule_28": 0,
                    "rule_27": 0,
                    "rule_26": 0,
                    "rule_25": 0,
                    "rule_24": 0,
                    "rule_23": 0,
                    "rule_22": 0,
                    "rule_21": 0,
                    "rule_20": 0,
                    "rule_19": 0,
                    "rule_18": 0,
                    "rule_17": 0,
                    "rule_16": 0,
                    "rule_15": 0,
                    "rule_14": 0,
                    "rule_13": 0,
                    "rule_12": 0,
                    "rule_11": 0,
                    "rule_10": 0,
                    "rule_9": 1,
                    "rule_8": 1,
                    "rule_7": 1,
                    "rule_6": 1,
                    "rule_5": 1,
                    "rule_4": 1,
                    "rule_3": 1,
                    "rule_2": 1,
                    "rule_1": 1,
                    "rule_0": 1,
                    "genId": "FAKE2"
                }]
            )
        }
    })
})


app.get('/api/user_gen',(req,res)=>{
    Gen.findOne({genId:req.query.user}).exec((err,docs)=>{
        if(err) return res.status(400).send(err);
        res.send(docs)
    })
})

app.get('/api/user_gen_special',(req,res)=>{
    Gen.find({genId:req.query.user}).exec((err,docs)=>{
        if(err) return res.status(400).send(err);
        res.send(docs)
    })
})

app.get('/api/user_other_gen',(req,res)=>{
    Gen.findOne({genId:req.query.user}).exec((err,docs)=>{
        if(err) return res.send({
            rule_0: 0,
            rule_1: 0,
            rule_2: 0,
            rule_3: 0,
            rule_4: 0,
            rule_5: 0,
            rule_6: 0,
            rule_7: 0,
            rule_8: 0,
            rule_9: 0,
            rule_10: 0,
            rule_11: 0,
            rule_12: 0,
            rule_13: 0,
            rule_14: 0,
            rule_15: 0,
            rule_16: 0,
            rule_17: 0,
            rule_18: 0,
            rule_19: 0,
            rule_20: 0,
            rule_21: 0,
            rule_22: 0,
            rule_23: 0,
            rule_24: 0,
            rule_25: 0,
            rule_26: 0,
            rule_27: 0,
            rule_28: 0,
            rule_29: 0,
        });
        if(docs) return res.send({
            rule_0: docs.rule_0,
            rule_1: docs.rule_1,
            rule_2: docs.rule_2,
            rule_3: docs.rule_3,
            rule_4: docs.rule_4,
            rule_5: docs.rule_5,
            rule_6: docs.rule_6,
            rule_7: docs.rule_7,
            rule_8: docs.rule_8,
            rule_9: docs.rule_9,
            rule_10: docs.rule_10,
            rule_11: docs.rule_11,
            rule_12: docs.rule_12,
            rule_13: docs.rule_13,
            rule_14: docs.rule_14,
            rule_15: docs.rule_15,
            rule_16: docs.rule_16,
            rule_17: docs.rule_17,
            rule_18: docs.rule_18,
            rule_19: docs.rule_19,
            rule_20: docs.rule_20,
            rule_21: docs.rule_21,
            rule_22: docs.rule_22,
            rule_23: docs.rule_23,
            rule_24: docs.rule_24,
            rule_25: docs.rule_25,
            rule_26: docs.rule_26,
            rule_27: docs.rule_27,
            rule_28: docs.rule_28,
            rule_29: docs.rule_29,
        });
        res.send(docs)
    })
})

app.get('/api/user_compat_gens',(req,res)=>{

    Gen.find({genId: {$in : [req.query.user_first, req.query.user_sec]}}).exec((err,docs)=>{
        if(err) return res.send({
            rule_0: 0,
            rule_1: 0,
            rule_2: 0,
            rule_3: 0,
            rule_4: 0,
            rule_5: 0,
            rule_6: 0,
            rule_7: 0,
            rule_8: 0,
            rule_9: 0,
            rule_10: 0,
            rule_11: 0,
            rule_12: 0,
            rule_13: 0,
            rule_14: 0,
            rule_15: 0,
            rule_16: 0,
            rule_17: 0,
            rule_18: 0,
            rule_19: 0,
            rule_20: 0,
            rule_21: 0,
            rule_22: 0,
            rule_23: 0,
            rule_24: 0,
            rule_25: 0,
            rule_26: 0,
            rule_27: 0,
            rule_28: 0,
            rule_29: 0,
        });
        if(docs.length === 2 ) {
            //console.log(docs.length)
            //console.log(docs[0])
            //console.log(docs[1])

                // ((docs[0].rule_0 === 1 && docs[1].rule_0 === 1) ||
                // (docs[0].rule_1 === 1 && docs[1].rule_1 === 1) ||
                // (docs[0].rule_2 === 1 && docs[1].rule_2 === 1) ||
                // (docs[0].rule_3 === 1 && docs[1].rule_3 === 1) ||
                // (docs[0].rule_4 === 1 && docs[1].rule_4 === 1) ||
                // (docs[0].rule_5 === 1 && docs[1].rule_5 === 1) ||
                // (docs[0].rule_6 === 1 && docs[1].rule_6 === 1) ||
                // (docs[0].rule_7 === 1 && docs[1].rule_7 === 1) ||
                // (docs[0].rule_8 === 1 && docs[1].rule_8 === 1) ||
                // (docs[0].rule_9 === 1 && docs[1].rule_9 === 1) ||
                // (docs[0].rule_10 === 1 && docs[1].rule_10 === 1) ||
                // (docs[0].rule_11 === 1 && docs[1].rule_11 === 1) ||
                // (docs[0].rule_12 === 1 && docs[1].rule_12 === 1) ||
                // (docs[0].rule_13 === 1 && docs[1].rule_13 === 1) ||
                // (docs[0].rule_14 === 1 && docs[1].rule_14 === 1) ||
                // (docs[0].rule_15 === 1 && docs[1].rule_15 === 1) ||
                // (docs[0].rule_16 === 1 && docs[1].rule_16 === 1) ||
                // (docs[0].rule_17 === 1 && docs[1].rule_17 === 1) ||
                // (docs[0].rule_18 === 1 && docs[1].rule_18 === 1) ||
                // (docs[0].rule_19 === 1 && docs[1].rule_19 === 1) ||
                // (docs[0].rule_20 === 1 && docs[1].rule_20 === 1) ||
                // (docs[0].rule_21 === 1 && docs[1].rule_21 === 1) ||
                // (docs[0].rule_22 === 1 && docs[1].rule_22 === 1) ||
                // (docs[0].rule_23 === 1 && docs[1].rule_23 === 1) ||
                // (docs[0].rule_24 === 1 && docs[1].rule_24 === 1) ||
                // (docs[0].rule_25 === 1 && docs[1].rule_25 === 1) ||
                // (docs[0].rule_26 === 1 && docs[1].rule_26 === 1) ||
                // (docs[0].rule_27 === 1 && docs[1].rule_27 === 1) ||
                // (docs[0].rule_28 === 1 && docs[1].rule_28 === 1) ||
                // (docs[0].rule_29 === 1 && docs[1].rule_29 === 1) )

            if (docs[0].rule_0 === 1 && docs[1].rule_0 === 1) return res.send({message: 'bad', info: 'rule_0'});
            if (docs[0].rule_1 === 1 && docs[1].rule_1 === 1) return res.send({message: 'bad', info: 'rule_1'});
            if (docs[0].rule_2 === 1 && docs[1].rule_2 === 1) return res.send({message: 'bad', info: 'rule_2'}); 
            if (docs[0].rule_3 === 1 && docs[1].rule_3 === 1) return res.send({message: 'bad', info: 'rule_3'}); 
            if (docs[0].rule_4 === 1 && docs[1].rule_4 === 1) return res.send({message: 'bad', info: 'rule_4'}); 
            if (docs[0].rule_5 === 1 && docs[1].rule_5 === 1) return res.send({message: 'bad', info: 'rule_5'});
            if (docs[0].rule_6 === 1 && docs[1].rule_6 === 1) return res.send({message: 'bad', info: 'rule_6'});
            if (docs[0].rule_7 === 1 && docs[1].rule_7 === 1) return res.send({message: 'bad', info: 'rule_7'});
            if (docs[0].rule_8 === 1 && docs[1].rule_8 === 1) return res.send({message: 'bad', info: 'rule_8'});
            if (docs[0].rule_9 === 1 && docs[1].rule_9 === 1) return res.send({message: 'bad', info: 'rule_9'});
            if (docs[0].rule_10 === 1 && docs[1].rule_10 === 1) return res.send({message: 'bad', info: 'rule_10'});
            if (docs[0].rule_11 === 1 && docs[1].rule_11 === 1) return res.send({message: 'bad', info: 'rule_11'});
            if (docs[0].rule_12 === 1 && docs[1].rule_12 === 1) return res.send({message: 'bad', info: 'rule_12'});
            if (docs[0].rule_13 === 1 && docs[1].rule_13 === 1) return res.send({message: 'bad', info: 'rule_13'});
            if (docs[0].rule_14 === 1 && docs[1].rule_14 === 1) return res.send({message: 'bad', info: 'rule_14'});
            if (docs[0].rule_15 === 1 && docs[1].rule_15 === 1) return res.send({message: 'bad', info: 'rule_15'});
            if (docs[0].rule_16 === 1 && docs[1].rule_16 === 1) return res.send({message: 'bad', info: 'rule_16'});
            if (docs[0].rule_17 === 1 && docs[1].rule_17 === 1) return res.send({message: 'bad', info: 'rule_17'});
            if (docs[0].rule_18 === 1 && docs[1].rule_18 === 1) return res.send({message: 'bad', info: 'rule_18'});
            if (docs[0].rule_19 === 1 && docs[1].rule_19 === 1) return res.send({message: 'bad', info: 'rule_19'});
            if (docs[0].rule_20 === 1 && docs[1].rule_20 === 1) return res.send({message: 'bad', info: 'rule_20'});
            if (docs[0].rule_21 === 1 && docs[1].rule_21 === 1) return res.send({message: 'bad', info: 'rule_21'});
            if (docs[0].rule_22 === 1 && docs[1].rule_22 === 1) return res.send({message: 'bad', info: 'rule_22'});
            if (docs[0].rule_23 === 1 && docs[1].rule_23 === 1) return res.send({message: 'bad', info: 'rule_23'});
            if (docs[0].rule_24 === 1 && docs[1].rule_24 === 1) return res.send({message: 'bad', info: 'rule_24'});
            if (docs[0].rule_25 === 1 && docs[1].rule_25 === 1) return res.send({message: 'bad', info: 'rule_25'});
            if (docs[0].rule_26 === 1 && docs[1].rule_26 === 1) return res.send({message: 'bad', info: 'rule_26'});
            if (docs[0].rule_27 === 1 && docs[1].rule_27 === 1) return res.send({message: 'bad', info: 'rule_27'});
            if (docs[0].rule_28 === 1 && docs[1].rule_28 === 1) return res.send({message: 'bad', info: 'rule_28'});
            if (docs[0].rule_29 === 1 && docs[1].rule_29 === 1) return res.send({message: 'bad', info: 'rule_29'});

            return res.send({message: 'good'});

        } else {
            return res.send({message: 'check'});
            //return res.send({message: 'bad'});
        }
    })
})

app.get('/api/getBookCompat',(req,res)=>{
    Book.find({genId:req.query.user}).exec((err,docs)=>{
        if(err) return res.status(400).send(err);
        res.send(docs)
    })
})

//x
/*app.get('/api/user_role',(req,res)=>{
})*/

//x
/*app.get('/api/getUser_role',(req,res)=>{
})*/

// x - без0пасный мед0д
app.get('/api/getUserRole',(req,res)=>{
    let id = req.query.id;

 
    User.findById(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        console.log(doc.role);
        if(doc.role === 1) {
                res.json({
                name: doc.name,
                lastname: doc.lastname,
                doc:doc
            })
        } else {
                res.json({
                name: doc.name,
                lastname: doc.lastname,
                doc:doc
            })
        }
    })
})

// POST //
app.post('/api/book',(req,res)=>{
    const book = new Book(req.body)

    book.save((err,doc)=>{
        if(err) return res.status(400).send(err);
        res.status(200).json({
            post:true,
            bookId: doc._id
        })
    })
})
/*app.post('/api/book',(req,res)=>{
        const book = new Book(req.body)
        //const gen = new Gen(req.body);

        Book.findOne({'genId':req.body.genId},(err,nextbook)=>{
            if(nextbook) { 
                if(err) return res.json({success1:false});
                    res.status(200).json({
                    success:false,
                    nextbook:nextbook
                })

            } else {
                book.save((err,doc)=>{
                    if(err) return res.json({success2:false});
                        res.status(200).json({
                        success:true,
                        nextbook:nextbook
                        })
                    })
            }
        })
})*/

app.post('/api/gen',(req,res)=>{
    const gen = new Gen(req.body)

    gen.save((err,doc)=>{
        if(err) return res.status(400).send(err);
        res.status(200).json({
            post:true,
            gId: doc._id
        })
    })
})

//x
/*app.post('/api/igen',(req,res)=>{
})*/

app.post('/api/register',(req,res)=>{
    const user = new User(req.body);

    user.save((err,doc)=>{
        if(err) return res.json({success:false});
        res.status(200).json({
            success:true,
            user:doc
        })
    })
})

// Админская регистрация user's
// app.post('/api/registerScreen',(req,res)=>{
//         const user = new User(req.body);
//         const gen = new Gen(req.body);

//         // Обязательно со стороны сервера не давать возможность создавать юзера с правами админа.
//         user.role = 1;

//         Gen.findOne({'genId':req.body.genId},(err,gen)=>{
//                         //console.log(user);
//             console.log(user);
//                 //console.log(gen);
//             console.log(gen);
//             if(gen) { 
//                 user.save((err,doc)=>{
//                     //if(user.genId === gen.genId) { messageAdditional = 'Пользователь с таким GenId уже зарегестрирован' }; //return res.json({isAuth:false, success:false, message: 'Пользователь с таким GenId уже зарегестрирован'});
//                     if(err) return res.json({isAuth:false, success:false, message: 'Пользователь с такой почтой или GenId уже зарегестрирован' }); //"E11000 duplicate key error collection: genomus.users index: genId_1 dup key: { : "111010" }"
//                         res.status(200).json({
//                         success:true,
//                         user:doc
//                         })
//                     })

//             } else {
//                 return res.json({isAuth:false, success:false, message:'Такого GenId нет в базе данных'})
//             }
//         })
// })

// Админская регистрация user's
app.post('/api/registerScreen',(req,res)=>{
        const user = new User(req.body);
        const gen = new Gen(req.body);

        // Обязательно со стороны сервера не давать возможность создавать юзера с правами админа.
        user.role = 1;

        Gen.findOne({'genId':req.body.genId},(err,gen)=>{
                        //console.log(user);
            console.log(user);
                //console.log(gen);
            console.log(gen);
            if(gen) { 
                user.save((err,doc)=>{
                    //if(user.genId === gen.genId) { messageAdditional = 'Пользователь с таким GenId уже зарегестрирован' }; //return res.json({isAuth:false, success:false, message: 'Пользователь с таким GenId уже зарегестрирован'});
                    if(err) return res.json({isAuth:false, success:false, message: 'Пользователь с такой почтой или GenId уже зарегестрирован' }); //"E11000 duplicate key error collection: genomus.users index: genId_1 dup key: { : "111010" }"
                        res.status(200).json({
                        success:true,
                        user:doc
                        })
                    })

            } else {
                return res.json({isAuth:false, success:false, message:'Такого GenId нет в базе данных'})
            }
        })
})

// Изменение пароля юзера.
app.post('/api/userChangePassword1',(req,res)=>{
        const user = new User(req.body);
        const gen = new Gen(req.body);

        console.log('USER');
        console.log(req.body);
        console.log(user);

        // Обязательно со стороны сервера не давать возможность создавать юзера с правами админа.
        //user.role = 1;

        // Gen.findOne({'genId':req.body.genId},(err,gen)=>{
        //                 //console.log(user);
        //     console.log('USER');
        //     console.log(req.body);
        //     console.log(res.body);
        //     console.log(user);
        //     console.log(gen);
        //     if(gen) { 
        //         user.save((err,doc)=>{
        //             //if(user.genId === gen.genId) { messageAdditional = 'Пользователь с таким GenId уже зарегестрирован' }; //return res.json({isAuth:false, success:false, message: 'Пользователь с таким GenId уже зарегестрирован'});
        //             if(err) return res.json({isAuth:false, success:false, message: 'Пользователь с такой почтой или GenId уже зарегестрирован' }); //"E11000 duplicate key error collection: genomus.users index: genId_1 dup key: { : "111010" }"
        //                 res.status(200).json({
        //                 success:true,
        //                 user:doc
        //                 })
        //             })

        //     } else {
        //         return res.json({isAuth:false, success:false, message:'Такого GenId нет в базе данных'})
        //     }
        // })



    //     User.findOne({'email':req.body.email},(err,user)=>{
    //     //if(!user) return res.json({isAuth:false, success:false, message:'Не удалось войти, email не найден'})

    //     // Book.findByIdAndUpdate(req.body._id,req.body,{new:true},(err,doc)=>{

    //     user.comparePassword(req.body.password,(err,isMatch)=>{
    //         if(!isMatch) return res.json({
    //             isAuth:false,
    //             success:false,
    //             message:'Неверный пароль'
    //         });

    //         user.generateToken((err,user)=>{
    //             if(err) return res.status(400).send(err);
    //             res.cookie('auth',user.token).json({
    //                 isAuth:true,
    //                 success:true,
    //                 id:user._id,
    //                 email:user.email
    //             })
    //         })
    //     })
    // })

    //    User.findByIdAndUpdate(req.body._id,req.body,{new:true},(err,doc)=>{
    //User.findOne(req.body._id,req.body,{new:true},(err,doc)=>{
        //'genId':req.body.genId
        //Gen.findOne({'genId':req.body.genId},(err,gen)=>{
        //User.findOne({'genId':req.body.genId},(err,gen)=>{

        User.findOne({'_id':req.body._id},(err,user2)=>{
        //User.findByIdAndUpdate({'_id':req.body._id},(err,user2)=>{

                console.log('USER 2');
                console.log(err);
                console.log(user2);
                // Тут пароль!

    //                 Book.findByIdAndUpdate(req.body._id,req.body,{new:true},(err,doc)=>{
    //     if(err) return res.status(400).send(err);
    //     res.json({
    //         success:true,
    //         doc
    //     })
    // })

        if(err) return res.status(400).send(err);

        // user.comparePassword(req.body.password,(err,isMatch)=>{

        //     if(!isMatch) return res.json({
        //         isAuth:false,
        //         success:false,
        //         message:'Неверный пароль'
        //     });

        // user.save((err,doc)=>{

        //         console.log('USER 3');
        //         console.log(err);
        //         console.log(doc);

        //     //if(user.genId === gen.genId) { messageAdditional = 'Пользователь с таким GenId уже зарегестрирован' }; //return res.json({isAuth:false, success:false, message: 'Пользователь с таким GenId уже зарегестрирован'});
        //     if(err) return res.json({isAuth:false, success:false, message: 'Пользователь с такой почтой или GenId уже зарегестрирован' }); //"E11000 duplicate key error collection: genomus.users index: genId_1 dup key: { : "111010" }"
        //         res.status(200).json({
        //         success:true,
        //         user:doc
        //     })
        // })

        // user.comparePassword(req.body.password,(err,isMatch)=>{
        //         console.log('USER 3');
        //         console.log(err);
        //         console.log(isMatch);

        //     if(!isMatch) return res.json({
        //         isAuth:false,
        //         message:'Неверный пароль'
        //     });
        // })

                user.save((err,doc)=>{

                console.log('USER 3');
                console.log(err);
                console.log(doc);

                    //if(user.genId === gen.genId) { messageAdditional = 'Пользователь с таким GenId уже зарегестрирован' }; //return res.json({isAuth:false, success:false, message: 'Пользователь с таким GenId уже зарегестрирован'});
                    if(err) return res.json({isAuth:false, success:false, message: 'Пользователь с такой почтой или GenId уже зарегестрирован' }); //"E11000 duplicate key error collection: genomus.users index: genId_1 dup key: { : "111010" }"
                        res.status(200).json({
                        success:true,
                        user:doc
                        })
                    })

        // res.json({
        //     success:false,
        //     message:'test',
        //     doc
        // })

        //})
    })
})

// Изменение пароля юзера.
app.post('/api/userChangePassword2',(req,res)=>{
        const user = new User(req.body);
        const gen = new Gen(req.body);

        console.log('USER');
        console.log(req.body);
        console.log(user);

        // User.findOne({'_id':req.body._id},(err,user2)=>{

        //         console.log('USER 2');
        //         console.log(err);
        //         console.log(user2);
        //         // Тут пароль!

        // if(err) return res.status(400).send(err);

        //         user.save((err,doc)=>{

        //                 console.log('USER 3');
        //         console.log(err);
        //         console.log(doc);

        //             //if(user.genId === gen.genId) { messageAdditional = 'Пользователь с таким GenId уже зарегестрирован' }; //return res.json({isAuth:false, success:false, message: 'Пользователь с таким GenId уже зарегестрирован'});
        //             if(err) return res.json({isAuth:false, success:false, message: 'Пользователь с такой почтой или GenId уже зарегестрирован' }); //"E11000 duplicate key error collection: genomus.users index: genId_1 dup key: { : "111010" }"
        //                 res.status(200).json({
        //                 success:true,
        //                 user:doc
        //                 })
        //             })

        //    !!!

                //         user.save((err,doc)=>{

                //         console.log('USER 3');
                // console.log(err);
                // console.log(doc);

                //     //if(user.genId === gen.genId) { messageAdditional = 'Пользователь с таким GenId уже зарегестрирован' }; //return res.json({isAuth:false, success:false, message: 'Пользователь с таким GenId уже зарегестрирован'});
                //     if(err) return res.json({isAuth:false, success:false, message: 'Пользователь с такой почтой или GenId уже зарегестрирован' }); //"E11000 duplicate key error collection: genomus.users index: genId_1 dup key: { : "111010" }"
                //         res.status(200).json({
                //         success:true,
                //         user:doc
                //         })
                //     })

            User.findByIdAndUpdate(req.body._id,req.body,{new:true},(err,doc)=>{
                        console.log('USER 1');
                        console.log(req.body);
                        console.log(doc);

                    // user.save((err,doc)=>{

                    //     console.log('USER 3');
                    //     console.log(doc);
                    //     console.log(err);

                    // //if(user.genId === gen.genId) { messageAdditional = 'Пользователь с таким GenId уже зарегестрирован' }; //return res.json({isAuth:false, success:false, message: 'Пользователь с таким GenId уже зарегестрирован'});
                    // if(err) return res.json({isAuth:false, success:false, message: 'Пользователь с такой почтой или GenId уже зарегестрирован' }); //"E11000 duplicate key error collection: genomus.users index: genId_1 dup key: { : "111010" }"
                    //     res.status(200).json({
                    //     success:true,
                    //     user:doc
                    //     })
                    // })

        if(err) return res.status(400).send(err);
        res.json({
            success:true,
            doc
        })
    
    })
})

// Изменение пароля юзера.
app.post('/api/userChangePassword',(req,res)=>{
        const user = new User(req.body);
        const gen = new Gen(req.body);

        console.log('USER');
        console.log(req.body);
        console.log(user);

        User.findOne({'_id':req.body._id},(err,user2)=>{

                console.log('USER 2');
                console.log(err);
                console.log(user2);
                console.log(req.body);
                if(user2.token !== req.body.token) return res.json({isAuth:false, success:false, message: 'Пароль не изменён, так как токен на сервере отличается от токена в базе' });
                //if(req.body.newPassword !== req.body.doublePassword) return res.json({isAuth:false, success:false, message: 'Пароль не изменён, так как новый пароль повторен неправильно' });
                // Тут пароль!
        if(err) return res.status(400).send(err);

                    // Пример с вложенностью работает!!!
            //         User.findByIdAndUpdate(req.body._id,req.body,{new:true},(err,doc)=>{
            //             console.log('USER 1');
            //             console.log(req.body);
            //             console.log(doc);

            //         // user.save((err,doc)=>{

            //         //     console.log('USER 3');
            //         //     console.log(doc);
            //         //     console.log(err);

            //         // //if(user.genId === gen.genId) { messageAdditional = 'Пользователь с таким GenId уже зарегестрирован' }; //return res.json({isAuth:false, success:false, message: 'Пользователь с таким GenId уже зарегестрирован'});
            //         // if(err) return res.json({isAuth:false, success:false, message: 'Пользователь с такой почтой или GenId уже зарегестрирован' }); //"E11000 duplicate key error collection: genomus.users index: genId_1 dup key: { : "111010" }"
            //         //     res.status(200).json({
            //         //     success:true,
            //         //     user:doc
            //         //     })
            //         // })

            //     if(err) return res.status(400).send(err);
            //     res.json({
            //         success:true,
            //         doc
            //     })
            
            // })

                // Сперва удаляем пользователя
                let id = req.body._id;

                User.findByIdAndRemove(id,(err,doc)=>{
                    if(err) return res.status(400).send(err);
                    if(req.body.newPassword !== req.body.doublePassword) return res.json({isAuth:false, success:false, message: 'Пароль не изменён, так как новый пароль повторен неправильно' });
                    if(req.body.newPassword.length < 6) return res.json({isAuth:false, success:false, message: 'Пароль не изменён, так как новый пароль короче шести символов' });
                    //res.json(true)

                            // user.comparePassword(req.body.password,(err,isMatch)=>{
                            //     if(!isMatch) return res.json({
                            //         isAuth:false,
                            //         message:'Неверный пароль'
                            //     });

                            //     user.generateToken((err,user)=>{
                            //         if(err) return res.status(400).send(err);
                            //         res.cookie('auth',user.token).json({
                            //             isAuth:true,
                            //             id:user._id,
                            //             email:user.email
                            //         })
                            //     })
                            // })

                        // Далее перерегистрируем
                        Gen.findOne({'genId':req.body.genId},(err,gen)=>{
                        //console.log(user);
                        console.log('HI2');
                        console.log(user);
                        // Меняем пароль для сохранения перед криптованием.
                        user.password = req.body.newPassword;

                        if(gen) { 
                            user.save((err,doc)=>{

                                console.log('HI 3');
                                console.log(doc);
                                //if(user.genId === gen.genId) { messageAdditional = 'Пользователь с таким GenId уже зарегестрирован' }; //return res.json({isAuth:false, success:false, message: 'Пользователь с таким GenId уже зарегестрирован'});
                                if(err) return res.json({isAuth:false, success:false, message: 'Пользователь с такой почтой или GenId уже зарегестрирован' }); //"E11000 duplicate key error collection: genomus.users index: genId_1 dup key: { : "111010" }"
                                //if(req.body.newPassword !== req.body.doublePassword) return res.json({isAuth:false, success:false, message: 'Пароль не изменён, так как новый пароль повторен неправильно' });
                                //if(req.body.newPassword.length < 6) return res.json({isAuth:false, success:false, message: 'Пароль не изменён, так как новый пароль короче шести символов' });

                                    res.status(200).json({
                                    success:true,
                                    user:doc
                                    })
                                })

                        } else {
                            return res.json({isAuth:false, success:false, message:'Такого GenId нет в базе данных'})
                        }
                    })


                })
    })
})


app.post('/api/login',(req,res)=>{
    User.findOne({'email':req.body.email},(err,user)=>{
        if(!user) return res.json({isAuth:false, message:'Не удалось войти, email не найден'})

        user.comparePassword(req.body.password,(err,isMatch)=>{
            if(!isMatch) return res.json({
                isAuth:false,
                message:'Неверный пароль'
            });

            user.generateToken((err,user)=>{
                if(err) return res.status(400).send(err);
                res.cookie('auth',user.token).json({
                    isAuth:true,
                    id:user._id,
                    email:user.email
                })
            })
        })
    })
})


// UPDATE //
app.post('/api/book_update',(req,res)=>{
    Book.findByIdAndUpdate(req.body._id,req.body,{new:true},(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json({
            success:true,
            doc
        })
    })
})

app.post('/api/user_update',(req,res)=>{
    User.findByIdAndUpdate(req.body._id,req.body,{new:true},(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json({
            success:true,
            doc
        })
    })
})

app.post('/api/gen_update',(req,res)=>{
    Gen.findByIdAndUpdate(req.body._id,req.body,{new:true},(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json({
            success:true,
            doc
        })
    })
})

/*app.post('/api/igen_update',(req,res)=>{
    IGen.findByIdAndUpdate(req.body._id,req.body,{new:true},(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json({
            success:true,
            doc
        })
    })
})*/

// DELETE //

app.delete('/api/delete_book',(req,res)=>{
    let id = req.query.id;

    Book.findByIdAndRemove(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json(true)
    })
})

app.delete('/api/delete_user',(req,res)=>{
    let id = req.query.id;

    User.findByIdAndRemove(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json(true)
    })
})

app.delete('/api/delete_gen',(req,res)=>{
    let id = req.query.id;

    Gen.findByIdAndRemove(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json(true)
    })
})

if(process.env.NODE_ENV === 'production'){
    const path = require('path');
    app.get('/*',(req,res)=>{
        res.sendfile(path.resolve(__dirname,'../client','build','index.html'))
    })
}


// const HOST = process.env.HOST || '0.0.0.0';
// const port = process.env.PORT|| 80;
// app.listen(port,()=>{
//     console.log(`SERVER RUNNNING`)
// })

const port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log(`SERVER RUNNNING`)
})

