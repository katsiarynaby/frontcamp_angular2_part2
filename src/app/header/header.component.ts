import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    // private router: Router,
  ) { }


  ngOnInit() {
  }

  onLogIn() {
    console.log('To Log In');
    // this.router.navigate(['/login']);
  }

  onLogOut() {
    console.log('To Log Out');
  }

  onSubmit($event: Event) {
    console.log($event);
  }
}
