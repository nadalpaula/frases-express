$('#ok').on('click', function(){
	
$.ajax({
    method: "POST",
    url: "http://localhost:3000/home",
    data:{
    	frase: $('.ok').html()
    }
})

$.ajax({
	url: "http://localhost:3000/random"
}).done(function(data) {

	const fraseAppend = '<p class= "ok">' + data.frase + ' SI</p>'
	$('.fraseDiv').append(fraseAppend)
	$('#fr').html(fraseAppend)

})

})

$('#no').on('click', function(){
	
$.ajax({
    method: "POST",
    url: "http://localhost:3000/home",
    data:{
    	frase: $('.ok').html()
    }
})

$.ajax({
	url: "http://localhost:3000/random"
}).done(function(data) {

	const fraseAppend = '<p class= "ok">' + data.frase + ' NO</p>'
	$('.fraseDiv').append(fraseAppend)
	$('#fr').html(fraseAppend)

})

})