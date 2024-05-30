import { authGuard } from './guard/auth.guard';
import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { PregnancyComponent } from './pages/pregnancy/pregnancy.component';
import { NewborncareComponent } from './pages/newborncare/newborncare.component';
import { BabyComponent } from './pages/baby/baby.component';
import { ParentingTipsComponent } from './pages/parenting-tips/parenting-tips.component';
import { ProductReviewsComponent } from './pages/product-reviews/product-reviews.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard],
  },
  {
    path: 'pregnancy',
    component: PregnancyComponent,
    canActivate: [authGuard],
  },
  {
    path: 'newborn-care',
    component: NewborncareComponent,
    canActivate: [authGuard],
  },
  {
    path: 'baby',
    component: BabyComponent,
    canActivate: [authGuard],
  },
  {
    path: 'parenting-tips',
    component: ParentingTipsComponent,
    canActivate: [authGuard],
  },
  {
    path: 'product-reviews',
    component: ProductReviewsComponent,
    canActivate: [authGuard],
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    canActivate: [authGuard],
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    canActivate: [authGuard],
  },
];
