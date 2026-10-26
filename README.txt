Practical Data Media — website source

This is a static site. No build or installation is required.

For a local preview, run this from the project directory:
  python3 -m http.server 8000
Then visit http://localhost:8000.

Edit index.html for content, styles.css for appearance, and script.js for interactions.
The site uses optimized WebP images in assets/. The original logo, portrait, and
corrected book PNG are retained as source assets. The book's credit reads
"Foreword by Bill Inmon" in both the source PNG and the optimized site image.

Book proposals link to the Google Form at https://forms.gle/8eqnfxzNjoAT2Thw6.
Errata and error submissions link to https://forms.gle/wvrFxJ2jiDjB44FE7.
Business inquiries link to the Google Form at https://forms.gle/FYoH5bHtyUDJnj6D7.
Submissions are handled by Google Forms.
Navigation and direct contact links remain available without JavaScript.

Subscriptions go to Joe's existing Practical Data Modeling Substack, explicitly
identified on the page. There is no separate company mailing-list integration.

External sources used for the launch pass:
- Book purchase destinations: Joe's published book announcement
  https://practicaldatamodeling.substack.com/p/mixed-model-arts-global-book-club
- Ebook membership terms:
  https://practicaldatamodeling.substack.com/p/a-quick-update-on-ebook-access
- Winfried's portrait: photo_url from his public author profile
  https://winfriedadalbertetzel.substack.com/about
- Summit promotion removed following the postponement announcement:
  https://joereis.substack.com/p/summit-snooze-button-practical-data

Share metadata uses https://practicaldata.media/ and assets/social-card.jpg.
The share image is 1200 x 630. Favicons, robots.txt, and sitemap.xml are included.
CNAME retains practicaldata.media. Deploy the root directory and its assets
through the existing hosting workflow; local changes alone do not update the
public site. After deployment, verify the domain, HTTPS, purchase links, and
social preview against the deployed page.
