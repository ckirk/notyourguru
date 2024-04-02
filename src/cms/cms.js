import CMS from 'decap-cms-app'

// Turn these back on and re-insall respective libraries via package.json to re-enable
// import uploadcare from 'decap-cms-media-library-uploadcare'
// import cloudinary from 'decap-cms-media-library-cloudinary'

// Single Pages
import IndexPagePreview from './preview-templates/IndexPagePreview'
import SimplePagePreview from './preview-templates/SimplePagePreview'
import RetreatsPagePreview from './preview-templates/RetreatsPagePreview'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import RetreatPostPreview from './preview-templates/RetreatPostPreview'

// Turn these back on and re-insall respective libraries via package.json to re-enable
// CMS.registerMediaLibrary(uploadcare)
// CMS.registerMediaLibrary(cloudinary)

// Single Pages
CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('retreats', RetreatsPagePreview)

CMS.registerPreviewTemplate('training', SimplePagePreview) // using common SimplePagePreview template for now
CMS.registerPreviewTemplate('coaching', SimplePagePreview) // using common SimplePagePreview template for now
CMS.registerPreviewTemplate('programs', SimplePagePreview) // using common SimplePagePreview template for now

// Collections
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('retreat', RetreatPostPreview)

// CMS.registerPreviewStyle('/example.css')