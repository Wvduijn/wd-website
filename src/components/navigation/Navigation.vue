<template>
    <div>
        <MenuToggle :open="this.open" @click.native="toggleMenu" />
        <Menu :open="this.open" :closed="this.closed" />
    </div>
</template>
<script>
import MenuToggle from './menu-toggle/MenuToggle'
import Menu from './menu/Menu'

export default {
    // toggle open class whenever menu button is clicked
    // Component should receive this prop
    data() {
        return {
            open: false,
            closed: undefined,
        }
    },
    components: {
        Menu,
        MenuToggle,
    },
    methods: {
        toggleMenu() {
            this.open = !this.open
            if (this.open === false) {
                this.closed = true
            } else {
                this.closed = false
            }
            console.log('clicked')
            console.log('Opened', this.open)
            console.log('Closed', this.closed)
        },
    },
}
</script>
<style lang="scss" scoped></style>
