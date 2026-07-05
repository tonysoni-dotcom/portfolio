"use client"

import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "react-ionicons";

type ProjectStory = {
    id: string,
    title: string,
    logo: string,
    client: string,
    techStack: string[],
    demoUrl?: string,
    caseStudy: {
        situation: string,
        task: string,
        action: string,
        result: string,
        reflection: string,
    }
}

const projectStories: ProjectStory[] = [
    {
      id: "reglens-world-map",
      title: "Reg Lens World Map",
      logo: "/capgemini.png",
      client: "Capgemini · HSBC",
      techStack: ["React", "SVG", "JavaScript"],
      caseStudy: {
        situation: "RegLens is an enterprise platform for navigating the regulatory landscape. One of the first screens showed a world map with regulation density per country, colour-coded by the underlying data. Hovering on a country showed a tooltip with the regulation count, and clicking opened a popup with the list of regulation names.",
        task: "Build the interactive world map matching the design shared by the UX team. The design used country outlines that were slightly stylised rather than pure geographic accuracy, so an off-the-shelf library-based map wouldn't work. Each country needed to be independently interactive - hover for tooltip, click for popup, colour based on regulation count.",
        action: "I built the map using inline SVG. Each country was its own <path> element with a unique country code as id, and hand-picked or generated path data matching the UX outlines. I wrote a color-mapping utility that assigned a fill colour based on regulation count buckets, applied per country from the data layer. Interaction was straightforward React handlers on each path - onMouseEnter/onMouseLeave for the tooltip and onClick for the regulation list popup, both rendered as absolutely positioned overlays anchored to the cursor.",
        result: "The map shipped as the entry screen of RegLens. All 190+ countries rendered from a single SVG, no library dependency, matched the UX design exactly, and interactions felt instant because each country was just a native DOM element with a handler.",
        reflection: "If I rebuilt this today I'd memoize the country handlers - each render recreated 190+ inline functions, which was fine at our data scale but would matter more if the map became reactive to frequent state updates."
      }
    },
    {
      id: "martech-shadow-dom",
      title: "Shadow DOM Template Previewer",
      logo: "/capgemini.png",
      client: "Capgemini · HSBC",
      techStack: ["React", "Javascript", "Web Components", "Shadow DOM"],
      caseStudy: {
        situation: "MarTech is an AI-driven advertising platform for HSBC that generates banner ads, emails, and social content. Admins ingest HTML/CSS templates into the platform, and the AI generates content within those templates. Users see previews of both individual templates and grids of thumbnails.",
        task: "Render 20+ ingested third-party HTML/CSS templates safely alongside the host application. The templates carry their own CSS with high-specificity selectors, and any leakage would break the host application's UI. Also needed to render templates as small thumbnails without rebuilding them at each size.",
        action: "I used Shadow DOM to isolate each template. The template's HTML and CSS get attached inside a shadow root on a container element, which means the template's styles can't leak out and the host's styles can't leak in - full CSS isolation without needing an iframe. For thumbnails, I used CSS transform: scale() on the shadow host, so a full-size template rendered visually as a thumbnail without re-flowing the layout. I hadn't used Shadow DOM before, so I worked through the API with documentation and examples.",
        result: "Shipped in production. The template previewer handles all 20+ ingested templates cleanly, no style bleed observed, and thumbnails scale predictably without layout jank.",
        reflection: "The main thing I'd revisit is thumbnail performance - transform: scale() works but the browser still lays out the full-size template internally. For a grid of many thumbnails, off-screen rendering or a canvas-based approach might scale better."
      }
    },
    {
      id: "reglens-table-perf",
      title: "500-row Editable Table Input Lag Fix",
      logo: "/capgemini.png",
      client: "Capgemini · HSBC",
      techStack: ["React", "Redux", "JavaScript"],
      caseStudy: {
        situation: "One of the RegLens screens was a bulk-edit table where users could review and edit up to 500 regulation entries at once. Each row had multiple input fields, and the state was managed globally through Redux so that submit-time validation and API calls could operate on the complete edited state.",
        task: "The screen was unusable in production - typing into any input field caused a visible lag. Users could see characters appearing a beat behind their keystrokes. The team had tried a few things and hit a wall, so I picked it up.",
        action: "The core issue was that every keystroke dispatched a Redux action, which updated the store, which caused all 500 rows to re-render (they all subscribed to the same slice). Typing generated one full 500-row re-render per character. I moved the in-progress edits to local component state - each row managed its own input values locally, and Redux only received the updated values on submit. That reduced the number of re-renders during typing to essentially zero and pushed a single batched update to Redux on submit instead of hundreds per row.",
        result: "Typing became instant. Users couldn't tell the difference between the fixed screen and a plain HTML form. On submit, the batched Redux update happened cleanly and the validation/API flow worked as before.",
        reflection: "This was a good lesson in matching state location to update frequency. Redux was the right place for the final state (validation, submission) but the wrong place for keystroke-level state. If I rebuilt this I'd reach for the same pattern faster - the mistake was defaulting to Redux because everything else in the app was there."
      }
    },
    {
      id: "aura-3d-cylinder",
      title: "3D Cylinder Chart",
      logo: "/capgemini.png",
      client: "Capgemini",
      techStack: ["React", "CSS", "JavaScript"],
      caseStudy: {
        situation: "In the Aura project, we were handed designs of 3D charts and complex visualizations. One of them was a 3D cylinder chart representing portfolio allocation, with each section (asset class) sliding in one after the other to form the full cylinder.",
        task: "Build the 3D cylinder chart matching the exact design shared by the UX team, with the sliding animation for section entry. Relying on charting libraries would lead to slight but visible deviations from the design - none of the mainstream libraries offered this specific chart type.",
        action: "I built the cylinder from scratch using stacked skewed 2D circles. Each cross-section of the cylinder was a div with border-radius: 50% and transform: skew(), and I stacked many of these at 1px offsets to form the cylinder body of each section visually - essentially a manual raster of a 3D shape using 2D primitives. Each allocation section was one such stack. Sections were positioned with slight gaps between them, and I passed the section index into JS to compute a staggered animation-delay per section, so sections slid into place sequentially. The component was built to be reusable across different numbers of sections.",
        result: "The chart shipped in the Aura portfolio dashboard, matched the UX design exactly, and the stagger animation made the entry feel intentional. No library dependency for this specific visualization.",
        reflection: "I'd rebuild the same chart using SVG instead of stacked divs. The design included squiggly label connector lines that were hard to get right with plain HTML - SVG paths would give me full control over the curve. And stacking many divs isn't the best for performance if the chart scales to more sections - SVG rendering would be lighter."
      }
    },
    {
      id: "martech-custom-events",
      title: "Selective Edit for AI-Generated Ad Content",
      logo: "/capgemini.png",
      client: "Capgemini · HSBC",
      techStack: ["React", "Javascript", "Shadow DOM", "Custom Events"],
      caseStudy: {
        situation: "On the same MarTech platform, once the AI generated a template with content, reviewers needed to iterate on it before submitting for approval - regenerate a specific paragraph, swap an image, tweak one call-to-action.",
        task: "Enable targeted regeneration of specific sections without regenerating the whole template. The complication was that the templates rendered inside Shadow DOM (built for the CSS isolation described above). Shadow DOM's whole point is that the internals don't interact with the host app, but reviewers needed to click into a section inside the shadow root and trigger a regenerate action in the outer app.",
        action: "I used custom events with composed: true as the bridge across the Shadow DOM boundary. Each editable section inside the template was tagged with a data attribute carrying its section type and section ID. On click inside the shadow root, a single custom event named section-edit-requested was dispatched with the section metadata in event.detail. The event bubbled through the shadow boundary because of composed: true, and a single listener at the app level caught it, read the metadata, and triggered the regenerate API call. The regenerated content flowed back into the template and re-rendered.",
        result: "Shipped in production. Reviewers use it as the main editing surface for AI-generated ad content. The key insight was that custom events with composed: true cross the shadow boundary while preserving the payload structure - native events would cross too, but they'd get retargeted and lose the section-level metadata I needed.",
        reflection: "Honestly, if I rebuilt this today I'd approach it the same way. The single-event-with-typed-detail pattern held up as we added new section types, and having one listener at the app level meant no cleanup complexity."
      }
    },
    {
      id: "superserious",
      title: "Superserious",
      logo: "/superserious.png",
      client: "Personal Project · App Store",
      techStack: ["React Native", "Expo", "Node.js", "AWS Lambda", "DynamoDB", "Cognito", "S3", "API Gateway"],
      caseStudy: {
        situation: "Superserious is a cross-platform mobile app I built as sole engineer and shipped to the Apple App Store. It combines community features with an AI assistant, so users can share content, interact with each other, and query the assistant.",
        task: "Build the entire product - client and backend - as one person. The client had to run on iOS and Android. The backend had to handle auth, content storage, real-time interaction, and stay within a solo-developer maintenance budget.",
        action: "The client is React Native with Expo, so I could iterate on one codebase for both platforms. The backend runs entirely on AWS serverless: Lambda functions behind API Gateway for the REST API, DynamoDB for the primary data store, Cognito for auth, and S3 for media. This meant I paid essentially zero when nobody was using the app and it scaled without me managing any servers. I also layered a small Node.js/Express service on top for the WebSocket-based real-time features that Lambda wasn't the right fit for.",
        result: "Shipped to the App Store. Handles the full flow end-to-end - signup, auth, content creation, AI queries, real-time interactions. Zero infrastructure headaches from the serverless choice.",
        reflection: "The main thing I'd revisit is the WebSocket layer - I split it into its own Node service because Lambda's WebSocket support felt awkward at the time, but by now API Gateway's WebSocket routes are mature enough that I'd try to keep everything on Lambda for a cleaner deployment story."
      },
    }
  ];

export default function Projects() {
    const [openedSection, setOpenedSection] = useState<string | null>(null)
    return (
        <section id = "projects" className="scroll-mt-25 p-10 md:max-w-6xl md:mx-auto">
            <h2 className="text-4xl flex justify-center items-center mt-10 md:mt-20 font-bold mb-5">
                <span>Project Stories</span><span className="text-sky-300">.</span>
            </h2>
            {
                projectStories.map((project) => {
                    return (
                        <ProjectStory 
                            key = {project?.id} 
                            story = {project} 
                            openedSection = {openedSection} 
                            setOpenedSection = {setOpenedSection}
                        />
                    )
                })
            }
        </section>
    )
}

function ProjectStory({story, openedSection, setOpenedSection} : {story: ProjectStory, openedSection: string, setOpenedSection: (section: string | Function) => void}) {
    const isOpen = story.id == openedSection;
    return (
        <div className="border-b-1 border-b-zinc-700 p-3">
            <button className="flex w-full text-left justify-between items-start hover:cursor-pointer" onClick = {() => {
                setOpenedSection((curr: string) => {
                    if(curr == story.id) {
                        return null;
                    }else{
                        return story?.id
                    }
                });
            }}>
                <div>
                    <div className="flex flex-col">
                        <div className="flex flex-row justify-start gap-2 items-center">
                            <Image
                                src = {story.logo}
                                alt = {"story_logo"}
                                width = {15}
                                height = {15}
                                className={`${isOpen? "block" : "hidden"} rounded-full`}
                            />
                            <span className={`text-sm ${isOpen? "" : "hidden"} transition-all duration-400 text-gray-500`}>{story?.client}</span>
                        </div>
                        <span className={`transition-all ${isOpen? "text-xl md:text-3xl font-semibold" : "text-lg"}`}>
                            {story?.title}
                        </span>
                    </div>
                </div>
                <div className={`${isOpen ? "rotate-180" : ""} transition-all origin-center duration-400`}>
                    <ChevronDown
                        color={'#00000'}
                        height="20px"
                    />
                </div>
            </button>
            <div className={`grid transition-all duration-400 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                    <div>
                        {
                            story.techStack.map((tech, index) => {
                                return (
                                    <span key = {story.title + tech} className="text-gray-500 text-sm">{tech}{index!==story.techStack.length-1? ", " : ""}</span>
                                )
                            })
                        }
                    </div>
                    <div>
                        <span className="font-semibold">Situation : </span>
                        <span>{story.caseStudy.situation}</span>
                    </div>
                    <div>
                        <span className="font-semibold">Task : </span>
                        <span>{story.caseStudy.task}</span>
                    </div>
                    <div>
                        <span className="font-semibold">Action : </span>
                        <span>{story.caseStudy.action}</span>
                    </div>
                    <div>
                        <span className="font-semibold">Result : </span>
                        <span>{story.caseStudy.result}</span>
                    </div>
                    <div>
                        <span className="font-semibold">Reflection : </span>
                        <span>{story.caseStudy.reflection}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}