import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
  HostListener
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabItem, FabVariant, FabPosition } from '../../models/fab-item.model';
import { FabMenuComponent } from '../fab-menu/fab-menu.component';
import { ToastComponent } from '../toast/toast.component';

@Component({
  selector: 'vsf-fab',
  imports: [CommonModule, FabMenuComponent, ToastComponent],
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss']
})
export class FabComponent implements OnInit, OnDestroy {
  @Input() items: FabItem[] = [];
  @Input() variant: FabVariant = 'glass';
  @Input() position: FabPosition = 'right';
  @Input() currentProductId?: string;
  @Input() showToast = true;
  @Input() toastPosition: 'top' | 'center' | 'bottom' = 'center';

  @Output() productChange = new EventEmitter<FabItem>();

  isOpen = false;
  renderPopup = false;
  closing = false;
  toastItem: FabItem | null = null;
  toastKey = 0;

  private closeTimeout?: ReturnType<typeof setTimeout>;
  private toastTimeout?: ReturnType<typeof setTimeout>;

  get currentItem(): FabItem {
    const current = this.currentProductId
      ? this.items.find(item => item.id === this.currentProductId)
      : this.items.find(item => item.current);
    return current || this.items[0];
  }

  get itemsWithCurrent(): FabItem[] {
    return this.items.map(item => ({
      ...item,
      current: this.currentProductId
        ? item.id === this.currentProductId
        : item.current
    }));
  }

  ngOnInit() {
    // Update items to mark current
    if (!this.items.some(item => item.current) && !this.currentProductId) {
      if (this.items.length > 0) {
        this.items[0].current = true;
      }
    }
  }

  ngOnDestroy() {
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
    }
    if (this.toastTimeout) {
      clearTimeout(this.toastTimeout);
    }
  }

  toggleOpen() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    // If closing animation is in progress, cancel it
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
      this.closeTimeout = undefined;
    }

    this.isOpen = true;
    this.renderPopup = true;
    this.closing = false;
  }

  close() {
    if (!this.renderPopup) return;

    this.isOpen = false;
    this.closing = true;

    this.closeTimeout = setTimeout(() => {
      this.renderPopup = false;
      this.closing = false;
    }, 220);
  }

  onItemSelect(item: FabItem) {
    if (item.id === this.currentItem?.id) {
      this.close();
      return;
    }

    this.close();
    this.productChange.emit(item);

    if (this.showToast) {
      this.showToastNotification(item);
    }
  }

  onBackdropClick() {
    this.close();
  }

  private showToastNotification(item: FabItem) {
    this.toastItem = item;
    this.toastKey = Date.now();

    if (this.toastTimeout) {
      clearTimeout(this.toastTimeout);
    }

    this.toastTimeout = setTimeout(() => {
      this.toastItem = null;
    }, 1700);
  }

  @HostListener('document:keydown.escape')
  onEscapeKey() {
    if (this.isOpen) {
      this.close();
    }
  }
}
