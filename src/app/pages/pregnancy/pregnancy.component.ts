import { Component, inject } from '@angular/core';
import { BlogListService } from '../../service/blog-list.service';
import { blogList } from '../home/home.component';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-pregnancy',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './pregnancy.component.html',
  styleUrl: './pregnancy.component.css',
})
export class PregnancyComponent {
  blogService = inject(BlogListService);
  blogList: blogList[] = [];

  ngOnInit(): void {
    this.blogService
      .getAllBlogListByCategory('pregnancy')
      .subscribe((res: any) => {
        this.blogList = res;
      });
  }
}
