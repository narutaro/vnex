var megaport = new mp('https://api-staging.megaport.com/v2/'); // with OLD version megaport.js
//var megaport = new Megaport('https://api.megaport.com/v2/'); // with NEW version megaport.js
//console.log(megaport.toString());

megaport.auth({
  //username: '',
  //password: '',
	token: ''
});

megaport.ready(
  function(credentials) {

    console.log(credentials);

		let loc = megaport.lists('locations').then(
      function(locations) {
        console.log(locations);
				return locations;
      }
    );

	}
);

