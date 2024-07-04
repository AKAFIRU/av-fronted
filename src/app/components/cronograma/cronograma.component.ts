import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
@Component({
  selector: 'app-cronograma',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './cronograma.component.html',
  styleUrl: './cronograma.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CronogramaComponent {
  readonly panelOpenState = signal(false);
}
