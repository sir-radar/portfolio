<template>
  <div class="about">
    <section id="details" class="mb-12">
      <h3 class="uppercase text-white">About me</h3>
      <BigDivider />
      <h1 class="uppercase text-white">Samson Nwokike</h1>
      <p class="uppercase text-muted">Full Stack Developer</p>
      <div class="flex w-full">
        <div class="w-1/2 pr-15 text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          dignissimos reiciendis consequatur culpa deleniti molestiae fugit
          libero quaerat? Consequatur commodi pariatur dolores aliquam, voluptas
          ea officiis. Laboriosam adipisci eaque cupiditate.
        </div>
        <div class="w-1/2 pl-15 text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          pariatur assumenda odit doloribus ipsum ducimus laborum quibusdam
          molestias labore, accusantium maxime repudiandae eveniet esse animi
          similique numquam tenetur suscipit dolor.
        </div>
      </div>
      <div class="flex w-full">
        <div class="w-1/2 pr-15">
          <div class="shadow-app-inner p-2 rounded-1">
            <div class="shadow-app w-full rounded-1">
              <ul class="p-2 mb-0">
                <li class="border-b border-gray-200 w-full">
                  <span
                    class="text-center py-2 w-3/12 inline-block border-r border-gray-100 text-white"
                  >Name</span>
                  <span class="py-2 text-center inline-block w-9/12">Carlos Smith</span>
                </li>
                <li>
                  <span class="inf">Birth</span>
                  <span class="value">September 9, 1982</span>
                </li>
                <li>
                  <span class="inf">City</span>
                  <span class="value">Melbourne, Australia</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="w-1/2 pl-15">
          <div class="shadow-app-inner p-2 rounded-1">
            <div class="shadow-app w-full rounded-1">
              <ul class="p-2 mb-0">
                <li class="border-b border-gray-200 w-full">
                  <span
                    class="text-center py-2 w-3/12 inline-block border-r border-gray-100 text-white"
                  >Email</span>
                  <span class="py-2 text-center inline-block w-9/12">Carlos Smith</span>
                </li>
                <li>
                  <span class="inf">Phone</span>
                  <span class="value">September 9, 1982</span>
                </li>
                <li>
                  <span class="inf">Skype</span>
                  <span class="value">Melbourne, Australia</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="skills" class="mb-12">
      <h3 class="uppercase text-white">Professional Skills</h3>
      <BigDivider />

      <div class="flex relative items-center">
        <ul class="w-11/12">
          <li>
            <h6>Html-css</h6>
            <div class="shadow-app-inner h-4 mb-4 rounded-3 flex items-center px-2">
              <div class="w-3/4 h-7 bg-white rounded-2"></div>
            </div>
          </li>
          <li>
            <h6>Html-css</h6>
            <div class="shadow-app-inner h-4 mb-4 rounded-3 flex items-center px-2">
              <div class="w-3/4 h-7 bg-white rounded-2"></div>
            </div>
          </li>
          <li>
            <h6>Html-css</h6>
            <div class="shadow-app-inner h-4 mb-4 rounded-3 flex items-center px-2">
              <div class="w-3/4 h-7 bg-white rounded-2"></div>
            </div>
          </li>
        </ul>

        <div class="w-1/12 relative">
          <div class="shadow-app transform rotate-90 py-7 px-6 rounded-1 top-n15 left-n15 absolute">
            <span class="uppercase">Coding</span>
          </div>
        </div>
      </div>
    </section>

    <section id="experience">
      <h3 class="uppercase text-white">EXPERIENCE</h3>
      <BigDivider />
    </section>
  </div>
</template>
<script>
// import Divider from "@/components/Divider";
import BigDivider from "@/components/BigDivider";
export default {
  name: "aboutPage",
  components: {
    // Divider,
    BigDivider,
  },
};
</script>
