import { Component, inject, Input } from '@angular/core';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { PieService } from '../services/pie.service';

@Component({
  standalone: true,
  imports: [
    DetailViewComponent,
    SideMenuComponent,
  ],
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent {
  @Input() set categoryId(value: string){
    console.log('categoryId', value);
    this.pieService.setSelectedCategory(value);
  }

  private readonly pieService = inject(PieService);
}
