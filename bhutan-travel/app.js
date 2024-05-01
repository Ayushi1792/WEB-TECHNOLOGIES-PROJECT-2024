const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

gsap.set(".slidesm", { scale: 5 });
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "top top",
    end: "bottom top",
    pin: true,
    scrub: 2,
  },
});

tl.to(
  ".vdodiv",
  {
    "--clip": "0%",
    ease: Power2,
  },
  "a"
)
  .to(
    ".slidesm",
    {
      scale: 1,
      ease: Power2,
    },
    "a"
  )
  .to(
    ".lft",
    {
      xPercent: -10,
      stagger: 0.3,
      ease: Power4,
    },
    "b"
  )
  .to(
    ".rgt",
    {
      xPercent: 10,
      stagger: 0.3,
      ease: Power4,
    },
    "b"
  );

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
});

function cursorEffect() {
  var page1Content = document.querySelector("#vid");
  var Cursor = document.querySelector("#cursor");
  page1Content.addEventListener("mousemove", function (dets) {
    console.log(dets);
    gsap.to(Cursor, {
      x: dets.x - 600,
      y: dets.y - 300,
    });
  });
  page1Content.addEventListener("mouseenter", function () {
    gsap.to(Cursor, {  
      scale: 1,
      opacity: 1,
    });
  });
  page1Content.addEventListener("mouseleave", function () {
    gsap.to(Cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}
cursorEffect();
function page2Animation() {
  gsap.from("#page4", {
    y: 120,
    stagger: 0.2,
    duration: 1,
    ScrollTrigger: {
      trigger: "#page4",
      scroller: "#main",
      start: "top 46%",
      end: "top 47%",
      markers: true,
      scrub: 2,
    },
  });
}
page2Animation();

let cnt = document.querySelector("#contact");
let crs = document.querySelector("#vid");
let close = document.querySelector(".close")

crs.addEventListener("click",()=>{
  gsap.to(cnt,{
    translateX: 0,
    ease: Power4.easeInOut
  })
  gsap.to(crs,{
    display: 'none'
  })
})

close.addEventListener("click",()=>{
  gsap.to(cnt,{
    translateX: '-100%',
    ease: Power4.easeInOut
  })
  gsap.to(crs,{
    display: 'inline'
  })
})

angular.module('myApp', []).controller('myCtrl', ['$scope', function($scope) {
    $scope.hotelsByDestination = {
        'Thimphu': ['Hotel Druk', 'Taj Tashi', 'Le Meridien','Hotel Riverview'],
        'Paro': ['Uma by COMO', 'Tashi Namgay Resort', 'Naksel Boutique Hotel & Spa'],
        'Punakha': ['Dhensa Boutique Resort', 'UMA Punakha', 'RKPO Green Resort'],
        'Bumthang': ['Jakar Village Lodge', 'Bumthang Mountain Resort', 'Wangdicholing Resort'],
        'Trongsa': ['Yangkhil Resort', 'Tashi Ninjay Guest House', 'Puenzhi Guest House']
    };

    $scope.updateHotels = function() {
        var selectedDestination = $scope.formData.destination;
        if (selectedDestination) {
            $scope.filteredHotels = $scope.hotelsByDestination[selectedDestination];
        } else {
            $scope.filteredHotels = [];
        }
    };
    $scope.submitForm = function() {
      alert("Your booking is confirmed. Thank you for choosing us!");
  };
}]);


