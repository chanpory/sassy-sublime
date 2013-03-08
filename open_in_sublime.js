	chrome.devtools.panels.setOpenResourceHandler(function(resource, line) {
		resURL	= resource.url;
		resProtocol = resURL.slice(0,4);

		if (resProtocol == "file"){
			open("subl://open/?url=" + resURL + "&line=" + line, '_self');
		} else {
			window.open(resURL);
		}
		
	});