function showPic(whichpic) {//����һ���µĺ���
    if (!document.getElementById("placeholder")) return false;//��鵱ǰ������Ƿ������ΪgetElementByTagName��DOM����
    //���δ���壬���뿪�������������Ľ������ִ�С������������������������ִ�����������
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    if (!document.getElementById("description")) return false;
    //��getElementByIdʹ��ͬ�ϵķ�����
    if (whichpic.getAttribute("title")) {
        var text = whichpic.getAttribute("title");
    } else {
        var text = "";
    }
    var description = document.getElementById("description");
    if (description.firstChild.nodeType == 3) {
        description.firstChild.nodeValue = text;
    }
    return false;
}

function prepareGallery() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    //��Ҫ�Ĳ��Ժͼ�鹤�������󣬿��Կ�ʼ��д�¼�����ĺ��Ĺ��ܡ�
    var gallery = document.getElementById("imagegallery");
//����һ�������򻯡�
    var links = gallery.getElementsByTagName("a");
    //���ڵ��б�,��ֵ��һ������������Ϊlinks��

    for ( var i=0; i < links.length; i++) {
        links[i].onclick = function() {
            return showPic(this);
        }
        links[i].onkeypress = links[i].onclick;
    }
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

addLoadEvent(prepareGallery);/**
 * Created by Administrator on 2017/7/26 0026.
 */
