(function () {

  window.onload = function() {

    if (window.Element && !Element.prototype.closest) {
      Element.prototype.closest =
      function(s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(s),
              i,
              el = this;
          do {
              i = matches.length;
              while (--i >= 0 && matches.item(i) !== el) {};
          } while ((i < 0) && (el = el.parentElement));
          return el;
      };
    }


    // Smooth scrolling
    var scroll = new SmoothScroll('a[href*="#"]');

    var header = document.querySelector('.header');
    var body = document.querySelector('body');



    var projectModal = [
      {
        project: {
          name: "Crazy Drummer",
          img: "img/project-1.jpg",
          description:
          "\"Crazy Drummer\" is a virtual drum kit includes basic percussion instruments." +
          "You can choose one set of drums in menu and play the music by pressing corresponding keys on the keyboard.",
          demoLink: "https://olbesp.github.io/crazy-drummer/",
          gitHubLink: "https://github.com/olbesp/crazy-drummer"
        }
      },
      {
        project: {
          name: "Natours",
          img: "img/project-2.jpg",
          description:
          "Responsive landing page with a lots of cool CSS3 features, built for travel company." +
          "I made this web page when I was taking the 'Advanced CSS & Sass course' at Udemy.com.",
          demoLink: "https://olbesp.github.io/natours/",
          gitHubLink: "https://github.com/olbesp/natours"
        }
      },
      {
        project: {
          name: "Color Game",
          img: "img/project-3.jpg",
          description: "This simple game will be helpful if you're designer or web developer." +
          "You can increase your understanding in RGB color model.",
          demoLink: "https://olbesp.github.io/color-game/",
          gitHubLink: "https://github.com/olbesp/color-game"
        }
      },
      {
        project: {
          name: "Pig Game",
          img: "img/project-4.jpg",
          description: "<a href=\"http://dicegames.org/pig/\" target=\"_blank\" class=\"link\">Pig</a>" +
          "is a very simple dice game that is exceptionally easy both to learn and to play." +
          "As a jeopardy dice game, it manages to keep players on the edge of their seat as" +
          "they try to determine whether to risk it all or to play it safe. Pig can be played" +
          "virtually anywhere and it only requires one die and something to keep score with," +
          "making it a fun and convenient way to pass the time.",
          demoLink: "https://olbesp.github.io/pig-game/",
          gitHubLink: "https://github.com/olbesp/pig-game"
        }
      },
      {
        project: {
          name: "Omnifood",
          img: "img/project-5.jpg",
          description: "Responsive website built for food delivery service. I made this web page when" +
          "I was taking the 'Build Responsive Real World Websites with HTML5 and CSS3' course at Udemy.com.",
          demoLink: "https://olbesp.github.io/omnifood/",
          gitHubLink: "https://github.com/olbesp/omnifood"
        }
      },
      {
        project: {
          name: "Mountain Travel",
          img: "img/project-6.jpg",
          description: "Responsive landing page built with flexbox. The 'Mountain Travel' web page is a project that I've created while taking" +
          "'The Advanced Web Developer Bootcamp' course at UDEMY.",
          demoLink: "https://olbesp.github.io/mountain-travel/",
          gitHubLink: "https://github.com/olbesp/mountain-travel"
        }
      }
    ];

    document.querySelectorAll('.project__btn').forEach(function(btn) {
      btn.addEventListener("click", function() {
        var projectId = this.getAttribute("data-projectId");
        var project = projectModal[projectId]
        var rendered = Mustache.render(template, project);
        var newNode = document.createElement('div');
        newNode.innerHTML = rendered;
        body.appendChild(newNode);
      });
    });

    function closeModal(modalContent) {
      modalContent.classList.remove('modal__content--animate-in');
      modalContent.classList.add('modal__content--animate-out');
      var modalContainer = modalContent.closest(".modal").parentNode;
      setTimeout(function() {
        modalContainer.parentNode.removeChild(modalContainer);
      }, 500);
    }

    body.addEventListener("click", function(event) {
      if (event.target) {
        if (event.target.classList.contains("modal__close")) {
          var modalContent = event.target.closest(".modal__content");
          closeModal(modalContent);
        } else if (event.target.classList.contains("modal")) {
          var modalContent = document.querySelector(".modal__content");
          closeModal(modalContent);
        }
      }
    });


    var template = document.querySelector("#project-modal-template").innerHTML;
    Mustache.parse(template);


    header.addEventListener('mouseover', function() {
      document.querySelector('.header__background-filter').style.opacity = '0';
    });

    header.addEventListener('mouseout', function() {
      document.querySelector('.header__background-filter').style.opacity = '1';
    });

  }


})();
