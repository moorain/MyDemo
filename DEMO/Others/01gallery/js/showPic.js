
function showPic(whichpic){
    var source=whichpic.getAttribute("href");
    var placeholder=document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    var text=whichpic.getAttribute("title");  //����һ���������ȡwhichpic�����title����ֵ������text������
    var description=document.getElementById("description");//�õ�id��descrip�ġ�p>Ԫ�أ����������浽����descrip�
    description.firstChild.nodeValue=text;//��description�ĵ�һ���ӽڵ�����Ϊtext��ֵ��
}
//function countBodyChildren(){
//    var body_element=document.getElementsByTagName("body")[0];//�õ�body��Ԫ�أ��洢�������У�
//    // �� ��body-enement�Ѿ�ָ�����ĵ���bodyԪ��.
//    alert(body_element.childNodes.length);//����������ʾ�����������ĸ�����
//}
//window.onload=countBodyChildren;//�����������ҳ�����ʱִ�С����ڴ����