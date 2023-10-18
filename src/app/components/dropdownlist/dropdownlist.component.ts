import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dropdownlist',
  templateUrl: './dropdownlist.component.html',
  styleUrls: ['./dropdownlist.component.css']
})
export class DropdownlistComponent {
  @Output() categorySelected = new EventEmitter<string>();

  selectedCategory: string ="";

  filtrarPorCategoria() {
    if (this.selectedCategory) {
      this.categorySelected.emit(this.selectedCategory);
      console.log(this.selectedCategory);
    }
  }
}