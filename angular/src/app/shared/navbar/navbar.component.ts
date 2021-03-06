import { Component, OnInit, Input, NgModule } from '@angular/core';

/*bootstrap*/
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() title: String;
  collapsed = true;

  toggleCollapsed():void {
    this.collapsed = !this.collapsed;
  }

  searchTerm = '';

  get token() {
    return localStorage.getItem('token');
  }

  closeDropdown(dropdown) {
    dropdown.close();
  }

  logout() {}

  search() {}
  
  constructor() { }

  ngOnInit() {
  }

}

@NgModule({
  declarations: [NavbarComponent],
  imports: [NgbModule]
})
export class OtherModule {}
