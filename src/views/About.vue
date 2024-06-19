<template>
  <div class="about-page">
    <Sidebar class="sideBar" />
    <div class="content">
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan,
        sapien at varius consectetur, lorem nunc vestibulum turpis, a sagittis
        metus leo et elit. Maecenas vel leo sit amet orci egestas vestibulum.
        Integer ultrices nulla ac ligula vehicula, et consectetur erat
        fermentum. Vivamus tincidunt lacus a nulla facilisis, at commodo libero
        elementum. Donec non arcu non ligula ullamcorper hendrerit. Suspendisse
        potenti. Nulla facilisi. Morbi fringilla, mi id commodo cursus, justo
        erat tincidunt augue, vitae tincidunt orci est sed eros. Curabitur
        bibendum turpis in risus dapibus, nec dapibus nulla interdum.
      </p>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Vivamus vel libero nec tortor cursus auctor.
        Proin in urna nec augue vehicula suscipit. Duis convallis arcu a tortor
        dignissim, at auctor ligula bibendum. Integer ut lectus eu risus
        efficitur euismod sit amet a felis. Aliquam id ligula sem. Aenean
        ullamcorper venenatis nulla, non ultricies nisl. Aliquam erat volutpat.
        Quisque ut felis metus. Integer ac libero ac eros finibus gravida non et
        leo.
      </p>
      <p>
        Suspendisse sit amet leo a justo euismod vestibulum. Nulla facilisi.
        Fusce egestas, turpis at egestas tincidunt, ligula metus cursus lectus,
        ut venenatis tortor mi at arcu. Aenean luctus vestibulum nunc sed
        dignissim. Morbi accumsan ligula nec urna dignissim, id sollicitudin
        justo tempor. Phasellus fringilla ante non magna luctus, id malesuada
        velit sagittis. Aenean non posuere est, nec cursus justo. Vivamus sed
        convallis odio. Phasellus egestas, urna eget dignissim suscipit, arcu
        quam tincidunt erat, id blandit dolor eros a velit. Ut hendrerit, metus
        id pretium tincidunt, mauris erat congue sapien, non viverra nisi ante
        non nunc. Quisque venenatis dui eget ex bibendum tincidunt.
      </p>
      <p>
        Nunc pretium, tortor et laoreet malesuada, nisl odio scelerisque nisi, a
        feugiat est purus ut est. Vestibulum ac tempor metus. Integer viverra
        tincidunt magna, ac dictum ex tincidunt sit amet. Vestibulum euismod
        nisi non est tincidunt, in vehicula lacus aliquet. Sed dictum ex ac
        fermentum interdum. In hac habitasse platea dictumst. Nullam vehicula
        dolor sit amet justo accumsan, sed dictum nulla pretium. Fusce
        ullamcorper sapien et nunc scelerisque, nec auctor erat pharetra. Donec
        at hendrerit mi, nec tincidunt ligula. test
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "../components/sidebar.vue";
</script>

<style scoped>
.about-page {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.sideBar {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 250px; /* Adjust the width as needed */
  height: 100%;
}

.content {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  z-index: 5;
}
</style>
