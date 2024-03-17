<script setup></script>

<template>
  <section class="intro mt-10">
    <div class="left ml-4 lg:mt-10 grid grid-cols-[60%-40%]">
      <div class="lg:space-y-20 space-y-7">
        <div class=" lg:flex space-x-5">
          <h1 class="text-7xl text-left">Benevers</h1>
          <div class="flex space-x-3 lg:space-x-3">
            <p class="lg:text-xl border-2 rounded-full my-3 py-3 px-3 max-lg:-ml-5">Wordpress</p>
            <p class="lg:text-xl border-2 rounded-full my-3 py-3 px-3">Figma</p>
            <p class="lgtext-xl border-2 rounded-full my-3 py-3 px-3">DaVinci Resolve</p>
          </div>
        </div>

        <div class="grid grid-cols-2 mb-20">
          <div class="mr-10">
            <p class="mb-10 italic text-xl">Outils utilisés</p>
            <p>Adobe InDesign</p>
            <p>Adobe Illustrator</p>
            <p>Wordpress</p>
            <p>DaVinci Resolve</p>
            <p>Figma</p>
          </div>
          <div class="mr-10">
            <p class="italic mb-3 text-xl">Durée du projet</p>
            <p class="mb-10">2 semaines</p>
            <p class="italic mb-3 text-xl">Rôle</p>
            <p>Communiquant et Développeur</p>
          </div>
        </div>
      </div>
    </div>

    <div class="img flex mb-20">
      <img src="/src/img/Benevers_mockup_pc.webp" alt="Image Ordinateur de Benevers">
    </div>
  </section>

  <section class="mx-4">
    <p class="mt-20 mb-10 text-xl">Ce projet consistait de créer un site autour du thème du bénévolat. Cela demandait de
      proposer un logo mais aussi la création d'un site web pour regrouper les missions proposées par les organismes.
    </p>

    <div class="lg:grid lg:grid-cols-2 align-middle">
      <div>
        <video width="720" height="480" controls>
          <source src="/src/img/reportagesae_habillage_ffmpeg.mp4" type=video/mp4>
        </video>
        <h4 class="text-center italic mb-5">Reportage de l'association Kidul, réalisé par Timeo Binda</h4>
      </div>
      <div class="mx-4">
        <img src="/src/img/Logos_Benevers.webp" alt="logos Benevers" />
        <h4 class="text-center italic">Déclinaisons des logos Benevers</h4>
        <p class="mt-10">Explication du logo : Les trois personnage debout, les bras tendus, symbolisent l'unité, la
          communauté et la coopération. Cette
          image suggère que des volontaires travaillent ensemble pour atteindre des objectifs communs, s'entraident,
          partagent leurs compétences et leur temps.</p>
      </div>
    </div>

    <!-- Images du projet -->

    <div class="space-y-10 max-lg:my-10">
      <img src="/src/img/benevers/Benevers_Entete.webp" alt="Entête du projet Benevers" class="w-9/12 m-auto">

      <div class="grid grid-cols-2 w-9/12 m-auto">
        <img src="/src/img/benevers/Benevers_T-shirts.webp" alt="T-shirts Benevers">
        <img src="/src/img/benevers/Benevers_carte_visite.webp" alt="Cartes de visite Benevers">
      </div>
    </div>

    <div class="flex justify-center">
      <div class="flex space-x-5">
        <a onclick="window.open('https://dribbble.com/shots/21569985-Benevers')" href="#">
          <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50px" height="50px">
            <path d="M 11.941406 2 C 10.44006 2 9.0197829 2.3412832 7.7402344 2.9375 C 7.7318419 2.9350471 7.723233 2.9321205 7.7148438 2.9296875 L 7.7070312 2.9550781 C 4.3079768 4.5545168 1.9414062 8.0036548 1.9414062 12 C 1.9414062 17.511002 6.4304007 22 11.941406 22 C 17.452412 22 21.941406 17.511002 21.941406 12 C 21.941406 6.4889982 17.452412 2 11.941406 2 z M 11.941406 4 C 13.657837 4 15.156466 4.6541789 16.457031 5.5683594 C 15.82545 6.1959812 15.089919 6.7511088 14.279297 7.203125 C 13.218022 5.9232251 11.92657 4.9041032 10.568359 4.140625 C 11.013413 4.0578722 11.467449 4 11.941406 4 z M 7.9765625 5.1445312 C 9.5261871 5.727606 11.083012 6.6842895 12.335938 8.03125 C 10.255733 8.6629299 7.8727211 8.6247295 5.4804688 7.5253906 C 6.144503 6.5676373 6.9934191 5.7540149 7.9765625 5.1445312 z M 17.955078 6.8632812 C 18.812659 7.8685526 19.351381 9.0869574 19.626953 10.433594 C 18.504078 10.295389 17.358675 10.360744 16.236328 10.587891 C 16.008339 9.9709737 15.730811 9.388059 15.414062 8.8398438 C 16.357582 8.2827458 17.216233 7.6142914 17.955078 6.8632812 z M 4.4707031 9.3710938 C 7.6503928 10.893288 10.874955 10.783354 13.613281 9.71875 C 13.882417 10.169566 14.11829 10.647248 14.314453 11.154297 C 11.180821 12.379806 8.4850686 14.959562 7.4160156 18.427734 C 5.3641713 16.981851 3.9414062 14.7103 3.9414062 12 C 3.9414062 11.066479 4.1790273 10.202866 4.4707031 9.3710938 z M 17.800781 12.386719 C 18.486321 12.374364 19.15505 12.492293 19.818359 12.609375 C 19.618166 15.147299 18.276058 17.35498 16.294922 18.681641 C 16.755243 17.353288 17.110099 15.605394 16.900391 13.474609 C 16.868577 13.151845 16.819349 12.838322 16.763672 12.529297 C 16.879289 12.505865 16.993531 12.466165 17.109375 12.447266 C 17.342126 12.409292 17.572268 12.390837 17.800781 12.386719 z M 14.832031 13.134766 C 14.859562 13.312804 14.892087 13.488551 14.910156 13.671875 C 15.247834 17.102926 14.055291 19.157268 13.591797 19.822266 C 13.060483 19.935144 12.509851 20 11.941406 20 C 10.968416 20 10.062462 19.764916 9.2011719 19.449219 C 9.961496 16.505095 12.219059 14.259566 14.832031 13.134766 z" />
          </svg></a>
          <a onclick="window.open('https://dribbble.com/shots/21569985-Benevers')" href="#" class="mt-2 text-2xl">Dribble de Benevers</a>
      </div>
    </div>
    <div class="flex justify-center my-10">
      <a href="https://benevers.gaspardbondy.fr/" class="text-2xl">https://benevers.gaspardbondy.fr/</a>
    </div>
  </section>
</template>