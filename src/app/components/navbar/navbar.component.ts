import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent implements OnInit {

  options = [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'About Us',
      href: '/'
    },
    {
      label: 'Support Us',
      href: '/'
    },
  ]

  ngOnInit(): void { }
}
