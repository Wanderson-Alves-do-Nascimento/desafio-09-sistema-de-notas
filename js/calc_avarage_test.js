let studentList = [
  {
    name: "Paula",
    firstNote: 10,
    secondNote: 5,
  },
  {
    name: "Andre",
    firstNote: 6,
    secondNote: 4,
  },
];

function calcAvarage(students){
  for(student of studentList){
    student.avarage = ((student.firstNote + student.secondNote) / 2).toFixed(2);
    if(student.avarage >= 7){
      alert(`${student.name} concluiu o curso com maestria. Sua média foi ${student.avarage}.`)
    }else{
      alert(`O estudante ${student.name} precisará estudar um pouco mais. Sua média foi de ${student.avarage}.`)
    }
  }
  
}
function init(){
  calcAvarage(studentList);
};