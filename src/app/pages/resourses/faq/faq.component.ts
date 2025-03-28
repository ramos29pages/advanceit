import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroHeaderComponent } from "../../../components/hero-header/hero-header.component";
import { FooterComponent } from "../../../components/footer/footer.component";

interface FAQ {
  question: string;
  answer: string;
  open?: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, HeroHeaderComponent, FooterComponent],
  templateUrl: './faq.component.html'
})
export class FaqComponent {
  faqs: FAQ[] = [
    {
      question: 'How long to get someone up and running?',
      answer:
        'Our process is streamlined, and on average, individuals are integrated quickly within a few days.'
    },
    {
      question: 'Who is the actual employer, Lean Solutions Group, or my Company?',
      answer:
        'Employees remain under your management while enjoying the benefits of our supportive framework.'
    },
    {
      question: 'What is the billing process?',
      answer:
        'Billing is handled with transparency and efficiency to ensure a smooth financial process.'
    },
    {
      question: 'Do I have to complete a 1099 for every employee?',
      answer:
        'The system simplifies tax obligations, so you don’t need to manage 1099 forms for every employee individually.'
    },
    {
      question: 'How are employees going to Connect to my System?',
      answer:
        'We provide secure connections and seamless integrations to allow efficient system access.'
    },
    {
      question: 'How will they access our TMS System?',
      answer:
        'Access to the TMS system is managed securely, ensuring ease of use while maintaining high security standards.'
    },
    {
      question: 'How do we interview employees?',
      answer:
        'We streamline the interview process with tools and guidelines to match the best candidates with your needs.'
    },
    {
      question: 'How do I train my employees?',
      answer:
        'Our training modules are integrated for smooth onboarding and continuous development.'
    },
    {
      question: 'Are there minimum requirements for the number of employees to open an office?',
      answer:
        'Our solutions are flexible, adapting to businesses of various sizes without a strict minimum requirement.'
    },
    {
      question: 'Is it safe for me to come to Colombia?',
      answer:
        'Safety is a top priority, and our services ensure a secure environment for all clients and employees.'
    },
    {
      question: 'What positions do you offer?',
      answer:
        'We offer a wide range of positions tailored to meet your company’s operational needs.'
    },
    {
      question: 'How many loads can employees track a day?',
      answer:
        'Our system is optimized to handle a high volume of tracking, enabling employees to efficiently manage multiple loads daily.'
    }
  ];

  toggleFaq(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
