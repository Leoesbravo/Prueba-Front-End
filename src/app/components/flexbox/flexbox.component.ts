import { Component } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-flexbox',
  templateUrl: './flexbox.component.html',
  styleUrls: ['./flexbox.component.css']
})
export class FlexboxComponent {
  isCompleted: boolean = false;
  isInProgress: boolean = false;
  isNotStarted: boolean = false;
  
  constructor(private userService: UserComponent) {}
  setCompleted() {
    this.isCompleted = true;
    this.isInProgress = false;
    this.isNotStarted = false;
    this.userService.filtrarCursosPorEstado('Completados');
  }
  
  setInProgress() {
    this.isCompleted = false;
    this.isInProgress = true;
    this.isNotStarted = false;
    this.userService.filtrarCursosPorEstado('En progreso');
  }
  
  setNotStarted() {
    this.isCompleted = false;
    this.isInProgress = false;
    this.isNotStarted = true;
    this.userService.filtrarCursosPorEstado('Sin iniciar');
  }
}
