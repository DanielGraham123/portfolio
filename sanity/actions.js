import { client as sanityClient } from "./lib/client";

export async function getHero() {
    const query = `*[_type == "hero"][0]`;
    const data = await sanityClient.fetch(query);

    return data;
}