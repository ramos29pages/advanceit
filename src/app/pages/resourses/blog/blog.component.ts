import { Component } from '@angular/core';
import { HeroHeaderComponent } from "../../../components/hero-header/hero-header.component";
import { BlogListComponent } from "../../../components/resources/blog-list/blog-list.component";

@Component({
  selector: 'app-blog',
  imports: [HeroHeaderComponent, BlogListComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
