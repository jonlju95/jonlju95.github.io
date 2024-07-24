import { animate, style, transition, trigger } from "@angular/animations";

export const slideSidebar = trigger('slideSidebar', [
  transition(':enter', [
    style({ transform: 'translateX(100%)' }),
    animate('200ms ease-out', style({ transform: 'translateX(0)' }))
  ]),
  transition(':leave', [
    style({ transform: 'translateX(0)' }),
    animate('200ms ease-in', style({ transform: 'translateX(100%)' }))
  ])
]);

export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0, position: 'absolute' }),
    animate('500ms ease-in-out', style({ opacity: 1 }))
  ]),
  transition(':leave', [
    style({ opacity: 1, position: 'absolute' }),
    animate('500ms ease-in-out', style({ opacity: 0 }))
  ])
]);
