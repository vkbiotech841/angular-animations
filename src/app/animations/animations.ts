import { animate, state, style, transition, trigger } from '@angular/animations';


export let fade = trigger('fade', [

    state('void', style({ backgroundColor: 'grey', opacity: 0 })),
    state('*', style({ backgroundColor: 'lightyellow', opacity: 1 })),

    transition('void <=> *', [
        animate(1 * 1000)
    ]),
]);

export let slide = trigger('slide', [

    transition(':enter', [
        style({ transform: 'translateX(100px)' }),
        animate(1 * 1000)
    ]),

    transition(':leave', [
        animate('500ms cubic-bezier(.61, .29, .07, 1.02)', style({ transform: 'translateX(-100%)' }))
    ])

])