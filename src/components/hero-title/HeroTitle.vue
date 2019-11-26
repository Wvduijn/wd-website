<template>
<div class="spinny-wrapper uppercase">
    <h1>Willem van Duijn &nbsp; Freelance 
        <span class="spinny-words">
            <span>Front-end</span>
            <span>Angular</span>
            <span>Vue</span>
            <span>Web</span>
        </span>Developer &nbsp;
    </h1>
  </div>
</template>
<style lang="scss" scoped>
h1 {
    font-family: 'Roboto', sans-serif;
    span {
        font-family: 'Roboto Condensed', sans-serif; 
    }
}
.spinny-words{
    display: inline-block;
    min-width: 350px;
    max-width:500px;
    text-align: left;
    & span {
        position: absolute;
        font-weight: bold;
        top:-0px;
        opacity: 0;    
        animation: rotateWord 18s linear infinite 0s;

        &:nth-child(2) {
          animation-delay: 3s;   
        }
        &:nth-child(3) {
          animation-delay: 6s;   
        }
        &:nth-child(4) {
          animation-delay: 9s;   
        }
    }
}

@keyframes rotateWord {
  0%   { opacity: 0; }
  2%   { opacity: 0; transform: translateY(-30px); }
  5%   { opacity: 1; transform: translateY(0px);}
  17%  { opacity: 1; transform: translateY(0px); }
  20%  { opacity: 0; transform: translateY(30px); }
  80%  { opacity: 0; }
  100% { opacity: 0; }
}

</style>