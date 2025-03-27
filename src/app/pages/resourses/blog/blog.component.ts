import { Component } from '@angular/core';
import { HeroHeaderComponent } from "../../../components/hero-header/hero-header.component";
import { BlogListComponent } from "../../../components/resources/blog-list/blog-list.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-blog',
  imports: [HeroHeaderComponent, BlogListComponent, FooterComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
