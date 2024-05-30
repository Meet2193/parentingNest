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
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  menuArray = [
    {
      routingName: '/home',
      iconName: faHome,
      tabName: 'Home',
    },
    {
      routingName: '/pregnancy',
      iconName: faPersonPregnant,
      tabName: 'Prgenancy',
      className: 'fs-2',
    },
    {
      routingName: '/newborn-care',
      iconName: faHandsHoldingChild,
      tabName: 'Newborn Care',
    },
    {
      routingName: '/baby',
      iconName: faBaby,
      tabName: 'Baby',
      className: 'fs-4',
    },
    {
      routingName: '/parenting-tips',
      iconName: faLightbulb,
      tabName: 'Parenting Tips',
      className: 'fs-4',
    },
    {
      routingName: '/about-us',
      iconName: faAddressCard,
      tabName: 'About Us',
    },
    {
      routingName: '/product-reviews',
      iconName: faRankingStar,
      tabName: 'Product Reviews',
    },
    {
      routingName: '/contact-us',
      iconName: faHeadset,
      tabName: 'Contact Us',
    },
  ];
}
