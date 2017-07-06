// 存储表格内容的JSON数据结构
var tableContent = {
	id0: {"name": "name0", "content": "content0", "value": "value0"},
	id1: {"name": "name1", "content": "content1", "value": "value1"},
	id2: {"name": "name2", "content": "content2", "value": "value2"},
	id3: {"name": "name3", "content": "content3", "value": "value3"},
	id4: {"name": "name4", "content": "content4", "value": "value4"},
	id5: {"name": "name5", "content": "content5", "value": "value5"},
	id6: {"name": "name6", "content": "content6", "value": "value6"},
	id7: {"name": "name7", "content": "content7", "value": "value7"},
	id8: {"name": "name8", "content": "content8", "value": "value8"},
	id9: {"name": "name9", "content": "content9", "value": "value9"},
	id10: {"name": "name10", "content": "content10", "value": "value10"},
	id11: {"name": "name11", "content": "content11", "value": "value11"},
	id12: {"name": "name12", "content": "content12", "value": "value12"}
}

// 将JSON数据对应的传递给表格
var tableBody = document.getElementById("table-body");
var tableRow = tableBody.getElementsByTagName("tr");
for (var i = 0; i < tableRow.length; i++) {
	var tableRowTd = tableRow[i].children;
	tableRowTd[0].innerHTML = tableContent["id" + i].name;
	tableRowTd[1].innerHTML = tableContent["id" + i].content;
	tableRowTd[2].innerHTML = tableContent["id" + i].value;
}

/**
*编辑弹窗中输入的数据
*确定键按下后触发该函数
*将输入框中的值传递给对应的JSON属性存储
*同时更新表格中的数据
*若name属性为空，弹出警告窗，提示输入
*输入数据处理完，清空输入框
*/ 
function confirmButton() {
    var inputName = document.getElementById("name");
    var inputContent = document.getElementById("content");
    var inputValue = document.getElementById("value");
    //按钮所在行的id
    var rowId = whichButton.parentNode.id;
    var whichRow = whichButton.parentNode.parentNode;
    //遍历JSON属性，找到对应ID
    //我将表格行的id设置成了，JSON属性中的id
    //判断两个id 是否相等，进行对应操作
    for (idNum in tableContent){
	    while (inputName.value && rowId == idNum){
	    	//JSON记录输入的数据
	       tableContent[idNum].name = inputName.value;
	       tableContent[idNum].content = inputContent.value;
	       tableContent[idNum].value = inputValue.value;
           // 更新表格数据
	       var whichRowTd = whichRow.children;
	       whichRowTd[0].innerHTML = inputName.value;
	       whichRowTd[1].innerHTML = inputContent.value; 
	       whichRowTd[2].innerHTML = inputValue.value;
	  
	       break;
	    } 
	    if (!inputName.value) {
	    	alert("Please input name");
	    	break;
	    }
	    }
	 // 清空输入框 关闭弹窗
	inputName.value = "";
	inputContent.value = "";
	inputValue.value = "";
	var obj = event.target.parentNode.id;
    hideWindow(obj);    
}
/**
*确认删除按钮
*关闭弹窗
*删除子节点
*删除JSON属性
*/ 
function confirmDel() {
    var obj = event.target.parentNode.parentNode.id;
	hideWindow(obj);

	var whichRow = whichButton.parentNode.parentNode;
	whichRow.parentNode.removeChild(whichRow);

	var rowId = whichButton.parentNode.id;
	delete tableContent[rowId];
}