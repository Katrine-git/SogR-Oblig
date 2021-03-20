import sanityClient from '@sanity/client'

const options={
    projectId: "t7w836s9",
    dataset: "production"
}

const client = sanityClient({
  ...options,
  useCdn: process.env.NODE_ENV === 'production',
});

export default client;
