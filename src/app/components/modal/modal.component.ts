import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-modal',
  template: `
      <h2 class="text-center">{{ courseName }}</h2>
`,
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() courseName!: string;       
}