$(function() {
	// 初始化编辑器
	var E = window.wangEditor
    var editor = new E('#editor')
    editor.create()
    // 获取 html 代码
    $('#btn1').on('click', function() {
    	// 这里是前端代码 需要通过 ajax 传到后端
        $.ajax({
            url: '/admin/content/setContentHtml',
            type: 'POST',
            data: {
                content: editor.txt.html()
            },
            success: function(msg) {
    
                if(msg.code === 1) {
                    console.log('提交成功');
                }
                
            },
            error: function() {
                console.log('提交数据错误');
            }
        });
    	
    });

    $('#btn3').on('click', function() {
        // 这里是前端代码 需要通过 ajax 传到后端
        $.ajax({
            url: '/admin/content/deleteAll',
            type: 'GET',
            success: function(msg) {
    
                if(msg.code === 1) {
                    console.log('删除成功');
                }
                
            }
        });
        
    });

});