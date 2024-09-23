import Link from 'next/link';
import Image from 'next/image';
import { Card } from 'components/card';
import { Markdown } from 'components/markdown';
import { ContextAlert } from 'components/context-alert';
import { getNetlifyContext } from 'utils';
import extensionScreenshot from 'public/images/extension-screenshot.png';
const contextExplainer = `The Stand-up Report Generator is a Chrome extension that streamlines your daily stand-up process. It automatically fetches data from Jira tickets, GitHub PRs, 
and Google Calendar events.  Using this information, it can generate a comprehensive stand-up report, saving you time and effort every morning.`;

const preDynamicContentExplainer = `
Here's a sample of what your stand-up report might look like:
`;

const postDynamicContentExplainer = `
The Stand-up Report Generator leverages the power of OpenAI's API to create concise and informative reports based on the data it collects. This ensures that your stand-up contributions are always relevant and well-structured.

Install the extension today and revolutionise your daily stand-up routine!
`;

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <main className="flex flex-col gap-8 sm:gap-16">
            <section className="flex flex-col items-center gap-3 sm:gap-4 justify-center">
                <ContextAlert />
                <h1 className="mb-0">Stand-up Report Generator</h1>
                <p className="text-lg">Streamline your daily stand-ups with AI-powered reports.</p>
                <div className="flex flex-col items-center gap-3">
                    <Link
                        href="https://chromewebstore.google.com/detail/stand-up-report-generator/iiokonekdbnkbpbdoppdenommagiaheh"
                        className="btn btn-lg btn-primary sm:btn-wide rounded-full"
                        target="_blank"
                    >
                        Install Now
                    </Link>
                    <Link
                        href="https://drive.usercontent.google.com/u/0/uc?id=1T5JQLKVNEQRCY92UMpDqU9FrZ6MzPsDn&export=download"
                        className="text-sm text-yellow-300 no-underline hover:underline"
                        target="_blank"
                    >
                        Download latest version (v0.0.5)
                    </Link>
                </div>
            </section>
            <section className="flex flex-col gap-4">
                <Markdown content={contextExplainer} />
                <Markdown content={preDynamicContentExplainer} />
                <Image src={extensionScreenshot} alt="extension screenshot" className="rounded-lg" />
                <Markdown content={postDynamicContentExplainer} />
            </section>
        </main>
    );
}

function RuntimeContextCard() {
    const title = `Netlify Context: running in ${ctx} mode.`;
    if (ctx === 'dev') {
        return <Card title={title} text="Next.js will rebuild any page you navigate to, including static pages." />;
    } else {
        return <Card title={title} text="This page was statically-generated at build time." />;
    }
}
