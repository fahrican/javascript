FormHelper = {
	init : function() {
		this.counter();
		this.uppercaser();
		this.showFocus();
	}
	, counter : function() {
		__.dn_( "[count]", function( dn ) {
			var max = dn.getAttribute( "count" );
			var h = "<div class='counter'><span>0</span> of " + max + " characters</div>";
			var dnCount = __.dn.add_( h, dn );
			dn.addEventListener( "keydown", function( e ) {
				var c = this.value.length;
				var dnCounter =__.dn_( "span", dnCount );
				dnCounter.textContent = c;
			} );
		} );
	}
	, uppercaser : function() {
		__.dn_( "[uppercase]", function( dn ) {
			dn.addEventListener( "keyup", function( e ) {
				this.value = this.value.toUpperCase();
			} );
		} );
	}
	, showFocus: function(){

		let input = document.getElementsByTagName('INPUT');
		let textArea = document.getElementsByTagName('TEXTAREA');

		this.setAnEventListener(input, 'focus', "sTitle", "sTagline", 'yellow');
		this.setAnEventListener(input, 'focusout', "sTitle", "sTagline", 'white');
		this.setAnEventListener(textArea, 'focus', "sShort", "sLong", 'yellow');
		this.setAnEventListener(textArea, 'focusout', "sShort", "sLong", 'white');
		
	}
	/*
	* setAnEventListener function sets the background color for anArrayElement(input, textarea)
	* 
	*/
	, setAnEventListener: function(anArrayElement, eventType, nameOfField1, nameOfField2, color){

		let that = this;

		for (var i = 0; i < anArrayElement.length; i++) {

			anArrayElement[i].addEventListener(eventType, element => {

				if (eventType === "focus") {

					if(element.target.name === nameOfField1){
						element.target.style.backgroundColor = color;
						//here starts my problem
						let test = that.descriptiveText(nameOfField1);
						element.target.appendChild(test);
					}
					else if(element.target.name === nameOfField2){
						element.target.style.backgroundColor = color;
						//here starts my problem
						element.target.appendChild(that.descriptiveText(nameOfField2));
					}	
				}
				else if (eventType === "focusout") {

					if(element.target.name === nameOfField1){
						element.target.style.backgroundColor = color;
						//here starts my problem
						element.target.removeChild(element.firstChild);
					}
					else if(element.target.name === nameOfField2){
						element.target.style.backgroundColor = color;
						//here starts my problem
						element.target.removeChild(element.firstChild);
					}	
				}
				
			});
		}
	}
	/*
	* adds a span with text for the right DOM element
	*/
	, descriptiveText: function (nameOfElement) {
		// body...
		let span = document.createElement('SPAN');

		switch(nameOfElement){

			case "sTitle":
				span.innerHTML = "Title of the book you are reviewing";
				break;

			case "sTagline":
				span.innerHTML = "A one-sentence tagline";
				break;	

			case "sShort":
				span.innerHTML = "A short summary of your review";
				break;

			case "sLong":
				span.innerHTML = "Here you enter the actual review";
				break;

			default:
				span.innerHTML = "something went terribly wrong!";
				break;						
		}
		console.log(span);
		return span;
	} 
};//end of object FormHelper
FormHelper.init();
