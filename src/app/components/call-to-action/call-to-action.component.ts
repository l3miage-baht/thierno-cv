import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-call-to-action',
  imports: [CommonModule, RouterModule],
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CallToActionComponent {
  readonly title = input.required<string>();
  readonly description = input<string>('');
  readonly primaryLabel = input.required<string>();
  readonly primaryLink = input.required<string>();
  readonly secondaryLabel = input<string | undefined>();
  readonly secondaryLink = input<string | undefined>();
  readonly emphasize = input<boolean>(false);

  protected readonly hasSecondaryAction = computed(
    () => !!this.secondaryLabel() && !!this.secondaryLink()
  );
}
