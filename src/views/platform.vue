<template>
    <div>
        <left-module></left-module>
        <middle-module></middle-module>
        <right-module></right-module>
    </div>
</template>
<script>
import leftModule from '@/components/left.vue'
import middleModule from '@/components/middle.vue'
import rightModule from '@/components/right.vue'
export default {
    name: 'platform',
    components: {
        leftModule,
        middleModule,
        rightModule
    },
    setup() {
        
    },
}
</script>