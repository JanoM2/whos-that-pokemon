<template>
  <span @click="changeValue" title="Mostrar Tabla de Records" class="header--btnMenu hamburger-box">
    <span class="header--btnMenu hamburger-inner"></span>
  </span>
</template>

<script>
export default {
  setup() {
    const changeValue = (e) => {
      document.querySelector(".header--btnMenu").classList.toggle("is-active");
      document.querySelector(".tabla-records").classList.toggle("is-active");
    };

    return { changeValue };
  },
};
</script>

<style>
.blur {
  filter: blur(2px);
}

.hamburger {
  padding: 15px 15px;
  position: absolute;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border-radius: 100%;
  border: 0;
  margin: 0;
  right: 1vh;
  z-index: 999;
}

.header--btnMenu {
  cursor: pointer;
  transition: 0.6s;
  background-color: var(--primary-color);
}

.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after {
  background-color: var(--secondary-color);
}

/* Hover */
.header--btnMenu:hover,
.header--btnMenu.is-active:hover {
  transition: 0.6s;
  background-color: var(--secondary-color);
}

.header--btnMenu:hover>.hamburger-inner,
.header--btnMenu:hover>.hamburger-inner::before,
.header--btnMenu:hover>.hamburger-inner::after {
  transition: 0.6s;
  background-color: var(--primary-color);
}

.hamburger-box {
  top: 10px;
  right: 10px;
  width: 45px;
  z-index: 999;
  height: 40px;
  display: flex;
  position: fixed;
  border-radius: 10px;
  justify-content: center;
  background-color: var(--primary-color);
}

.hamburger-inner {
  top: 20px;
  display: block;
  margin-top: -2px;
}

.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
  width: 40px;
  height: 4px;
  background-color: var(--secondary-color);
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
}

.hamburger-inner::before,
.hamburger-inner::after {
  content: "";
  display: block;
}

.hamburger-inner::before {
  top: -10px;
}

.hamburger-inner::after {
  bottom: -10px;
}

/* 3DX */
.hamburger-box .hamburger-box {
  perspective: 80px;
}

.hamburger-box .hamburger-inner {
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
    background-color 0s 0s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.hamburger-box .hamburger-inner::before,
.hamburger-box .hamburger-inner::after {
  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.hamburger-box.is-active .hamburger-inner {
  transform: rotateY(180deg);
  background-color: transparent;
}

.hamburger-box.is-active .hamburger-inner::before {
  transform: translate3d(0, 10px, 0) rotate(45deg);
}

.hamburger-box.is-active .hamburger-inner::after {
  transform: translate3d(0, -10px, 0) rotate(-45deg);
}

@media (min-width: 901px) {
  .header--btnMenu {
    display: none;
  }
}

.hamburger {
  padding: 15px 15px;
  position: absolute;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border-radius: 100%;
  border: 0;
  margin: 0;
  right: 1vh;
  z-index: 999;
}

.hamburger:hover {
  opacity: 1;
}

.hamburger.is-active:hover {
  opacity: 1;
}

.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after {
  background-color: #ffffff;
}





.hamburger-inner::before,
.hamburger-inner::after {
  content: "";
  display: block;
}

.hamburger-inner::before {
  top: -10px;
}

.hamburger-inner::after {
  bottom: -10px;
}

/* 3DX */
.hamburger--3dx .hamburger-box {
  perspective: 80px;
}

.hamburger--3dx .hamburger-inner {
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
    background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.hamburger--3dx .hamburger-inner::before,
.hamburger--3dx .hamburger-inner::after {
  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.hamburger--3dx.is-active .hamburger-inner {
  background-color: transparent;
  transform: rotateY(180deg);
}

.hamburger--3dx.is-active .hamburger-inner::before {
  transform: translate3d(0, 10px, 0) rotate(45deg);
}

.hamburger--3dx.is-active .hamburger-inner::after {
  transform: translate3d(0, -10px, 0) rotate(-45deg);
}
</style>
