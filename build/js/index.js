const copy = () => {
  new ClipboardJS(".telegram__button2", {
    text: function (trigger) {
      return document.getElementById("copyInput").getAttribute("data-value");
    },
  });
};

$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        600,
        function () {
          window.location.hash = hash;
        }
      );
    } // Конец, если
  });
});
