<template>

    <div class="bg-black">
        <nav class="
        container
        px-6
        py-8
        mx-auto
        md:flex md:justify-between md:items-center
      ">
            <div class="flex items-center justify-between">

                <!-- Bouton Menu Mobile -->
                <div @click="toggleNav" class="flex md:hidden">
                    <button type="button" class="
              text-gray-100
              hover:text-gray-400
              focus:outline-none focus:text-gray-400
            ">
                        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                            <path fill-rule="evenodd"
                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Menu mobile ouvert -->
            <ul :class="showMenu ? 'flex' : 'hidden'" class="
          flex-col
          mt-8
          space-y-4
          md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0
        ">
                <RouterLink to="/" class="text-gray-100">Accueil</RouterLink>
                <RouterLink to="/projets" class="text-gray-100 ">Mes projets</RouterLink>
                <RouterLink to="/contact" class="text-gray-100">Contact</RouterLink>
                <a onclick="window.open('/src/img/CV_Fleurent_Julien.pdf', '_blank')" href="#"
                    class=" text-gray-100">Mon CV</a>
            </ul>
        </nav>
    </div>
</template>


<script>
import { ref } from 'vue';
export default {
    setup() {
        let showMenu = ref(false);
        const toggleNav = () => (showMenu.value = !showMenu.value);
        return { showMenu, toggleNav };
    },
};

import { RouterLink } from 'vue-router';
</script>