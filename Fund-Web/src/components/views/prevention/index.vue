<template>
<div class="bg-img">
    <div class="back-img" @click="toUrl()">我知道了</div>
</div>
</template>

<script>
export default {
data() {
    return {};
},
methods: {
    toUrl(){
        this.$router.go(-1)
    }
}
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
