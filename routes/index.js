var express = require('express');
var router = express.Router();
//let palabras = []


/* GET home page. */
const homeController = require('../controllers/homeController')
const randomController = require('../controllers/randomController')

router.get('/home', homeController.home)
router.post('/home', homeController.home2);
router.get('/random', randomController.random)

/*router.get('/home', function(req, res, next) {
    const frases = ['No vives de ensalada',
        'A la grande le puse cuca',
        'Hable mas fuerte que tengo una toalla',
        'Niños quieren pasar por donde estan los cactos?',
        'Vuelve al trabajo Eduardo'
    ]
    let frasesDesordenadas = shuffle(frases);
    

    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    let esaFrase = frasesDesordenadas[Math.floor(Math.random()*frasesDesordenadas.length)];

   res.render('index',{
       frase: esaFrase,
       keyPost: palabras
    })
});

router.post('/home', function(req,res, next){
 palabras.push(req.body.frase)
 console.log(palabras)
 res.sendStatus(200)

})

router.get('/random', function(req, res, next) {
    const frases = ['No vives de ensalada',
        'A la grande le puse cuca',
        'Hable mas fuerte que tengo una toalla',
        'Niños quieren pasar por donde estan los cactos?',
        'Vuelve al trabajo Eduardo'
    ]
    let frasesDesordenadas = shuffle(frases);
    

    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    let esaFrase = frasesDesordenadas[Math.floor(Math.random()*frasesDesordenadas.length)];

   res.json({
       frase: esaFrase
    })
})*/





module.exports = router;