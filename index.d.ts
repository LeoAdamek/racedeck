import { NuxtFireInstance } from '@nuxtjs/firebase/types'

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $fire: NuxtFireInstance
    }
}