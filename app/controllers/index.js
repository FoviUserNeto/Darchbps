/*function doClick(e) {
	alert($.label.text);
}*/

// require qrcode and spesify text and errorCorrectLevel
var qrcode = require('qrcode').QRCode({
	text: 'https://www.facebook.com/Ricardo.dagak',		// text string for QR code
	errorCorrectLevel: 'M'					// Possible Values: L / M / Q / H
});


// create Ti.UI.ImageView qrcodeView - spesify width, height and margin
var qrcodeView = qrcode.createQRCodeView({
	width: 300,
	height: 300,
	margin: 4,
});

// add qrcodeView to youViewNameHere
$.qr.add(qrcodeView);

$.index.open();
