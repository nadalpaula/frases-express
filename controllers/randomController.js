let self = {}

self.random =  function(req, res, next) {
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
}

module.exports = self