# Email Setup Instructions

To enable the contact form to send emails directly to your inbox, you need to:

1. Create a `.env.local` file in the root of your project with the following variables:

```
# Email Credentials for Gmail
EMAIL_USER=your.email@gmail.com
EMAIL_APP_PASSWORD=your-app-password-from-google
```

2. How to get an App Password for Gmail:

   - Go to your Google Account at https://myaccount.google.com/
   - Select "Security"
   - Under "Signing in to Google," select "2-Step Verification" and turn it on if it's not already
   - Go back to the Security page and select "App passwords" (may need to scroll down)
   - Select "Mail" for the app and your device type, or use "Other" and name it "Portfolio Site"
   - Click "Generate"
   - Use the 16-character password that appears as your EMAIL_APP_PASSWORD

3. Replace `your.email@gmail.com` with your actual Gmail address.

4. After setting up the `.env.local` file, restart your development server for the changes to take effect.

**Note:** Keep your app password secure and never commit the `.env.local` file to your repository. 