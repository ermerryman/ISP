var img,imgLeft,imgTop,xClick,yClick;

function moveImg(event){
	img = document.getElementById('pic');
	imgLeft = img.offsetLeft;
	imgTop = img.offsetTop;
	
	xClick = event.clientX - 25;
    yClick = event.clientY - 25;
	
	img.style.position="absolute";
	img.style.left = imgLeft;
	img.style.top = imgTop;

	mover(imgLeft,imgTop);
}

function mover(x,y) {
		
		if(x!=xClick || y!=yClick){
		
		if(x<xClick){
			x++;
		} else if (x>xClick) {
			x--;
		} else {
			//same
		}
		
		if(y<yClick){
			y++;
		} else if (y>yClick) {
			y--;
		} else {
			//same
		}
		
		img.style.left = x + "px";
		img.style.top = y + "px";
	}
		
	setTimeout("mover(" + x + "," + y + ")", 1); 
}