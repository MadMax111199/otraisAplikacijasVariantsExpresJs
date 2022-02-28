function clearAllData(){
		var dict = {
			type : 'clean'
		};
		fetch(`${window.location.href}`,{
			method: "POST",
			credentials: "include",
			body: JSON.stringify(dict),
			cache: "no-cache",
			headers: new Headers({
				"content-type": "aplication/json"
			})
		})
		.then(function(response){
		    if(response.status == 200){
		        location.reload();
		        return
		    }
		})

	}


	function getRout(){
		var dict = {
			type : 'non',
			peopleName : document.getElementById("peopleName").value,
			peopleSurname : document.getElementById("peopleSurname").value,
			peopleCity : document.getElementById("peopleCity").value,
			peopleAdress : document.getElementById("peopleAdress").value,
			peopleTel : document.getElementById("peopleTel").value
		};
		console.log(dict)
		fetch(`${window.location.href}`,{
			method: "POST",
			credentials: "include",
			body: JSON.stringify(dict),
			cache: "no-cache",
			headers: new Headers({
				"content-type": "aplication/json"
			})
		})
		.then(function(response){
		    if(response.status == 200){
		        location.reload();
		        return
		    }
		})

	}
