
function showPic(whichpic){
    var source=whichpic.getAttribute("href");
    var placeholder=document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
}
function countBodyChildren(){
    var body_element=document.getElementsByTagName("body")[0];//�õ�body��Ԫ�أ��洢�������У�
    // �� ��body-enement�Ѿ�ָ�����ĵ���bodyԪ��.
    alert(body_element.childNodes.length);//����������ʾ�����������ĸ�����
}
window.onload=countBodyChildren;//�����������ҳ�����ʱִ�С����ڴ����