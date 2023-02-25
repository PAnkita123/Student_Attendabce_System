function addStudent() {
    alert("working");
    var studentName = document.getElementById("addingStudent").value;
    console.log(studentName, "studentName")

    var StudentsList = JSON.parse(localStorage.getItem("StudentsList")) || [];

    StudentsList.push({ nameOfStudent: studentName, attendance: [] })


    localStorage.setItem("StudentsList", JSON.stringify(StudentsList));

    document.getElementById("addingStudent").value = "";
    markingAttendence();
    displayingStudentsList();


}
function displayingStudentsList() {
    var studentsList = JSON.parse(localStorage.getItem("StudentsList"));
    console.log(studentsList, "studentsList");

    var divFromHTML = document.getElementById("displayingStudentsList");
    console.log(divFromHTML, "divFromHTML");

    var students = [];
    for (var i = 0; i < studentsList.length; i++) {
        students += `<div><P>${studentsList[i].nameOfStudent}</P></div>`
    }
    console.log(students, "students")
    divFromHTML.innerHTML = students;

}
displayingStudentsList();





function markingAttendence() {
    var studentsList = JSON.parse(localStorage.getItem("StudentsList"));
    console.log(studentsList, "studentsList");
    var divFromHTML = document.getElementById("markingAttendence");
    console.log(divFromHTML, "divFromHTML");

    var students = [];
    for (var i = 0; i < studentsList.length; i++) {
        students += `<div id="presentDiv"><P>${studentsList[i].nameOfStudent}</P><p><i onclick="present(${i})"class="fa-solid fa-check"></i></p><p><i onclick ="absent(${i})"class="fa-solid fa-xmark"></i></P></div>`
    }
    console.log(students, "students")
    divFromHTML.innerHTML = students;

}
markingAttendence();


function getRealTime() {
    var dateAndTime = new Date();
    var date = dateAndTime.toJSON().slice(0, 10);
    var addDate = document.getElementById('dateHere')
    addDate.innerText = date;

}
getRealTime();

function present(index) {
    console.log("index", index)
    var dateAndTime = new Date();
    var date = dateAndTime.toJSON().slice(0, 10);

}

function absent(index) {
    alert("working for absent")
    var dateAndTime = new Date();
    var date = dateAndTime.toJSON().slice(0, 10);
    console.log(date, "date here")


    var studentListFromLS = JSON.parse(localStorage.getItem("StudentsList"))
    var user = studentListFromLS[index];
    var flag = false;
    for (var i = 0; i < user.attendance.length; i++) {
        if (!!user.attendance[i][date]) {
            flag = true;
        }

    }
    if (flag === false) {
        var obj = {};
        obj[date] = "Absent"
        user.attendance.push(obj)
        localStorage.setItem("StudentsList", JSON.stringify(studentListFromLS))
    } else {
        alert("already marked!")
    }
}

function present(index) {
    console.log("index", index)
    var dateAndTime = new Date();
    var date = dateAndTime.toJSON().slice(0, 10);
    console.log(date, "date here")


    var studentListFromLS = JSON.parse(localStorage.getItem("StudentsList"))
    var user = studentListFromLS[index];

    var flag = false;
    for (var i = 0; i < user.attendance.length; i++) {
        if (!!user.attendance[i][date]) {
            flag = true;
        }

    }
    if (flag === false) {
        var obj = {};
        obj[date] = "Present"
        user.attendance.push(obj)
        localStorage.setItem("StudentsList", JSON.stringify(studentListFromLS))

    } else {
        alert("already marked!")
    }

}
