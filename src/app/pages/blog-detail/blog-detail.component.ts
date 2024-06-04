import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogListService } from '../../service/blog-list.service';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css',
})
export class BlogDetailComponent {
  blogId: string | null = null;
  blogData: any;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogListService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      this.blogId = params.get('id');
      if (this.blogId) {
        this.fetchBlogData(this.blogId);
      }
    });
  }

  fetchBlogData(id: string): void {
    this.blogService.getBlogById(id).subscribe((fetchBlog: any) => {
      console.log('fetchBlog', fetchBlog);
      this.blogData = fetchBlog[0];
    });
  }
}
