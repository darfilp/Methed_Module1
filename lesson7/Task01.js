const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

function filterStudent(arr1, arr2) {
    for (const key in arr2) {
      for (const keys in arr1) {
        if (arr2[key] === arr1[keys]) {
          arr1.splice(keys,1)
        } 
      }
    }
    console.log(arr1)
}

filterStudent(allStudents, failedStudents);