function addStudent(){
    alert("working");
    var studentName=document.getElementById("addingStudent").value;
    console.log(studentName, "studentName")
    
    var StudentsList = JSON.parse(localStorage.getItem("StudentsList")) || [];

    StudentsList.push(studentName);

    localStorage.setItem("StudentsList", JSON.stringify(StudentsList));
    

}
function displayingStudentsList(){
    var studentsList=JSON.parse(localStorage.getItem("StudentsList"));
    console.log(studentsList, "studentsList");

    var divFromHTML=document.getElementById("displayingStudentsList");
    console.log(divFromHTML,"divFromHTML");
    
    var students = [];
    for (var i=0; i<studentsList.length;i++){
         students+=`<div><P>${studentsList[i]}</P></div>`    
    }
    console.log(students,"students")
    divFromHTML.innerHTML=students;

}
displayingStudentsList();


function markingAttendence(){
    var studentsList=JSON.parse(localStorage.getItem("StudentsList"));
    console.log(studentsList, "studentsList");
    var divFromHTML=document.getElementById("markingAttendence");
    console.log(divFromHTML,"divFromHTML");
    
    var students = [];
    for (var i=0; i<studentsList.length;i++){
         students+=`<div><P>${studentsList[i]}</P></div>`    
    }
    console.log(students,"students")
    divFromHTML.innerHTML=students;

}
markingAttendence();