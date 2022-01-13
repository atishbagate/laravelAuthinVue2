<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        You are in 404 page.. please. go to
                        <router-link class="nav-link" :to="{ name: 'Home' }"
                            >HOME</router-link
                        >
                        page.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log("Component mounted.");
    },
};
</script>
