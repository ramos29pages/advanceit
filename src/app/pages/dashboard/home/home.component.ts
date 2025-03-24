import { Component } from '@angular/core';
import { ChatbotComponent } from '../../../components/dashboard/chatbot/chatbot.component';
import { CommonModule } from '@angular/common';
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
  selector: 'app-home',
  imports: [ChatbotComponent, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  messages: ChatMessage[] = [];
  userInput: string = '';

  ngOnInit(): void {
    // Mensajes iniciales de ejemplo
    this.messages.push({
      sender: 'bot',
      text: "Hello! I'm here to help you find the perfect item. How can I assist you today?",
    });
  }

  sendUserMessage() {
    if (!this.userInput.trim()) return;

    // Agrega el mensaje del usuario
    this.messages.push({
      sender: 'user',
      text: this.userInput,
    });

    // Simula una respuesta
    this.handleBotResponse(this.userInput);

    // Limpia el input
    this.userInput = '';
  }

  // Lógica simulada para la respuesta
  handleBotResponse(userMessage: string) {
    // Ejemplo: si el usuario pide "brown tote bag"
    if (userMessage.toLowerCase().includes('tecnologia')) {
      this.messages.push({
        sender: 'bot',
        text: "Sure, I'd be happy to help you with that. Here are some of our best sellers.",
        products: [
          {
            name: 'Panel Strap Tote',
            image: 'https://img.freepik.com/free-vector/desktop-computer-concept-illustration_114360-16232.jpg?t=st=1742783478~exp=1742787078~hmac=e6b7a15f8c9bd07dab25f90400757960119f5151797d59f8581943ffa5e1a12d&w=1060',
            price: '$150',
          },
          {
            name: 'Azus Dewtins',
            image:
              'https://img.freepik.com/free-vector/illustration-computer-icon_53876-5559.jpg?t=st=1742783551~exp=1742787151~hmac=c03a93b48dc9d4e679b28aa5a6a31842a759b21b210e8ab4133691455b0e04ff&w=740',
            price: '$180',
          },
          {
            name: 'Dell Aspire 4',
            image:
              'https://img.freepik.com/free-photo/laptop-wooden-table_53876-20635.jpg?t=st=1742783582~exp=1742787182~hmac=ebe177935c0ec57270ae5d5a02c418ce4b12243989df182c43bbfabe0ef6c0ce&w=1060',
            price: '$120',
          },
        ],
      });
    } else if (
      userMessage.toLowerCase().includes('tan brown') ||
      userMessage.toLowerCase().includes('licence')
    ) {
      this.messages.push({
        sender: 'bot',
        text: "Of course! We have some interesting tote bags in tan brown. Here's one:",
        products: [
          {
            name: 'Norton Antivirus',
            image:
              'https://img.freepik.com/free-photo/ai-dna-gene-editing-technology-biotech-genetic-engineering_53876-143120.jpg?t=st=1742783655~exp=1742787255~hmac=6a3cbf979579f4d9462588d1f03d8647febbe90c80ae6deecd0e93059d8346e5&w=740',
            price: '$200',
          },
        ],
      });
    } else {
      // Respuesta por defecto
      this.messages.push({
        sender: 'bot',
        text: "I'm not sure about that, but let me see what I can find for you!",
      });
    }
  }
}
