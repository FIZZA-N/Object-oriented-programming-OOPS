#! /usr/bin/env node

import  inquirer from "inquirer";

class Student {
    name: string
    constructor (n: string ){
        this.name=n
    }

}

class person {
     student: Student[]=[]
     addStudent(object:Student){
        this.student.push(object)
     }
}

const persons = new person()

const programstart =async(persons : person) => {
    do{
        console.log ("\nWelcome everyone! \n");
        const ans = await inquirer.prompt({
            name: "Select",
            type: "list",
            message: "Whom would you like to intereact with?",
            choices: [ "Staff", "student", "Exit"]

        })
        if (ans.Select == "Staff"){
            console.log("You approach the staff room. please feel free to ask any question.");

        }else if (ans.Select == "student"){
                const ans = await inquirer.prompt({
                    name: "Student",
                    type: "input",
                    message: "Enter the student's name you want to engage with?"

                })
                const student = persons.student.find(val => val.name == ans.Student)

            
            if(!student){
                const name = new Student(ans.Student)
                persons.addStudent(name)
                console.log(`Hello i am ${name.name}. Nice to meet you!`);
                console.log("New Student has been added");
                console.log("Current Student List: ")
                console.log(persons.student);

            }else{
                console.log(`Hello,I am ${student.name}. How can I help you?`);
                console.log("Existing Student List: ");
                console.log(persons.student);

            }
        }else if (ans.Select == "Exit"){
            console.log("Existing the program..... :)");
            process.exit()
        }
    }while(true)
    
}


programstart(persons)