import {
  Component,
  OnInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
  OnDestroy,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { CommonModule } from '@angular/common';
import {
  LangChangeEvent,
  TranslatePipe,
  TranslateService,
} from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-team-form-lite',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    TranslatePipe,
    FontAwesomeModule,
  ],
  templateUrl: './team-form-lite.component.html',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TeamFormLiteComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  recaptchaKey = '6Ldn_xwrAAAAAF0GTkkrcN1CzU8fm2RGqJy7dQ3B';
  @Input() imageURL!: string;
  @Input() title: string = 'formSection.title';
  @Input() orange = false;
  formSubmitted = false;
  faCheck = faCircleCheck; // FontAwesome icon for confirmation

  solutions: string[] = [];
  langSub: any;

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService,
    private translateService: TranslateService
  ) {}

  ngOnInit() {
    this.initForm();
    this.loadSolutions();

    // Suscripción para detectar cambios de idioma
    this.langSub = this.translateService.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        this.loadSolutions();
      }
    );
  }

  ngOnDestroy() {
    // Limpiar suscripción al destruir componente
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }

  private initForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      company: ['', Validators.required],
      solution: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      state: ['', Validators.required],
      source: ['', Validators.required],
      comments: [''],
    });
  }

  private loadSolutions() {
    this.translateService
      .get('formSection.solutions')
      .subscribe((sols: string[]) => {
        this.solutions = sols;
      });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.formSubmitted = true;
    this.form.disable(); // Disable the form to prevent further submissions
    this.form.reset();
    const payload = this.form.value;
    console.log('Payload to send:', payload);
    this.emailService.sendForm(payload).subscribe({
      next: (res) => {
        console.log('Server response:', res);
        this.formSubmitted = true;
      },
      error: (err) => console.error('Server error:', err),
    });
  }
}
