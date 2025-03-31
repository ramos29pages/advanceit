import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faPlus,
  faFilter,
  faDownload,
  faFileExport,
  faPrint,
  faPen,
  faEye,
  faCheckSquare,
  faTrash
} from '@fortawesome/free-solid-svg-icons';

interface Order {
  id: number;
  numeroOrden: string;
  fecha: string;
  hora: string;
  estadoPago: 'paid' | 'unpaid' | 'waiting' | 'canceled';
  precioTotal: number;
  productos: string[]; // Lista de productos o detalles resumidos
  cliente: string;
  shippingNo: string;
  notas?: string;
}

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './orders.component.html'
})
export class OrdersComponent {
  // Íconos de FontAwesome
  faPlus = faPlus;
  faFilter = faFilter;
  faDownload = faDownload;
  faFileExport = faFileExport;
  faPrint = faPrint;
  faPen = faPen;
  faEye = faEye;
  faCheckSquare = faCheckSquare;
  faTrash = faTrash;

  // Datos de ejemplo
  orders: Order[] = [
    {
      id: 2471,
      numeroOrden: '#2471',
      fecha: '15 Sep, 2022',
      hora: '12:35 PM',
      estadoPago: 'paid',
      precioTotal: 580.99,
      productos: [
        'Burberry Beige 38mm Stainless Steel Watch with Smoked Check...'
      ],
      cliente: 'John Doe',
      shippingNo: 'SH-11020ab2'
    },
    {
      id: 2472,
      numeroOrden: '#2472',
      fecha: '14 Sep, 2022',
      hora: '10:00 AM',
      estadoPago: 'waiting',
      precioTotal: 340.48,
      productos: [
        'Watch #Ref-00012'
      ],
      cliente: 'Jane Smith',
      shippingNo: 'SH-11020ab3',
      notas: 'Waiting payment'
    },
    {
      id: 2473,
      numeroOrden: '#2473',
      fecha: '13 Sep, 2022',
      hora: '1:15 PM',
      estadoPago: 'paid',
      precioTotal: 420,
      productos: [
        'Laced shoes on high current'
      ],
      cliente: 'Mark Wilson',
      shippingNo: 'SH-11020ab5'
    }
  ];
}
