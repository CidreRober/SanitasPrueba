import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatSlideToggleModule,
        BrowserAnimationsModule],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe retornar formulario invalido', () => {
    const email = component.loginForm.controls['email']
    email.setValue('robercidre@gmail.com')

    expect(component.loginForm.invalid).toBeTrue();
  });

  it('Debe retornar formulario valido', () => {
    let email = component.loginForm.controls['email']
    let password = component.loginForm.controls['password']
    let remind = component.loginForm.controls['remind']

    email.setValue('robercidre@gmail.com')
    password.setValue('123456')
    remind.setValue(true)

    expect(component.loginForm.invalid).toBeFalse();
  });

    it(`El formulario devuelve los datos correctamente`, () => {
     let email = component.loginForm.controls['email']
     let password = component.loginForm.controls['password']
     let remind = component.loginForm.controls['remind']

     email.setValue('robercidre@gmail.com')
     password.setValue('123456')
     remind.setValue(false);

     const testData = { email: 'robercidre@gmail.com', password: '123456', remind: false }
     expect(component.loginForm.value).toEqual(testData)
   });

});
