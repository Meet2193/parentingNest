import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faHome,
  faPersonPregnant,
  faHandsHoldingChild,
  faBaby,
  faLightbulb,
  faRankingStar,
  faAddressCard,
  faHeadset,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  menuList: MenuTab[] = [
    {
      route: '/home',
      icon: faHome,
      title: 'Home',
    },
    {
      route: '/pregnancy',
      icon: faPersonPregnant,
      title: 'Prgenancy',
      class: 'fs-4',
    },
    {
      route: '/newborn-care',
      icon: faHandsHoldingChild,
      title: 'Newborn Care',
    },
    {
      route: '/baby',
      icon: faBaby,
      title: 'Baby',
      class: 'fs-4',
    },
    {
      route: '/tips',
      icon: faLightbulb,
      title: 'Parenting Tips',
      class: 'fs-4',
    },
    {
      route: '/about',
      icon: faAddressCard,
      title: 'About Us',
    },
    {
      route: '/reviews',
      icon: faRankingStar,
      title: 'Product Reviews',
    },
    {
      route: '/contact',
      icon: faHeadset,
      title: 'Contact Us',
    },
  ];
}

export interface MenuTab {
  route: string;
  icon: IconDefinition;
  title: string;
  class?: string;
}
