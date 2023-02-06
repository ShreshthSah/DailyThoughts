<template>
    <div class="signup">
      <div class="signup__container">
        <form @submit.prevent="userSignup()" class="signup__form" action="">
          <h1>Register</h1>
          <span class="input__error">{{
            errors.username || errors.password || errors.password1
          }}</span>
          <input
            v-model="username"
            placeholder="Enter your username..."
            type="text"
          />
          <input
            v-model="password"
            placeholder="Enter password..."
            type="password"
          />
          <input
            v-model="password1"
            placeholder="Confirm password..."
            type="password"
          />
          <button><RouterLink to="/thoughts">Signup</RouterLink></button>
          <router-link class="router__link" to="/login">
            Already Registered? Login
          </router-link>
        </form>
      </div>
    </div>
  </template>
  <script>
//     this.issignup=true
//  if( this.issignup=true){
//     <RouterLink to="/thoughts"></RouterLink>
//  }

  import validator from "validator"
import { RouterLink } from "vue-router"
  
const validateSignup = (data) => {
  let errors = {};

  const { username, password, password1 } = data;

  if (localStorage.users) {
    let lsUsers = localStorage.users;

    lsUsers = JSON.parse(lsUsers);
    let index = lsUsers.findIndex((user) => user.username === username);
    
    if (index > -1) {
      errors.username = "Username already exists!";
    }
  }

  if (validator.isEmpty(username)) {
    errors.username = "Username is required";
  }

  if (validator.isEmpty(password)) {
    errors.password = "Password is required";
  }

  if (!validator.equals(password, password1)) {
    errors.password2 = "Password not matching";
  }

  if (validator.isEmpty(password1)) {
    errors.password2 = "Password is required.";
  }

  return {
    isInvalid: Object.keys(errors).length > 0,
    errors: errors,
  };
  issignup=true

}
  export default {
    name:"Signup",
    data() {
      return {
        username: "",
        password: "",
        password1: "",
        errors: {},
        users: [],
        
      };
    },
    methods: {
      userSignup() {
        let user = {
          username: this.username,
          password: this.password,
          password1: this.password1,
        };
        const { isInvalid, errors } = validateSignup(user);
        if (isInvalid) {
          this.errors = errors;
        } else {
          this.errors = {};
          // store user in local storage
          if (localStorage.users) {
            let lsUsers = localStorage.users;
            this.users = JSON.parse(lsUsers);
          }
          this.users.push(user);
          localStorage.setItem("users", JSON.stringify(this.users));
          this.username = "";
          this.email = "";
          this.password = "";
          this.password2 = "";
          this.$router.push("/login");
        }
      },
    },
  };
  </script>
  <style>
  .signup {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e0e0e000;
  }
  .signup__container {
    display: flex;
    flex-direction: column;
    max-width: 95%;
    width: 350px;
    height: 60%;
    justify-content: space-evenly;
    align-items: center;
     box-shadow: 3px 4px 20px 0 rgba(0, 0, 0, 0.37);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }
  .signup__container > h1 {
    color: white;
  }
  .signup__form {
    display: flex;
    flex-direction: column;
    height: 70%;
    width: 80%;
    justify-content: space-evenly;
  }
  .signup__form > input {
    padding: 7px 10px;
    border-radius: 5px;
    outline: none;
    border: none;
    box-shadow: 1px 1px 2px 1px rgba(107, 107, 107, 0.419);
    background-color: rgba(255, 255, 255, 0.219);
    color: rgb(58, 58, 58);
    /* border: 1px solid rgb(255, 255, 255); */
  }
  .signup__form > button {
    border: none;
    padding: 8px;
    border-radius: 5px;
    background-color: rgba(240, 240, 240, 0);
    box-shadow: 1px 1px 3px 1px rgba(61, 61, 61, 0.419);
    color: white;
    transition: ease-in 0.2s;
  }
  .signup__form > button:hover {
    background-color: rgba(255, 255, 255, 0.138);
    box-shadow: 2px 2px 5px 1px rgba(61, 61, 61, 0.419);
    transition: ease-in 0.3s;
  }
  .signup__form > button:active {
    background-color: rgba(255, 255, 255, 0.289);
    box-shadow: 2px 2px 5px 1px rgba(61, 61, 61, 0.419);
    transition: ease-in 0.2s;
    outline: none;
    border: none;
  }
  .signup__form > button:focus {
    outline: none;
  }
  .input__error {
    color: red;
    font-size: x-small;
  }
  .login__link {
    font-size: small;
    padding-top: 10px;
  }
  </style>