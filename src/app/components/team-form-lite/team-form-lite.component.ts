import {
  Component,
  OnInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
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

@Component({
  selector: 'app-team-form-lite',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './team-form-lite.component.html',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TeamFormLiteComponent implements OnInit {
  form!: FormGroup;
  recaptchaKey = '6Ldn_xwrAAAAAF0GTkkrcN1CzU8fm2RGqJy7dQ3B';
  @Input() imageURL !: string;
  @Input() title: string = "Start Building Efficient Teams Today.";
  @Input() orange = false;

  constructor(private fb: FormBuilder, private emailService: EmailService) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      company: ['', Validators.required],
      solution: ['', Validators.required],
      phone: ['', Validators.required],
      state: ['', Validators.required],
      source: ['', Validators.required],
      // recaptcha: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const payload = this.form.value;
    console.log('Payload to send:', payload);
    this.emailService.sendForm(payload).subscribe({
      next: (res) => console.log('Server response:', res),
      error: (err) => console.error('Server error:', err),
    });
  }
}
