import { Component, inject, input } from '@angular/core';
import { ErrorService } from '../../error.service';
import { ModalComponent } from "../modal.component";

@Component({
  selector: 'app-error-modal',
  imports: [ModalComponent],
  templateUrl: './error-modal.component.html',
  styleUrl: './error-modal.component.css'
})
export class ErrorModalComponent {

  title = input<string>();
  message = input<string>();
  private errorService = inject(ErrorService);

  onClearError() {
    this.errorService.clearError();
  }

}
