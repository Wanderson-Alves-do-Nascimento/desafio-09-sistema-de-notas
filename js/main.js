let studentList = new Array();
let student = new Object();
function newStudent(){
  let decision = Number(prompt(`Escolha uma opção:
    1. Cadastrar aluno.
    2. Exibir lista.
    3. Sair.
  `));
  while(decision !=3){
    switch(decision){
      case 1:
        setStudentData();
        break;
      case 2:
        showStudentList();
        break;
      default:
        alert("Essa opção ainda não existe...")
        break;
    }
    decision = Number(prompt(`Escolha uma opção:
      1. Cadastrar aluno.
      2. Exibir lista.
      3. Sair.
    `));
  };
};
function setStudentData(){
  let studentName = prompt(`Informe o nome do estudante.`).trim();
  while(!studentName){
    alert('O nome do aluno não pode ser vazio.');
    studentName = prompt(`Informe o nome do estudante.`).trim();
  }
  
  let studentFirstNote = Number(prompt(`Informe a primeira nota [Entre 0 e 10].`));
  while(!checkNotes(studentFirstNote)){
    alert('A nota precisa ser entre 0 a 10.');
    studentFirstNote = Number(prompt(`Informe a primeira nota [Entre 0 e 10].`));
  }
  let studentSecondNote = Number(prompt(`Informe a segunda nota [Entre 0 e 10].`));
  while(!checkNotes(studentSecondNote)){
    alert('A nota precisa ser entre 0 a 10.');
    studentSecondNote = Number(prompt(`Informe a segunda nota [Entre 0 e 10].`));
  }
  
  student = {
    name: studentName,
    firstNote: studentFirstNote,
    secondNote: studentSecondNote,
    avarage: ((studentFirstNote + studentSecondNote) / 2).toFixed(1), 
  };
  studentList.push(student);
}

function showStudentList(){
  for(student of studentList){
    if(student.avarage >= 7){
      alert(`Parabéns!!! O estudante ${student.name} foi aprovado com a média ${student.avarage}.`);
    }else{
      alert(`Poxa, foi quase! O estudante ${student.name}, a média foi ${student.avarage}. Vamos melhorá-la juntos.`);
    }
  }
};

function checkNotes(number){
  return number >= 0 && number <= 10;
}
function init(){
  newStudent();
}
