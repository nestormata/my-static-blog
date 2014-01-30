// This script will convert external links to have a _blank target and a small icon.
// This is adaptation from Drupal module External Links (https://drupal.org/project/extlink)
// wroted by Jeff Robbins and Nate Haug.
// The adaptation was made by Nestor Mata <nestor@profesional.co.cr>, http://www.profesional.co.cr/

$(document).ready(
function processExtLinks() {
  // CONFIGURATION
  var Configuration = {
    extSubdomains: 1,    // Exclude links with the same primary domain.
    extClass: 'ext',     // Class name to be added to external links
    mailtoClass: 'mailto', // Class name to be added to email links
    extTarget: '_blank', // Target to use for external links, set to 0 to disable
    extAlert: 1,         // Enable or disable an alert to show when clicked on external links
    extInclude: '',      // regular expression for internal links that you wish to be considered external.
    extExclude: '',      // regular expression for links that you wish to exclude from being considered external
    extCssExclude: '.social-bar',   // comma-separated list of CSS selectors (ie "#block-block-2 .content, ul.menu") to exclude
    extCssExplicit: '.post',  // comma-separated list of CSS selectors (ie "#block-block-2 .content, ul.menu") to include
    extAlertText: 'This link will take you to an external web site.' // Message to display
  };


  // Strip the host name down, removing ports, subdomains, or www.
  var pattern = /^(([^\/:]+?\.)*)([^\.:]{4,})((\.[a-z]{1,4})*)(:[0-9]{1,5})?$/;
  var host = window.location.host.replace(pattern, '$3$4');
  var subdomain = window.location.host.replace(pattern, '$1');

  // Determine what subdomains are considered internal.
  if (Configuration.extSubdomains) {
    var subdomains = "([^/]*\\.)?";
  }
  else if (subdomain == 'www.' || subdomain == '') {
    var subdomains = "(www\\.)?";
  }
  else {
    var subdomains = subdomain.replace(".", "\\.");
  }

  // Build regular expressions that define an internal link.
  var internal_link = new RegExp("^https?://" + subdomains + host, "i");

  // Find all links which are NOT internal and begin with http  -as opposed
  // to ftp://, javascript:, etc. other kinds of links.
  // When operating on the 'this' variable, the host has been appended to
  // all links by the browser, even local ones.
  // In jQuery 1.1 and higher, we'd use a filter method here, but it is not
  // available in jQuery 1.0 (Drupal 5 default).
  var external_links = new Array();
  var mailto_links = new Array();
  $("a:not(." + Configuration.extClass + ", ." + Configuration.mailtoClass + "), area:not(." + Configuration.extClass + ", ." + Configuration.mailtoClass + ")").each(function(el) {
    try {
      var url = this.href.toLowerCase();
      if (url.indexOf('http') == 0 
            && (!url.match(internal_link) || (Configuration.extInclude && url.match(Configuration.extInclude))) 
            && !(Configuration.extExclude && url.match(Configuration.extExclude)) 
            && !(Configuration.extCssExclude && $(this).parents(Configuration.extCssExclude).length > 0)
            && !(Configuration.extCssExplicit && $(this).parents(Configuration.extCssExplicit).length < 1)) {
        external_links.push(this);
      }
      // Do not include area tags with begin with mailto: (this prohibits
      // icons from being added to image-maps).
      else if (this.tagName != 'AREA' 
            && url.indexOf('mailto:') == 0 
      && !(extCssExclude && $(this).parents(extCssExclude).length > 0)
      && !(extCssExplicit && $(this).parents(extCssExplicit).length < 1)) {
        mailto_links.push(this);
      }
    }
    // IE7 throws errors often when dealing with irregular links, such as:
    // <a href="node/10"></a> Empty tags.
    // <a href="http://user:pass@example.com">example</a> User:pass syntax.
    catch(error) {
      return false;
    }
  });

  if (Configuration.extClass) {
    // Apply the "ext" class to all links not containing images.
    if (parseFloat($().jquery) < 1.2) {
      $(external_links).not('[img]').addClass(Configuration.extClass).each(function() { if ($(this).css('display') == 'inline') $(this).after('<span class=' + Configuration.extClass + '></span>'); });
    }
    else {
      $(external_links).not($(external_links).find('img').parents('a')).addClass(Configuration.extClass).each(function() { if ($(this).css('display') == 'inline') $(this).after('<span class=' + Configuration.extClass + '></span>'); });
    }
  }

  if (Configuration.mailtoClass) {
    // Apply the "mailto" class to all mailto links not containing images.
    if (parseFloat($().jquery) < 1.2) {
      $(mailto_links).not('[img]').addClass(Configuration.mailtoClass).each(function() { if ($(this).css('display') == 'inline') $(this).after('<span class=' + Configuration.mailtoClass + '></span>'); });
    }
    else {
      $(mailto_links).not($(mailto_links).find('img').parents('a')).addClass(Configuration.mailtoClass).each(function() { if ($(this).css('display') == 'inline') $(this).after('<span class=' + Configuration.mailtoClass + '></span>'); });
    }
  }

  if (Configuration.extTarget) {
    // Apply the target attribute to all links.
    $(external_links).attr('target', Configuration.extTarget);
  }

  if (Configuration.extAlert) {
    // Add pop-up click-through dialog.
    $(external_links).click(function(e) {
     return confirm(Configuration.extAlertText);
    });
  }

  // Work around for Internet Explorer box model problems.
  if (($.support && !($.support.boxModel === undefined) && !$.support.boxModel) || ($.browser.msie && parseInt($.browser.version) <= 7)) {
    $('span.ext, span.mailto').css('display', 'inline-block');
  }
}


);
