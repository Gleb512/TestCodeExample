/*window.addEventListener('scroll', function() {
	document.getElementById('header').style = "background-color: rgba(51, 51, 51, 0.8)";
  });*/
  /*document.documentElement.scrollTop.getElementById('header').style="background-color: blue";*/
  $(window).scroll(function() {
		var height = $(window).scrollTop();
		/*Если сделали скролл на 60px задаём новый класс для header*/
			if(height > 60){
			$('header').addClass('header-fixed');
			} else{
			/*Если меньше 100px удаляем класс для header*/
			$('header').removeClass('header-fixed');
			}


			if(height > 300){
			$('.botom-btn').addClass('visible-btn');
			} else{
			/*Если меньше 100px удаляем класс для header*/
			$('.botom-btn').removeClass('visible-btn');
			}

		});



	
	/*navbar show/hide*/
	$(document).ready(function () {
		$("#nav-burger").click(function () {
			$("#navbar-custom").toggleClass('show-menu');
			$(this).toggleClass('close-menu');
		});
	});

	
	
	 

	  /*counter*/
	  $(document).ready(function () {

		var show = true;
		var countbox = ".benefits__inner";
		$(window).on("scroll load resize", function () {
			if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
			var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
			var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
			var w_height = $(window).height(); // Высота окна браузера
			/*var d_height = $(document).height(); // Высота всего документа
			var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками*/
			if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
				$('.benefits__number').css('opacity', '1');
				$('.benefits__number').spincrement({
					thousandSeparator: "",
					duration: 2200
				});
	
				show = false;
			}
		});
	
	});
	

	/*scroll top*/
	jQuery('.scrollup').on('click', function(){
		jQuery("html, body").animate({ scrollTop: 0 }, 700);
		return false;
	});