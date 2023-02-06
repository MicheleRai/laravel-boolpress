<template>
    <div>
        <NavBar></NavBar>
        <h1>io vengo da app</h1>
        <!-- navbar -->

        <main>
            <router-view></router-view>
        </main>

        <!-- footer -->

        <!-- <div class="container">
            <h1 class="">Frontoffice in Vue</h1>
            <div class="row g-3">
                <div v-for="post in arrPosts" :key="post.id" class="col-sm-6 col-md-4">
                    <div class="card h-100">
                        <img :src="post.image" class="card-img-top" :alt="post.title">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">{{ post.title }}</h5>
                            <p class="card-text flex-grow-1">{{ post.excerpt }}</p>
                            <a :href="'/posts/' + post.slug" class="btn btn-primary">Leggi</a>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>

import NavBar from './components/NavBar';

export default {
    name: 'App',
    components: {
        NavBar,
    },
    data() {
        return {
            arrPosts: [],
        };
    },
    created() {
        axios.get('/api/posts')
            .then(response => this.arrPosts = response.data.results);
    }
}
</script>

<style lang="scss">
    @import '~bootstrap/scss/bootstrap';
</style>
