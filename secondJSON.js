// 利用JSON存储的二级菜单文本值
var secondLevelMenu = {
	level1: ["level 1 JSON text0", "level 1 JSON text1", "level 1 JSON text2", "level 1 JSON text3",
	         "level 1 JSON text4", "level 1 JSON text5", "level 1 JSON text6", "level 1 JSON text7",
	         "level 1 JSON text8", "level 1 JSON text9", "level 1 JSON text10", "level 1 JSON text11",
	         "level 1 JSON text12"],
	level2:[
            {"subMenu1": "level 2 JSON text0", "subMenu2": "level 2 JSON text0"},
            {"subMenu1": "level 2 JSON text1", "subMenu2": "level 2 JSON text1"},
            {"subMenu1": "level 2 JSON text2", "subMenu2": "level 2 JSON text2"},
            {"subMenu1": "level 2 JSON text3", "subMenu2": "level 2 JSON text3"},
            {"subMenu1": "level 2 JSON text4", "subMenu2": "level 2 JSON text4"},
            {"subMenu1": "level 2 JSON text5", "subMenu2": "level 2 JSON text5"},
            {"subMenu1": "level 2 JSON text6", "subMenu2": "level 2 JSON text6"},
            {"subMenu1": "level 2 JSON text7", "subMenu2": "level 2 JSON text7"},
            {"subMenu1": "level 2 JSON text8", "subMenu2": "level 2 JSON text8"},
            {"subMenu1": "level 2 JSON text9", "subMenu2": "level 2 JSON text9"},
            {"subMenu1": "level 2 JSON text10", "subMenu2": "level 2 JSON text10"},
            {"subMenu1": "level 2 JSON text11", "subMenu2": "level 2 JSON text11"},
            {"subMenu1": "level 2 JSON text12", "subMenu2": "level 2 JSON text12"}
	]
}

// 将JSON中的值传递给对应的二级菜单
var level1Menu = document.getElementById("secondMenu").children; 
for (var i = 0; i < level1Menu.length; i++) {
   	var linkNode = level1Menu[i].getElementsByTagName("a");
   	linkNode[0].innerHTML = secondLevelMenu.level1[i];
   	linkNode[1].innerHTML = secondLevelMenu.level2[i].subMenu1;
   	linkNode[2].innerHTML = secondLevelMenu.level2[i].subMenu2;
   } 