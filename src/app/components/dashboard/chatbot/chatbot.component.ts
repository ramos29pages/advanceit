import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ChatMessage, ProductCard } from './chat.model'; // Ajusta la ruta si lo pones en otro archivo
import { FormsModule } from '@angular/forms';


export interface ChatMessage {
  sender: 'user' | 'bot';
  text?: string;
  products?: ProductCard[];
}

export interface ProductCard {
  name: string;
  image: string;
  price: string;
}


@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="fixed bottom-4 right-4 w-80 bg-white shadow-lg rounded-lg flex flex-col overflow-hidden">
      <!-- Encabezado -->
      <div class="bg-blue-600 text-white p-4 font-bold">ChatBot Assistant</div>

      <!-- Zona de mensajes -->
      <div class="flex-1 p-4 space-y-3 overflow-y-auto" style="max-height: 400px;">
        <!-- Itera los mensajes -->
        <div *ngFor="let msg of messages">
          <!-- Mensaje de usuario -->
          <div *ngIf="msg.sender === 'user'" class="flex justify-end mb-2">
            <div class="bg-blue-100 text-gray-800 px-3 py-2 rounded-lg max-w-xs text-right">
              {{ msg.text }}
            </div>
          </div>

          <!-- Mensaje de bot -->
          <div *ngIf="msg.sender === 'bot'" class="flex justify-start mb-2">
            <div class="bg-gray-100 text-gray-800 px-3 py-2 rounded-lg max-w-xs">
              <!-- Texto -->
              <p *ngIf="msg.text" class="mb-2">{{ msg.text }}</p>
              <!-- Productos -->
              <div *ngIf="msg.products" class="flex space-x-2 overflow-x-auto">
                <div
                  *ngFor="let prod of msg.products"
                  class="bg-white border rounded-lg p-2 w-24 flex-shrink-0 shadow-sm"
                >
                  <img [src]="prod.image" alt="prod" class="w-full h-20 object-cover rounded" />
                  <p class="text-sm font-semibold mt-1">{{ prod.name }}</p>
                  <p class="text-xs text-gray-500">{{ prod.price }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Input de mensaje -->
      <div class="p-2 border-t flex items-center">
        <input
          type="text"
          [(ngModel)]="userInput"
          (keyup.enter)="sendUserMessage()"
          placeholder="Type a message..."
          class="flex-1 border border-gray-300 rounded-l p-2 focus:outline-none"
        />
        <button
          (click)="sendUserMessage()"
          class="bg-blue-600 text-white px-4 py-2 rounded-r"
        >
          Send
        </button>
      </div>
    </div>
  `,
  styles: []
})
export class ChatbotComponent implements OnInit {
  messages: ChatMessage[] = [];
  userInput: string = '';

  ngOnInit(): void {
    // Mensajes iniciales de ejemplo
    this.messages.push(
      {
        sender: 'bot',
        text: "Hello! I'm here to help you find the perfect item. How can I assist you today?"
      }
    );
  }

  sendUserMessage() {
    if (!this.userInput.trim()) return;

    // Agrega el mensaje del usuario
    this.messages.push({
      sender: 'user',
      text: this.userInput
    });

    // Simula una respuesta
    this.handleBotResponse(this.userInput);

    // Limpia el input
    this.userInput = '';
  }

  // Lógica simulada para la respuesta
  handleBotResponse(userMessage: string) {
    // Ejemplo: si el usuario pide "brown tote bag"
    if (userMessage.toLowerCase().includes('brown tote bag')) {
      this.messages.push({
        sender: 'bot',
        text: "Sure, I'd be happy to help you with that. Here are some of our best sellers.",
        products: [
          {
            name: 'Panel Strap Tote',
            image:
              'https://via.placeholder.com/100x100/8B4513?text=Panel+Tote',
            price: '$150'
          },
          {
            name: 'Baggit Wock Tote',
            image:
              'https://via.placeholder.com/100x100/8B4513?text=Baggit+Tote',
            price: '$180'
          },
          {
            name: 'Vintage Tote',
            image:
              'https://via.placeholder.com/100x100/8B4513?text=Vintage+Tote',
            price: '$120'
          }
        ]
      });
    } else if (
      userMessage.toLowerCase().includes('tan brown') ||
      userMessage.toLowerCase().includes('leather')
    ) {
      this.messages.push({
        sender: 'bot',
        text: "Of course! We have some interesting tote bags in tan brown. Here's one:",
        products: [
          {
            name: 'Tan Leather Tote',
            image:
              'https://via.placeholder.com/100x100/8B4513?text=Tan+Leather+Tote',
            price: '$200'
          }
        ]
      });
    } else {
      // Respuesta por defecto
      this.messages.push({
        sender: 'bot',
        text: "I'm not sure about that, but let me see what I can find for you!"
      });
    }
  }
}
