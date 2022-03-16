/*

The Link Resolver is a function that takes in a Prismic document object or Link field 
and returns the corresponding URL for that page in your site. For example, 
If a document type is "page" with a UID of "about" it will generate the URL path: /about. 
If the document type is other than "page, " it will return the root "/" URL without the UID.

https://prismic.io/docs/technologies/link-resolver-gatsby

*/

exports.linkResolver = (doc) => {
  if (doc.type === 'page') {
    return `/${doc.uid}`
  }

  return '/'
}
