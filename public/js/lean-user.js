(function() {
  apos.utils.widgetPlayers['apostrophe-tiptap'] = function(el, data, options) {
    var richText = apos.modules['apostrophe-tiptap-widgets'];
    return richText.play(window.$(el), data, options);
  };
})();
