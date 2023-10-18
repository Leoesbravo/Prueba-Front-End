import { Component, ElementRef, Renderer2 } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailsService } from '../../services/details.service';
import { RootObject } from '../../models/RootObject';
import { ModalComponent } from '../modal/modal.component';
import { Inscription } from 'src/app/models/Inscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  datos!: RootObject; 
  cursosFiltrados: any[] = [];

  constructor(private modalService: NgbModal, private servicio: DetailsService, private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    this.servicio.getInformacion().subscribe((data: RootObject) => {
      this.datos = data; 
      console.log(data);
    });
  }

  filtrarPorCategoria(categoria: string) {
    if (categoria.length > 1) {
        this.cursosFiltrados = this.datos.inscriptions.filter(Inscription => Inscription.course.sector.name === categoria);
        console.log(this.cursosFiltrados);
    } else {
        this.cursosFiltrados = this.datos.inscriptions;
    }
  }

  filtrarCursosPorEstado(estado: string) {
    if (estado === 'Completados') {
      this.cursosFiltrados = this.datos.inscriptions.filter(inscription => inscription.advance === 100);
    } else if (estado === 'En progreso') {
      this.cursosFiltrados = this.datos.inscriptions.filter(inscription => inscription.advance > 0 && inscription.advance < 100);
    } else if (estado === 'Sin iniciar') {
      this.cursosFiltrados = this.datos.inscriptions.filter(inscription => inscription.advance === 0);
    }
  }

  onCardMouseEnter(event: any) {
    this.renderer.setStyle(event, 'transform', 'scale(1.05)');
    this.renderer.setStyle(event, 'transition', 'transform 0.3s');
  }

  onCardMouseLeave(event: any) {
    this.renderer.setStyle(event, 'transform', 'scale(1)');
  }
  openModal(inscription: any) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.courseName = inscription.course.name;
  }
}
