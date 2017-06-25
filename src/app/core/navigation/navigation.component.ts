import { Component, OnInit } from '@angular/core';

class MenuItem {
  constructor(public caption: string, public link: any[]) { }
}

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  menuItems: MenuItem[];
  ngOnInit() {
    this.menuItems = [
      { caption: 'Home', link: ['/home'] },
      { caption: 'Profil', link: ['/profil'] },
      { caption: 'Start game', link: ['/game'] },
    ];
  }
}
