<script setup>
import bindNotesLogo from '../Assets/bindnotes_logo.png'


</script>

<template>
    <section>
        <div class="logo">
            <img :src="bindNotesLogo" alt="BindNotes Logo">
        </div>
        <div class="Welcome-Message">
            <div class="title">
                <h1>Welcome to BindNotes!</h1>
                <p>Please enter your details to sign in</p>
            </div>
            <button>
                <i class="fa-brands fa-google"></i> Google
            </button>

            <div class="separator">
                <span>or</span>
            </div>
        </div>
        <div class="info">
            <div class="email">
                <p>Email Address</p>
                <input type="email" id="email" placeholder="Enter your email">
            </div>
            <div class="password">
                <p>Password</p>
                <input type="password" id="password" placeholder="Enter your password">
            </div>
            <div class="middle">
                <div class="remember">
                    <input type="checkbox" id="remember">
                    <label for="remember">Remember me</label>
                </div>
                <a href="#">Forgot password?</a>
            </div>
            <button> Sign In</button>
            <div>
                <p>Don't have an account? <a href="#">Sign Up</a></p>
            </div>
        </div>
    </section>
</template>


<style scoped>
/************************************************ Section ****************************************************/
section {
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 200px 200px 1fr;
    row-gap: 20px;

}

/************************************************ Section ****************************************************/

/************************************************ Welcome ****************************************************/
.Welcome-Message .title {
    text-align: center;
}

.Welcome-Message {
    display: flex;
    flex-direction: column;
    font-family: var(--font-family-text); 
    position: relative;
    /* bottom: 100px; */
    align-items: center;
    /* border: 1px solid var(--text-color); */
}
.Welcome-Message h1 {
    font-size: 2rem;
    margin-bottom: 10px;
    font-weight: 300;
    color: var(--text-color);
}
.Welcome-Message p {
    font-size: 1rem;
    color: var(--text-color);
}
.Welcome-Message button {
    margin-top: 60px;
    display: flex;
    width: 28rem;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
    border: 1px solid var(--text-color);
    font-size: 16px;
    border-radius: 5px;
    background: none;
    cursor: pointer;
}

.separator {
    width: min(100%, 28rem);
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: var(--text-color);
    font-size: 0.9rem;
    margin: 0.75rem 0;
}

.separator::before,
.separator::after {
    content: "";
    flex: 1;
    height: 1px;
    background-color: var(--text-color);
}

.separator span {
    line-height: 1;
    text-transform: lowercase;
}

/************************************************ Welcome ****************************************************/


/************************************************ Info Area ****************************************************/
.info {
    /* border: 1px solid var(--text-color); */
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: var(--font-family-text);
    gap: 20px;
}

.info input {
    width: 28rem;
    padding: 10px;
    border: 1px solid var(--text-color);
    border-radius: 5px;
}

.info .email {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.info .password {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.logo {
    display: grid;
    place-items: center;
}

/*********************************************** Info Area *******************************************************/



/************************************************ Middle ****************************************************/


.middle {
    display: flex;
    width: min(100%, 28rem);
    justify-content: space-between;
    align-items: center;
    font-size: 0.95rem;
}

.middle .remember {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.middle .remember input {
    width: 1rem;
    height: 1rem;
    
}

.middle a {
    color: var(--text-color);
    text-decoration: none;
}

.middle a:hover {
    text-decoration: underline;
}

.info button {
    width: 28rem;
    padding: 10px 20px;
    border: 1px solid var(--text-color);
    font-size: 16px;
    border-radius: 5px;
    background: none;
    cursor: pointer;
}


/************************************************ Middle ****************************************************/




img {
    width: 400px;
    object-fit: contain;
    height: auto;
    position: relative;
    bottom: 80px;
    /* border: 1px solid black; */
}
</style>
