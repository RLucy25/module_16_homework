/*������� 2.

��� ������� JSON-������:
{"name":"Anton","age":36,"skills":["Javascript","HTML","CSS"],"salary":80000}
���� ������ � ������� JS-������, ������� ��� �������������� � JSON ����� ���������� 
� �������� ���������� ����� �� JSON-������, ��� � �������.
 ������������ ������ ������� � �������.*/

const Obj = {
    name: "Anton",
    age: 36,
    skills: ["Javascript","HTML","CSS"],
    salary: 80000
}
console.log (Obj);
 
let listJSON = JSON.stringify(Obj);

console.log (listJSON);
