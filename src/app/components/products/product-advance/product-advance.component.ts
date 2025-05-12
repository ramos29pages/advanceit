import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch, faCopyright, faShoppingCart, faEye, faLayerGroup, faTag, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { Producto } from '../../../models/Productos';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-advance',
  imports: [CommonModule, FontAwesomeModule, RouterLink],
  templateUrl: './product-advance.component.html',
})
export class ProductAdvanceComponent {

  @Input() productosFiltrados: Producto[] = [];
  @Input() producto !: Producto;

    faShoppingCart = faShoppingCart;
    faEye = faEye;
    faSearch = faSearch;
    faLayerGroup = faLayerGroup;
    faTag = faTag;
    faCopririgth = faCopyright;
    faCodeBranch = faCodeBranch;

}
