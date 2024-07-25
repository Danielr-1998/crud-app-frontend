import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService, Item } from '../../services/item.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-form',
  standalone:true,  
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css'],
imports:[FormsModule]

})
export class ItemFormComponent implements OnInit {
  item: Item = { name: '', description: '' };
  isEditMode: boolean = false;  // Asegúrate de que esta línea esté presente

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.itemService.getItems().subscribe((items: Item[]) => {
        this.item = items.find((i: Item) => i.id === +id) || this.item;
      });
    }
  }

  saveItem(): void {
    if (this.item.id) {
      this.itemService.updateItem(this.item.id, this.item).subscribe(() => {
        // Handle success
      });
    } else {
      this.itemService.addItem(this.item).subscribe(() => {
        // Handle success
      });
    }
  }
}
