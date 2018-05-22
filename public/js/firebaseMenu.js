//dom
var list = document.getElementById('list');
var menu = firebase.database().ref('Hexmenu');
var btn = document.getElementById('btn');
var cartList = document.getElementById('cartlist')
var hmmenu = firebase.database().ref('Hexmenu/hamburger');
var friesmenu = firebase.database().ref('Hexmenu/fries');
// hmmenu.push(
    // {
        // {
        //     foodNameCN: '薯條',
        //     foodNameEN: 'Fries',
        //     img: 'https://firebasestorage.googleapis.com/v0/b/project-8fdae.appspot.com/o/hexmenu-images%2Fproduct_5.png?alt=media&token=77bc5a3e-8831-4de6-b759-497d66b74d5c',
        //     price: 25,
        // },
        // {
        //     foodNameCN: '經典漢堡套餐',
        //     foodNameEN: 'Classic Hamburger Package',
        //     img: 'https://firebasestorage.googleapis.com/v0/b/project-8fdae.appspot.com/o/hexmenu-images%2Fproduct_1.png?alt=media&token=1825e1c7-e5f7-4687-9175-660610232522',
        //     price: 120,
        // },
        // {
        //     foodNameCN: '英俊香腸',
        //     foodNameEN: 'Handsome Sausage',
        //     img: 'https://firebasestorage.googleapis.com/v0/b/project-8fdae.appspot.com/o/hexmenu-images%2Fproduct_2.png?alt=media&token=b8c550dd-80f6-43db-ba7a-68aa091141f4',
        //     price: 1024,
        // },
        // {
        //     foodNameCN: '漢堡兄弟',
        //     foodNameEN: 'Hamburg Brothers',
        //     img: 'https://firebasestorage.googleapis.com/v0/b/project-8fdae.appspot.com/o/hexmenu-images%2Fproduct_3.png?alt=media&token=b2747ac9-80a8-4caa-ae6c-9b5f516865a4',
        //     price: 792,
        // },
        // {
        //     foodNameCN: '完美願望',
        //     foodNameEN: 'Dragon Ball Package',
        //     img: 'https://firebasestorage.googleapis.com/v0/b/project-8fdae.appspot.com/o/hexmenu-images%2Fproduct_4.png?alt=media&token=a5837c6d-2f45-41c2-b949-a109b4becfc2',
        //     price: 999999,
        // },
// }
// );
// var order = '';

// cartList.addEventListener('click',function (e) {
//     if (e.target.nodeName !== "A") {
//        return
//     }
//     var order = e.target.value;
// console.log(order);

//   })



menu.once('value', function (snapshot) {
    var str = '';
    
    var data = snapshot.val().hamburger;
    // console.log(data);
    
    for (var items in data) {
        str += `<li class="section-cart-imagelist-list-box">
        <img src="${data[items].img}" alt="food">
        <h2>${data[items].foodNameCN}</h2>
        <h4>${data[items].foodNameEN}</h4>
        <hr>
        <h3>$ ${data[items].price}</h3>
        <button>
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>加入購物車</button>
    </li>`
    }
    list.innerHTML = str;
})