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
      question: 'How long does it take to set up IT solutions for my company?',
      answer:
        'The timeline depends on the complexity of the project. For standard IT infrastructure deployments, we can have your systems up and running within a few days to a few weeks. More complex implementations, such as cloud migrations or security solutions, may take longer, but we always work efficiently to minimize downtime.',
    },
    {
      question: 'Who owns the IT equipment and services provided?',
      answer:
        'All equipment and software solutions remain the property of your company. We act as a strategic partner to help you acquire, configure, and maintain your IT infrastructure with the best technology providers.',
    },
    {
      question: 'How does billing work?',
      answer:
        'Billing is based on the scope of services and equipment provided. We offer flexible payment structures, including one-time purchases, leasing options, and managed service agreements to fit your needs.',
    },
    {
      question: 'Do I need to provide IT training for my employees?',
      answer:
        'Not necessarily! We offer training programs as part of our services, including cybersecurity awareness, software usage, and best IT practices, so your team can quickly adapt to new technologies.',
    },
    {
      question: 'How do you ensure secure remote access to my company’s systems?',
      answer:
        'We implement enterprise-grade security solutions, including VPNs, multi-factor authentication (MFA), and encrypted connections to ensure safe access for your remote workforce.',
    },
    {
      question: 'Can you integrate with our existing IT infrastructure?',
      answer:
        'Absolutely! We specialize in seamless integration of new technology solutions with your current systems, whether it’s on-premises, cloud-based, or a hybrid environment.',
    },
    {
      question: 'What industries do you serve?',
      answer:
        'We support a variety of industries, including healthcare, finance, logistics, and multinational corporations, by providing IT infrastructure, cloud solutions, cybersecurity, and workforce optimization services.',
    },
    {
      question: 'What kind of IT equipment do you provide?',
      answer:
        'We supply and configure servers, networking equipment, security solutions, workstations, and collaboration tools from leading brands like Cisco, Lenovo, Microsoft, and more.',
    },
    {
      question: 'Can you set up an office from scratch?',
      answer:
        'Yes! We provide end-to-end IT solutions, including network setup, structured cabling, hardware procurement, software deployment, and ongoing support for new office openings.',
    },
    {
      question: 'Why choose Advance Technology Projects?',
      answer:
        'With over a decade of experience, we offer cutting-edge IT solutions, strategic partnerships with global brands, and a deep understanding of the Latin American market, ensuring your business has the best technology support to thrive.',
    },
    {
      question: 'How does Advance Technology Projects handle IT provisioning for remote users?',
      answer:
        'We provide end-to-end provisioning services for remote employees, ensuring they receive fully configured laptops, peripherals, security tools, and software. We handle the entire process, including shipping, setup, and remote support, so your team can start working immediately.',
    },
    {
      question: 'How does logistics work for IT equipment delivery and setup?',
      answer:
        'Our logistics team ensures that all IT equipment is sourced, shipped, and installed efficiently. Whether it’s delivering hardware to remote employees or setting up an entire office, we coordinate everything from customs clearance to final deployment.',
    },
    {
      question: 'Can you manage IT assets and infrastructure on an ongoing basis?',
      answer:
        'Yes! We offer comprehensive IT asset management, including hardware tracking, software licensing, system monitoring, and maintenance. This ensures your IT infrastructure remains secure, up-to-date, and fully optimized.',
    },
    {
      question: 'What happens to outdated IT equipment?',
      answer:
        'We provide IT asset disposal and recycling services to help companies responsibly retire outdated hardware. We ensure compliance with environmental regulations and data security protocols, so your old equipment is either repurposed, donated, or securely disposed of.',
    },
    {
      question: 'Do you offer IT support and maintenance after deployment?',
      answer:
        'Absolutely! We provide ongoing IT support, troubleshooting, and maintenance services, ensuring that your systems remain secure, efficient, and up-to-date. Our remote and on-site support teams are available to assist with any technical issues.',
    },
  ];


  toggleFaq(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
