import * as React from 'react'
import { graphql } from 'gatsby'
import { SliceZone } from '@prismicio/react'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'

import { components } from '../slices'

const PageTemplate = ({ data }) => {
  if (!data) return null
  const doc = data.prismicPage.data

  return (
    <Layout>
      <Seo title={doc.document_display_name.text} />
      <SliceZone slices={doc.body} components={components} />
    </Layout>
  )
}

export const query = graphql`
  query PageQuery($id: String) {
    prismicPage(id: { eq: $id }) {
      _previewable
      data {
        document_display_name {
          text
        }
        body {
          ... on PrismicSliceType {
            slice_type
          }
          ...PageDataBodyText
          ...PageDataBodyQuote
          ...PageDataBodyFullWidthImage
          ...PageDataBodyImageGallery
          ...PageDataBodyImageHighlight
        }
      }
    }
  }
`

export default withPrismicPreview(PageTemplate)