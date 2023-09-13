<script>
        // @ts-nocheck
    import { page } from '$app/stores'
    import {products} from "$lib/data/productData"
    import {categories} from "$lib/data/categoryData";
    import ProductItem from '$lib/components/ProductItem.svelte';

    const {name} = $page.params;


    const productList = Object.values(products).filter((el) => el.id.includes(name.toLowerCase().slice(0,4)))
    const category = Object.values(categories).filter((el) => el.name.replaceAll(" ", "") === name)

    const categoryInfo = category[0]

    const goBack = () => {
        window.history.back()
    }

</script>

<div id="wrap">
    <div class="container">
        <div class="products-head">
            <button class="back-btn" on:click={goBack}><img src="/src/lib/images/left-arrow.png" alt="뒤로가기 버튼"></button>
            <p class="product-title">
                <span class="category-name">{categoryInfo.name}</span>
                {#if categoryInfo.description}
                    <span class="circle">ꞏ</span>
                    <span class="category-decription">{categoryInfo.description}</span>
                {/if}
            </p>
        </div>
        <div class="products-container">
            {#if productList.length > 0}
                {#each productList as product }
                    <ProductItem product={product} />
                {/each}
                {:else}
                    <p class="error">메뉴가 존재하지 않습니다.</p>
            {/if}
            
        </div>
    </div>
</div>

<style>
    #wrap {
        width: 100%;
    }

    .container{
        width: 1200px;
        margin: 0 auto;
    }

    .products-container{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 30px 15px;
    }

    .products-head{
        width: 100%;
        display: flex;
        gap: 30px;
        align-items: center;
        margin: 18px 0;
    }

    .back-btn{
        width: 90px;
        height: 68px;
        border: 2px solid #EDEDED;
        border-radius: 10px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        box-shadow: 0px 0px 3px gray;
    }

    .back-btn > img {
        width: 22px;
    }

    .product-title {
        display: flex;
        gap: 20px;
        align-items: center;
    }

    .product-title > span.category-name {
        font-size: 36px;
        font-weight: 600;
        color: #000;
    }
    .product-title > span.circle {
        font-size: 26px;
        font-weight: 400;
        color: #4B4B4B;
    }
    .product-title > span.category-decription {
        font-size: 22px;
        font-weight: 400;
        color: #4B4B4B;
    }

    .error{
        font-size: 24px;
        font-weight: 500;
        color: #111;
        margin-top: 30px;
    }
</style>