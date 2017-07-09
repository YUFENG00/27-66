// 存储表格内容的JSON数据结构
var tableContent = {
	id0: ["name0", "content0", "value1"],
	id1: ["name1", "content1", "value1"],
	id2: ["name2", "content2", "value2"],
	id3: ["name3", "content3", "value3"],
	id4: ["name4", "content4", "value4"],
	id5: ["name5", "content5", "value5"],
	id6: ["name6", "content6", "value6"],
	id7: ["name7", "content7", "value7"],
	id8: ["name8", "content8", "value8"],
	id9: ["name9", "content9", "value9"],
	id10: ["name10", "content10", "value10"],
	id11: ["name11", "content11", "value11"],
	id12: ["name12", "content12", "value12"]
}

// 生成表格
var number = 0;
var tableBody = document.getElementById("tableBody");
for (num in tableContent) {
	number++;
}
for (var i = 0; i < number; i++) {
	// 生成tr
	var elementTr = document.createElement("tr");
	for (var j = 0; j < tableContent["id" + i].length; j++) {
		var elementTd = document.createElement("td")
		elementTd.innerHTML = tableContent["id" + i][j]
		elementTr.appendChild(elementTd);
	}
	var buttonTd = document.createElement("td");
	buttonTd.innerHTML = "<button class='edit'>编辑</button><button class='del'>删除</button>";
	buttonTd.setAttribute("id", "id" + i);
    elementTr.appendChild(buttonTd);
    tableBody.appendChild(elementTr);
    console.log(tableBody);
}
// 点击事件监听
tableBody.addEventListener("click", function(e) {
	if (e.target.className == "edit") {
		showWindow("compile");
	}
	else if (e.target.className == "del") {
		showWindow("del");
	}
})


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
	       tableContent[idNum][0] = inputName.value;
	       tableContent[idNum][1] = inputContent.value;
	       tableContent[idNum][2] = inputValue.value;
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