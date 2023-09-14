<script>
  const languages = [{ name: 'English' }, { name: '한국어' }];
  const tableNumber = '12';

  const handleClickCallWaiter = () => {
    alert('Waiter Called');
  };
</script>

<div id="wrap">
  <header>
    <nav id="navigation">
      <ul id="menu">
        <li>
          <select id="language">
            {#each languages as menu}
              <option>
                {menu.name}
              </option>
            {/each}
          </select>
        </li>
        <li>
          <a on:click={handleClickCallWaiter}
            ><img
              src="/src/lib/images/notifications_active.png"
              alt="종 이미지"
            /><span>Call Waiter</span></a
          >
        </li>
        <li>
          <a href=""
            ><img src="/src/lib/images/receipt.png" alt="영수증 이미지" /><span
              >View Bill</span
            ></a
          >
        </li>
        <li>
          <a href=""
            ><img
              src="/src/lib/images/shopping_cart.png"
              alt="장바구니 이미지"
            /><span>My Cart</span>
            <div class="circle-number"><span>0</span></div></a
          >
        </li>
        <li>
          <img src="/src/lib/images/table.png" alt="테이블 이미지" /><span
            class="table-number">{tableNumber}</span
          >
        </li>
      </ul>
    </nav>
  </header>
</div>

<style>
  #wrap {
    width: 100%;
  }

  header {
    width: 1200px;
    margin: 0 auto;
  }

  #menu {
    display: flex;
    background-color: #24201f;
    font-size: 20px;
    color: #fff;
    text-align: center;
  }

  #menu > li {
    width: 23.75%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  #menu > li > a {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 15px;
    color: #fff;
    padding: 13px 0;
    cursor: pointer;
  }
  #menu > li:nth-child(3) > a {
    color: #827e7d;
  }
  #menu > li:nth-child(4) > a {
    color: #827e7d;
  }
  #menu > li:not(:first-child) {
    border-left: 1px solid #565251;
  }
  #menu > li:first-child {
    width: 16.6%;
    justify-content: flex-start;
    padding: 0 22px;
    background: url('/src//lib//images/chevron-down.png') no-repeat;
    background-position-x: 95%;
    background-position-y: center;
  }
  #menu > li:last-child {
    width: 12.08%;
  }

  #language {
    width: 100%;
    background: none;
    border: none;
    color: #fff;
    font-size: 20px;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
  }

  .circle-number {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #595651;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .circle-number > span {
    font-size: 20px;
    color: #b4b1ac;
  }

  .table-number {
    font-size: 28px;
    font-weight: 700;
  }
</style>
