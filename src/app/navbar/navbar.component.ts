import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user : any = {};
  isLogin: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if(auth){
        this.isLogin = true;
        this.user.nombre = auth.displayName;
        this.user.email = auth.email;
        this.user.picture = auth.photoURL;
        this.user.id = auth.uid;               
      }else{
        this.isLogin = false;
      }
    })
  }

  onLogout(){
    this.authService.logout();
  }
}
