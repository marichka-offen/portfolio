<template>
  <div class="not-found-page">
    <p class="not-found-page__glitch">
      <span aria-hidden="true" class="not-found-page__glitch-span">404 Not Found</span>
      404 Not Found
      <span aria-hidden="true" class="not-found-page__glitch-span">404 Not Found</span>
    </p>
  </div>
</template>

<style>
  .not-found-page {
    @apply flex
      flex-col
      items-center
      justify-center
      h-full
      w-full
      -mt-20
      text-transparent;
  }

  .not-found-page__glitch {
    font-size: 5rem;
    font-weight: bold;
    text-transform: uppercase;
    position: relative;
    text-shadow: 0.05em 0 0 #4dd0e1, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #fffc00;
    animation: glitch 725ms infinite;
  }

  .not-found-page__glitch-span {
    position: absolute;
    top: 0;
    left: 0;
  }

  .not-found-page__glitch-span:first-child {
    animation: glitch 500ms infinite;
    clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
    transform: translate(-0.04em, -0.03em);
    opacity: 0.75;
  }

  .not-found-page__glitch-span:last-child {
    animation: glitch 375ms infinite;
    clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
    transform: translate(0.04em, 0.03em);
    opacity: 0.75;
  }

  /* Effect by Christine Banlawi - https://codepen.io/cbanlawi/pen/xxRBeMY */
  @keyframes glitch {
    0% {
      text-shadow: 0.05em 0 0 #4dd0e1, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #fffc00;
    }
    15% {
      text-shadow: 0.05em 0 0 #4dd0e1, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #fffc00;
    }
    16% {
      text-shadow: -0.05em -0.025em 0 #4dd0e1, 0.025em 0.035em 0 #fc00ff, -0.05em -0.05em 0 #fffc00;
    }
    49% {
      text-shadow: -0.05em -0.025em 0 #4dd0e1, 0.025em 0.035em 0 #fc00ff, -0.05em -0.05em 0 #fffc00;
    }
    50% {
      text-shadow: 0.05em 0.035em 0 #4dd0e1, 0.03em 0 0 #fc00ff, 0 -0.04em 0 #fffc00;
    }
    99% {
      text-shadow: 0.05em 0.035em 0 #4dd0e1, 0.03em 0 0 #fc00ff, 0 -0.04em 0 #fffc00;
    }
    100% {
      text-shadow: -0.05em 0 0 #4dd0e1, -0.025em -0.04em 0 #fc00ff, -0.04em -0.025em 0 #fffc00;
    }
  }
</style>
