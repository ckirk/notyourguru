import CMS from 'decap-cms-app'
// import uploadcare from 'decap-cms-media-library-uploadcare'
// import cloudinary from 'decap-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
// import CoachingPagePreview from './preview-templates/CoachingPagePreview'
// import ProgramsPagePreview from './preview-templates/ProgramsPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

// CMS.registerMediaLibrary(uploadcare)
// CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('coaching', AboutPagePreview) // using aboutPagePreview template for now
CMS.registerPreviewTemplate('training', AboutPagePreview) // using aboutPagePreview template for now
CMS.registerPreviewTemplate('programs', AboutPagePreview) // using aboutPagePreview template for now
// CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('retreat', ProductPagePreview) // using ProductPagePreview for now
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('retreats', BlogPostPreview) // using BlogPostPreview for now