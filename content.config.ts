import {defineContentConfig, defineCollection, z} from '@nuxt/content'

export default defineContentConfig({
    collections: {
        lichtingen: defineCollection({
            type: 'data',
            source: 'lichtingen/*.md',
            schema: z.object({
                name: z.string(),
                order: z.number(),
            })
        }),
        leden: defineCollection({
            type: 'data',
            source: 'leden/*.md',
            schema: z.object({
                name: z.string(),
                lichting: z.string(),
                type: z.ostring(),
                subtitle: z.string(),
                photo: z.string(),
                old_style: z.oboolean(),
            }),
        }),
        redirects: defineCollection({
            type: 'data',
            source: 'redirects/*.md',
            schema: z.object({
                from: z.string(),
                to: z.string(),
            }),
        }),
        slides: defineCollection({
            type: 'data',
            source: 'slides/*.md',
            schema: z.object({
                name: z.string(),
                subtitle: z.string(),
                date: z.date(),
                photo: z.string(),
            }),
        }),
        praesidium: defineCollection({
            type: 'data',
            source: 'praesidium.md',
            schema: z.object({
                praeses: z.string(),
                abactis: z.string(),
                quaestor: z.string(),
            }),
        }),
        intro: defineCollection({
            type: 'page',
            source: 'intro.md',
        })
    }
})