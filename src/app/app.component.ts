import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true , // Solo esta línea para indicar que es un componente autónomo
  imports: [RouterModule]

})
export class AppComponent {
  title = 'crud-app';
}
