import { Shop } from '../../../network/detail';
<template>
  <div class="shop-info"> 
    <div class="shop-top">
      <img :src="shop.logo" alt="">
      <span class="shop-name">{{shop.name}}</span>
    </div>
  
    <!-- <div class="shop-mid-left">
      <div class="left">
        <span class="sells">{{sell + "万"}}</span>
        <div class="sells-font">总销量</div>
      </div>

      <div class="right">
        <div class="goodsCount">{{shop.goodsCount}}</div>
        <div class="baby-font">全部宝贝</div>
      </div>
    </div> -->
    <div class="shop-mid">
      <div class="shop-mid-left">
        <div class="sells">{{sell + "万"}}</div>
        <div class="sells-font">总销量</div>
      </div>
      <div class="shop-mid-right">
        <div class="goodsCount">{{shop.goodsCount}}</div>
        <div class="baby-font">全部宝贝</div>
      </div>
    </div>
    <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
    <li>10</li>
    <li>11</li>
    <li>12</li>
    <li>13</li>
    <li>14</li>
    <li>15</li>
    <li>16</li>
    <li>17</li>
    <li>18</li>
    <li>19</li>
    <li>20</li>
    <li>21</li>
    <li>22</li>
    <li>23</li>
    <li>24</li>
    <li>25</li>
    <li>26</li>
    <li>27</li>
    <li>28</li>
    <li>29</li>
    <li>30</li>
    <li>31</li>
    <li>32</li>
    <li>33</li>
    <li>34</li>
    <li>35</li>
    <li>36</li>
    <li>37</li>
    <li>38</li>
    <li>39</li>
    <li>40</li>
    <li>41</li>
    <li>42</li>
    <li>43</li>
    <li>44</li>
    <li>45</li>
    <li>46</li>
    <li>47</li>
    <li>48</li>
    <li>49</li>
    <li>50</li>
  </ul>
  </div>
  
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shop: {
      type: Object,
    }
  },
  data() {
    return {
      
    };
  },
  computed: {
    sell() {
       
       return parseFloat(this.shop.sells/10000).toFixed(1)
    }
  },
  mounted() {
    
 
  },
  methods: {
    
  },
}
</script>

<style scoped>
  .shop-info {
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
  }
  .shop-top img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.1);
  }
  .shop-name {
    position: relative;
    color: #999;
    top: -20px;
    margin-left: 10px;
  }
  .shop-mid {
    text-align: left;
    width: 40%;
    display: flex;
    font-size: 20px;

  }
  .shop-mid-left ,.shop-mid-right{
    /* display: inline-block; */
    /* width: 100px; */
    flex: 1;
    margin-top: 30px;
    margin-left: 20px;
  }
   
  .sells,.goodsCount{
    /* font-size: 30px; */
  }

  .sells-font{
   position: relative;
   top: 5px;
   left: 5px;
  font-size: 12px;
  }

  .baby-font {
   position: relative;
   top: 5px;
   left: -5px;
  font-size: 12px;
  }



</style>