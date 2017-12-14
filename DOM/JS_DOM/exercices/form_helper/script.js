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

			// [dn] zuweisen um zeichenlaenge zu sparen

			var dn = element.target;

			if (eventType === "focus") {

				dn.style.backgroundColor = color;

				// hier holen wir uns den passenden text

				// entweder parameter drei oder vier

				test = ( dn.name == nameOfField1 )

				? that.descriptiveText(nameOfField1)

				: that.descriptiveText(nameOfField2)

				// jetzt schreiben wir den node _nach_ dem 

				// form element node

				dn.parentNode.insertBefore( test, dn.nextSibling );

			}

			else if (eventType === "focusout") {

				dn.style.backgroundColor = color;

				// hier holen wir uns den description node

				// in diesem Fall der naechste Schwesternode

				// des input nodes

				var dnDes = dn.nextElementSibling;



				// und zerstoeren ihn

				dnDes.parentNode.removeChild( dnDes );

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
