import { createClient, groq } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

// data to connect to sanity
export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    apiVersion: "2021-03-25",
    useCode: process.env.NODE_ENV === "production",
};

// set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config)

// create a helper function: it turns images in our sanity database into url that we can reference
export const urlFor = (source:any) => createImageUrlBuilder(config).image(source)