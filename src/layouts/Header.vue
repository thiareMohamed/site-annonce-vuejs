<template lang="">
    <div class="bg-gradient-to-r to-blue-400 from-blue-700 text-white flex items-center justify-between px-40 py-8 fixed w-full">
        <div>
            <h3 class="font-bold text-xl">Colobane</h3>
        </div>
        <ul class="flex gap-10">
            <li>
                <router-link to="/">Accueil</router-link>
            </li>
            <li>
                <router-link to="/add-annonce">Annonce</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "HeaderLayout",
    
}
</script>
<style lang="">
    
</style>