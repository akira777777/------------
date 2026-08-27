import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { getProject, projects } from "@/lib/portfolio";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Elizaveta Vakalova`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.cover.src],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject =
    currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  return (
    <main className="min-h-screen bg-[var(--paper)] text-[var(--ink)] antialiased">
      {/* Fixed Navigation Header */}
      <header className="fixed inset-x-0 top-0 z-40 px-4 py-4 md:px-8">
        <div className="site-shell flex items-center justify-between rounded-full border border-black/15 bg-[rgba(241,238,231,.85)] px-4 py-3 backdrop-blur-xl shadow-sm md:px-6">
          <Link
            href="/#work"
            className="mono flex items-center gap-2 text-black/70 hover:text-black transition-colors"
          >
            <ArrowLeft size={15} />
            <span>Back to index</span>
          </Link>
          <div className="flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: project.accent }}
            />
            <span className="mono text-black/50">{project.category}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="mx-auto max-w-[1440px] px-4 pb-24 pt-32 md:px-8 md:pt-40">
        {/* Project Hero Header */}
        <div className="grid gap-12 md:grid-cols-[.85fr_1.15fr] md:items-end">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: project.accent }}
              />
              <p className="mono text-black/50">{project.kicker}</p>
            </div>

            <h1 className="display text-6xl leading-[.84] md:text-8xl lg:text-9xl text-black">
              {project.title}
            </h1>

            <p className="mt-8 max-w-lg text-lg leading-relaxed text-black/75">
              {project.description}
            </p>

            <dl className="mt-10 grid max-w-md grid-cols-2 gap-6 border-t border-black/15 pt-6">
              <div>
                <dt className="mono text-black/40 mb-1">Role / Scope</dt>
                <dd className="text-sm font-medium text-black/90">{project.role}</dd>
              </div>
              <div>
                <dt className="mono text-black/40 mb-1">Year</dt>
                <dd className="text-sm font-medium text-black/90">{project.year}</dd>
              </div>
            </dl>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="mono rounded-full border border-black/15 bg-white/40 px-3 py-1 text-[.6rem] text-black/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Featured Cover */}
          <div className="project-media overflow-hidden rounded-[2rem] shadow-xl">
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              width={project.cover.width}
              height={project.cover.height}
              priority
              sizes="(max-width: 768px) 100vw, 60vw"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* Gallery / Project Media Section */}
        <div className="mt-20">
          <div className="flex items-center justify-between border-b border-black/15 pb-4 mb-8">
            <span className="mono text-black/50">Visual Documentation</span>
            <span className="mono text-black/40">{project.media.length} artifacts</span>
          </div>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {project.media.slice(1).map((media, idx) => (
              <figure
                key={media.src}
                className="project-media overflow-hidden rounded-2xl bg-[#eae6de] border border-black/10 shadow-sm"
              >
                <div className="relative">
                  {media.kind === "video" ? (
                    <video
                      controls
                      preload="metadata"
                      poster={media.poster}
                      className="h-auto w-full"
                      aria-label={media.alt}
                    >
                      <source src={media.src} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={media.src}
                      alt={media.alt}
                      width={media.width}
                      height={media.height}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="h-auto w-full object-cover"
                    />
                  )}
                </div>
                <figcaption className="mono bg-[var(--paper)] px-5 py-3.5 text-black/50 border-t border-black/10 text-[.6rem] flex items-center justify-between">
                  <span>{media.alt}</span>
                  <span className="text-black/30">0{idx + 2}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Next / Previous Project Navigation */}
        <div className="mt-24 border-t border-black/15 pt-12">
          <p className="mono text-black/45 mb-6 text-center">Browse more work</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Prev */}
            <Link
              href={`/work/${prevProject.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-black/10 bg-white/40 p-6 transition-all hover:bg-white hover:border-black/25 shadow-sm"
            >
              <span className="mono text-[.58rem] text-black/45 flex items-center gap-1.5 mb-3">
                <ArrowLeft size={12} />
                <span>Previous Case</span>
              </span>
              <div className="flex items-center justify-between">
                <h4 className="display text-2xl md:text-3xl text-black group-hover:underline">
                  {prevProject.title}
                </h4>
                <span className="mono text-[.6rem] text-black/40">{prevProject.category}</span>
              </div>
            </Link>

            {/* Next */}
            <Link
              href={`/work/${nextProject.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-black/10 bg-white/40 p-6 transition-all hover:bg-white hover:border-black/25 shadow-sm"
            >
              <span className="mono text-[.58rem] text-black/45 flex items-center justify-end gap-1.5 mb-3">
                <span>Next Case</span>
                <ArrowRight size={12} />
              </span>
              <div className="flex items-center justify-between">
                <h4 className="display text-2xl md:text-3xl text-black group-hover:underline">
                  {nextProject.title}
                </h4>
                <span className="mono text-[.6rem] text-black/40">{nextProject.category}</span>
              </div>
            </Link>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 text-sm text-white transition-all hover:bg-black/90 hover:scale-105 active:scale-95"
            >
              <span>Discuss a project like this</span>
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

