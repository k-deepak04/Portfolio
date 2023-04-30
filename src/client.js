import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token:'skTiOB15lTbVRIy6imnT4ikig4H5jt1XXWfcYdZ3qMZfDejuZrjPCEdAvrFc9a9b8eAKQSlA6Te9zWUSu3A0RHfYyhPgVPsAKJLz31BVBWb0rLxhOkW3f1NWGBgzp6FZMJHefdaXpu18MEkx8ozWQLlYkZaStusPdIWH7PE3PsTLsl3OT3tv'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);