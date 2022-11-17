import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  Fname! :string;
  Lname! :string;
  Email! : string;
  Contact! : number;
 newArr! : object[]
 
 
   stdInfo =[
     {
         fname : 'Harry',
         lname : 'Potter',
         email : 'harry@gmail.com',
         contact : 12345678
     },
     {
         fname : 'Jhon',
         lname : 'Doe',
         email : 'jhon@gmail.com',
         contact : 34534567
     },
     {
         fname : 'Angela',
         lname : 'Markel',
         email : 'angela@gmail.com',
         contact : 67545678
     }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    
     let obj={
       fname : this.Fname,
       lname : this.Lname,
       email : this.Email,
       contact : this. Contact
     }
     console.log(obj) 
     this.stdInfo.push(obj)
     this.Fname="";
     this.Lname="";
     this.Email="";
     this.Contact=0;
   
   }

}
