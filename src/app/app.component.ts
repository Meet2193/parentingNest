import { Component, PLATFORM_ID, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CommonModule, Location, isPlatformBrowser } from '@angular/common';
import { filter } from 'rxjs';
import { FooterComponent } from './components/footer/footer.component';
import { BlogListService } from './service/blog-list.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SidebarComponent,
    CommonModule,
    FooterComponent,
    HttpClientModule,
  ],
  providers: [BlogListService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'parentingNest';
  currentUrl: string = '';
  components: string[] = ['/', 'register', 'login'];
  currentPath: string = '';
  authComponents: boolean = false;
  router = inject(Router);
  private location = inject(Location);
  private platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    this.isAuthComponent();
  }

  isAuthComponent() {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        if (event instanceof NavigationEnd) {
          this.currentUrl = this.router.url;

          const lastSegment =
            this.currentUrl === '/'
              ? this.currentUrl
              : this.currentUrl.split('/').pop() || '';
          this.authComponents = this.components.includes(lastSegment);
          // console.log('authComponents', lastSegment);
        }
      });
  }
}
