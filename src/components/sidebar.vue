<script>
import { ref } from "vue";

export default {
  setup() {
    const isSidebarActive = ref(false);
    const activeMenu = ref(null);

    const toggleSidebar = () => {
      isSidebarActive.value = !isSidebarActive.value;
    };

    const toggleMenu = (menu) => {
      if (activeMenu.value) {
        activeMenu.value = null;
      } else {
        activeMenu.value = menu;
      }
    };

    return {
      isSidebarActive,
      activeMenu,
      toggleSidebar,
      toggleMenu,
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="sidebar" :class="{ active: isSidebarActive }">
      <div class="menu-btn" @click="toggleSidebar">
        <i class="ph-bold ph-caret-left"></i>
      </div>
      <div class="head">
        <div class="user-img">
          <img
            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTUzMjAyMTh8&ixlib=rb-4.0.3&q=85"
            alt=""
          />
        </div>
        <div class="user-details">
          <p class="title">web developer</p>
          <p class="name">Marlo Barua</p>
        </div>
      </div>
      <div class="nav">
        <div class="menu">
          <p class="title">Main</p>
          <ul>
            <li>
              <router-link to="/home" class="routerlink"
                ><i class="icon ph-bold ph-house-simple"></i
                ><span class="text">Dashboard</span></router-link
              >
            </li>

            <li>
              <router-link to="/about" class="routerlink">
                <i class="icon ph-bold ph-calendar-blank"></i
                ><span class="text">About</span></router-link
              >
            </li>

            <li>
              <a href="#"
                ><i class="icon ph-bold ph-file-text"></i
                ><span class="text">Articles</span></a
              >
            </li>
          </ul>
        </div>
        <div class="menu">
          <p class="title">Settings</p>
          <ul>
            <li>
              <a href="#"
                ><i class="icon ph-bold ph-gear"></i
                ><span class="text">Settings</span></a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="menu">
        <p class="title">Account</p>
        <ul>
          <li>
            <a href="#"
              ><i class="icon ph-bold ph-info"></i
              ><span class="text">FAQ</span></a
            >
          </li>

          <li>
            <router-link to="/" class="routerlink">
              <i class="icon ph-bold ph-sign-out"></i
              ><span class="text">Logout</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900);
.active {
  /* your active styles here */
}

.routerlink {
  text-decoration: none;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}

.container {
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 100vh;
}
.sidebar {
  position: relative;
  width: 256px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: rgb(200, 80, 192);
  background: linear-gradient(
    180deg,
    rgba(200, 80, 192, 1) 0%,
    rgba(65, 88, 208, 1) 53%,
    rgba(0, 212, 255, 1) 84%
  );
  padding: 24px;
  border-radius: 0px 30px 30px 0px;
  transition: all 0.3s;
}
.sidebar {
  display: flex;
  gap: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #f6f6f6;
}

.head {
  display: flex;
  gap: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #f6f6f6;
}

.user-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}
.user-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.user-details .title,
.menu .title {
  font-size: 10px;
  font-weight: 500;
  color: #000000;
  text-transform: uppercase;
  margin-bottom: 10px;
}
.user-details .name {
  font-size: 14px;
  font-weight: 500;
}
.nav {
  flex: 1;
}
.menu ul li {
  position: relative;
  list-style: none;
  margin-bottom: 5px;
}
.menu ul li a {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 500;
  color: #070707;
  text-decoration: none;
  padding: 12px 8px;
  border-radius: 8px;
  transition: all 0.3s;
}
.menu ul li > a:hover,
.menu ul li.active > a {
  color: #000;
  background-color: #f6f6f6;
}
.menu ul li .icon {
  font-size: 20px;
}
.menu ul li .text {
  flex: 1;
}
.menu ul li .arrow {
  font-size: 14px;
  transition: all 0.3s;
}
.menu ul li.active .arrow {
  transform: rotate(180deg);
}
.menu .sub-menu {
  display: none;
  margin-left: 20px;
  padding-left: 20px;
  padding-top: 5px;
  border-left: 1px solid #f6f6f6;
}
.menu .sub-menu li a {
  padding: 10px 8px;
  font-size: 12px;
}
.menu:not(:last-child) {
  padding-bottom: 10px;
  margin-bottom: 20px;
  border-bottom: 2px solid #f6f6f6;
}
.menu-btn {
  position: absolute;
  right: -14px;
  top: 3.5%;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #757575;
  border: 2px solid #f6f6f6;
  background-color: #fff;
}
.menu-btn:hover i {
  color: #000;
}
.menu-btn i {
  transition: all 0.3s;
}
.sidebar.active {
  width: 92px;
}
.sidebar.active .menu-btn i {
  transform: rotate(180deg);
}
.sidebar.active .user-details {
  display: none;
}
.sidebar.active .menu .title {
  text-align: center;
}
.sidebar.active .menu ul li .arrow {
  display: none;
}
.sidebar.active .menu > ul > li > a {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sidebar.active .menu > ul > li > a .text {
  position: absolute;
  left: 70px;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px;
  border-radius: 4px;
  color: #fff;
  background-color: #000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
}
.sidebar.active .menu > ul > li > a .text::after {
  content: "";
  position: absolute;
  left: -5px;
  top: 20%;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  background-color: #000;
  transform: rotate(45deg);
  z-index: -1;
}
.sidebar.active .menu > ul > li > a:hover .text {
  left: 50px;
  opacity: 1;
  visibility: visible;
}
.sidebar.active .menu .sub-menu {
  position: absolute;
  top: 0;
  left: 20px;
  width: 200px;
  border-radius: 20px;
  padding: 10px 20px;
  border: 1px solid #f6f6f6;
  background-color: #fff;
  box-shadow: 0px 10px 8px rgba(0, 0, 0, 0.1);
}
</style>
