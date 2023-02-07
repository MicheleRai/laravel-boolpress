<template>
    <div>
        <NavBar />
        <h1>io vengo da app</h1>
        <!-- navbar -->

        <main>
            <div class="container">
                <router-view />
            </div>
        </main>

        <!-- footer -->
        <Footer />
    </div>
</template>

<script>

import NavBar from './components/NavBar';
import Footer from "./components/Footer";

export default {
    name: 'App',
    components: {
        NavBar, // NavBar: NavBar
        Footer, // Footer: Footer
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
