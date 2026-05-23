import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabItem } from '../../models/fab-item.model';

@Component({
  selector: 'vsf-toast',
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  @Input() item!: FabItem;
  @Input() position: 'top' | 'center' | 'bottom' = 'center';

  @HostBinding('class.vsf-toast--out')
  isOut = false;

  @HostBinding('class.vsf-toast--top')
  get isTop(): boolean {
    return this.position === 'top';
  }

  @HostBinding('class.vsf-toast--center')
  get isCenter(): boolean {
    return this.position === 'center';
  }

  @HostBinding('class.vsf-toast--bottom')
  get isBottom(): boolean {
    return this.position === 'bottom';
  }

  ngOnInit() {
    setTimeout(() => {
      this.isOut = true;
    }, 1400);
  }
}
