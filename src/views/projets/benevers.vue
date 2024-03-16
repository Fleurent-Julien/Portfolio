<script></script>


<template>
    <div class="grid grid-cols-[40%_60%]">
        <div class="ml-5 mt-5">
            <img src="src/img/Benevers.webp" alt="Image Benevers">
        </div>
        <div class="ml-10">
            <div class="flex my-5 space-x-5 align-middle">
                <h1 class="text-5xl font-bold max-lg:ml-0">Benevers</h1>
                <p  class="text-2xl border-4 rounded-full px-3 py-1">Wordpress</p>
                <p  class="text-2xl border-4 rounded-full px-3 py-1">Figma</p>
                <p class="text-2xl border-4 rounded-full px-3 py-1">DaVinci Resolve</p>
            </div>

            <p class="text-3xl mb-2">Communication</p>
            <div>
                 <div>
                     <div class="bg-slate-200 relative h-10 rounded-2xl mr-16 mb-3">
                         <div class="bg-black absolute top-0 left-0 h-full w-1/2 rounded-2xl">

                         </div>
                     </div>
                 </div>
            </div>

            
        <p class="text-3xl mb-2">Design</p>
            <div>
                 <div>
                     <div class="bg-slate-200 relative h-10 rounded-2xl mr-16 mb-3">
                         <div class="bg-black absolute top-0 left-0 h-full w-1/2 rounded-2xl ">

                         </div>
                     </div>
                 </div>
            </div>

            <p class="text-3xl mb-2">Développement</p>
            <div>
                 <div>
                     <div class="bg-slate-200 relative h-10 rounded-2xl mr-16 mb-3">
                         <div class="bg-black absolute top-0 left-0 h-full w-1/2 rounded-2xl">

                         </div>
                     </div>
                 </div>
            </div>

            <p class="text-3xl mb-2">Audiovisuel</p>
            <div>
                 <div>
                     <div class="bg-slate-200 relative h-10 rounded-2xl mr-16 mb-3">
                         <div class="bg-black absolute top-0 left-0 h-full w-1/2 rounded-2xl">

                         </div>
                     </div>
                 </div>
            </div>


        </div>

    </div>

    <p class="mx-5">Contexte :  Bénévolat</p>
<div class="flex mx-5">
    <iframe width="100%" height="500" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F13U04crrrhBs0KmnCkxXZA%2FBenevers---Communication%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DR7huUyXmekQNaze8-1" allowfullscreen></iframe>
    <p class="mx-5">Au niveau de la communication, le but était de le montrer à l'internationnal pour avoir plus d'impact. C'est pour cela que les différents post sur les différents réseaux sociaux sont écrites en Anglais.</p>
</div>

<body>
<section class="grid-container mx-5">
    <div class="grid-item item1">
        <div class="item"></div>
    </div>
    <div class="grid-item item2">
        <div class="item"></div>
    </div>
    <div class="grid-item item3">
        <div class="item"></div>
    </div>
    <div class="grid-item item4">
        <div class="item"></div>
    </div>
    <div class="grid-item item5">
        <div class="item"></div>
    </div>
    <div class="grid-item item6">
        <div class="item"></div>
    </div>
</section>
</body>

</template>

<style>
.grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 2fr 4.5fr 1.25fr 1.75fr;
    gap: 1rem;
    height: 95%;
}

.grid-item {
    position: relative;
    border-radius: 15px;
    overflow: hidden;
}

.item1, .item4 {
    grid-column: 1 / -1;
} 

.item {
    width: 100%;
    height: 100%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background: rgb(0, 0, 0);
}

@media screen and (min-width: 48em) {
    .grid-container {
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(4, 1fr);
    }

    .item1 {
    grid-column: 1 / 5;
    grid-row-end: span 2;
    }

    .item2 {
    grid-column: 5 / -1;
    grid-row-end: span 2;
    }

    .item3 {
    grid-column: 1 / 4;
    grid-row-end: span 2;
    }

    .item4 {
    grid-column: 4 / 10;
    grid-row-end: span 2;
    }

    .item5, .item6 {
    grid-column: 10 / -1;
    }
} 

</style>