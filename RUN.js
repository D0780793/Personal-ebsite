//在DOM文件樹載入完之後執行一個函式($(document).ready)，要有此程式才能執行成功
var display = false;
$(document).ready(function(){
    $("#secret_btn").click(function(){
    	if(display == false){
    		$(".secret").hide();
    		display = true;
    	}
        else{
        	$(".secret").show();
        	display = false;
        }
    });
});
/*$(document).ready(function(){
	$("#secret_btn").click(function(){$(".secret").slideToggle();});
});*/