# Allsector Website - cPanel Deployment Guide

## Prerequisites
- cPanel hosting account with file manager access
- Domain configured (allsector.com.au)
- SSL certificate installed on your hosting account

## Deployment Steps

### 1. Build the Application
The application has been built for production. The `dist` folder contains all the files you need to upload.

### 2. Upload Files to cPanel

#### Option A: Using cPanel File Manager
1. **Login to cPanel**
2. **Open File Manager**
3. **Navigate to public_html** (or your domain's document root)
4. **Upload the contents of the `dist` folder** (not the folder itself, just the contents)
5. **Extract if uploaded as ZIP**

#### Option B: Using FTP Client
1. **Connect via FTP** to your hosting account
2. **Navigate to public_html** directory
3. **Upload all files from the `dist` folder**
4. **Ensure file permissions are correct** (644 for files, 755 for directories)

### 3. Files to Upload
From the `dist` folder, upload these files and directories:
```
├── index.html
├── assets/
│   ├── index-[hash].css
│   ├── index-[hash].js
│   └── [other asset files]
├── images/
│   ├── logotrans.png
│   ├── logodrakbg.png
│   ├── hero-main.jpg
│   └── [all other images]
├── .htaccess
└── [any other static files]
```

### 4. Configure Domain & SSL

#### Domain Configuration
- Ensure your domain `allsector.com.au` points to your hosting account
- Update DNS A records if necessary
- Wait for DNS propagation (up to 48 hours)

#### SSL Certificate Setup
1. **In cPanel, go to SSL/TLS**
2. **Install SSL Certificate** (Let's Encrypt is usually free)
3. **Force HTTPS Redirect** (usually in SSL/TLS settings)
4. **Verify SSL is working** by visiting https://allsector.com.au

### 5. Contact Form Configuration

⚠️ **Important**: The contact form currently uses Supabase Edge Functions. For cPanel hosting, you have two options:

#### Option A: Keep Supabase (Recommended)
- Contact form will continue working as-is
- No additional setup required
- Supabase handles email sending and data storage

#### Option B: Create PHP Contact Handler
If you prefer server-side PHP handling:

1. **Create contact-handler.php** in your public_html:
```php
<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    $name = $input['name'] ?? '';
    $email = $input['email'] ?? '';
    $phone = $input['phone'] ?? '';
    $company = $input['company'] ?? '';
    $service = $input['service'] ?? '';
    $location = $input['location'] ?? '';
    $message = $input['message'] ?? '';
    $urgency = $input['urgency'] ?? 'standard';
    
    // Email configuration
    $to = 'info@allsector.com.au';
    $subject = 'New Contact Form Submission - ' . $name;
    
    $email_body = "
    New contact form submission:
    
    Name: $name
    Email: $email
    Phone: $phone
    Company: $company
    Service: $service
    Location: $location
    Urgency: $urgency
    
    Message:
    $message
    ";
    
    $headers = "From: noreply@allsector.com.au\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    if (mail($to, $subject, $email_body, $headers)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'error' => 'Failed to send email']);
    }
} else {
    echo json_encode(['success' => false, 'error' => 'Invalid request method']);
}
?>
```

2. **Update contact form endpoint** in the React components to use `/contact-handler.php`

### 6. Testing Checklist

After deployment, test these features:

- [ ] **Homepage loads correctly**
- [ ] **All navigation links work**
- [ ] **Images display properly**
- [ ] **Contact form submits successfully**
- [ ] **Responsive design works on mobile**
- [ ] **SSL certificate is active (https://)**
- [ ] **All pages load without errors**
- [ ] **Services page displays correctly**
- [ ] **Industries page displays correctly**
- [ ] **About page displays correctly**

### 7. Performance Optimization

The `.htaccess` file includes:
- **Gzip compression** for faster loading
- **Browser caching** for static assets
- **Security headers** for protection
- **React Router support** for single-page application

### 8. Maintenance

#### Regular Updates
- Monitor website performance
- Update SSL certificates when needed
- Backup website files regularly
- Monitor contact form submissions

#### Troubleshooting
- Check cPanel error logs if issues occur
- Verify file permissions (644 for files, 755 for folders)
- Ensure .htaccess is properly configured
- Test contact form functionality

## Support

If you encounter issues:
1. **Check cPanel error logs**
2. **Verify file uploads completed successfully**
3. **Test individual page URLs**
4. **Contact your hosting provider** for server-specific issues

## File Structure After Upload
```
public_html/
├── index.html
├── .htaccess
├── assets/
├── images/
└── [other static files]
```

Your website should now be live at https://allsector.com.au