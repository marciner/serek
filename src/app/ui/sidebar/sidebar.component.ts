import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {
  @Input() wrapper:boolean;
  sidebars = [
    { name: 'Gówna', url: '', icon: 'glyphicon-home' },
    { name: 'Zamówienia', url: '/orders', icon: 'glyphicon-book' },
    { name: 'Raporty', url: '/reports', icon: 'glyphicon-dashboard' },
    { name: 'Kajaki', url: '/kayaks', icon: 'glyphicon-plane' },
    { name: 'Trasy', url: '/routes', icon: 'glyphicon-globe' },
    { name: 'Użytkownicy', url: '/users', icon: 'glyphicon-user' },

  ];
  selectedSidebar: any;

  constructor(public authService: AuthService, private router: Router) {
    
   }

  ngOnInit() {
  }

  onSelect(sidebar, e): void {
    this.selectedSidebar = sidebar;
  }

  logout(e) {
    e.preventDefault();
    this.authService.logout();
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);
  }

}
