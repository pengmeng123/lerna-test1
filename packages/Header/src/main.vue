<template>
    <div>
     <div class="title">{{title}}</div>
     <div slot="desc"></div>
    </div>
</template>
<script>
export default {
    props: {
        title:{
            type:String
        }
    }
}
</script>