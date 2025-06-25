import satori from "satori";
import { html } from "satori-html";
import { Resvg } from "@resvg/resvg-js";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import fs from "fs";
import path from "path";

const MontserratRegular = fs.readFileSync(
	path.resolve("./src/assets/_montserrat_regular.ttf"),
);
const MontserratBold = fs.readFileSync(
	path.resolve("./src/assets/_montserrat_bold.ttf"),
);

const dimensions = {
	width: 1200,
	height: 630,
};

interface Props {
	title: string;
	pubDate: Date;
	description: string;
	tags: string[];
}

export async function GET(context: APIContext) {
	const { title, pubDate, description, tags } = context.props as Props;
	const date = pubDate.toLocaleDateString("en-US", { dateStyle: "full" });

	const markup = html`
    <div
      tw="bg-neutral-900 flex flex-col w-full h-full rounded-3xl overflow-hidden shadow-lg text-white border border-neutral-700/50 "
    >
      <div tw="flex flex-col w-full h-4/5 p-10 justify-center">
        <div tw="flex text-neutral-400 text-xl">${date}</div>
        <div
          tw="flex text-6xl w-full font-bold leading-snug tracking-tight text-neutral-100"
        >
          ${title}
        </div>
        <div tw="text-neutral-500 text-xl">${description}</div>
      </div>

      <div
        tw="w-full h-1/5 border-t border-neutral-700/50 flex p-10 items-center justify-between text-2xl"
      >
        <div tw="flex items-center">
          <span tw="ml-3 text-neutral-500">cojocarudavid.me</span>
        </div>

        <div tw="flex items-center bg-neutral-800/50 rounded-xl px-4 py-2">
          <img src="https://i.imgur.com/VQfJ5Iz.png" tw="w-18 h-13" />
          <div tw="flex flex-col ml-4 border-l border-neutral-700/50 pl-4">
            <span tw="text-neutral-400 font-semibold">David Cojocaru</span>
            <span tw="text-neutral-400 text-sm">cojocaru-david</span>
          </div>
        </div>
      </div>
    </div>
  `;

	const svg = await satori(markup, {
		fonts: [
			{
				name: "Montserrat",
				data: MontserratRegular,
				weight: 400,
			},
			{
				name: "Montserrat",
				data: MontserratBold,
				weight: 700,
			},
		],
		height: dimensions.height,
		width: dimensions.width,
	});

	const image = new Resvg(svg, {
		fitTo: {
			mode: "width",
			value: dimensions.width,
		},
	}).render();

	return new Response(image.asPng(), {
		headers: {
			"Content-Type": "image/png",
			"Cache-Control": "public, max-age=31536000, immutable",
			"Content-Length": image.asPng().length.toString(),
			"Surrogate-Key": tags.join(" "),
			"Query-String-Hash": "image",
			"Cache-Tag": "image",
			"Keep-Alive": "timeout=5, max=1000",
			"X-Content-Type-Options": "nosniff",
		},
	});
}

export async function getStaticPaths() {
	const posts = await getCollection("blog");
	const paths = posts.map((post) => ({
		params: {
			slug: post.id,
		},
		props: {
			title: post.data.title,
			pubDate: post.data.updatedDate ?? post.data.pubDate,
			description: post.data.description,
			tags: post.data.tags,
		},
	}));
	return paths;
}
