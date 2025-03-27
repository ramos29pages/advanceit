import { Component } from '@angular/core';
import { HeroHeaderComponent } from "../../../components/hero-header/hero-header.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { NgFor } from '@angular/common';
import { BrandGridComponent } from "../../../components/resources/brand-grid/brand-grid.component";

@Component({
  selector: 'app-partners',
  imports: [HeroHeaderComponent, FooterComponent, NgFor, BrandGridComponent],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css'
})
export class PartnersComponent {


}
