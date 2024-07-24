import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from "../../../../shared/components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
