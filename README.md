# Carlos Engels - Personal Portfolio

A modern, responsive portfolio website built with React and TailwindCSS.

## Features

- Responsive design
- Dark mode support
- Modern UI with TailwindCSS
- Contact form
- Project showcase
- Skills and experience sections

## Tech Stack

- React
- TailwindCSS
- React Router
- HeadlessUI
- Heroicons

## Getting Started

1. Clone the repository:
```bash
git clone git@github.com:carlosengels/carlosengels.com.git
cd carlosengels.com
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Build for production:
```bash
npm run build
```

## Deployment

### AWS S3 + CloudFront

1. Create an S3 bucket:
```bash
aws s3 mb s3://carlosengels.com
```

2. Enable static website hosting:
```bash
aws s3 website s3://carlosengels.com --index-document index.html --error-document index.html
```

3. Upload the build files:
```bash
aws s3 sync build/ s3://carlosengels.com
```

4. Set bucket policy for public access:
```bash
aws s3api put-bucket-policy --bucket carlosengels.com --policy file://bucket-policy.json
```

5. Create a CloudFront distribution:
```bash
aws cloudfront create-distribution --origin-domain-name carlosengels.com.s3.amazonaws.com --default-root-object index.html
```

## Customization

- Update the content in the respective page components
- Modify the color scheme in `tailwind.config.js`
- Add or remove sections as needed

## License

MIT 