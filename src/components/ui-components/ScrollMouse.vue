<template>
    <div class="mouse-container">
        <div class="mouse">
            <span class="scroll-down"></span>
        </div>
    </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
// Scroll Mouse animation
@-webkit-keyframes scroll-inner {
    from {
        margin-top: 15%;
    }
    to {
        margin-top: 50%;
    }
}
@keyframes scroll-inner {
    from {
        margin-top: 15%;
    }
    to {
        margin-top: 50%;
    }
}
@-webkit-keyframes scroll-mouse {
    from {
        margin-top: 0;
    }
    to {
        margin-top: 15px;
    }
}
@keyframes scroll-mouse {
    from {
        margin-top: 0;
    }
    to {
        margin-top: 15px;
    }
}

.mouse-container {
    display: block;
    position: absolute;
    bottom: 20px;
    left: calc(50% - 12px);
    height: 100px;
}
.mouse {
    position: relative;
    margin: 0 auto;
    display: block;
    width: 25px;
    height: 40px;
    border: solid 2px #fff;
    border-radius: 25px;
    animation: scroll-mouse 1.5s;
    animation-iteration-count: infinite;

    .scroll-down {
        display: block;
        width: 5px;
        height: 5px;
        background: #fff;
        border-radius: 50%;
        margin: 15% auto auto auto;
        animation: scroll-inner 1.5s;
        animation-iteration-count: infinite;
        animation-timing-function: ease;
    }
}
</style>
