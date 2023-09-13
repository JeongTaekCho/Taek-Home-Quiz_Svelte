<script>
    // @ts-nocheck

    import {categories} from "$lib/data/categoryData";

    export let categoryId
    const item = categories[categoryId]
</script>

<a href="/products/{item.name.replaceAll(' ', '')}" class="cate-item">
    <div class="item-bg" style="background-image: url({item.picture});"></div>
    <p class="item-name">{item.name}</p>
</a>

<style>
    .cate-item {
       width: 276px; 
       height: 240px;
       background-color: #FAFAF8;
       position: relative;
       border-radius: 8px;
    }

    .item-bg{
        width: 160px;
        height: 160px;
        background-position: center;
        background-size: cover;
        border-radius: 50%;
        position: absolute;
        top: -15px;
        left: 50%;
        transform: translateX(-50%);
    }

    .item-name{
        font-size: 18px;
        font-weight: 400;
        color: #000;
        position: absolute;
        bottom: 35px;
        left: 50%;
        transform: translateX(-50%);
    }
</style>