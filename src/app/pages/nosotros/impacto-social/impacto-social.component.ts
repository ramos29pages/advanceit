import { Component } from '@angular/core';
import { HeroHeaderComponent } from '../../../components/hero-header/hero-header.component';
import { SimpleSectionComponent } from '../../../components/simple-section/simple-section.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { FeatureSectionComponent } from '../../../shared/feature-section/feature-section.component';
import { SimpleCtaComponent } from "../../../components/inicio/simple-cta/simple-cta.component";
import { TeamFormLiteComponent } from "../../../components/team-form-lite/team-form-lite.component";

@Component({
  selector: 'app-impacto-social',
  imports: [
    HeroHeaderComponent,
    SimpleSectionComponent,
    FooterComponent,
    FeatureSectionComponent,
    SimpleCtaComponent,
    TeamFormLiteComponent
],
  template: `
    <app-hero-header
      class="mt-20"
      title="Give Your IT Hardware a Second Life!"
      [backgroundImage]="imageURL"
    >
    </app-hero-header>
    <app-simple-section [icon]="true"></app-simple-section>
    <!-- cajas izquierda y derecha -->

    <app-feature-section title="Give Your IT Hardware a Second Life!" imageSrc="https://images.pexels.com/photos/7173754/pexels-photo-7173754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" description="Why let old servers, laptops, and network equipment gather dust when they can be repurposed, recycled, or securely disposed of? We partner with our clients to responsibly manage end-of-life IT assets, ensuring they’re either refurbished, reused, or processed in an eco-friendly way.
"></app-feature-section>

<app-feature-section

title="Tech Recycling Made Easy"
imageSrc="https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
description="From data centers to desktops, we handle the entire lifecycle of your IT hardware. Our team takes care of."
[features]="feactures2"
[reverse]="true"
></app-feature-section>


<section class="py-16 px-4 text-center">
      <div class="max-w-6xl mx-auto">
        <!-- Título principal -->
        <h2
          class="text-2xl md:text-5xl font-extrabold uppercase text-orange-500 mb-2"
        >
        Good for Business, Great for the Planet!
        </h2>
        <!-- Descripción debajo del título -->
        <p class="text-gray-700 text-md w-full mb-8 text-center py-4">
          <span class="max-w-[350px] block mx-auto">
          Sustainable IT disposal isn't just the right thing to do—it’s smart business. Reduce e-waste, meet sustainability goals, and even recover value from your retired hardware.
          </span>
        </p>


      </div>
    </section>


    <!-- <app-weimpact></app-weimpact> -->
    <!-- <app-slider-impact></app-slider-impact> -->
    <!-- <app-simple-section></app-simple-section> -->
    <!-- <app-aliances></app-aliances> -->

    <app-simple-cta title="Want to join the movement? Let’s recycle IT for a better future!"></app-simple-cta>

    <app-team-form-lite title="Start the Circular Economy Revolution Today!" imageURL="https://images.pexels.com/photos/7048061/pexels-photo-7048061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></app-team-form-lite>
    <app-footer></app-footer>
  `,
  styleUrl: './impacto-social.component.css',
})
export class ImpactoSocialComponent {
  imageURL =
    'https://images.unsplash.com/photo-1645520718652-9342896b0eec?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  feactures2 = [
    'Secure Data Erasure & Disposal – Your information stays safe while your hardware gets a fresh start.',
    ' IT Asset Recovery & Refurbishing – Extend the life of your tech with certified refurbishing programs.',
    'Eco-Friendly Recycling – We ensure materials like metals, plastics, and components are reintroduced into the circular economy.',
    'On-Site Collection & Processing – We bring the recycling solutions to you, making it effortless.',
  ];
}
