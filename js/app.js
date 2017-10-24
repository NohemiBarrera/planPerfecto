

$(document).ready(function(){
	var components = {
		plan1: {
			template:`
			
				<h2>Súper Plan 1 </h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<a href="#" class="button">Conoce más</a>
				`,
		      controller: function (element) {
		        element.find('a.button').css('background-color', '#29abe2').css( 'border-radius', '8px');
		      }
		},
		plan2: {
			template:`
			<div>
				<h2>Súper Plan 2 </h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<a href="#" class="button">Conoce más</a>
			</div>
				`,
		      controller: function (element) {
		        element.find('a.button').css('background-color', '#29abe2').css( 'border-radius', '8px');
		      }
		},
		plan3: {
			template:`
			<div>
				<h2>Súper Plan 3 </h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<a href="#" class="button">Conoce más</a>
			</div>
				`,
		      controller: function (element) {
		        element.find('a.button').css('background-color', '#29abe2').css( 'border-radius', '8px');
		      }
		},
		plan4: {
			template:`
			<div>
				<h2>Súper Plan 4 </h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<a href="#" class="button">Conoce más</a>
			</div>
				`,
		      controller: function (element) {
		        element.find('a.button').css('background-color', '#29abe2').css( 'border-radius', '8px');
		      }
		},
};

	function renderComponent(element, componentName) {
	    var component = components[componentName];
	    element.html(component.template);
	    component.controller(element);
	  }

	$('div.planes').click(function(){
		var aside = $('#divXCambiar');
		renderComponent(aside, this.id);
	});
});


$("#ex2").slider({});