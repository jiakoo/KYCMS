function checkFrom(){
   if($('.form-group input').val() == ''){
       alert('数据不能为空')
      return false;
   } 
}

$(function(){
    $('.del').click(function(){
        var id = $(this).data('id'),
            tr = $(this).parents('tr');
        
            $.ajax({
                url:'/admin/column/delete?id=' + id,
                success:function(results){
                    if(results.success === 1){
                        tr.remove();
                    }

                }
            })
        
    })
})