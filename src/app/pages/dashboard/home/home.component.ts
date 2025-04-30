import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsChatbotComponent } from '../../../components/dashboard/products-chatbot/products-chatbot.component';

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
  standalone: true,
  imports: [CommonModule, FormsModule, ProductsChatbotComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent implements AfterViewChecked {
  @ViewChild('chatContainer') private chatContainer!: ElementRef<HTMLDivElement>;
  messages: ChatMessage[] = [];
  userInput: string = '';

  ngOnInit(): void {
    // Mensaje inicial de ejemplo
    this.messages.push({
      sender: 'bot',
      text: "Hello! I'm here to help you find the perfect item. How can I assist you today?",
    });
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  sendUserMessage() {
    if (!this.userInput.trim()) return;

    // Agrega el mensaje del usuario
    this.messages.push({
      sender: 'user',
      text: this.userInput,
    });

    // Simula una respuesta del bot
    this.handleBotResponse(this.userInput);

    // Limpia el input
    this.userInput = '';
  }

  // Lógica simulada para la respuesta del bot
  handleBotResponse(userMessage: string) {
    if (userMessage.toLowerCase().includes('tec')) {
      this.messages.push({
        sender: 'bot',
        text: "Sure, I'd be happy to help you with that. Here are some of our best sellers.",
        products: [
          {
            name: 'Panel Strap Tote',
            image: 'https://img.freepik.com/free-vector/desktop-computer-concept-illustration_114360-16232.jpg',
            price: '$150',
          },
          {
            name: 'Azus Dewtins',
            image: 'https://img.freepik.com/free-vector/illustration-computer-icon_53876-5559.jpg',
            price: '$180',
          },
          {
            name: 'Dell Aspire 4',
            image: 'https://img.freepik.com/free-photo/laptop-wooden-table_53876-20635.jpg',
            price: '$120',
          },
        ],
      });
    } else if (userMessage.toLowerCase().includes('an') || userMessage.toLowerCase().includes('licence')) {
      this.messages.push({
        sender: 'bot',
        text: "Of course! We have some interesting tote bags in tan brown. Here's one:",
        products: [
          {
            name: 'Norton Antivirus',
            image: 'https://img.freepik.com/free-photo/ai-dna-gene-editing-technology-biotech-genetic-engineering_53876-143120.jpg',
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

  private scrollToBottom(): void {
    try {
      this.chatContainer.nativeElement.scrollTo({
        top: this.chatContainer.nativeElement.scrollHeight,
        behavior: 'smooth'
      });
    } catch (error) {
      console.error('Error al hacer scroll:', error);
    }
  }
}
