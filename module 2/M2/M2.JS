"use strict"

//structuur voor studenten array
const students = {
    Alex: {grades: []},
    Sam: {grades: []},
    Jo: {grades: []}
};

//Elementen ophalen
const studentSelect = document.getElementById('student');
const courseInput = document.getElementById('course');
const gradeInput = document.getElementById('grade');
const addButton = document.getElementById('addGrade');
const overviewDiv = document.getElementById('studentOverview');

addButton.addEventListener('click' , ()=>{
    const student = studentSelect.value;
    const course = courseInput.value;
    const grade  = Number(gradeInput.value);

    if(!course || !grade || grade < 0 || grade > 20){
        alert('Vul alles in.');
        return;
    }
    //score toevoegen
    //students["Sam"].grade.push
    students[student].grade.push({
        course : course,
        grade : grade
    });
    //overview updaten
    updateOverview();
    })
    //Inputs leegmaken
    courseInput.value = '';
    gradeInput.value = '';
    ;
    function updateOverview(){
        let overview = '';

        for(let studentName of Object.keys(students)){
            const student = students[studentName];
            const grades = student.grades;

            //gemiddelde berekenen

            let average = 0;
            if(grades.length > 0){
                average = grades.reduce((sum,grade) => sum + grade.grades)
            }
            overview +=
            <div ></div>
        }
    }