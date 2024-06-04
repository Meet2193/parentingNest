import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { mapToCanActivate } from '@angular/router';
import { filter, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogListService {
  httpClient = inject(HttpClient);
  constructor() {}

  blogList = of([
    {
      id: '1',
      bannerImage:
        '../../../assets/Cover/babycare-cover.jpgbabaycare-cover.jpg',
      userAvatar: '../../../assets/user-avatar/avatar.png',
      category: 'Blog',
      blogTitle:
        'Ornare egestas pellentesque facilisis in a ultrices erat diam metus integer sed',
      blogHeader: 'How To Get Started Child Care With ParentingNest',
      menuCategory: 'all',
    },
    {
      id: '2',
      bannerImage:
        'https://media.istockphoto.com/id/1458807880/photo/learning-through-play.webp?b=1&s=170667a&w=0&k=20&c=eE-a-Xig0yQlP1lro9BTlr6JVtdARdWCL7ETODAUTVs=',
      userAvatar: '../../../assets/user-avatar/avatar.png',
      category: 'Blog',
      blogTitle:
        'Ornare egestas pellentesque facilisis in a ultrices erat diam metus integer sed',
      blogHeader: 'How To Get Started Child Care With ParentingNest',
      menuCategory: 'all',
    },
    {
      id: '3',
      bannerImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-kQmbacwEeh638BvjIyYTS7b9hMvSrftpvg&s',
      userAvatar: '../../../assets/user-avatar/avatar.png',
      category: 'Blog',
      blogTitle:
        'Ornare egestas pellentesque facilisis in a ultrices erat diam metus integer sed',
      blogHeader: 'How To Get Started Child Care With ParentingNest',
      menuCategory: 'all',
    },
    {
      id: '4',
      bannerImage:
        'https://media.istockphoto.com/id/1277752779/photo/teacher-disinfect-students-hands-with-sanitizer-gel-back-to-school-and-covid-19-lifestyle.jpg?s=612x612&w=0&k=20&c=x8AqlsbC8wABsv5IvQxVp_pqIXU--Ci5nN96B4GiSkA=',
      userAvatar: '../../../assets/user-avatar/avatar.png',
      category: 'Blog',
      blogTitle:
        'Ornare egestas pellentesque facilisis in a ultrices erat diam metus integer sed',
      blogHeader: 'How To Get Started Child Care With ParentingNest',
      menuCategory: 'pregnancy',
    },
    {
      id: '5',
      bannerImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZX_qiOj6pToJaEhPxQNb8gR9wCnEszUWZFA&s',
      userAvatar: '../../../assets/user-avatar/avatar.png',
      category: 'Blog',
      blogTitle:
        'Ornare egestas pellentesque facilisis in a ultrices erat diam metus integer sed',
      blogHeader: 'How To Get Started Child Care With ParentingNest',
      menuCategory: 'pregnancy',
    },
    {
      id: '6',
      bannerImage:
        'https://cdn.pixabay.com/photo/2012/03/01/01/42/baby-20339_1280.jpg',
      userAvatar: '../../../assets/user-avatar/avatar.png',
      category: 'Blog',
      blogTitle:
        'Ornare egestas pellentesque facilisis in a ultrices erat diam metus integer sed',
      blogHeader: 'How To Get Started Child Care With ParentingNest',
      menuCategory: 'pregnancy',
    },
    {
      id: '7',
      bannerImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbvpDN1X95m98nOUPAyTyg1c7YlbsF0UIoKw&s',
      userAvatar: '../../../assets/user-avatar/avatar.png',
      category: 'Blog',
      blogTitle:
        'Ornare egestas pellentesque facilisis in a ultrices erat diam metus integer sed',
      blogHeader: 'How To Get Started Child Care With ParentingNest',
      menuCategory: 'parentingtips',
    },
    {
      id: '8',
      bannerImage:
        'https://www.shutterstock.com/image-vector/kids-care-logo-children-world-260nw-1830220409.jpg',
      userAvatar: '../../../assets/user-avatar/avatar.png',
      category: 'Blog',
      blogTitle:
        'Ornare egestas pellentesque facilisis in a ultrices erat diam metus integer sed',
      blogHeader: 'How To Get Started Child Care With ParentingNest',
      menuCategory: 'parentingtips',
    },
    {
      id: '9',
      bannerImage:
        'https://img.freepik.com/free-psd/nanny-services-banner-template_23-2148741728.jpg',
      userAvatar: '../../../assets/user-avatar/avatar.png',
      category: 'Blog',
      blogTitle:
        'Ornare egestas pellentesque facilisis in a ultrices erat diam metus integer sed',
      blogHeader: 'How To Get Started Child Care With ParentingNest',
      menuCategory: 'parentingtips',
    },
    {
      id: '10',
      bannerImage:
        'https://cdn.pixabay.com/photo/2012/03/01/01/42/baby-20339_1280.jpg',
      userAvatar: '../../../assets/user-avatar/avatar.png',
      category: 'Blog',
      blogTitle:
        'Ornare egestas pellentesque facilisis in a ultrices erat diam metus integer sed',
      blogHeader: 'How To Get Started Child Care With ParentingNest',
      menuCategory: 'newborncare',
    },
    {
      id: '11',
      bannerImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbvpDN1X95m98nOUPAyTyg1c7YlbsF0UIoKw&s',
      userAvatar: '../../../assets/user-avatar/avatar.png',
      category: 'Blog',
      blogTitle:
        'Ornare egestas pellentesque facilisis in a ultrices erat diam metus integer sed',
      blogHeader: 'How To Get Started Child Care With ParentingNest',
      menuCategory: 'newborncare',
    },
    {
      id: '12',
      bannerImage:
        'https://www.shutterstock.com/image-vector/kids-care-logo-children-world-260nw-1830220409.jpg',
      userAvatar: '../../../assets/user-avatar/avatar.png',
      category: 'Blog',
      blogTitle:
        'Ornare egestas pellentesque facilisis in a ultrices erat diam metus integer sed',
      blogHeader: 'How To Get Started Child Care With ParentingNest',
      menuCategory: 'newborncare',
    },
  ]);

  getAllBlogListByCategory(category = 'all') {
    if (category == 'all') return this.blogList;
    return this.blogList.pipe(
      map((list: any) =>
        list.filter((item: any) => item.menuCategory === category)
      )
    );
  }

  getBlogById(blogId: string) {
    return this.getAllBlogListByCategory().pipe(
      map((data: any) => data.filter((blog: any) => blog.id == blogId))
    );
  }
}
