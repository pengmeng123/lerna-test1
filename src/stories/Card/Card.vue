<template>
    <div class="card">
        <div class="title">{{title}}</div>
        <div slot="content"></div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String
        }
    }
}
</script>