// 利用JSON存储的二级菜单文本值
var secondLevelMenu = {
	level1: ["level 1 JSON text0", "level 1 JSON text1", "level 1 JSON text2", "level 1 JSON text3",
	         "level 1 JSON text4", "level 1 JSON text5", "level 1 JSON text6", "level 1 JSON text7",
	         "level 1 JSON text8", "level 1 JSON text9", "level 1 JSON text10", "level 1 JSON text11",
	         "level 1 JSON text12"],
	level2:[
            {"subMenu1": "level 2 JSON text0", "subMenu0": "level 2 JSON text0"},
            {"subMenu1": "level 2 JSON text1", "subMenu0": "level 2 JSON text1"},
            {"subMenu1": "level 2 JSON text2", "subMenu0": "level 2 JSON text2"},
            {"subMenu1": "level 2 JSON text3", "subMenu0": "level 2 JSON text3"},
            {"subMenu1": "level 2 JSON text4", "subMenu0": "level 2 JSON text4"},
            {"subMenu1": "level 2 JSON text5", "subMenu0": "level 2 JSON text5"},
            {"subMenu1": "level 2 JSON text6", "subMenu0": "level 2 JSON text6"},
            {"subMenu1": "level 2 JSON text7", "subMenu0": "level 2 JSON text7"},
            {"subMenu1": "level 2 JSON text8", "subMenu0": "level 2 JSON text8"},
            {"subMenu1": "level 2 JSON text9", "subMenu0": "level 2 JSON text9"},
            {"subMenu1": "level 2 JSON text10", "subMenu0": "level 2 JSON text10"},
            {"subMenu1": "level 2 JSON text11", "subMenu0": "level 2 JSON text11"},
            {"subMenu1": "level 2 JSON text12", "subMenu0": "level 2 JSON text12"}
	]
}

// 生成二级折叠菜单



for (var i = 0; i < secondLevelMenu.level1.length; i++) {
   // 生成一级菜单
   var elementLi = document.createElement("li");
   elementLi.innerHTML = secondLevelMenu.level1[i];
   // JSON对象没有length属性，用了个变量记录长度
   var count = 0;
   for (k in secondLevelMenu.level2[i]) {
       count++;
   }
   // 生成二级菜单
   var elementUl = document.createElement("ul");
      elementUl.className = "second-level-menu";
   for (var j = 0; j < count; j++) {
      var elementLi2 = document.createElement("li");
      elementLi2.innerHTML = secondLevelMenu.level2[i]["subMenu" + j];
      elementUl.appendChild(elementLi2);
      }
   var secondMenu = document.getElementById("secondMenu");
   elementLi.appendChild(elementUl);
   secondMenu.appendChild(elementLi);
}
