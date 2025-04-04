import { Component } from '@angular/core';
import { RectComponent } from './rect/rect.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RectComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  rectSize = {
    height: '100',
    width: '100'
  };
}
