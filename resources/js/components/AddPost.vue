<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">AllPost.Vue</div>

                    <div class="card-body">Please Add your Post Below.</div>
                </div>
            </div>
            <div class="col-md-12">
                <div class="card">
                    <div>
                        <h3 class="text-center">Add Post</h3>
                        <div class="row">
                            <div class="col-md-6">
                                <form @submit.prevent="addPost">
                                    <div class="form-group">
                                        <label>Title</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            v-model="post.title"
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label>Description</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            v-model="post.description"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        class="btn btn-primary"
                                        @click.prevent="addPost"
                                    >
                                        Add Post
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    mounted() {
        console.log("Component mounted.");
    },
    data() {
        return {
            post: {
                title: "",
                description: "",
            },
        };
    },
    methods: {
        addPost() {
            axios
                .post("/api/add", this.post)
                .then(
                    (response) => this.$router.push({ name: "AllPost" })
                    // console.log(response.data)
                )
                .catch((error) => console.log(error))
                .finally(() => (this.loading = false));
        },
    },
};
</script>
