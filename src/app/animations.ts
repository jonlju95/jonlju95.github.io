import {
  trigger,
  animateChild,
  group,
  transition,
  animate,
  style,
  query
} from '@angular/animations';

// Routable animations
export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({}),
      query(
        ':enter, :leave',
        [
          style({
          }),
        ],
        { optional: true },
      ),
      query(':enter', [style({ opacity: 0, position: 'absolute' })], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [animate('100ms ease-in-out', style({ opacity: 0 }))],
          { optional: true }),
        query(':enter', [animate('100ms ease-in-out', style({ opacity: 1 }))],
          { optional: true }),
        query('@*', animateChild(), { optional: true }),
      ]),
    ]),
  ]);
