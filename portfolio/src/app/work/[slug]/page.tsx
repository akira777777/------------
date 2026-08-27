import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProject, projects } from "@/lib/portfolio";
import { notFound } from "next/navigation";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const project = getProject(slug); if (!project) return {};
  return { title: project.title, description: project.description, openGraph: { title: project.title, description: project.description, images: [project.cover.src] } };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const project = getProject(slug); if (!project) notFound();
  return <main className="min-h-screen bg-[var(--paper)] text-[var(--ink)]"><header className="fixed inset-x-0 top-0 z-20 px-4 py-4 md:px-8"><div className="site-shell flex items-center justify-between rounded-full border border-black/15 bg-[rgba(241,238,231,.78)] px-4 py-3 backdrop-blur-xl md:px-6"><Link href="/" className="mono flex items-center gap-2 text-black/65"><ArrowLeft size={15} /> Back to index</Link><span className="mono text-black/45">{project.category}</span></div></header><div className="mx-auto max-w-[1440px] px-4 pb-24 pt-32 md:px-8 md:pt-40"><div className="grid gap-12 md:grid-cols-[.8fr_1.2fr] md:items-end"><div><p className="mono mb-5 text-black/45">{project.kicker}</p><h1 className="display text-6xl leading-[.85] md:text-9xl">{project.title}</h1><p className="mt-8 max-w-md text-base leading-relaxed text-black/65">{project.description}</p><dl className="mt-10 grid max-w-md grid-cols-2 gap-5 border-t border-black/15 pt-4"><div><dt className="mono text-black/40">Role</dt><dd className="mt-2 text-sm">{project.role}</dd></div><div><dt className="mono text-black/40">Year</dt><dd className="mt-2 text-sm">{project.year}</dd></div></dl></div><div className="project-media overflow-hidden rounded-[1.5rem]"><Image src={project.cover.src} alt={project.cover.alt} width={project.cover.width} height={project.cover.height} priority sizes="(max-width: 768px) 100vw, 60vw" className="h-auto w-full" /></div></div><div className="mt-16 grid gap-5 md:grid-cols-2 md:gap-8">{project.media.slice(1).map((media) => <figure key={media.src} className="project-media overflow-hidden rounded-2xl"><div className="relative"><Image src={media.src} alt={media.alt} width={media.width} height={media.height} sizes="(max-width: 768px) 100vw, 50vw" className="h-auto w-full" /></div><figcaption className="mono bg-[var(--paper)] px-4 py-3 text-black/40">{media.alt}</figcaption></figure>)}</div><Link href="/#contact" className="group mt-16 inline-flex items-center gap-2 border-b border-black/30 pb-2 text-sm">Start a project <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link></div></main>;
}
