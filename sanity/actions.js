import { client as sanityClient } from "./lib/client";

export async function getHero() {
    const query = `*[_type == "hero"][0]`;
    const data = await sanityClient.fetch(query);

    return data;
}

export async function getAbout() {
    const query = `*[_type == "bento"][0] {..., 
        bentoCards[] {
            ...,
            "image": img->image.asset->url,
            "spareImage": spareImg->image.asset->url
        }
    }`;
    const data = await sanityClient.fetch(query);

    console.log("Bento grid", data);

    return data;
}