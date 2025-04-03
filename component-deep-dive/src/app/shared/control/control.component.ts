import { AfterContentInit, afterNextRender, afterRender, Component, contentChild, ContentChild, ElementRef, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent implements AfterContentInit {
  label = input.required<string>();
  private el = inject(ElementRef);
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  constructor() {
    afterRender(() => {
      console.log('After render');
    });

    afterNextRender(() => {
      console.log('After next render');
    });
  }

  onClick() {
    console.log('Clicked!');
    console.log(this.el);
    console.log(this.control())
  }

  ngAfterContentInit(): void {
    console.log('After content init');
    console.log(this.control()?.nativeElement)
  }
}
