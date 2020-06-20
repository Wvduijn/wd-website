<template>
    <div class="nav-icon" :class="{ open: open }">
        <div class="nav-click">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>
<script>
export default {
    props: ['open'],
}
</script>
<style lang="scss" scoped>
/* Icon */
.nav-icon {
    z-index: 9999;
    width: 24px;
    height: 20px;
    display: block;
    transform: rotate(0deg);
    transition: 0.5s ease-in-out;
    cursor: pointer;
    margin-top: 3px;
    margin-right: 10px;
}

.nav-click {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

.nav-icon span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: lightgrey;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
}

.nav-icon span:nth-child(1) {
    top: 0px;
}

.nav-icon span:nth-child(2),
.nav-icon span:nth-child(3) {
    top: 8px;
}

.nav-icon span:nth-child(4) {
    top: 16px;
}

.nav-icon.open span:nth-child(1) {
    top: 8px;
    width: 0%;
    left: 50%;
}

.nav-icon.open span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}

.nav-icon.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
}

.nav-icon.open span:nth-child(4) {
    top: 18px;
    width: 0%;
    left: 50%;
}
</style>
