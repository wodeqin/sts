<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<!-- bootstrapTable -->
<!-- <link href="../charisma/bower_components/bootstrap-table/bootstrap-table.min.css" rel="stylesheet"/> -->
<link href="https://cdn.bootcss.com/bootstrap-table/1.12.1/bootstrap-table.min.css" rel="stylesheet">
<link href="https://cdn.bootcss.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet">

<!-- jQuery -->
<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdn.bootcss.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="https://cdn.bootcss.com/bootstrap-table/1.12.1/bootstrap-table.min.js"></script>
<script src="https://cdn.bootcss.com/bootstrap-table/1.12.1/locale/bootstrap-table-zh-CN.min.js"></script>



</head>

<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<div class="ch-container">
	<div class="row" style="padding: 10px">
		<form id="setting-form" class="form-horizontal">
			<div id="shadowDetail">
    			<table id="shadow_detail_table" style="font-size:14px;" class="table table-hover"></table>
    		</div>
		</form>	
			
	</div>
</div>

<script type="text/javascript">
	$(document).ready(function() {
		editableFlag = '';
		//console.log($("#request.getAttribute('shadowId')"));
		//console.log($("#shadowId").val('@Model.shadowId'));
		//console.log(/*[[${shadowId}]]*/)；
		console.log($("#shadowId").val());
		console.log("${shadowId}");
		
		//$(this).tab('show');
		var ptable=$('#shadow_detail_table').bootstrapTable({
		    url: '../api/table',       // 请求后台的URL（*）
		    method: 'get',                   // 请求方式（*）
		    height: 500,
		    striped: true,                   // 是否显示行间隔色
		    cache: false,                    // 是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
		    pagination: true,                // 是否显示分页（*）
		    paginationDetailHAlign:"right",
		    sortOrder: "asc",                // 排序方式
		    sortName : 'id', 				 // 排序字段
		    queryParams: function(params){
		    	return {shadowId:"1"};
		    },		//  传递参数（*）
		    sidePagination: "server",       // 分页方式：client客户端分页，server服务端分页（*）
		    pageNumber:1,                   // 初始化加载第一页，默认第一页
		    //showRefresh: true,            // 是否显示刷新按钮
		    columns: [{
		        field: 'id',
		        title: '属性ID',
		    }, {
				field: 'name',
				title: '属性名称',
			}],

		});	
	});	
		
</script>
</body>
</html>