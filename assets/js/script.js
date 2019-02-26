    $(document).ready(function() {
      AOS.init({
        duration: 1200,
      });
      $(function() {
        $('.menu-icon').on('click', function() {
          toggleMenu();
          console.log('open');
        });
        $('.nav__list-item').on('click', function() {
          toggleMenu();
        });

        function toggleMenu() {
          var menuHandle = $('.menu-icon');
          menuHandle.toggleClass('active');
          menuHandle.next().stop().toggleClass('active');
        }
      });








    });



