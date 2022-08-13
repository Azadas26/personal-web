



$(document).ready(function()
{
    $("#home").mouseenter(function()
    {
       $(this).css({"background":"red"})
    })
    $("#home").mouseleave(function()
    {
        $(this).css({"background":"#0066ff"})
    })
    
    $("#prj1").mouseenter(function()
    {
       $("#click").show()
    })

    $("#prj1").mouseleave(function()
    {
       $("#click").hide()
    })
})
  
 
