<template>
    <!--Hero-->
    <div class="void-animation w-screen h-screen">
    <div class="logos">
        <g-image src="~/assets/images/wd.svg" class="logo"/>
    </div>
    <div class="py-20 absolute-center">
            <div class="parent">
            <div class="some-absolute-div">
                <h1 class="text-center m-auto">
                    Hello, <span class="text-teal-dark">I'm Willem,</span><br>Freelance Front-end Developer
                </h1>
            </div>
            </div>
        </div>
    </div>
    
</template>
<style lang="scss">
.void-animation {
    margin-top: -80px;
    background: linear-gradient(90deg, #0F2027 0%, #203A43 53%, #2C5364 100%);
}
.parent {
    position: relative;
}
.absolute-center {
    margin: auto;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
}
.logos {
    width: 400px;
    position:absolute;  
    top: calc(50% - 100px);
    left: calc(50% - 200px);
    
}
.logo {
    width:100%;
}
.some-absolute-div {    
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>