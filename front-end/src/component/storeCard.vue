<script setup>
import Swal from 'sweetalert2';


const addToCart = () =>{
    Swal.fire({
        icon:'success',
        title:'已加入購物車',
        toast: true,
        position:'top-end',
        showConfirmButton: false,
        timer:2000,
        timerProgressBar:true
    })

}




</script>


    <template >
        <div class="header">
    <h1>Shop in style</h1>
    <p>With this shop hompeage template</p>
</div>

<div class="shop-container">
    <div class="shop-grid">

    <!-- 卡片 1 -->
    <div class="card">
        <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
        <div class="card-body">
            <h5>Fancy Product</h5>
            <div class="price">$40.00 - $80.00</div>
        </div>
        <div class="card-footer">
            <a class="btn" href="#" @click="addToCart">加入購物車</a>
        </div>
    </div>

    <!-- 卡片 2 -->
    <div class="card">
        <div class="sale-badge">Sale</div>
        <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
        <div class="card-body">
            <h5>Special Item</h5>
            <div class="stars">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <div class="price">
            <span class="old">$20.00</span>
            $18.00
            </div>
        </div>
        <div class="card-footer">
            <a class="btn" href="#" @click="addToCart">加入購物車</a>
        </div>
    </div>


    <!-- 卡片 3 -->
    <div class="card">
        <div class="sale-badge">Sale</div>
        <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
        <div class="card-body">
            <h5>Special Item</h5>
            <div class="stars">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <div class="price">
            <span class="old">$20.00</span>
            $18.00
            </div>
        </div>
        <div class="card-footer">
            <a class="btn" href="#" @click="addToCart">加入購物車</a>
        </div>
    </div>


    <!-- 卡片 4 -->
    <div class="card">
        <div class="sale-badge">Sale</div>
        <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
        <div class="card-body">
            <h5>Special Item</h5>
            <div class="stars">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <div class="price">
            <span class="old">$20.00</span>
            $18.00
            </div>
        </div>
        <div class="card-footer">
            <a class="btn" href="#" @click="addToCart">加入購物車</a>
        </div>
    </div>



    <!-- 卡片 5 -->
    <div class="card">
        <div class="sale-badge">Sale</div>
        <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
        <div class="card-body">
            <h5>Special Item</h5>
            <div class="stars">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <div class="price">
            <span class="old">$20.00</span>
            $18.00
            </div>
        </div>
        <div class="card-footer">
            <a class="btn" href="#" @click="addToCart">加入購物車</a>
        </div>
    </div>



    <!-- 卡片 6 -->
    <div class="card">
        <div class="sale-badge">Sale</div>
        <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
        <div class="card-body">
            <h5>Special Item</h5>
            <div class="stars">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <div class="price">
            <span class="old">$20.00</span>
            $18.00
            </div>
        </div>
        <div class="card-footer">
            <a class="btn" href="#" @click="addToCart">加入購物車</a>
        </div>
    </div>

    
    <!-- 其餘卡片可照同樣方式複製 -->
    
    </div>
</div>

        
    

    </template>
<style scoped>

</style>