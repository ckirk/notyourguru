import CMS from 'decap-cms-app'

// import uploadcare from 'decap-cms-media-library-uploadcare'
// import cloudinary from 'decap-cms-media-library-cloudinary'

// Single Pages
import IndexPagePreview from './preview-templates/IndexPagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import RetreatsPagePreview from './preview-templates/RetreatsPagePreview'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import RetreatPostPreview from './preview-templates/RetreatPostPreview'


// CMS.registerMediaLibrary(uploadcare)
// CMS.registerMediaLibrary(cloudinary)

// Single Pages
CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('retreats', RetreatsPagePreview) // using ProductPagePreview for now
CMS.registerPreviewTemplate('training', AboutPagePreview) // using aboutPagePreview template for now
CMS.registerPreviewTemplate('coaching', AboutPagePreview) // using aboutPagePreview template for now
CMS.registerPreviewTemplate('programs', AboutPagePreview) // using aboutPagePreview template for now

// Collections
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('retreat', RetreatPostPreview)