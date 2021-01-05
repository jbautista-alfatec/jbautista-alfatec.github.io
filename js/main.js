$(document).ready(function(){
	
	//Slider
	if(window.location.href.indexOf('index') > -1){ //si estamos en principal
		$('.galeria').bxSlider({
		    mode: 'fade',
		    captions: true,
		    slideWidth: 1200,
		    responsive: true
	  	});
	}
	

  	//Posts
  	if(window.location.href.indexOf('index') > -1){
	  	var posts = [ //array de json
	  		{
	  			title: "Pueba de título 1",
	  			date: moment().format('MMMM Do YYYY'),
	  			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis scelerisque lobortis. Aliquam erat volutpat. Fusce ut diam mattis, scelerisque ex eget, fermentum lacus. Praesent id posuere velit. Curabitur convallis velit ac ultricies mattis. Sed leo purus, maximus ut metus eu, rutrum fermentum risus. Fusce ut urna sit amet velit tincidunt volutpat eget sed mi. Proin semper nisl id quam tempus lacinia. Quisque ac tempor magna, a viverra dolor. Maecenas convallis a mi eu faucibus. Vestibulum eget neque ut erat commodo convallis. Aenean tempus vestibulum felis non porttitor. Sed eu urna vel massa sagittis condimentum. Donec non quam id augue bibendum auctor molestie non dui. Curabitur aliquet, elit in tempor viverra, quam arcu tempor tellus, et molestie magna turpis sit amet nisl. Nunc et rutrum orci.'
	  		},
	  		{
	  			title: "Pueba de título 2",
	  			date: moment().format('MMMM DDDD YYYY'),
	  			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis scelerisque lobortis. Aliquam erat volutpat. Fusce ut diam mattis, scelerisque ex eget, fermentum lacus. Praesent id posuere velit. Curabitur convallis velit ac ultricies mattis. Sed leo purus, maximus ut metus eu, rutrum fermentum risus. Fusce ut urna sit amet velit tincidunt volutpat eget sed mi. Proin semper nisl id quam tempus lacinia. Quisque ac tempor magna, a viverra dolor. Maecenas convallis a mi eu faucibus. Vestibulum eget neque ut erat commodo convallis. Aenean tempus vestibulum felis non porttitor. Sed eu urna vel massa sagittis condimentum. Donec non quam id augue bibendum auctor molestie non dui. Curabitur aliquet, elit in tempor viverra, quam arcu tempor tellus, et molestie magna turpis sit amet nisl. Nunc et rutrum orci.'
	  		},
	  		{
	  			title: "Pueba de título 3",
	  			date: moment().format('MMMM DD YYYY'),
	  			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis scelerisque lobortis. Aliquam erat volutpat. Fusce ut diam mattis, scelerisque ex eget, fermentum lacus. Praesent id posuere velit. Curabitur convallis velit ac ultricies mattis. Sed leo purus, maximus ut metus eu, rutrum fermentum risus. Fusce ut urna sit amet velit tincidunt volutpat eget sed mi. Proin semper nisl id quam tempus lacinia. Quisque ac tempor magna, a viverra dolor. Maecenas convallis a mi eu faucibus. Vestibulum eget neque ut erat commodo convallis. Aenean tempus vestibulum felis non porttitor. Sed eu urna vel massa sagittis condimentum. Donec non quam id augue bibendum auctor molestie non dui. Curabitur aliquet, elit in tempor viverra, quam arcu tempor tellus, et molestie magna turpis sit amet nisl. Nunc et rutrum orci.'
	  		},
	  		{
	  			title: "Pueba de título 4",
	  			date: 'Publicado el ' + moment().format("dddd") + ' día ' + moment().day() + ' de ' + moment().format('MMMM') + ' del ' + moment().year(),
	  			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis scelerisque lobortis. Aliquam erat volutpat. Fusce ut diam mattis, scelerisque ex eget, fermentum lacus. Praesent id posuere velit. Curabitur convallis velit ac ultricies mattis. Sed leo purus, maximus ut metus eu, rutrum fermentum risus. Fusce ut urna sit amet velit tincidunt volutpat eget sed mi. Proin semper nisl id quam tempus lacinia. Quisque ac tempor magna, a viverra dolor. Maecenas convallis a mi eu faucibus. Vestibulum eget neque ut erat commodo convallis. Aenean tempus vestibulum felis non porttitor. Sed eu urna vel massa sagittis condimentum. Donec non quam id augue bibendum auctor molestie non dui. Curabitur aliquet, elit in tempor viverra, quam arcu tempor tellus, et molestie magna turpis sit amet nisl. Nunc et rutrum orci.'
	  		},
	  		{
	  			title: "Pueba de título 5",
	  			date: new Date(),
	  			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis scelerisque lobortis. Aliquam erat volutpat. Fusce ut diam mattis, scelerisque ex eget, fermentum lacus. Praesent id posuere velit. Curabitur convallis velit ac ultricies mattis. Sed leo purus, maximus ut metus eu, rutrum fermentum risus. Fusce ut urna sit amet velit tincidunt volutpat eget sed mi. Proin semper nisl id quam tempus lacinia. Quisque ac tempor magna, a viverra dolor. Maecenas convallis a mi eu faucibus. Vestibulum eget neque ut erat commodo convallis. Aenean tempus vestibulum felis non porttitor. Sed eu urna vel massa sagittis condimentum. Donec non quam id augue bibendum auctor molestie non dui. Curabitur aliquet, elit in tempor viverra, quam arcu tempor tellus, et molestie magna turpis sit amet nisl. Nunc et rutrum orci.'
	  		}
	  	];

	  	posts.forEach(function(item,index){
	  		var post = `
				<article class="post">
					<h2>${item.title}</h2>
					<span class="date">${item.date}</span>
					<p>
						${item.content}
					</p>
					<a href="#" class="button-more">Leer más</a>
				</article>
	  		`;

	  		$('#posts').append(post);
  		})
  	}

  	//Selector de tema
  	var theme = $('#theme');
  	$("#to-green").click(function(){
  		theme.attr('href', 'css/green.css')
  	})

  	$("#to-red").click(function(){
  		theme.attr('href', 'css/red.css')
  	})

  	$("#to-blue").click(function(){
  		theme.attr('href', 'css/blue.css')
  	})

  	//Scroll arriba
  	$('.subir').click(function(event){
  		event.preventDefault() //anula el efecto por defecto del link

  		$('html, body').animate({
  			scrollTop: 0
  		},500)

  		return false
  	})

  	//Login falso
  	$('#login form').submit(function(){
  		var form_name = $('#form_name').val()

  		//en el local storage guardo en 'form_name' el contenido de form_name
  		localStorage.setItem('form_name', form_name) 
  	})

  	//pesco el contenido del localstorage al cargarse la pagina
  	var form_name = localStorage.getItem('form_name')

  	if(form_name != null && form_name != 'undefined'){
  		var about_parrafo = $('#about p')
  		about_parrafo.html("<br><strong>Bienvenido, " + form_name + '</strong>')
  		about_parrafo.append('<a href="#" id = "logout">Cerrar Sesión </a>')

  		$('#login').hide()

  		$('#logout').click(function(){
  			localStorage.clear()
  			location.reload()
  		})
  	}

  	// Acordeon
  	if(window.location.href.indexOf('hojas') > -1){
  		$('#acordeon').accordion()
  	}

  	//Validacion Contacto y calendario
  	if(window.location.href.indexOf('contact') > -1){

  		$('form input[name="date"]').datepicker({
  			dateFormat: 'dd/mm/yy'
  		})

  		$.validate({
    		lang: 'es',
    		errorMessagePosition: 'top',
    		scrollToTopOnError: true
  		});
  	}
  	
});