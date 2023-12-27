import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'


const client = createClient({
  projectId: "brsqr55j",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2022-03-07",
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export default client;
