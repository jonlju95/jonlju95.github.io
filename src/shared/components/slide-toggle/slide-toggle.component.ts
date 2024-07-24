import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-slide-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slide-toggle.component.html',
  styleUrl: './slide-toggle.component.scss'
})
export class SlideToggleComponent implements OnInit {
  @Input() isChecked: boolean = false;

  @Output() click = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  toggle() {
    this.click.emit();
  }
}
