import { animate, query, style, transition, trigger, group, state } from '@angular/animations';

export const routeTransition = trigger('routeTransition', [
  transition('* <=> *', [
    group([
      query(':enter', [
        style({ opacity: 0, transform: 'translateY(5%)', position: 'absolute', top: '0', width: '100svw' }),
        animate('250ms 50ms ease-out', style({ opacity: 1, transform: 'translateY(0)', position: 'absolute', top: '56px', width: '100svw' }))
      ], { optional: true }),
      query(':leave', [
        style({ opacity: 1, transform: 'translateY(0)', position: 'absolute', top: '56px', width: '100svw' }),
        animate('200ms ease-in', style({ opacity: 0, transform: 'translateY(5%)', position: 'absolute', width: '100svw' }))
      ], { optional: true })
    ])
  ])
])
