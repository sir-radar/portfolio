<template>
    <div
    class="fixed inset-x-0 bottom-0 z-20 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center"
    >
    <div @click.stop="close" class="fixed close">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
            ></path>
        </svg>
    </div>
    <div class="fixed inset-0 transition-opacity">
        <div
        @click.self="close"
        class="absolute inset-0 bg-black opacity-50"
        ></div>
    </div>
    <div
        class="overflow-hidden transition-all transform rounded-lg shadow-xl bg-app-black rounded-2 sm:max-w-lg sm:w-full"
        :class="{'bg-app-light': state.theme === 'light'}"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
    >
        <div
            class="px-4 pt-4 pb-4 bg-app-black sm:p-5 sm:pb-5"
            :class="{'bg-app-light': state.theme === 'light'}"
        >
        <div class="sm:flex sm:items-start">
            <div class="w-full mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <div class="flex items-center justify-between mb-4">
                    <h3
                        class="text-lg font-medium leading-6 text-white text-gray-900"
                        id="modal-headline"
                        :class="{'text-dark': state.theme === 'light'}"
                    >
                    {{project.name}}
                    </h3>
                </div>

                <Divider class="mb-4" />

                <div class="mt-2 mb-3 text-white" :class="{'text-dark': state.theme === 'light'}">
                    {{project.description}}
                </div>

                <Divider class="mb-4" />

                <div class="flex justify-center">
                    <a
                        class="relative justify-center inline-block w-auto mr-5 cursor-pointer shadow-app rounded-2"
                        :class="{'shadow-app-light': state.theme === 'light'}"
                        :href="project.repoUrl"
                        target="_blank"
                        >
                        <div
                        class="flex items-center justify-center w-auto animate hover:shadow-app-inner rounded-2"
                        :class="{'hover:shadow-app-light-inner': state.theme === 'light'}"
                        >
                        <div class="flex w-auto px-6 py-7">
                            <span class="text-white uppercase" :class="{'text-dark': state.theme === 'light'}">Repo Link</span>
                        </div>
                        </div>
                    </a>
                    <a
                        class="relative justify-center inline-block w-auto cursor-pointer shadow-app rounded-2"
                        :class="{'shadow-app-light': state.theme === 'light'}"
                        :href="project.demoUrl"
                        target="_blank"
                        >
                        <div
                        class="flex items-center justify-center w-auto animate hover:shadow-app-inner rounded-2"
                        :class="{'hover:shadow-app-light-inner': state.theme === 'light'}"
                        >
                        <div class="flex w-auto px-6 py-7">
                            <span class="text-white uppercase" :class="{'text-dark': state.theme === 'light'}">Demo Link</span>
                        </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        </div>
    </div>
    </div>
</template>
<script>
import { useState } from '../store';
import Divider from '@/components/Divider';
export default {
    name: "Modal",
    props:{
        project: Object
    },
    components:{
        Divider
    },
    setup(props, {emit}){
        const { state } = useState();
        function close(){
            emit('close');
        }

        return {state, close};
    }
}
</script>
<style lang="scss" scoped>
.close{
    top: 1rem;
    right: 1rem;
    color: rgb(210 210 210);
    z-index: 4000;
}
</style>
