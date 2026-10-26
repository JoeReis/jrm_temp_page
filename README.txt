Practical Data Media — website source

This is a static site. No build or installation is required.

For a local preview, run this from the project directory:
  python3 -m http.server 8000
Then visit http://localhost:8000.

Edit index.html for content, styles.css for appearance, and script.js for interactions.
This is the company landing page. Book details and purchase options live at
https://mixedmodelarts.com/; the hero and featured-book links go there.
The site uses optimized WebP images in assets/. The original logo, portrait, and
corrected book PNG are retained as source assets. The book's credit reads
"Foreword by Bill Inmon" in both the source PNG and the optimized site image.

Book proposals link to the Google Form at https://forms.gle/8eqnfxzNjoAT2Thw6.
Errata and error submissions link to https://forms.gle/wvrFxJ2jiDjB44FE7.
Business inquiries link to the Google Form at https://forms.gle/FYoH5bHtyUDJnj6D7.
Submissions are handled by Google Forms.
Navigation and Google Form links remain available without JavaScript.
Contact uses Google Forms; no email address is published in the page or JSON-LD.

Subscriptions go to Joe's existing Practical Data Modeling Substack, explicitly
identified on the page. There is no separate company mailing-list integration.

External sources used for the launch pass:
- Mixed Model Arts book site: https://mixedmodelarts.com/
- Winfried's portrait: photo_url from his public author profile
  https://winfriedadalbertetzel.substack.com/about
- Summit promotion removed following the postponement announcement:
  https://joereis.substack.com/p/summit-snooze-button-practical-data

Share metadata uses https://practicaldata.media/ and assets/social-card.jpg.
The share image is 1200 x 630. Favicons, robots.txt, and sitemap.xml are included.
Icons are resized from assets/PD-Mark-on-white-2000w.jpg with square white padding:
assets/favicon.png (48px), assets/favicon.ico (16/32/48px), and
assets/apple-touch-icon.png (180px). The original mark is preserved.
Page, Open Graph, and Twitter titles and descriptions describe the company.
JSON-LD identifies the Organization, its founder, the WebSite, and the WebPage.
Only verified public details are included; keep markup aligned with visible copy.
The canonical URL, sitemap entry, social URL, and structured-data URLs all use
https://practicaldata.media/. Keep them consistent if the domain changes.

Content and links work without JavaScript. The deferred script enhances the mobile
menu. Images have explicit dimensions; below-the-fold images are lazy-loaded.
The hero book image has high fetch priority, and the site uses local system fonts.

CNAME retains practicaldata.media. Deploy the root directory and its assets
through the existing hosting workflow; local changes alone do not update the
public site. After deployment:
- Confirm HTTPS works and HTTP, www, and hosting-domain variants redirect to the
  canonical domain where supported by the host. These redirects are host settings.
- Check the homepage, robots.txt, sitemap.xml, share image, and book/form links.
- Validate Organization markup with Google's Rich Results Test and the complete
  JSON-LD graph with Schema.org's validator. Markup does not guarantee rich results.
- Use a verified Search Console domain property to submit sitemap.xml, inspect
  the homepage, and review indexing. Account verification is configured separately.
- Check mobile layout and performance on the deployed page with PageSpeed Insights.
- Verify the existing GA4 tag (G-VYSFZFHSRZ) in Analytics Realtime. Enable outbound
  click measurement in the web stream if desired. Clicks to external Google Forms
  are not completed submissions, and clicks to the book site are not purchases.
