export const animateBackground = `
  @keyframes animateBg { 
    0%{
      background-position: 50% 0%;
    }
    50%{
      background-position: 51% 100%;
    }
    100%{
      background-position:50% 0%;
    }
  }
`.trim();

export const animateShake = `
  /*
  * https://css-tricks.com/snippets/css/shake-css-keyframe-animation/
  */
  @keyframes shake {
    10%, 90% {
      transform: translate3d(-1px, 0, 0) rotate(5deg);
    }
    
    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }

    30%, 50%, 70% {
      transform: translate3d(-2px, 0, 0) rotate(-5deg);
    }

    40%, 60% {
      transform: translate3d(2px, 0, 0);
    }
  }
`.trim();

export const fadeInBottom = `
  @keyframes fade-in-bottom {
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
