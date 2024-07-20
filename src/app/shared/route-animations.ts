import { animate, query, style, transition, trigger, group } from '@angular/animations';

export const routeTransition = trigger('routeTransition', [
  transition('* <=> *', [
    group([
      query(':enter', [
        style({ opacity: 0, position: 'absolute', top: '5%', transform: 'translateY(5%)', width: '100%' }),
        animate('200ms 50ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ], { optional: true }),
      query(':leave', [
        style({ opacity: 1, position: 'absolute', top: '0', transform: 'translateY(0)', width: '100%' }),
        animate('150ms ease-in', style({ opacity: 0, transform: 'translateY(5%)' }))
      ], { optional: true })
    ])
  ])
])
