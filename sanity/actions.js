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

    return data;
}

export async function getTestimonials() {
    const query = `*[_type == "testimonials"][0] {...,
        testimonials[] {
            ...,
            "profile": img->image.asset->url
        }
    }`;
    const data = await sanityClient.fetch(query);

    return data;
}

export async function getCompanies() {
    const query = `*[_type == "companies"][0] {...,
        companies[] {
            ...,
            "img": img.asset->url,
            "nameImg": nameImg.asset->url
        }
    }`;
    const data = await sanityClient.fetch(query);

    return data;
}

export async function getWorks() {
    const query = `*[_type == "works"][0] {...,
        works[] {
            ...,
            "thumbnail": thumbnail.asset->url,
            "thumbLqip": thumbnail.asset->metadata.lqip
        }
    }`;
    const data = await sanityClient.fetch(query);

    return data;
}

export async function getProcess() {
    const query = `*[_type == "process"][0]`;
    const data = await sanityClient.fetch(query);

    return data;
}