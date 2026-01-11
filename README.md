# Zoofari - Zoo & Safari Park Website (React.js Version)

A modern, responsive website for a Zoo & Safari Park built with React.js, Material UI, Formik, and Bootstrap.

## 🚀 Features

- **Modern React Architecture**: Built with React 18 and functional components
- **Material UI**: Beautiful and responsive UI components
- **Formik Integration**: Form handling with validation using Yup
- **React Router**: Client-side routing for seamless navigation
- **Responsive Design**: Mobile-first approach, works on all devices
- **Interactive Components**: 
  - Image carousels
  - Modal dialogs
  - Animated counters
  - Testimonial carousel
  - Lightbox image gallery
- **All Original Pages**: Complete conversion of all HTML pages to React components

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn package manager

## 🛠️ Installation

1. **Navigate to the project directory:**
   ```bash
   cd react-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Copy images to public folder:**
   ```bash
   # Copy images from the original project
   cp -r ../img public/
   ```
   
   Or manually copy the `img` folder from the root directory to `react-app/public/img`

4. **Start the development server:**
   ```bash
   npm start
   ```

   The application will open in your browser at [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
react-app/
├── public/
│   ├── img/              # Images and assets (copy from original project)
│   └── index.html        # HTML template
├── src/
│   ├── components/       # Reusable components
│   │   ├── BackToTop.js
│   │   ├── Counter.js
│   │   ├── Footer.js
│   │   ├── Navbar.js
│   │   ├── PageHeader.js
│   │   ├── Spinner.js
│   │   ├── TestimonialCarousel.js
│   │   └── Topbar.js
│   ├── pages/            # Page components
│   │   ├── About.js
│   │   ├── Animal.js
│   │   ├── Contact.js
│   │   ├── Home.js
│   │   ├── Membership.js
│   │   ├── NotFound.js
│   │   ├── Service.js
│   │   ├── Testimonial.js
│   │   └── Visiting.js
│   ├── App.js            # Main app component with routing
│   ├── index.js          # Entry point
│   └── index.css         # Global styles
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## 🎨 Pages

All original pages have been converted to React components:

- **Home** (`/`) - Landing page with hero, services, animals, membership, and testimonials
- **About** (`/about`) - About page with facts and testimonials
- **Services** (`/service`) - Services grid with descriptions
- **Animals** (`/animal`) - Animal gallery with lightbox modal
- **Membership** (`/membership`) - Membership plans with pricing
- **Visiting Hours** (`/visiting`) - Visiting schedule and contact info
- **Testimonials** (`/testimonial`) - Customer testimonials carousel
- **Contact** (`/contact`) - Contact form with Formik validation
- **404** (`/404` or any invalid route) - Not found page

## 🎯 Key Technologies

- **React 18.2.0** - UI library
- **Material UI 5.14.20** - Component library
- **React Router DOM 6.20.1** - Routing
- **Formik 2.4.5** - Form management
- **Yup 1.3.3** - Schema validation
- **React Slick** - Carousel component
- **Bootstrap 5.3.2** - Utility classes (optional)

## 🎨 Styling

The project uses Material UI's theming system with custom colors:
- Primary: `#2EB872` (Green)
- Secondary: `#282F34` (Dark gray)
- Custom fonts: Open Sans and Quicksand

## 📝 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (irreversible)

## 🔧 Configuration

### Customizing Colors

Edit the theme in `src/App.js`:

```javascript
const theme = createTheme({
  palette: {
    primary: {
      main: '#2EB872', // Change primary color
    },
  },
});
```

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add route in `src/App.js`:

```javascript
<Route path="/new-page" element={<NewPage />} />
```

3. Add navigation link in `src/components/Navbar.js`

## 🖼️ Images

Images should be placed in the `public/img/` directory. The following structure is expected:

```
public/img/
├── carousel-1.jpg
├── carousel-2.jpg
├── carousel-3.jpg
├── about.jpg
├── animal-lg-1.jpg
├── animal-lg-2.jpg
├── animal-lg-3.jpg
├── animal-md-1.jpg
├── animal-md-2.jpg
├── animal-md-3.jpg
├── testimonial-1.jpg
├── testimonial-2.jpg
├── testimonial-3.jpg
├── bg-1.jpg
├── bg-2.jpg
└── icon/
    ├── icon-1.png
    ├── icon-2.png
    └── ... (icon-10.png)
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📦 Building for Production

To create a production build:

```bash
npm run build
```

This creates an optimized build in the `build/` folder ready for deployment.

## 🚢 Deployment

The build folder can be deployed to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop the `build` folder
- **GitHub Pages**: Follow React Router deployment guide
- **AWS S3**: Upload `build` folder contents

## 🐛 Troubleshooting

### Images not loading
- Ensure images are in `public/img/` directory
- Check image paths in components
- Use relative paths from public folder (e.g., `/img/photo.jpg`)

### Routing issues in production
- Configure your server to redirect all routes to `index.html`
- For Apache: Use `.htaccess` file
- For Nginx: Configure try_files directive

### Port already in use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use a different port
PORT=3001 npm start
```

## 📄 License

This project is based on the original Zoofari template by HTML Codex.
Original template license: Creative Commons Attribution 4.0 International

## 🙏 Credits

- **Original Template**: HTML Codex (https://htmlcodex.com)
- **Converted to React**: This project
- **UI Framework**: Material UI
- **Form Management**: Formik

## 📞 Support

For issues or questions:
1. Check existing issues in the repository
2. Create a new issue with detailed description
3. Include error messages and steps to reproduce

## 🔄 Migration from Original HTML

All functionality from the original HTML/CSS/jQuery version has been preserved:
- ✅ All pages converted
- ✅ Navigation and routing
- ✅ Interactive carousels
- ✅ Image lightbox gallery
- ✅ Contact form with validation
- ✅ Animated counters
- ✅ Responsive design
- ✅ Video modal
- ✅ Back to top button
- ✅ Sticky navbar
- ✅ Loading spinner

## 🎉 Next Steps

- [ ] Add backend API integration
- [ ] Implement payment processing for tickets
- [ ] Add user authentication
- [ ] Integrate with CMS
- [ ] Add analytics
- [ ] Implement SEO optimization
- [ ] Add PWA features

---

**Built with ❤️ using React and Material UI**