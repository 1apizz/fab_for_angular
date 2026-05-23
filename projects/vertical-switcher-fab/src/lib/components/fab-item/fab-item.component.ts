import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabItem } from '../../models/fab-item.model';

@Component({
  selector: 'vsf-fab-item',
  imports: [CommonModule],
  templateUrl: './fab-item.component.html',
  styleUrls: ['./fab-item.component.scss']
})
export class FabItemComponent {
  @Input() item!: FabItem;
  @Input() variant: 'solid' | 'glass' = 'glass';
  @Input() delay: number = 0;
  @Output() itemClick = new EventEmitter<FabItem>();

  @HostBinding('style.animation-delay')
  get animationDelay(): string {
    return `${this.delay}ms`;
  }

  get toneStyles() {
    const tones: Record<string, { bg: string; fg: string }> = {
      pink: { bg: 'var(--vsf-pink-50)', fg: 'var(--vsf-pink)' },
      gold: { bg: 'var(--vsf-gold-bg)', fg: 'var(--vsf-gold-fg)' },
      cyan: { bg: 'var(--vsf-cyan-50)', fg: 'var(--vsf-cyan-700)' },
      violet: { bg: 'var(--vsf-violet-bg)', fg: 'var(--vsf-violet-fg)' },
      neutral: { bg: 'var(--vsf-surface-3)', fg: 'var(--vsf-muted)' }
    };
    return tones[this.item.tone] || tones['neutral'];
  }

  onClick() {
    this.itemClick.emit(this.item);
  }
}
