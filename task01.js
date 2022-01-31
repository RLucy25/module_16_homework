/* ������� 1.

��� ���� ��������� � ���������, ������� �� ������ ��������. ���� ������ � �������� ���, ������� ����� 
��������������� XML � JS-������ � �������� ��� � �������.*/

//���� 1. ���������� ������

//�������� ���������� ������ DOMParser. 
const parser = new DOMParser();
//console.log('parser', parser);

//XML, ������� ����� �������
const xmlString = `
  <list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>����</first>
      <second>������</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
  </list>
`;
//console.log('xmlString', xmlString);

//���� 2. ��������� ������

// ������� XML
const xmlDom = parser.parseFromString(xmlString, "text/xml");

// ��������� ���� DOM-���
const listNode = xmlDom.querySelector("list");
const student1Node = listNode.querySelector("student");
const name1Node = student1Node.querySelector("name");
const age1Node = student1Node.querySelector("age");
const prof1Node = student1Node.querySelector("prof");
const student2Node = listNode.querySelector("student:last-child");
const name2Node = student2Node.querySelector("name");
const age2Node = student2Node.querySelector("age");
const prof2Node = student2Node.querySelector("prof");

// ��������� ������ �� ���������
const lang1Attr = name1Node.getAttribute("lang");
const lang2Attr = name2Node.getAttribute("lang");

//���� 3. �������������� ������

const result = [{
    name: name1Node.textContent,
    age: Number(age1Node.textContent),
    prof: prof1Node.textContent,
    lang: lang1Attr},{ 
    name: name2Node.textContent,
    age: Number(age2Node.textContent),
    prof: prof2Node.textContent,
    lang: lang2Attr
}];
console.log('list: ', result);