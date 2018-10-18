import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import{Router}from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string='';
  password:string='';
  constructor(private  fire:AngularFireAuth,private router:Router) { }

  ngOnInit() {
  }


  myLogin(){
    this.fire.auth.signInWithEmailAndPassword(this.email,this.password)
    .then(user=>{console.log(this.email,this.password)})
this.router.navigate(['home'])
  }
}


