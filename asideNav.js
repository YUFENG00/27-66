/**
 *@file 表头部分的滑动固定 侧边栏导航的鼠标移入移出事件
 *@author yufeng(mail)
 */

var fixedHead = document.getElementById("table-head");
var fixedBody = document.getElementById("table-body")
window.addEventListener("scroll", winScroll, false);
/**
*页面向下滑动到表头到达窗口顶部的位置时 表头固定固定在顶部
*页面向上滑动到表格body部分与表头接触时 表头取消固定 跟随页面滑动
*/
function winScroll() {
    var top = getElementViewTop(fixedBody);
    // 判断表头顶部距离窗口顶部的距离
    top < 0 ? fixedHead.setAttribute("class","fixed") : fixedHead.removeAttribute("class","fixed");
    }
    // 高度计算
    function getElementViewTop(element){
    	// 到页面顶部的距离
　　　　var actualTop = element.offsetTop;
        // 滚动条滑动的距离
        var elementScrollTop = document.body.scrollTop;
            //应该用计算样式来代替 59
　　　　    return actualTop - elementScrollTop - 59;
　　}


var asideNav = document.getElementById("left-nav");
/**
*侧边栏导航的鼠标移入触发事件 
*移除窗口滚动事件
*侧边栏导航区域添加滚动条
*禁止窗口滚动条
*/
function setScroll() {
	window.removeEventListener("scroll", setHeight, false);
    asideNav.classList.add("addScroll");
    disableWindowScroll();
}
/**
*启用窗口滚动条
*侧边栏导航的鼠标移出触发事件
*监听窗口滚动事件
*
*/
function removeScroll() {
	enableWindowScroll();
    asideNav.classList.remove("addScroll");
    window.addEventListener("scroll", setHeight, false);
}
/**
*鼠标移出侧边栏区域 跟随窗口滚动条的滚动距离 动态设置侧边栏的高度
*实现跟随导航栏侧边栏自动展现
*
*/

function setHeight() {
var navScroll = document.body.scrollTop;
var navTop = asideNav.offsetTop;
var pageHeight = document.documentElement.clientHeight;
// console.log(pageHeight);
asideNav.style.height = (pageHeight - navTop + navScroll) + "px";
}   

/**
*监听滚动事件
*
*/
function disableWindowScroll () {
	// Firefox使用addEventListener添加滚轮事件
    if (window.addEventListener) {
        window.addEventListener("DOMMouseScroll", onChildMouseWheel, false);
    }
    // Safari与Chrome属于同一类型，可使用HTML DOM方式添加事件
    window.onmousewheel = document.onmousewheel = onChildMouseWheel;
}

function enableWindowScroll () {
    if (window.removeEventListener) {
        window.removeEventListener("DOMMouseScroll", onChildMouseWheel, false);
    }
    window.onmousewheel = document.onmousewheel = null;
}



/**
*判断滚轮向上或向下在浏览器中也要考虑兼容性，
*现在五大浏览器（IE、Opera、 Safari、Firefox、Chrome）中
*Firefox 使用detail，其余四类使用wheelDelta；
*1、mousewheel 事件中的 “event.wheelDelta” 属性值：
*返回的值，如果是正值说明滚轮是向上滚动，如果是负值说明滚轮是向下滚动；
*返回的值，均为 120 的倍数，即：幅度大小 = 返回的值 / 120。
*2、DOMMouseScroll 事件中的 “event.detail” 属性值：
*返回的值，如果是负值说明滚轮是向上滚动（与 “event.wheelDelta” 正好相反），
*如果是正值说明滚轮是向下滚动；返回的值，均为 3 的倍数，即：幅度大小 = 返回的值 / 3。
*
*@param {Object} event 作用对象
*
*/
function onChildMouseWheel (event) {
    var scrollTgt = 0;
    event = window.event || event;
    if (event.detail) {
        scrollTgt = -40 * event.detail;//兼容FF
    } else {
        scrollTgt = event.wheelDeltaY;
    }

    if (scrollTgt) {
    	// 滚轮向上滑动时，阻止默认事件
        preventDefault(event);
        // 滚轮向下将scrollTop的减小（本应该不断增大），使滚轮可以不断向下滚动，而页面不动
        asideNav.scrollTop = asideNav.scrollTop - scrollTgt;
    }
}

function preventDefault (event) {
    event = event || window.event;
    if (event.preventDefault) {
        event.preventDefault();
    }
    //兼容IE
    event.returnValue = false;
}


// 二级菜单
// 事件委托
/**
*监听二级菜单区域的点击事件，根据event.target判断点击源
*根据类名判断是否展开
*
*/
var secondLevelMenu = document.getElementById("secondMenu");
secondLevelMenu.addEventListener("click", function(e) {
    if (e.target.parentNode.children[1].className=="second-level-menu") {
        e.target.parentNode.children[1].className = "show-submenu";
    }
    else {
        e.target.parentNode.children[1].className = "second-level-menu";
    }
});

// 弹窗
//设置一个全局变量，用来记录event.target确定被点击的按钮
var whichButton;
/**
*点击事件触发函数显示弹窗
*通过参数obj确定显示哪个弹窗
*通过 {页面高（宽）- 弹窗（高）}/2 + 窗口滚动高（宽）确定弹窗位置
*弹窗显示时，半透明遮盖同时显示
*当为删除窗口时，获取td的innerHTML，在弹窗中显示 删除XXX吗？
*并将屏幕滚动条禁止
*
*@param {string} 弹窗id 确定显示哪个弹窗
*/
function showWindow(obj) {
    // 显示弹窗
    var popupWindow = document.getElementById(obj);
    popupWindow.classList.remove("second-level-menu");
    // 计算弹窗位置
    var allHeight = document.documentElement.clientHeight;
    var allWidth = document.documentElement.clientWidth;
    var popupHeight = popupWindow.offsetHeight;
    var popupWidth = popupWindow.offsetWidth;
    var changeHeight = document.documentElement.scrollTop;
    var changeWidth = document.documentElement.scrollLeft;

    popupWindow.style.top = (allHeight - popupHeight)/2 + changeHeight + "px";
    popupWindow.style.left = (allWidth - popupWidth)/2 + changeWidth + "px";
    // 显示遮盖
    var showCover = document.getElementById("cover");
    showCover.classList.remove("second-level-menu");
    showCover.style.width = allWidth + "px";
    showCover.style.height = allHeight + "px"; 
     // 若为删除弹窗，动态添加文本
    whichButton = event.target;
    if (event.target.className == "del") {
        var delValue = document.getElementById("delValue");
        var whichRow = whichButton.parentNode.parentNode;
        delValue.innerHTML = whichRow.children[0].innerHTML;
    }
    // 禁止滚动条
    disableWindowScroll();
}
/**
*点击取消按钮 或者点击确定按钮完成操作后 关闭弹窗
*
*@param {string} 弹窗id 确定关闭哪个弹窗
*/
function hideWindow(obj) {
    // 关闭弹窗
    var popupWindow = document.getElementById(obj);
    popupWindow.classList.add("second-level-menu");
    // 关闭遮盖
    var hideCover = document.getElementById("cover");
    hideCover.classList.add("second-level-menu");
    // 使能滚动条
    enableWindowScroll(); 
}

