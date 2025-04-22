import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroHeaderComponent } from "../../../components/hero-header/hero-header.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { TranslatePipe } from '@ngx-translate/core';

interface FAQ {
  question: string;
  answer: string;
  open?: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, HeroHeaderComponent, FooterComponent, TranslatePipe],
  templateUrl: './faq.component.html'
})
export class FaqComponent {

  faqs: FAQ[] = [
    {
      question: 'resources.faq.question1.question',
      answer: 'resources.faq.question1.answer',
    },
    {
      question: 'resources.faq.question2.question',
      answer: 'resources.faq.question2.answer',
    },
    {
      question: 'resources.faq.question3.question',
      answer: 'resources.faq.question3.answer',
    },
    {
      question: 'resources.faq.question4.question',
      answer: 'resources.faq.question4.answer',
    },
    {
      question: 'resources.faq.question5.question',
      answer: 'resources.faq.question5.answer',
    },
    {
      question: 'resources.faq.question6.question',
      answer: 'resources.faq.question6.answer',
    },
    {
      question: 'resources.faq.question7.question',
      answer: 'resources.faq.question7.answer',
    },
    {
      question: 'resources.faq.question8.question',
      answer: 'resources.faq.question8.answer',
    },
    {
      question: 'resources.faq.question9.question',
      answer: 'resources.faq.question9.answer',
    },
    {
      question: 'resources.faq.question10.question',
      answer: 'resources.faq.question10.answer',
    },
    {
      question: 'resources.faq.question11.question',
      answer: 'resources.faq.question11.answer',
    },
    {
      question: 'resources.faq.question12.question',
      answer: 'resources.faq.question12.answer',
    },
    {
      question: 'resources.faq.question13.question',
      answer: 'resources.faq.question13.answer',
    },
    {
      question: 'resources.faq.question14.question',
      answer: 'resources.faq.question14.answer',
    },
    {
      question: 'resources.faq.question15.question',
      answer: 'resources.faq.question15.answer',
    },
  ];

  toggleFaq(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
