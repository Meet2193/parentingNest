import { Component, inject } from '@angular/core';
import { BlogListService } from '../../service/blog-list.service';
import { blogList } from '../home/home.component';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-newborncare',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './newborncare.component.html',
  styleUrl: './newborncare.component.css',
})
export class NewborncareComponent {
  blogService = inject(BlogListService);
  blogList: blogList[] = [];

  ngOnInit(): void {
    this.blogService
      .getAllBlogListByCategory('newborncare')
      .subscribe((res: any) => {
        this.blogList = res;
      });
  }
}
