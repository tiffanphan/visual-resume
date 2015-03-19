
// A Function covers the wall post system
function wallSystem (){
     $('textarea#wallcomment').focus(function (){
        org_comment = $('#wallcomment').val();
        if(org_comment == 'Comment here...')
            $('#wallcomment').val('');                       
    });
                
    $('textarea#wallcomment').focusout(function (){
        if ($.trim($('#wallcomment').val()) == '') 
            $('#wallcomment').val('Comment here...');
    });
                              
    $("body").on("submit", "form#wallform", function (e){
                    
        e.preventDefault();
        var data = $("#wallcomment").val();
        if (data == 'Comment here...')
        {
            alert('Please input some comment to post');
            return false;
        }
        
        var form = $(this); 
        var post_url = form.attr('action');
        var post_data = form.serialize();
        $.ajax({
            type: 'POST',
            url: post_url,
            data: post_data,
            success: function(wall_data){
                $("ul#walldata").prepend(wall_data).fadeIn(100000);
                $("#wallcomment").val('Comment here...');
            }
        });
              
        return false;
    });
    
}


$(function(){
     wallSystem();
});
