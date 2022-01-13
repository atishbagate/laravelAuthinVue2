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
                        <!-- <button @click.prevent="logout">Logout</button> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:8000";
export default {
    data() {
        return {
            user: null,
        };
    },
    // methods: {
    //     logout() {
    //         axios.post("/api/logout").then(() => {
    //             this.$router.push({ name: "Home" });
    //         });
    //     },
    // },
    mounted() {
        axios.get("/api/user").then((res) => {
            this.user = res.data;
        });
    },
};
</script>
