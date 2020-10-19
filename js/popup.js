(
function loadlog(link) {
var l = Math.max((window.screen.width - 800)/2, 0);
var t = Math.max((window.screen.height - 600)/2 - 50, 0);
var myWindow = window.open(link, "Log", 'title=0, toolbar=0, location=0, directories=0, status=0, menubar=0, scrollbars=1, resizable=0, copyhistory=0, width=800, height=600, top='+t+', left='+l);
myWindow.onblur=function(){myWindow.close()};
}
)