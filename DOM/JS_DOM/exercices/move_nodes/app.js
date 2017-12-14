document.addEventListener("DOMContentLoaded", function(event) {



	//first part content swap
	let middleDiv = document.getElementById('middle');
	let contentDiv = document.getElementById('content');
	let feedbackDiv = document.getElementById('feedback');
	middleDiv.insertBefore(feedbackDiv, contentDiv);

	//second part append images to bottom
	let allImages = document.querySelectorAll('IMG');
	let imageStoreDiv = document.getElementById('image-store');
	for (let i = 0; i < allImages.length; i++) {
		
		imageStoreDiv.appendChild(allImages[i]);
	}
	
	//insert admin links
	let adminLis = document.querySelectorAll('.admin');
	let adminMenu = document.getElementById('admin-menu');
	for (var i = 0; i < adminLis.length; i++) {
		
		adminMenu.appendChild(adminLis[i]);
	}
	
	//append anker tags to footer
	let menu = document.getElementById("menu");
	let allLis = menu.children
	let footer = document.getElementById('footer');

	for (var i = 0; i < allLis.length; i++) {
		
		if (allLis[i].children[0].hash === "#about" || allLis[i].children[0].hash === "#disclaimer") {
			
			footer.appendChild(allLis[i]);
		}
	}

	
	/*
	createFooterMenu : function(){
    var dnMenu = document.getElementById("menu");
    var dnlsMenuItems = dnMenu.children;
    var dnFooter = document.getElementById("footer");
    console.log(dnlsMenuItems);
    for (var i = 0; i < dnlsMenuItems.length; i++){
      if (dnlsMenuItems[i].children[0].hash == "#about" || dnlsMenuItems[i].children[0].hash == "#disclaimer"){
        dnFooter.appendChild(dnlsMenuItems[i]);
      };
    }
  }*/

});
