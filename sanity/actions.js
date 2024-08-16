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

    return data;
}

export async function getProjects() {
    const query = `*[_type == "projects"][0] {..., 
        projects[] {
            ...,
            "image": img->image.asset->url,
            "icons": iconLists[].asset->url
        }
    }`;
    const data = await sanityClient.fetch(query);

    console.log("Projects", data);

    return data;
}