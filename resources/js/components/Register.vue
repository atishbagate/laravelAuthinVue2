<template>
    <div class="flex flex-wrap w-full justify-center items-center pt-56">
        <div class="flex flex-wrap max-w-xl">
            <div class="p-2 text-2xl text-gray-800 font-semibold">
                <h1>Register an account</h1>
            </div>
            <div class="form-group">
                <label for="name">name</label>
                <input
                    type="text"
                    class="form-control"
                    id="name"
                    aria-describedby="name"
                    placeholder="Enter name"
                    v-model="form.name"
                />
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    v-model="form.email"
                />
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    v-model="form.password"
                />
            </div>
            <div class="form-group">
                <label for="exampleInputPassword2">Confirm Password</label>
                <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword2"
                    placeholder="ConfirmPassword"
                    v-model="form.password_confirmation"
                />
            </div>
            <button type="submit" @click="saveForm" class="btn btn-primary">
                Submit
            </button>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            form: {
                name: "",
                email: "",
                password: "",
                password_confirmation: "",
            },
            errors: [],
        };
    },
    methods: {
        saveForm() {
            axios
                .post("/api/register", this.form)
                .then(() => {
                    console.log("saved");
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
        },
    },
};
</script>
<style scoped></style>
