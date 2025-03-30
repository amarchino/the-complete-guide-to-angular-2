import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { ComponentRef } from '@angular/core';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let componentRef: ComponentRef<UserComponent>;
  const testData = {
    id: 'u1',
    name: 'Test User',
    avatar: 'test-avatar.jpg'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;

    // Set required inputs
    componentRef.setInput('id', testData.id);
    componentRef.setInput('name', testData.name);
    componentRef.setInput('avatar', testData.avatar);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display user name', () => {
    const buttonElement = fixture.nativeElement.querySelector('button');
    const spanElement = buttonElement.querySelector('span');
    expect(spanElement.textContent).toContain(testData.name);
  });

  it('should compute correct image path', () => {
    const imgElement = fixture.nativeElement.querySelector('img');
    expect(imgElement.getAttribute('src')).toBe(`assets/users/${testData.avatar}`);
    expect(imgElement.getAttribute('alt')).toBe(testData.name);
  });

  it('should emit selected user id when clicked', () => {
    let emittedId: string | undefined;
    component.select.subscribe((id: string) => emittedId = id);

    const buttonElement = fixture.nativeElement.querySelector('button');
    buttonElement.click();

    expect(emittedId).toBe(testData.id);
  });
});
