import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogListService } from '../../service/blog-list.service';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  blogService = inject(BlogListService);
  blogList: blogList[] = [];

  ngOnInit(): void {
    this.blogService.getAllBlogListByCategory().subscribe((res: any) => {
      this.blogList = res;
    });
  }
}

export interface blogList {
  id: string;
  bannerImage: string;
  userAvatar: string;
  category: string;
  blogTitle: string;
  blogHeader: String;
  menuCategory: string;
}
