<script setup>
</script>

<template>
    <h1 class="text-7xl my-20">Julien Fleurent</h1>

    <p class="text-center text-3xl my-5">Étudiant en communication</p>

    <section class="pb-5 bg-slate-950 pt-1">
        <h2 class="text-center text-4xl my-10">Qui suis-je ?</h2>

        <div class="text-xl mx-20 space-y-5">
            <p>Étudiant en 2ème année de MMI (Métiers du Multimédia et de l'Internet) en spécialité Communication.
            </p>

            <p>Acutelllement en Stage chez Mulhouse Gaming du 2 Avril au 9 Juin 2024.</p>

            <p>À la recherche d'un stage de 16 semaine pour ma 3ème année, si vous êtes intéressés, n'hésitez pas à
                me contacter sur Linkedin ou par mail <a href="mailto:julienfleurent4@gmail.com"
                    class="bold">julienfleurent4@gmail.com</a></p>
        </div>
    </section>

    <section class=" pb-5 pt-1">
        <h2 class="text-center text-4xl my-10">Mes compétences</h2>

        <div class="grid lg:grid-cols-4 md:grid-cols-2">
            <div class="card-container bg-gray-700 text-center space-y-5">
                <p class="text-2xl">License Adobe</p>
                <p>Illustrator</p>
                <p>InDesign</p>
                <p>Photoshop</p>
                <p>Première Pro</p>
                <p>Media Encoder</p>
            </div>

            <div class="card-container bg-gray-700 text-center space-y-5">
                <p class="text-2xl">Réseaux sociaux</p>
                <p>Stratégie de contenus</p>
                <p>Planning de publications</p>
                <p>Création de contenus</p>
                <p>Rédaction des cahier des charges</p>
            </div>

            <div class="card-container bg-gray-700 text-center space-y-5">
                <p class="text-2xl">Langues</p>
                <p>Anglais : B2</p>
                <p>Allemand : A2</p>
            </div>

            <div class="card-container bg-gray-700 text-center space-y-5">
                <p class="text-2xl">Gestion de projet</p>
                <p>Animation de réunions</p>
                <p>Trello</p>
                <p>Notion</p>
                <p>Rédaction des cahier des charges</p>
                <p>Travail en équipe</p>
            </div>
        </div>
    </section>


    <section class=" bg-slate-950 pb-3 pt-1">
        <h2 class="text-center text-4xl my-10">Mes réalisations</h2>

        <div class="grid lg:grid-cols-4 md:grid-cols-2">
            <div class="card-container bg-gray-500">
                <RouterLink to="/benevers" class="hero-image-container before:none">
                    <img class="hero-image" src="../img/Benevers.webp" alt="Illustration du projet benevers" />
                </RouterLink>
                <main class="main-content">
                    <h2 class="text-center text-4xl">
                        <RouterLink to="/benevers">Benevers</RouterLink>
                    </h2>
                </main>
            </div>

            <div class="card-container bg-gray-500">
                <RouterLink to="/crac-19" class="hero-image-container before:none">
                    <img class="hero-image" src="../img/Cover_crac_19.webp" alt="Illustration du projet benevers" />
                </RouterLink>
                <main class="main-content">
                    <h2 class="text-center text-4xl">
                        <RouterLink to="/crac-19">Le 19, Crac</RouterLink>
                    </h2>
                </main>
            </div>

            <div class="card-container bg-gray-500">
                <a href="/hurry-up" class="hero-image-container">
                    <img class="hero-image" src="../img/hurry_up/cover_hurry-up.webp" alt="Cover de Hurry Up" />
                </a>
                <main class="main-content">
                    <h2 class="text-center text-4xl">
                        <RouterLink to="/hurry-up">Hurry Up !</RouterLink>
                    </h2>
                </main>
            </div>

            <div class="card-container bg-gray-500">
                <a href="/tick-tock-time" class="hero-image-container">
                    <img class="hero-image" src="../img/tick-tock-time/Tick-tock-time-cover.webp"
                        alt="Couverture du projet Tick Tock Time" />
                </a>
                <main class="main-content">
                    <h2 class="text-center text-4xl">
                        <RouterLink to="/tick-tock-time">Tick Tock Time</RouterLink>
                    </h2>
                </main>
            </div>
        </div>
    </section>


</template>