<script setup>
import { ref } from 'vue';

</script>


<template>
    <section>
        <div class="left">

        </div>
        <div class="right">
            <div class="content">
                <div class="title">
                    <h1>Welcome Back!</h1>
                    <p>Please login to your account</p>
                </div>
                <div class="input">
                    <div class="Email">
                        <p class="label">Email Addres</p>
                        <input class="info" type="email" placeholder="Enter your email" />
                    </div>
                    <div class="password">
                        <p class="label">Password</p>
                        <input class="info" type="password" placeholder="Enter your password" />
                    </div>
                </div>
                <div class="middle">
                        <div class="remember">
                            <input type="checkbox" id="remember" />
                            <label for="remember">Remember me</label>
                        </div>
                        <div class="forgot">
                            <a href="#">Forgot password?</a>
                        </div>
                    </div>
                    <button>Login</button>
            </div>
        </div>
    </section>
</template>




<style scoped>

section {
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    border: 1px solid red;
}

.left {
    background-color: #f0f0f0;
}

.right {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--primary-font);
}
.right .content .title {
    position: relative;
    bottom: 50px;
    text-align: center;
    margin-bottom: 20px;
}


.right .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    width: 80%;
    height: 80%;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.right .content .input {
    display: flex;
    flex-direction: column;
    gap: 20px;
    
}
.right .content .input .label {
    font-size: 14px;
    color: var(--text-color);
    font-weight: 500;
}


.right .content .input .info {
    width: 20rem;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;

}

.right .content .middle {
    font-size: 14px;
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: center;
    width: 100%;
    margin-top: 20px;
}
</style>
