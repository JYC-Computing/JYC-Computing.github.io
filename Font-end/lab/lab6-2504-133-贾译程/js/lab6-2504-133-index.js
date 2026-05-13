
function Book(title, author, price, rating, category, desc, img) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.rating = rating;
    this.category = category;
    this.desc = desc;
    this.img = img;
}

var bookList = [
    new Book('Web开发实战', '张三', 89, 5, '计算机科学', '从零开始学习Web开发，涵盖HTML/CSS/JS内容，适合初学者。', 'image/book1.jpg'),
    new Book('设计心理学', '李四', 65, 4, '艺术设计', '探索用户体验与认知心理的联系，设计师必读书籍。', 'image/book2.jpg'),
    new Book('现代历史', '王五', 58, 4, '人文社科', '全面梳理近现代重大历史事件，以全球视野解读历史。', 'image/book3.jpg'),
    new Book('C++程序设计', '赵六', 72, 5, '计算机科学', '讲解C++语言核心语法与面向对象编程，附实战案例。', 'image/book1.jpg'),
    new Book('数据结构', '孙七', 95, 5, '计算机科学', '介绍常用数据结构与算法，配合图解和代码示例。', 'image/book2.jpg'),
    new Book('唐诗三百首', '周八', 35, 4, '文学小说', '收录唐代最具代表性的三百首诗歌，附注释与赏析。', 'image/book3.jpg'),
    new Book('网页设计基础', '吴九', 48, 3, '艺术设计', '讲解网页排版、色彩搭配与视觉层次设计原则。', 'image/book1.jpg'),
    new Book('操作系统原理', '郑十', 88, 5, '计算机科学', '介绍进程管理、内存管理、文件系统等操作系统概念。', 'image/book2.jpg')
];

var currentUser = {
    username: '',
    isLoggedIn: false,
    cart: []
};

function addToCart(book) {
    for (var i = 0; i < currentUser.cart.length; i++) {
        if (currentUser.cart[i].title === book.title) {
            currentUser.cart[i].count++;
            return;
        }
    }
    currentUser.cart.push({ title: book.title, price: book.price, count: 1 });
}

function getCartCount() {
    var total = 0;
    for (var i = 0; i < currentUser.cart.length; i++) {
        total += currentUser.cart[i].count;
    }
    return total;
}

function getCartTotal() {
    var total = 0;
    for (var i = 0; i < currentUser.cart.length; i++) {
        total += currentUser.cart[i].price * currentUser.cart[i].count;
    }
    return total.toFixed(2);
}

var currentFilter = 'all';

function initSearch() {
    var filterBtns = document.querySelectorAll('.filter-btn');
    for (var i = 0; i < filterBtns.length; i++) {
        filterBtns[i].onclick = function() {
            for (var j = 0; j < filterBtns.length; j++) {
                filterBtns[j].className = 'filter-btn';
            }
            this.className = 'filter-btn active';
            currentFilter = this.getAttribute('data-filter');
            doSearch();
        };
    }

    document.getElementById('searchInput').oninput = function() {
        doSearch();
    };
}

function doSearch() {
    var keyword = document.getElementById('searchInput').value;
    var searchResult = document.getElementById('searchResult');

    if (keyword === '') {
        searchResult.style.display = 'none';
        return;
    }

    var kw = keyword.toLowerCase();
    var matched = [];

    for (var i = 0; i < bookList.length; i++) {
        var b = bookList[i];
        var inTitle = b.title.toLowerCase().indexOf(kw) !== -1;
        var inAuthor = b.author.toLowerCase().indexOf(kw) !== -1;
        var inCategory = b.category.indexOf(kw) !== -1;

        if (currentFilter === 'all') {
            if (inTitle || inAuthor || inCategory) {
                matched.push(b);
            }
        } else if (currentFilter === 'title' && inTitle) {
            matched.push(b);
        } else if (currentFilter === 'author' && inAuthor) {
            matched.push(b);
        } else if (currentFilter === 'category' && inCategory) {
            matched.push(b);
        }
    }

    searchResult.innerHTML = '';

    if (matched.length === 0) {
        var noItem = document.createElement('div');
        noItem.className = 'search-no-result';
        noItem.innerText = '未找到相关图书';
        searchResult.appendChild(noItem);
    } else {
        for (var j = 0; j < matched.length; j++) {
            var item = document.createElement('div');
            item.className = 'search-item';

            var img = document.createElement('img');
            img.src = matched[j].img;
            img.alt = matched[j].title;

            var info = document.createElement('div');
            info.className = 'search-item-info';

            var title = document.createElement('p');
            title.className = 'search-item-title';
            title.innerText = '《' + matched[j].title + '》';

            var meta = document.createElement('p');
            meta.className = 'search-item-meta';
            meta.innerText = matched[j].author + ' · ' + matched[j].category;

            var price = document.createElement('p');
            price.className = 'search-item-price';
            price.innerText = '¥' + matched[j].price + '.00';

            info.appendChild(title);
            info.appendChild(meta);
            info.appendChild(price);
            item.appendChild(img);
            item.appendChild(info);

            item.onclick = function() {
                document.getElementById('searchResult').style.display = 'none';
            };

            searchResult.appendChild(item);
        }
    }

    searchResult.style.display = 'block';
}

function checkPasswordStrength(password) {
    var bar = document.getElementById('strengthBar');
    var text = document.getElementById('strengthText');

    if (password.length === 0) {
        bar.style.width = '0';
        text.innerText = '';
        return;
    }

    var score = 0;
    if (password.length >= 6) score++;
    if (password.length >= 10) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 2) {
        bar.style.width = '33%';
        bar.style.backgroundColor = '#e74c3c';
        text.innerText = '弱';
        text.style.color = '#e74c3c';
    } else if (score <= 3) {
        bar.style.width = '66%';
        bar.style.backgroundColor = '#e8a000';
        text.innerText = '中';
        text.style.color = '#e8a000';
    } else {
        bar.style.width = '100%';
        bar.style.backgroundColor = '#27ae60';
        text.innerText = '强';
        text.style.color = '#27ae60';
    }
}

function validateRegUsername(value) {
    var tip = document.getElementById('usernameTip');
    if (value === '') {
        tip.innerText = '';
        return false;
    }
    var emailReg = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
    var phoneReg = /^1[3-9]\d{9}$/;
    if (emailReg.test(value) || phoneReg.test(value)) {
        tip.innerText = '格式正确';
        tip.style.color = '#27ae60';
        return true;
    } else {
        tip.innerText = '请输入有效的邮箱或手机号';
        tip.style.color = '#e74c3c';
        return false;
    }
}

function updateCartBadge() {
    var badge = document.getElementById('cartBadge');
    var count = getCartCount();
    if (count > 0) {
        badge.innerText = count;
        badge.style.display = 'inline-block';
    } else {
        badge.style.display = 'none';
    }
}

function handleAddToCart(bookTitle) {
    var book = null;
    for (var i = 0; i < bookList.length; i++) {
        if (bookList[i].title === bookTitle) {
            book = bookList[i];
            break;
        }
    }
    if (book === null) return;
    addToCart(book);
    updateCartBadge();
    var toast = document.getElementById('cartToast');
    toast.innerText = '《' + book.title + '》已加入购物车';
    toast.style.display = 'block';
    setTimeout(function() {
        toast.style.display = 'none';
    }, 2000);
}

function showCartPanel() {
    var panel = document.getElementById('cartPanel');
    var list = document.getElementById('cartList');
    var totalEl = document.getElementById('cartTotal');

    list.innerHTML = '';

    if (currentUser.cart.length === 0) {
        list.innerHTML = '<p style="color:#aaa;text-align:center;">购物车是空的</p>';
    } else {
        for (var i = 0; i < currentUser.cart.length; i++) {
            var item = currentUser.cart[i];

            var row = document.createElement('div');
            row.className = 'cart-row';

            var nameEl = document.createElement('span');
            nameEl.innerText = '《' + item.title + '》x' + item.count;

            var priceEl = document.createElement('span');
            priceEl.innerText = '¥' + (item.price * item.count).toFixed(2);

            var delBtn = document.createElement('button');
            delBtn.innerText = '删除';
            delBtn.className = 'cart-del-btn';
            delBtn.setAttribute('data-title', item.title);
            delBtn.onclick = function() {
                var t = this.getAttribute('data-title');
                var newCart = [];
                for (var k = 0; k < currentUser.cart.length; k++) {
                    if (currentUser.cart[k].title !== t) {
                        newCart.push(currentUser.cart[k]);
                    }
                }
                currentUser.cart = newCart;
                updateCartBadge();
                showCartPanel();
            };

            row.appendChild(nameEl);
            row.appendChild(priceEl);
            row.appendChild(delBtn);
            list.appendChild(row);
        }
    }

    totalEl.innerText = '合计：¥' + getCartTotal();
    panel.style.display = 'block';
}

function hideCartPanel() {
    document.getElementById('cartPanel').style.display = 'none';
}

var carouselIndex = 0;
function startCarousel() {
    setInterval(function() {
        var items = document.querySelectorAll('.carousel-item');
        items[carouselIndex].className = 'carousel-item';
        carouselIndex = carouselIndex + 1;
        if (carouselIndex >= items.length) {
            carouselIndex = 0;
        }
        items[carouselIndex].className = 'carousel-item active';
    }, 2500);
}

function initRing() {
    var items = document.querySelectorAll('.ring-item');
    var total = items.length;
    var radius = 150;
    for (var i = 0; i < total; i++) {
        var angle = (360 / total) * i;
        items[i].style.transform = 'rotateY(' + angle + 'deg) translateZ(' + radius + 'px)';
    }
}

function showLoginDialog() {
    document.querySelector('.mask').style.display = 'block';
    document.querySelector('.login-dialog').style.display = 'block';
}

function hideLoginDialog() {
    document.querySelector('.mask').style.display = 'none';
    document.querySelector('.login-dialog').style.display = 'none';
}

function switchTab(tab) {
    var tabs = document.querySelectorAll('.tab-btn');
    var loginForm = document.getElementById('loginForm');
    var registerForm = document.getElementById('registerForm');
    var title = document.getElementById('dialogTitle');
    if (tab === 'login') {
        tabs[0].className = 'tab-btn active';
        tabs[1].className = 'tab-btn';
        loginForm.className = 'form-box active';
        registerForm.className = 'form-box';
        title.innerText = '用户登录';
    } else {
        tabs[0].className = 'tab-btn';
        tabs[1].className = 'tab-btn active';
        loginForm.className = 'form-box';
        registerForm.className = 'form-box active';
        title.innerText = '用户注册';
    }
}

function handleRegister() {
    var username = document.getElementById('regUsername').value;
    var password = document.getElementById('regPassword').value;
    var confirmPassword = document.getElementById('regConfirmPassword').value;

    if (username === '' || password === '' || confirmPassword === '') {
        alert('请填写完整信息！');
        return;
    }
    if (!validateRegUsername(username)) {
        alert('用户名格式不正确，请输入邮箱或手机号！');
        return;
    }
    if (password !== confirmPassword) {
        alert('两次密码不一致！');
        return;
    }

    var usersStr = localStorage.getItem('users');
    var users = [];
    if (usersStr !== null) {
        users = JSON.parse(usersStr);
    }

    for (var i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            alert('该用户名已被注册！');
            return;
        }
    }

    users.push({ username: username, password: password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('注册成功！请登录');
    switchTab('login');
}

function handleLogin() {
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;

    if (username === '' || password === '') {
        alert('请填写用户名和密码！');
        return;
    }

    var usersStr = localStorage.getItem('users');
    var users = [];
    if (usersStr !== null) {
        users = JSON.parse(usersStr);
    }

    for (var i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            localStorage.setItem('currentUser', JSON.stringify(users[i]));
            currentUser.username = username;
            currentUser.isLoggedIn = true;
            document.getElementById('usernameDisplay').innerText = username;
            document.body.className = 'logged-in';
            hideLoginDialog();
            alert('登录成功！');
            return;
        }
    }

    alert('用户名或密码错误！');
}

function logout() {
    localStorage.removeItem('currentUser');
    currentUser.username = '';
    currentUser.isLoggedIn = false;
    document.body.className = '';
    alert('已退出登录');
}

window.onload = function() {
    var savedUser = localStorage.getItem('currentUser');
    if (savedUser !== null) {
        var u = JSON.parse(savedUser);
        currentUser.username = u.username;
        currentUser.isLoggedIn = true;
        document.getElementById('usernameDisplay').innerText = u.username;
        document.body.className = 'logged-in';
    }

    startCarousel();
    initRing();
    initSearch();

    document.getElementById('regPassword').oninput = function() {
        checkPasswordStrength(this.value);
    };

    document.getElementById('regUsername').oninput = function() {
        validateRegUsername(this.value);
    };

    document.querySelector('.cart-icon-wrap').onclick = function() {
        showCartPanel();
    };

    var backBtns = document.querySelectorAll('.back-btn');
    for (var i = 0; i < backBtns.length; i++) {
        backBtns[i].onclick = function() {
            var h4 = this.parentElement.querySelector('h4');
            if (h4 !== null) {
                var bookTitle = h4.innerText.replace('《', '').replace('》', '');
                handleAddToCart(bookTitle);
            }
        };
    }
};
