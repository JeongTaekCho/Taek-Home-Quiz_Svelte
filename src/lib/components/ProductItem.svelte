<script>
            // @ts-nocheck
    export let product
</script>

<div class="product">
    <div class="product-bg" style="background-image: url({"https://picsum.photos/300/200.webp"});"></div>
    <p class="product-name">{product.name}</p>
    <p class="product-price">${(Number(product.price) / 100).toFixed(2)}</p>
</div>

<style>
    .product{
        width: 374px;
        cursor: pointer;
    }

    .product-bg{
        width: 100%;
        height: 284px;
        border-radius: 8px;
        margin-bottom: 22px;
        background-size: cover;
        background-position: center;
    }

    .product-name{
        font-size: 18px;
        font-weight: 500;
        color: #000;
        text-align: center;
        margin-bottom: 15px;
    }

    .product-price{
        font-size: 18px;
        font-weight: 400;
        color: #505050;
        text-align: center;
    }
</style>