import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';
import icon from "astro-icon";
import {defineConfig} from "astro/config";
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    integrations: [react(), tailwind(), icon(), starlight({
        title: 'Вікіпедія',
        locales: {
            root: {
                label: 'Українська',
                lang: 'uk-UA',
            },
        },
        social: {
            discord: 'https://discord.gg/nyAMvRru7x',
        },
        logo: {
            src: './src/icons/uaproject.svg',
        },
        sidebar: [
            {
                label: '📌 Інформація',
                items: [
                    'wiki/general/start',
                    'wiki/general/sponsorship',
                    'wiki/general/guestmode',
                    'wiki/general/gameroles',
                    'wiki/general/economy',
                    'wiki/general/features',
                ],
            },
            {
                label: '👾 Посібники',
                items: [
                    'wiki/guides/brewery',
                    'wiki/guides/towny',
                    'wiki/guides/magic',
                    {
                        label: "Безмежжя",
                        items: [
                            'wiki/guides/beyond/potions',
                            'wiki/guides/beyond/pathways',
                            'wiki/guides/beyond/advancing',
                        ],
                    },
                ],
            },
        ],
    }),],
    site: "https://uaproject.xyz",
});
