function info(url) {
	window
			.open(
					url,
					'newwindow',
					'fullscreen=1,top=0,left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no');
}

function go_to(url){
    window.location.href = document.getElementsByTagName("base")[0].href + url;
}