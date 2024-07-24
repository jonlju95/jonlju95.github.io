import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-slide-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slide-toggle.component.html',
  styleUrl: './slide-toggle.component.scss'
})
export class SlideToggleComponent {
  @Input() isChecked = false;

  @Output() buttonClick = new EventEmitter();

  toggle() {
    this.buttonClick.emit();
  }
}
