document.addEventListener('DOMContentLoaded', function () {
  // 检查当前页面是否在 pages 文件夹中
  const isInPagesFolder = window.location.pathname.includes('pages/');
  
  // 获取当前页面文件名
  const currentPath = window.location.pathname;
  const currentPage = currentPath.split('/').pop() || 'index.html';
  
  // 直接内联头部和底部组件，避免跨域问题
  // 根据当前页面路径调整资源引用路径
  const assetPath = isInPagesFolder ? '../assets' : 'assets';
  const indexPath = isInPagesFolder ? '../index.html' : 'index.html';
  const pagesPath = isInPagesFolder ? '' : 'pages/';
  
  // 判断当前页面是否激活的辅助函数
  const isActive = (pageName) => {
    if (pageName === 'index.html') {
      return currentPage === '' || currentPage === 'index.html';
    }
    return currentPage === pageName;
  };
  
  // 获取导航链接样式的辅助函数
  const getNavClass = (pageName) => {
    const baseClass = 'nav-link relative transition-all duration-300 px-3 py-2 font-medium';
    if (isActive(pageName)) {
      return `${baseClass} text-blue-600 after:w-full`;
    }
    return `${baseClass} text-gray-700 hover:text-blue-600 hover:after:w-full`;
  };
  
  const headerHTML = `
    <header class="bg-white shadow-md fixed w-full z-50">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center py-4">
          <a href="${indexPath}" class="flex items-center space-x-2">
            <img src="${assetPath}/1632628266006609924~tplv-be4g95zd3a-image.jpeg" alt="Logo" class="h-10 w-10 rounded-full">
            <span class="text-xl font-bold text-blue-600">人民干细胞学院</span>
          </a>
          
          <!-- 桌面端导航 -->
          <nav class="hidden md:flex space-x-2">
            <a href="${indexPath}" class="${getNavClass('index.html')}">首页</a>
            <a href="${pagesPath}about.html" class="${getNavClass('about.html')}">学院介绍</a>
            <a href="${pagesPath}science.html" class="${getNavClass('science.html')}">干细胞科普</a>
            <a href="${pagesPath}experts.html" class="${getNavClass('experts.html')}">专家讲坛</a>
            <a href="${pagesPath}industry.html" class="${getNavClass('industry.html')}">行业观察</a>
            <a href="${pagesPath}assessment.html" class="${getNavClass('assessment.html')}">细胞风险评估</a>
            <a href="${pagesPath}city-lecture.html" class="${getNavClass('city-lecture.html')}">城市讲堂</a>
            <a href="${pagesPath}news.html" class="${getNavClass('news.html')}">学院动态</a>
          </nav>
          
          <!-- 移动端导航按钮 -->
          <button id="mobile-menu-button" class="md:hidden text-gray-700 focus:outline-none">
            <i class="fas fa-bars text-2xl"></i>
          </button>
        </div>
        
        <!-- 移动端导航菜单 -->
        <div id="mobile-menu" class="md:hidden hidden bg-white py-4">
          <nav class="flex flex-col space-y-2">
            <a href="${indexPath}" class="${getNavClass('index.html')} px-4 py-2">首页</a>
            <a href="${pagesPath}about.html" class="${getNavClass('about.html')} px-4 py-2">学院介绍</a>
            <a href="${pagesPath}science.html" class="${getNavClass('science.html')} px-4 py-2">干细胞科普</a>
            <a href="${pagesPath}experts.html" class="${getNavClass('experts.html')} px-4 py-2">专家讲坛</a>
            <a href="${pagesPath}industry.html" class="${getNavClass('industry.html')} px-4 py-2">行业观察</a>
            <a href="${pagesPath}assessment.html" class="${getNavClass('assessment.html')} px-4 py-2">细胞风险评估</a>
            <a href="${pagesPath}city-lecture.html" class="${getNavClass('city-lecture.html')} px-4 py-2">城市讲堂</a>
            <a href="${pagesPath}news.html" class="${getNavClass('news.html')} px-4 py-2">学院动态</a>
          </nav>
        </div>
      </div>
    </header>
  `;
  
  const footerHTML = `
    <footer class="bg-blue-900 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-xl font-semibold mb-4">人民干细胞学院</h3>
            <p class="text-blue-200 mb-4">
              致力于科学普及干细胞知识，促进学术交流，提升公众认知。
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-blue-200 hover:text-white">
                <i class="fab fa-weixin text-xl"></i>
              </a>
              <a href="#" class="text-blue-200 hover:text-white">
                <i class="fab fa-weibo text-xl"></i>
              </a>
              <a href="#" class="text-blue-200 hover:text-white">
                <i class="fab fa-qq text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold mb-4">快速链接</h3>
            <ul class="space-y-2">
              <li><a href="${indexPath}" class="text-blue-200 hover:text-white">首页</a></li>
              <li><a href="${pagesPath}about.html" class="text-blue-200 hover:text-white">学院介绍</a></li>
              <li><a href="${pagesPath}science.html" class="text-blue-200 hover:text-white">干细胞科普</a></li>
              <li><a href="${pagesPath}experts.html" class="text-blue-200 hover:text-white">专家讲坛</a></li>
              <li><a href="${pagesPath}industry.html" class="text-blue-200 hover:text-white">行业观察</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold mb-4">更多链接</h3>
            <ul class="space-y-2">
              <li><a href="${pagesPath}assessment.html" class="text-blue-200 hover:text-white">细胞风险评估</a></li>
              <li><a href="${pagesPath}city-lecture.html" class="text-blue-200 hover:text-white">城市讲堂</a></li>
              <li><a href="${pagesPath}news.html" class="text-blue-200 hover:text-white">学院动态</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold mb-4">联系方式</h3>
            <ul class="space-y-2">
              <li class="flex items-center">
                <i class="fas fa-map-marker-alt mr-2"></i>
                <span class="text-blue-200">河北省石家庄市裕华区南二环东路 20 号国培大厦 510 室</span>
              </li>
              <li class="flex items-center">
                <i class="fas fa-phone-alt mr-2"></i>
                <span class="text-blue-200">0311-86866618</span>
              </li>
              <li class="flex items-center">
                <i class="fas fa-envelope mr-2"></i>
                <span class="text-blue-200">info@wentian-bio.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-blue-800 mt-12 pt-8 text-center">
          <p class="text-blue-200">© 2026 人民干细胞学院 版权所有</p>
        </div>
      </div>
    </footer>
  `;
  
  // 插入头部和底部内容
  document.getElementById('header').innerHTML = headerHTML;
  document.getElementById('footer').innerHTML = footerHTML;
  
  // 动态创建回到顶部按钮
  createBackToTopButton();
  
  // 初始化移动端导航
  initMobileNav();

  // 初始化轮播图
  initCarousel();
});

// 初始化轮播图
function initCarousel() {
  const carousel = document.querySelector('.carousel');
  if (!carousel) return;

  const carouselInner = carousel.querySelector('.carousel-inner');
  const carouselItems = carousel.querySelectorAll('.carousel-item');
  const indicators = carousel.querySelectorAll('.carousel-indicator');
  let currentIndex = 0;
  const itemCount = carouselItems.length;

  // 设置轮播图高度
  function setCarouselHeight() {
    // 计算头部高度，确保轮播图不被头部遮挡
    const header = document.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 0;
    const viewportHeight = window.innerHeight;
    const carouselHeight = viewportHeight - headerHeight;
    
    carousel.style.height = carouselHeight + 'px';
  }
  setCarouselHeight();
  window.addEventListener('resize', setCarouselHeight);

  // 切换轮播图
  function goToSlide(index) {
    currentIndex = index;
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // 更新指示器状态
    indicators.forEach((indicator, i) => {
      if (i === currentIndex) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
  }

  // 自动轮播
  let autoplayInterval = setInterval(() => {
    goToSlide((currentIndex + 1) % itemCount);
  }, 5000);

  // 点击指示器切换
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      clearInterval(autoplayInterval);
      goToSlide(index);
      // 重新开始自动轮播
      autoplayInterval = setInterval(() => {
        goToSlide((currentIndex + 1) % itemCount);
      }, 5000);
    });
  });
}

// 初始化移动端导航
function initMobileNav() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
}

// 动态创建回到顶部按钮
function createBackToTopButton() {
  // 检查是否已存在回到顶部按钮
  if (document.getElementById('backToTop')) {
    return;
  }
  
  // 创建回到顶部按钮元素
  const backToTopBtn = document.createElement('div');
  backToTopBtn.id = 'backToTop';
  backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 48px;
    height: 48px;
    background: #3B82F6;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 99;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
  `;
  
  // 添加悬停效果
  backToTopBtn.addEventListener('mouseenter', () => {
    backToTopBtn.style.background = '#2563EB';
    backToTopBtn.style.transform = 'translateY(-2px)';
  });
  
  backToTopBtn.addEventListener('mouseleave', () => {
    backToTopBtn.style.background = '#3B82F6';
    backToTopBtn.style.transform = 'translateY(0)';
  });
  
  // 点击事件 - 平滑滚动到顶部
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // 添加到页面
  document.body.appendChild(backToTopBtn);
  
  // 滚动事件监听 - 控制按钮显示/隐藏
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.opacity = '1';
      backToTopBtn.style.visibility = 'visible';
    } else {
      backToTopBtn.style.opacity = '0';
      backToTopBtn.style.visibility = 'hidden';
    }
  });
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

