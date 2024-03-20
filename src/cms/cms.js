import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import CoachingPagePreview from './preview-templates/CoachingPagePreview'
import ProgramsPagePreview from './preview-templates/ProgramsPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('coaching', AboutPagePreview) // using aboutPagePreview template for now
CMS.registerPreviewTemplate('programs', AboutPagePreview) // using aboutPagePreview template for now
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('retreats', ProductPagePreview) // using ProductPagePreview for now
CMS.registerPreviewTemplate('blog', BlogPostPreview)