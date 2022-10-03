import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titleMain = 'Profile Editor'
  title = 'User Information';

  user:User = {name:"Jordon",age:40,favoritecolor:"blue", birthday: new Date, caffeine:"Water"};

// user:User[] = [
//   {name:"Jordon",age:40,favoritecolor:"blue"}
//   // {name:"Kobe",age:35,favoritecolor:"green"},
//   // {name:"Duncan",age:36,favoritecolor:"yellow"},
//   // {name:"Tom",age:41,favoritecolor:"orange"}
// ]

displayEdit:boolean = false;

toggleEdit(): void {
this.displayEdit = !this.displayEdit;
}

}
