import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { By } from '@angular/platform-browser';
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
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance
    fixture.detectChanges() //TODO: <---------------

    const email = app.loginForm.controls['email']
    email.setValue('robercidre@gmail.com')

    expect(app.loginForm.invalid).toBeTrue(); //TODO: ✔
  });

  it('Debe retornar formulario valido', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance
    fixture.detectChanges()

    let email = app.loginForm.controls['email']
    let password = app.loginForm.controls['password']
    let remind = app.loginForm.controls['remind']

    email.setValue('robercidre@gmail.com')
    password.setValue('123456')
    remind.setValue(true)


    expect(app.loginForm.invalid).toBeFalse(); //TODO: ✔
  });

    it(`El formulario devuelve los datos correctamente`, () => {
     const fixture = TestBed.createComponent(LoginComponent);
     const app = fixture.componentInstance;
     fixture.detectChanges()

     let email = app.loginForm.controls['email']
     let password = app.loginForm.controls['password']
     let remind = app.loginForm.controls['remind']

     email.setValue('robercidre@gmail.com')
     password.setValue('123456')
     remind.setValue(false);

     const testData = { email: 'robercidre@gmail.com', password: '123456', remind: false }
     expect(app.loginForm.value).toEqual(testData)
   });

});
