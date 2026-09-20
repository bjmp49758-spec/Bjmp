/* BJMP Portal interactions */

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const selector = link.getAttribute("href");

      if (!selector || selector === "#") {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const target = document.querySelector(selector);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  const pathLinks = [...document.querySelectorAll("[data-path]")];

  pathLinks.forEach((link) => {
    link.addEventListener("click", () => {
      pathLinks.forEach((item) => {
        item.classList.remove(
          "text-primary",
          "font-bold",
          "border-b-2",
          "border-primary"
        );
      });

      link.classList.add(
        "text-primary",
        "font-bold",
        "border-b-2",
        "border-primary"
      );
    });
  });

  const marquee = document.querySelector(".animate-marquee");

  document.addEventListener("visibilitychange", () => {
    if (!marquee) return;
    marquee.style.animationPlayState = document.hidden ? "paused" : "";
  });
});
document.addEventListener("DOMContentLoaded", () => {

  const galleryItems = Array.from(
    document.querySelectorAll(".gallery-item")
  );

  const lightbox = document.getElementById("galleryLightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const lightboxCounter = document.getElementById("lightboxCounter");

  const closeButton = document.getElementById("closeGallery");
  const previousButton = document.getElementById("galleryPrev");
  const nextButton = document.getElementById("galleryNext");

  let currentIndex = 0;


  /* =========================
     OPEN LIGHTBOX
  ========================== */

  function openGallery(index) {

    currentIndex = index;

    const item = galleryItems[currentIndex];

    const image = item.dataset.image;
    const title = item.dataset.title || "";

    lightboxImage.src = image;
    lightboxImage.alt = title;

    lightboxTitle.textContent = title;

    lightboxCounter.textContent =
      `${currentIndex + 1} / ${galleryItems.length}`;

    lightbox.classList.remove("hidden");
    lightbox.classList.add("flex");

    document.body.classList.add("overflow-hidden");
  }


  /* =========================
     CLOSE
  ========================== */

  function closeGallery() {

    lightbox.classList.add("hidden");
    lightbox.classList.remove("flex");

    lightboxImage.src = "";

    document.body.classList.remove("overflow-hidden");
  }


  /* =========================
     NEXT
  ========================== */

  function nextImage() {

    currentIndex++;

    if (currentIndex >= galleryItems.length) {
      currentIndex = 0;
    }

    openGallery(currentIndex);
  }


  /* =========================
     PREVIOUS
  ========================== */

  function previousImage() {

    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = galleryItems.length - 1;
    }

    openGallery(currentIndex);
  }


  /* =========================
     CLICK EVENTS
  ========================== */

  galleryItems.forEach((item, index) => {

    item.addEventListener("click", () => {
      openGallery(index);
    });

  });


  closeButton.addEventListener("click", closeGallery);

  nextButton.addEventListener("click", nextImage);

  previousButton.addEventListener("click", previousImage);


  /* =========================
     BACKDROP CLICK
  ========================== */

  lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
      closeGallery();
    }

  });


  /* =========================
     KEYBOARD CONTROLS
  ========================== */

  document.addEventListener("keydown", (event) => {

    if (lightbox.classList.contains("hidden")) {
      return;
    }

    if (event.key === "Escape") {
      closeGallery();
    }

    if (event.key === "ArrowRight") {
      nextImage();
    }

    if (event.key === "ArrowLeft") {
      previousImage();
    }

  });

});




  /*
   * ============================================================
   * VIDEO DATA
   * ============================================================
   *
   * type: youtube
   * id: YouTube video ID
   *
   * type: local
   * src: local MP4 path
   */

  const bjmpVideos = [

    {
      type: "youtube",
      id: "hPxvt29cbE8",
      title: "जनसंवाद एवं सार्वजनिक संबोधन",
      category: "जनसंवाद"
    },

    {
      type: "youtube",
      id: "0vGh-ZMXuXM",
      title: "राष्ट्रीय कार्यक्रम एवं संबोधन",
      category: "कार्यक्रम"
    },

    /*
     * Replace these with your actual YouTube IDs
     */

    {
      type: "youtube",
      id: "s3g1VipefsA",
      title: "कार्यकर्ता सम्मेलन",
      category: "सम्मेलन"
    },

    {
      type: "youtube",
      id: "faFmDBLjg7k",
      title: "जनसभा एवं जनसंवाद",
      category: "जनसभा"
    },

    {
      type: "youtube",
      id: "HItNwSW0yXQ",
      title: "संगठनात्मक कार्यक्रम",
      category: "संगठन"
    },

    {
      type: "youtube",
      id: "IcHAcRnL_l8",
      title: "पार्टी का सार्वजनिक कार्यक्रम",
      category: "कार्यक्रम"
    },

 

   

    {
     type: "youtube",
      id: "gq5S2X8iOI8",
      title: "संगठनात्मक गतिविधि",
     category: "कार्यक्रम"
    },

    {
      type: "youtube",
      id: "t_Hsi7RXwNk",
      title: "संगठनात्मक गतिविधि",
     category: "कार्यक्रम"
    },

    {
      type: "youtube",
      id: "faFmDBLjg7k",
      title: "संगठनात्मक गतिविधि",
     category: "कार्यक्रम"
    }

  ];


  /*
   * ============================================================
   * RENDER VIDEOS
   * ============================================================
   */

  function renderBJMPVideos() {

    const rail = document.getElementById("videoRail");

    rail.innerHTML = bjmpVideos.map((video) => {

      let thumbnail = "";

      if (video.type === "youtube") {

        thumbnail =
          `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

      } else {

        thumbnail = video.poster;

      }


      return `

        <button
          type="button"
          class="video-card group text-left"
          onclick="openBJMPVideo(
            '${video.type}',
            '${video.type === "youtube" ? video.id : video.src}',
            '${video.title}'
          )"
        >

          <div
            class="rounded-xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300"
          >

            <!-- THUMBNAIL -->

            <div
              class="relative aspect-video overflow-hidden bg-deep-navy-dark"
            >

              <img
                src="${thumbnail}"
                alt="${video.title}"
                loading="lazy"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />


              <!-- Hover overlay -->

              <div
                class="absolute inset-0 bg-black/5 group-hover:bg-black/25 transition-colors"
              ></div>


              <!-- Play -->

              <div
                class="absolute inset-0 flex items-center justify-center"
              >

                <div
                  class="w-12 h-12 rounded-full bg-white/95 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                >

                  <i class="fa-solid fa-play text-deep-navy-dark text-2xl ml-0.5"></i>

                </div>

              </div>


              <!-- Category -->

              <div
                class="absolute bottom-3 left-3 bg-deep-navy-dark/90 text-white text-[10px] px-2.5 py-1 rounded uppercase tracking-wider font-bold"
              >
                ${video.category}
              </div>

            </div>


            <!-- CONTENT -->

            <div class="p-4">

              <h4
                class="text-sm md:text-base font-bold text-deep-navy-dark leading-snug line-clamp-2 group-hover:text-primary transition-colors"
              >
                ${video.title}
              </h4>

            </div>

          </div>

        </button>

      `;

    }).join("");

  }


  /*
   * ============================================================
   * OPEN VIDEO
   * ============================================================
   */

  function openBJMPVideo(type, source, title) {

    const modal = document.getElementById("videoModal");

    const iframe = document.getElementById("youtubePlayer");

    const localVideo = document.getElementById("localVideoPlayer");


    modal.classList.remove("hidden");

    document.body.style.overflow = "hidden";


    if (type === "youtube") {

      localVideo.pause();

      localVideo.classList.add("hidden");

      iframe.classList.remove("hidden");

      iframe.src =
        `https://www.youtube.com/embed/${source}?autoplay=1&rel=0`;

      iframe.title = title;

    }


    else {

      iframe.src = "";

      iframe.classList.add("hidden");

      localVideo.classList.remove("hidden");

      localVideo.src = source;

      localVideo.play();

    }

  }


  /*
   * ============================================================
   * CLOSE VIDEO
   * ============================================================
   */

  function closeVideo() {

    const modal = document.getElementById("videoModal");

    const iframe = document.getElementById("youtubePlayer");

    const localVideo = document.getElementById("localVideoPlayer");


    iframe.src = "";

    localVideo.pause();

    localVideo.src = "";

    modal.classList.add("hidden");

    document.body.style.overflow = "";

  }


  /*
   * ============================================================
   * SCROLL VIDEO RAIL
   * ============================================================
   */

  function scrollVideoRail(direction) {

    const rail = document.getElementById("videoRail");

    const amount = rail.clientWidth * 0.8;

    rail.scrollBy({

      left: direction * amount,

      behavior: "smooth"

    });

  }


  /*
   * ============================================================
   * ESC KEY
   * ============================================================
   */

  document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

      closeVideo();

    }

  });


  /*
   * ============================================================
   * CLICK OUTSIDE MODAL
   * ============================================================
   */

  document
    .getElementById("videoModal")
    .addEventListener("click", function(event) {

      if (event.target === this) {

        closeVideo();

      }

    });


  /*
   * INITIALIZE
   */

  renderBJMPVideos();




    /* ============================================
       MOBILE MENU
    ============================================= */

    const mobileMenuButton =
      document.getElementById("mobileMenuButton");

    const mobileMenu =
      document.getElementById("mobileMenu");


    mobileMenuButton.addEventListener("click", () => {

      const isOpen =
        mobileMenu.classList.contains("show-menu");

      if (isOpen) {

        mobileMenu.classList.remove("show-menu");

        mobileMenu.classList.add("hidden-menu");

        mobileMenuButton.innerHTML =
          '<i class="fa-solid fa-bars"></i>';

      } else {

        mobileMenu.classList.remove("hidden-menu");

        mobileMenu.classList.add("show-menu");

        mobileMenuButton.innerHTML =
          '<i class="fa-solid fa-xmark"></i>';

      }

    });


    /* ============================================
       CLOSE MOBILE MENU ON LINK CLICK
    ============================================= */

    document
      .querySelectorAll("#mobileMenu a")
      .forEach(link => {

        link.addEventListener("click", () => {

          mobileMenu.classList.remove("show-menu");

          mobileMenu.classList.add("hidden-menu");

          mobileMenuButton.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

        });

      });

/* ============================================
   CONTRIBUTION FORM → GOOGLE FORM
============================================= */

function setAmount(amount) {
  const amountInput = document.getElementById("amount-input");

  if (amountInput) {
    amountInput.value = amount;
  }
}


function openGoogleForm(event) {

  event.preventDefault();

  const form = document.getElementById("contribution-form");

  if (!form) {
    console.error("Contribution form not found.");
    return;
  }

  // Check required fields
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  // Your Google Form
  const googleFormURL =
    "https://forms.gle/EykxuR6adShG21Qq8";

  // Open Google Form
  window.open(googleFormURL, "_blank");
}
