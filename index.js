



$(document).ready(function()
{
    $("#home").click(function()
    {
       $(this).css({"background":"red"})
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
  
 
