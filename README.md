# Ali Alsyouf's Personal Blog

Welcome to the repository of [Ali Alsyouf's personal blog](https://alialsyoufchemist.com/), a platform dedicated to sharing insights, articles, and researches about chemistry.

## 🚀 Features

- **User Experience:** View and dig deep into articles about various facets of chemistry.
- **Admin Capabilities:** Authenticated admin can publish, update or delete articles and pages.
- **Image Hosting:** Seamless visual experience for readers with article images.
- **Email Updates:** Subscribers receive email updates for every new blog post.

## 🛠️ Tech Stack

This blog is built using a modern tech stack, leveraging the capabilities of some of the best tools available:

1. **Frontend:**
   - **React:** A JavaScript library for building user interfaces.
   - **MUI:** It is a massive library of UI design components that developers can easily import to build React applications.
2. **Backend:**
   - **Strapi:** Open-source Node.js headless CMS to easily build customizable APIs.
   - **PostgreSQL:** Robust relational database to store blog content, users, and other data.
3. **Image Hosting:**
   - **Cloudinary:** A cloud service that offers a solution to a web application's entire image management pipeline.
4. **Deployment & Domain Management:**
   - The frontend is hosted on Netlify for continuous deployment.
   - Backend is hosted on Render.
   - Database is hosted on ElephantSQL
   - DNS managed through Cloudflare for added security, performance benefits and email routing.
5. **Emails:**
   - **Brevo:** Emails parameters and templates are all managed through Brevo.
6. **Comments:**
   - **Disqus:** It is a great tool for managing, filtering and blocking comments.

## 📝 Blog Functionality

- **User Authentication:** Admin users can login to create, edit, or delete articles.
- **Subscriptions:** Users can subscribe to get email updates about new blog posts, also they can unsubscribe anytime they want.
- **Welcoming:** When users first subscribe, they receive a welcoming email to clarify the process.
- **Responsive Design:** The UI is mobile-responsive and adjusts according to different screen sizes.

## 🏭 API

- The [server](https://github.com/alsyoufomar/strapi-api) is made using Strapi headless CMS and it is hosted and protected by Render.
