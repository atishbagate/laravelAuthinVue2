<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <h2>Dashbord</h2>
                <div>
                    Dashboard <br />
                    <div v-if="user">
                        Name: {{ user.name }} <br />
                        Email: {{ user.email }}<br /><br />
                        <button @click.prevent="logout">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
// # this is for custom localhost route.
// # for more info read. article
// # https://insidert.com/snippets/fixing-unauthenticated-error-while-using-laravel-sanctum-for-spa/
// # optional article below
// # https://insidert.medium.com/fixing-unauthenticated-error-while-using-laravel-sanctum-for-spa-9de8da6c8216
// # https://laracasts.com/series/whats-new-in-laravel-7/episodes/6
// axios.defaults.withCredentials = true;
// axios.defaults.baseURL = "http://localhost:8000";
export default {
    data() {
        return {
            user: null,
        };
    },
    methods: {
        logout() {
            axios.post("/api/logout").then(() => {
                this.$router.push({ name: "Home" });
            });
        },
    },
    mounted() {
        axios.get("/api/user").then((res) => {
            this.user = res.data;
        });
    },
};
</script>
