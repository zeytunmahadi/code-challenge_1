function studentmMarks(marks) {
    if (marks>=79) {
        return 'A' 
    }
    else if(marks>=60 && marks<=79){
        return 'B'
    }
    else if(marks>=49 && marks<=59){
        return 'C'
    }
    else if(marks>=40 && marks<=49){
        return 'D'
    }
    else if(marks>=40){
        return 'E'
    }
} 
console.log(studentmMarks(50))

//Required a condition from the user
    const studentMarks = prompt('EnterStudentMarks (between 0 and 100);');
if (!isNaN(studentmMarks) && studentMarks <=100 && studentMarks >=0){
    const grade = studentmMarks (studentMarks) 
console.log (grade);
    
}
else{
    console.log("try again one more time");
}